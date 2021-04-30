import Head from 'next/head';
import React from 'react';
import Header from '@/components/Header';
import Pills from '@/components/Aside';
import Aside from '@/components/Aside';

const Layout = (props) => (
  <>
    <div className="bg-white text-black dark:bg-gray-900">
      <Header />
      <div className="lg:px-12 xl:px-48 flex flex-col lg:flex-row">
        <Aside />
        <main className="flex-1 p-3 mt-3 lg:px-8 lg:pb-8 lg:pt-4 h-auto w-full ">
          <div
            className={`p-4 lg:px-6 lg:pb-6 lg:pt-2 border-gray-300 rounded ${props.border}`}
          >
            {props.children}
          </div>
        </main>
      </div>
    </div>
  </>
);

export default Layout;
