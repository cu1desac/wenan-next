'use client';

import AuthorMenuAdd from './author-menu-add';

export default function AuthorMenu(): React.ReactNode {
  return (
    <div className="flex h-16 w-full items-center justify-between bg-success-200 px-5">
      <div className="">platform</div>
      <div className="">search</div>
      <div className="">
        <AuthorMenuAdd />
      </div>
    </div>
  );
}
