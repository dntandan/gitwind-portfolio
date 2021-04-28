import React from 'react';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import Pills from './Pills';

export default function IndividualBlog() {
  return (
    <>
      <div className="flex gap-2 items-center mt-6">
        <IoChatboxEllipsesOutline className="flex-none text-2xl" />
        <a
          href="/blog-details"
          className="mt-2 mb-1 text-xl font-semibold hover:text-blue-900 hover:underline "
        >
          Awesome Blog Title
        </a>
      </div>

      <div className="lg:ml-9">
        <div className="flex flex-wrap gap-2 -ml-1 mt-1 mb-3">
          <Pills text="# tags" cname="bg-gray-200 text-xs text-black py-1" />
          <Pills text="# tags" cname="bg-gray-200 text-xs text-black py-1" />
          <Pills text="# tags" cname="bg-gray-200 text-xs text-black py-1" />
        </div>

        <p className="mb-2 text-xs text-blue-600 uppercase tracking-widest">
          27th April 2012
        </p>
        <p className="line-clamp-6 lg:line-clamp-3 mb-3 lg:mb-0">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nam,
          doloremque corporis commodi incidunt enim nisi aliquid?
        </p>
      </div>
    </>
  );
}
