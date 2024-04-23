import type React from 'react';

export default function NoteCard(): React.ReactNode {
  const sentences = [
    '她是个昏睡了四十年的植物人',
    '但只要一有东西掉落',
    '她就会立马接住',
    '新来的医生不敢相信',
    '立马向领导汇报了这一惊人发现',
    '可不但没有被重视',
    '还引来一阵嘲讽',
    '但赛尔知道这一定代表着什么',
  ];
  return (
  // tanstack s
    <div
      className=" flex min-h-32 w-[350px]  flex-col justify-start gap-6 rounded-lg border-2 border-transparent  p-6 text-success shadow-xl shadow-success-700/20 transition-all hover:border-current hover:border-success-300 "
    >
      <ul className="flex flex-col justify-center gap-2 text-start text-foreground">
        {sentences.map((sentence, index) => {
          return (
          // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              {sentence}
            </li>
          );
        })}
      </ul>
      <div className="flex size-1 flex-col justify-start"></div>
    </div>
  );
}
