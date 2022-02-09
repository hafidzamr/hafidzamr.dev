import { defineDocumentType, makeSource, ComputedFields } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import { remarkMdxImages } from 'remark-mdx-images';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
};

export const BlogTypes = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: '*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    createdAt: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    tags: { type: 'json', required: false },
    icon: { type: 'string', required: false },
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  contentDirPath: '_blog',
  documentTypes: [BlogTypes],
  mdx: {
    remarkPlugins: [remarkGfm, remarkMdxImages],
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        '.svg': 'dataurl',
      };
      return options;
    },
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});

export default contentLayerConfig;
