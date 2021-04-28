import React from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import IndividualBlog from '@/components/IndividualBlog';

export default function blogs() {
  return (
    <>
      <Head>
        <title>Blogs :: GitWind</title>
      </Head>
      <Layout border="border-2">
        <div className="flex flex-col mt-3 lg:mt-2 px-2 lg:px-6 border-b-2 border-dashed md:border-none">
          <IndividualBlog />
          <IndividualBlog />
          <IndividualBlog />
          <IndividualBlog />
          <IndividualBlog />
          <IndividualBlog />
        </div>
      </Layout>
    </>
  );
}
