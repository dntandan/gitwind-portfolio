import Link from 'next/link';
import React from 'react';
import { IoTrophyOutline, IoUnlinkOutline } from 'react-icons/io5';

export default function AwardCard(props) {
  const isDemoLink = props.link;
  let demoLink;
  if (isDemoLink) {
    demoLink = (
      <Link href={isDemoLink}>
        <div className="flex mb-2 gap-1 items-center ">
          <IoUnlinkOutline className="flex-none" />
          <p className="text-sm text-blue-800 hover:text-blue-600 hover:underline">
            {props.linkText}
          </p>
        </div>
      </Link>
    );
  } else {
    demoLink = <></>;
  }
  return (
    <div className="p-4">
      <div className="flex gap-2 items-center">
        <IoTrophyOutline className="flex-none text-2xl" />
        <h1 className="lg:text-xl font-semibold">{props.title}</h1>
      </div>
      <div className="ml-8 -mt-1">
        <h3 className="pt-1 lg:text-lg">{props.place}</h3>
        <h3 className="text-sm lg:text-lg">{props.date}</h3>
        {demoLink}
      </div>
    </div>
  );
}
