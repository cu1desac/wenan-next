'use client';
import { Listbox, ListboxItem } from '@nextui-org/listbox';

import type { SimpleArticle } from '../_types/Author.interface';

interface ArticleListItemProps {
  articles: SimpleArticle[];
  children?: React.ReactNode;

}
export default function ArticleList(props: ArticleListItemProps): React.ReactNode {
  const { articles } = props;
  return (
    <Listbox
      items={articles}
      aria-label="Dynamic Actions"
    >
      {item => (
        <ListboxItem
          key={item.key}
        >
          {item.title}
        </ListboxItem>
      )}
    </Listbox>
  );
}
