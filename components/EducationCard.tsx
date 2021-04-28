import React from 'react';
import { IoSchoolOutline } from 'react-icons/io5';

export default function EducationCard(props) {
  return (
    <>
      <div className="p-4">
        <div className="flex gap-2 items-center">
          <IoSchoolOutline className="flex-none text-2xl" />
          <h1 className="text-lg lg:text-xl font-semibold">{props.degree}</h1>
        </div>
        <div className="lg:ml-8">
          <h3 className="pt-2 lg:text-lg">{props.major}</h3>
          <h5 className="py-1 lg:py-0 text-lg">{props.institute}</h5>
          <p className="pb-1 lg:pb-0 text-sm lg:text-lg">{props.year}</p>
          <p className="pb-1 lg:pb-0 text-sm lg:text-lg">{props.grade}</p>
        </div>
      </div>
    </>
  );
}
