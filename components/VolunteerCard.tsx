import Link from 'next/link';
import React from 'react';
import {
  IoHandRightOutline,
  IoLibraryOutline,
  IoNewspaperOutline,
  IoSchoolOutline,
  IoUnlinkOutline,
} from 'react-icons/io5';

export default function VolunteerCard(props) {
  return (
    <>
      <div className="p-4">
        <div className="flex gap-2 items-center">
          <IoHandRightOutline className="flex-none text-2xl" />
          <h1 className="lg:text-xl font-semibold">{props.title}</h1>
        </div>
        <div className="lg:ml-8">
          <h3 className="pt-2 lg:text-lg">
            {props.year} , {props.place}
          </h3>
          <h5 className="pb-1">{props.desig}</h5>
        </div>
      </div>
    </>
  );
}
