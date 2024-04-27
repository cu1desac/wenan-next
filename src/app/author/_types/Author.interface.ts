export interface Author {
  key: string;
  name: string;
  fans: number;
  platform: '抖音' | '快手' | 'B站';
  avatar: string;
  articles: SimpleArticle[];
}

// 简略文章信息
export interface SimpleArticle {
  key: string;
  title: string;
  href: string;
}
