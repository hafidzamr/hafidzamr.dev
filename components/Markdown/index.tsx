import Link from './Link';
import Image from './Image';
import UnorderedList from './UnorderedList';
import ListItem from './ListItem';
import OrderedList from './OrderList';
import Pre from './Pre';
import Code from './Code';
import Paragraph from './Paragraph';
import H2 from './H2';
import Blockquote from './Blockquote';

const MDXComponent = {
  a: Link,
  Image,
  ol: OrderedList,
  ul: UnorderedList,
  li: ListItem,
  p: Paragraph,
  pre: Pre,
  code: Code,
  h2: H2,
  blockquote: Blockquote,
};

export default MDXComponent;
