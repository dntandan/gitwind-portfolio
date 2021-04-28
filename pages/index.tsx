import Head from 'next/head';
import {
  IoBasketballOutline,
  IoChatbubbleEllipsesOutline,
  IoMapOutline,
  IoCameraOutline,
  IoGridOutline,
  IoCodeSlash,
} from 'react-icons/io5';
import React from 'react';
import Layout from '@/components/Layout';
import About from '@/components/About';
import Hobbies from '@/components/Hobbies';
import WhatDoing from '@/components/WhatDoing';

export default function Index() {
  const hobbyData = {
    bb: {
      title: 'Basketball',
      desc:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem fuga nemo ducimus quas unde fugit deleniti nulla, fuga adipisci!',
    },
    pbs: {
      title: 'Public Speaking',
      desc:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem fuga nemo ducimus quas unde fugit deleniti nulla, fuga adipisci!',
    },
    tvl: {
      title: 'Travelling',
      desc:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem fuga nemo ducimus quas unde fugit deleniti nulla, fuga adipisci!',
    },
    pgpy: {
      title: 'Photography',
      desc:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem fuga nemo ducimus quas unde fugit deleniti nulla, fuga adipisci!',
    },
  };
  const WDData = {
    wd: {
      title: 'Web Development',
      desc:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem fuga nemo ducimus quas unde fugit deleniti nulla, fuga adipisci!',
    },
    flc: {
      title: 'Freelancing',
      desc:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem fuga nemo ducimus quas unde fugit deleniti nulla, fuga adipisci!',
    },
  };
  return (
    <>
      <Head>
        <title>Home :: GitWind</title>
      </Head>
      <Layout border="border-2">
        <About />

        <h1 className="text-lg font-semibold my-4">What I'm Doing</h1>
        <div className="grid md:grid-cols-2 gap-y-4 gap-x-2 px-4">
          <WhatDoing title={WDData.flc.title} desc={WDData.flc.desc}>
            <IoGridOutline className="text-blue-500 text-6xl" />
          </WhatDoing>
          <WhatDoing title={WDData.wd.title} desc={WDData.wd.desc}>
            <IoCodeSlash className="text-green-500 text-6xl" />
          </WhatDoing>
        </div>
        <h1 className="text-lg font-semibold my-4">Hobbies</h1>
        <div className="grid md:grid-cols-2 gap-y-4 gap-x-2 px-4">
          <Hobbies title={hobbyData.bb.title} desc={hobbyData.bb.desc}>
            <IoBasketballOutline className="text-red-500 text-6xl" />
          </Hobbies>
          <Hobbies title={hobbyData.pbs.title} desc={hobbyData.pbs.desc}>
            <IoChatbubbleEllipsesOutline className="text-yellow-500 text-6xl" />
          </Hobbies>
          <Hobbies title={hobbyData.tvl.title} desc={hobbyData.tvl.desc}>
            <IoMapOutline className="text-purple-500 text-6xl" />
          </Hobbies>
          <Hobbies title={hobbyData.pgpy.title} desc={hobbyData.pgpy.desc}>
            <IoCameraOutline className="text-pink-500 text-6xl" />
          </Hobbies>
        </div>
      </Layout>
    </>
  );
}
{
  /* <style>
ion-icon {
  --ionicon-stroke-width: 16px;
}
</style> */
}
