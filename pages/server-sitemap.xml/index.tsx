/* eslint-disable import/no-extraneous-dependencies */
import { GetServerSideProps } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';

import { allBlogs } from 'contentlayer/generated';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const sitemap: ISitemapField[] = allBlogs.map((blog) => ({
    loc: `/blog/${blog.slug}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(context, sitemap);
};

const SiteMap = () => {};

export default SiteMap;
