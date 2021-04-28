import React from 'react';

export default function Hobbies(props) {
  return (
    <>
      <div className="h-auto px-4 py-6 gap-2 flex flex-col items-center rounded-lg border-2 border-dashed">
        {props.children}
        <h3 className="lg:text-lg font-semibold">{props.title} </h3>
        <p className="text-center">{props.desc}</p>
      </div>
    </>
  );
}
