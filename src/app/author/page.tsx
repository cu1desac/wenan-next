import { Avatar } from '@nextui-org/avatar';
import { Divider } from '@nextui-org/divider';
import type { ReactNode } from 'react';

import ArticleList from './_components/article-list';
import type { Author } from './_types/Author.interface';
import AuthorMenu from './_components/author-menu';

const authors: Author[] = [
  {
    key: 'desert',
    name: '荒影大镖客',
    fans: 99999999,
    platform: '抖音',
    avatar: 'https://i2.hdslb.com/bfs/face/153d3514e34987804d04b926ff762f3f0807c924.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif',
    articles: [
      { key: 'desert_0', title: '【标题】芜湖i起飞喽', href: '' },
      { key: 'desert_1', title: '【标题】芜湖i起飞喽', href: '' },
      { key: 'desert_2', title: '【标题】芜湖i起飞喽', href: '' },
    ],
  },

];

export default function AuthorDefaultPage() {
  return (
  //
    <div className="flex flex-col items-center gap-3 ">
      {/* 菜单 */}
      <AuthorMenu />
      {/* 多个卡片 */}
      <div className="flex flex-col  flex-wrap gap-9">
        {authors.map(author => <AuthorCard key={author.key} author={author} />)}
      </div>
    </div>
  );
}

interface AuthorCardProps {
  author: Author;
}

function AuthorCard(props: AuthorCardProps): ReactNode {
  // console.log(1);
  const { author: { name, fans, platform, avatar, articles } } = props;
  return (
    <div className="flex min-h-20 w-[400px] flex-col gap-2 rounded-md bg-success-100 p-4 shadow-xl shadow-default-100">
      <div className="flex justify-start gap-6">
        {/* TODO click avatar to articles */}
        <Avatar src={avatar} className="cursor-pointer" size="lg" />
        <div className="flex flex-col gap-2">
          <div className="flex gap-3">
            <div className="cursor-pointer">{name}</div>
            <div className="">{platform}</div>
          </div>
          <div className="">
            {fans}
            粉丝
          </div>
        </div>
      </div>
      {/* just divider */}
      <div className="mb-1.5 mt-3 px-5">
        <Divider />
      </div>
      <div>
        {articles && <ArticleList articles={articles} />}
      </div>
    </div>
  );
}
