import Link from './Link';
import Image from './Image';
import UnorderedList from './UnorderedList';
import ListItem from './ListItem';
import OrderedList from './OrderList';
import Pre from './Pre';
import Code from './Code';
import Paragraph from './Paragraph';

const MDXComponent = {
  a: Link,
  Image,
  ol: OrderedList,
  ul: UnorderedList,
  li: ListItem,
  p: Paragraph,
  pre: Pre,
  code: Code,
};

export default MDXComponent;
