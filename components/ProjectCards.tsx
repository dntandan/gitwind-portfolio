import Link from 'next/link';
import React from 'react';
import {
  IoEllipse,
  IoFileTrayOutline,
  IoFolderOutline,
  IoPhonePortraitOutline,
  IoUnlinkOutline,
} from 'react-icons/io5';

export default function ProjectCards(props) {
  const isDemoLink = props.link;
  let demoLink;
  if (isDemoLink) {
    demoLink = (
      <Link href={isDemoLink}>
        <div>
          <div className="flex mb-1 lg:mb-0 lg:ml-0 pt-1 lg:pt-0 gap-1 items-center ">
            <IoUnlinkOutline className="lg:flex-none" />
            <p className="text-blue-600 hover:text-blue-800 hover:underline">
              {props.linkText}
            </p>
          </div>
        </div>
      </Link>
    );
  } else {
    demoLink = <></>;
  }

  const allStacks = props.stacks;
  let allStacksDisplay;
  if (allStacks) {
    allStacksDisplay = allStacks.map((item) => (
      <div className="flex items-center gap-1">
        <IoEllipse className={`${item.color}`} />
        <h1 className="text-sm">{item.title}</h1>
      </div>
    ));
  } else {
    allStacksDisplay = <></>;
  }
  return (
    <>
      <div className="border-b-2 border-dashed h-auto p-4">
        <div className="flex flex-col lg:flex-row justify-between lg:gap-4">
          <div className="flex items-center gap-2">
            <IoFolderOutline className="h-5 w-5 lg:h-6 lg:w-6 flex-none" />
            <h1 className="text-lg lg:text-xl font-semibold tracking-wide text-gray-800">
              {props.title}
            </h1>
          </div>
          {demoLink}
        </div>
        <div className="lg:ml-7">
          <p className="lg:text-lg">{props.subTitle}</p>
          <p className="mb-2 py-2">{props.desc}</p>
          <div className="flex justify-start gap-2 flex-wrap">
            {allStacksDisplay}
          </div>
        </div>
      </div>
    </>
  );
}
