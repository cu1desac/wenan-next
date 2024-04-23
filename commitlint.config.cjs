// 文件用于配置 commitlint 工具，它用于规范化 Git 提交消息格式。
// @see: https://cz-git.qbenben.com/zh/guide
const fs = require('node:fs');
const path = require('node:path');

const scopes = fs
  .readdirSync(path.resolve(__dirname, 'src'), { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name.replace(/s$/, ''));

/** @type {import('cz-git').UserConfig} */
module.exports = {
  /* 一个函数数组，用于定义需要忽略的提交消息的过滤规则（如果提交消息包含 “init” 字符串，则会被忽略） */
  ignores: [commit => commit.includes('init')],
  /* 一个字符串数组，用于指定对应的 commitlint 配置扩展文件（使用了 “@commitlint/config-conventional” 扩展，它是一个常用的提交消息规范） */
  extends: ['@commitlint/config-conventional'],
  /* 一组规则用于校验提交消息的格式 */
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
    'body-leading-blank': [2, 'always'], // 规定提交消息的正文部分之前是否需要空行，配置为 [2, "always"] 表示必须要有空行。
    'footer-leading-blank': [1, 'always'], // 规定提交消息的尾部部分之前是否需要空行，配置为 [1, "always"] 表示应该有空行。
    'header-max-length': [2, 'always', 108], // 规定提交消息头部的最大长度，配置为 [2, "always", 108] 表示最大长度为 108。
    'subject-empty': [2, 'never'], // 规定提交消息的主题部分是否允许为空，配置为 [2, "never"] 表示主题不能为空。
    'type-empty': [2, 'never'], //  规定提交消息的类型部分是否允许为空，配置为 [2, "never"] 表示类型不能为空。
    'subject-case': [0], // 规定提交消息的主题部分的大小写，配置为 [0] 表示不强制大小写。
    'type-enum': [
      // 规定提交消息的类型部分的取值范围，配置为 [2, "always", [类型列表]]，其中类型列表包含了规定的若干提交类型。
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
        'wip',
        'workflow',
        'types',
        'release',
      ],
    ],
  },
  /* 提交过程中向用户提问时使用的各种提示信息 */
  prompt: {
    messages: {
      // type: 提示选择提交的类型。
      type: 'Select the type of change that you\'re committing:',
      // scope: 提示输入本次改动的作用域。
      scope: 'Denote the SCOPE of this change (optional):',
      // customScope: 提示输入自定义的作用域。
      customScope: 'Denote the SCOPE of this change:',
      // subject: 提示写一个简短的、动词性的描述本次改动的主题。
      subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
      // body: 提示提供更详细的改动描述，可以使用 “|” 符号进行换行。
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      // breaking: 提示列出任何重大改动。
      breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      // footerPrefixsSelect: 提示选择本次改动涉及的问题类型。
      footerPrefixsSelect: 'Select the ISSUES type of changeList by this change (optional):',
      // customFooterPrefixs: 提示输入自定义的问题前缀。
      customFooterPrefixs: 'Input ISSUES prefix:',
      // footer: 提示列出本次改动涉及的问题列表。
      footer: 'List any ISSUES by this change. E.g.: #31, #34:\n',
      // confirmCommit: 提示确认是否要提交以上的改动。
      confirmCommit: 'Are you sure you want to proceed with the commit above?',
      // 中文版
      // type: "选择你要提交的类型 :",
      // scope: "选择一个提交范围（可选）:",
      // customScope: "请输入自定义的提交范围 :",
      // subject: "填写简短精炼的变更描述 :\n",
      // body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      // breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      // footerPrefixsSelect: "选择关联issue前缀（可选）:",
      // customFooterPrefixs: "输入自定义issue前缀 :",
      // footer: "列举关联issue (可选) 例如: #31, #I3244 :\n",
      // confirmCommit: "是否提交或修改commit ?"
    },
    types: [
      { value: 'feat', name: 'feat:     🚀  A new feature', emoji: '🚀' },
      { value: 'fix', name: 'fix:      🧩  A bug fix', emoji: '🧩' },
      { value: 'docs', name: 'docs:     📚  Documentation only changes', emoji: '📚' },
      { value: 'style', name: 'style:    🎨  Changes that do not affect the meaning of the code', emoji: '🎨' },
      { value: 'refactor', name: 'refactor: ♻️   A code change that neither fixes a bug nor adds a feature', emoji: '♻️' },
      { value: 'perf', name: 'perf:     ⚡️  A code change that improves performance', emoji: '⚡️' },
      { value: 'test', name: 'test:     ✅  Adding missing tests or correcting existing tests', emoji: '✅' },
      { value: 'build', name: 'build:    📦️   Changes that affect the build system or external dependencies', emoji: '📦️' },
      { value: 'ci', name: 'ci:       🎡  Changes to our CI configuration files and scripts', emoji: '🎡' },
      { value: 'chore', name: 'chore:    🔨  Other changes that don\'t modify src or test files', emoji: '🔨' },
      { value: 'revert', name: 'revert:   ⏪️  Reverts a previous commit', emoji: '⏪️' },
      { value: 'wip', name: 'wip:      🕔  work in process', emoji: '🕔' },
      { value: 'workflow', name: 'workflow: 📋  workflow improvements', emoji: '📋' },
      { value: 'type', name: 'type:     🔰  type definition file changes', emoji: '🔰' },
      // 中文版
      // { value: "feat", name: "特性:   🚀  新增功能", emoji: "🚀" },
      // { value: "fix", name: "修复:   🧩  修复缺陷", emoji: "🧩" },
      // { value: "docs", name: "文档:   📚  文档变更", emoji: "📚" },
      // { value: "style", name: "格式:   🎨  代码格式（不影响功能，例如空格、分号等格式修正）", emoji: "🎨" },
      // { value: "refactor", name: "重构:   ♻️  代码重构（不包括 bug 修复、功能新增）", emoji: "♻️" },
      // { value: "perf", name: "性能:    ⚡️  性能优化", emoji: "⚡️" },
      // { value: "test", name: "测试:   ✅  添加疏漏测试或已有测试改动", emoji: "✅" },
      // { value: "build", name: "构建:   📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）", emoji: "📦️" },
      // { value: "ci", name: "集成:   🎡  修改 CI 配置、脚本", emoji: "🎡" },
      // { value: "chore", name: "回退:   ⏪️  回滚 commit", emoji: "⏪️" },
      // { value: "revert", name: "其他:   🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）", emoji: "🔨" },
      // { value: "wip", name: "开发:   🕔  正在开发中", emoji: "🕔" },
      // { value: "workflow", name: "工作流:   📋  工作流程改进", emoji: "📋" },
      // { value: "types", name: "类型:   🔰  类型定义文件修改", emoji: "🔰" }
    ],
    // 提示信息中使用表情符号
    useEmoji: true,
    // 指定文件作用域
    scopes: [...scopes],
    // 指定自定义范围在提示信息中的对齐方式
    customScopesAlign: 'bottom',
    // 为空范围指定一个别名
    emptyScopesAlias: 'empty',
    // 为自定义范围指定一个别名
    customScopesAlias: 'custom',
    // 指定了可以与哪些类型的更改关联破坏性更改
    allowBreakingChanges: ['feat', 'fix'],
  },
};
