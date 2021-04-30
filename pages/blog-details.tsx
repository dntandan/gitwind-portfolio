import Head from 'next/head';
import Layout from '@/components/Layout';

export default function BlogDetails() {
  return (
    <>
      <Head>
        <title>Blog Details :: GitWind</title>
      </Head>
      <Layout border="border-2">
        <div className="items-center px-2 lg:px-6 prose lg:prose-lg mx-auto py-4 dark:prose-dark">
          <h1>Awesome Blog Title</h1>
          <h3>Blog Sub Title</h3>
          <summary>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            a, sunt quidem consequatur soluta nihil magni dolor ratione delectus
            praesentium nobis veniam dignissimos? Fugiat, commodi accusantium
            illum quidem laborum voluptatem!
          </summary>
          <summary>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            a, sunt quidem consequatur soluta nihil magni dolor ratione delectus
            praesentium nobis veniam dignissimos? Fugiat, commodi accusantium
            illum quidem laborum voluptatem!
          </summary>
          <summary>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            a, sunt quidem consequatur soluta nihil magni dolor ratione delectus
            praesentium nobis veniam dignissimos? Fugiat, commodi accusantium
            illum quidem laborum voluptatem!
          </summary>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            a, sunt quidem consequatur soluta nihil magni dolor ratione delectus
            praesentium nobis veniam dignissimos? Fugiat, commodi accusantium
            illum quidem laborum voluptatem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            a, sunt quidem consequatur soluta nihil magni dolor ratione delectus
            praesentium nobis veniam dignissimos? Fugiat, commodi accusantium
            illum quidem laborum voluptatem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            a, sunt quidem consequatur soluta nihil magni dolor ratione delectus
            praesentium nobis veniam dignissimos? Fugiat, commodi accusantium
            illum quidem laborum voluptatem!
          </p>
          <code>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            a, sunt quidem consequatur soluta nihil magni dolor ratione delectus
            praesentium nobis veniam dignissimos? Fugiat, commodi accusantium
            illum quidem laborum voluptatem!
          </code>
        </div>
      </Layout>
    </>
  );
}
