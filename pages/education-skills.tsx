import React from 'react';
import Layout from '@/components/Layout';
import EducationCard from '@/components/EducationCard';
import Pills from '@/components/Pills';
import {
  IoDiceOutline,
  IoLayersOutline,
  IoPersonOutline,
  IoServerOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import Head from 'next/head';

export default function education() {
  const eduData = {
    version: {
      degree: 'Master of Science in Aeronautics and Astronautics',
      major: 'Doctor of Philosophy (PhD)',
      institute: 'Massachusetts Institute of Technology',
      year: '2017 – 2020',
      grade: 'Grade',
    },
  };

  return (
    <>
      <Head>
        <title>Education & Skills :: GitWind</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold mt-3">Educational Background</h3>
        <div className="flex flex-col gap-4">
          <EducationCard
            degree={eduData.version.degree}
            major={eduData.version.major}
            institute={eduData.version.institute}
            year={eduData.version.year}
            grade={eduData.version.grade}
          />
          <EducationCard
            degree={eduData.version.degree}
            major={eduData.version.major}
            institute={eduData.version.institute}
            year={eduData.version.year}
            grade={eduData.version.grade}
          />
          <EducationCard
            degree={eduData.version.degree}
            major={eduData.version.major}
            institute={eduData.version.institute}
            year={eduData.version.year}
            grade={eduData.version.grade}
          />
          <EducationCard
            degree={eduData.version.degree}
            major={eduData.version.major}
            institute={eduData.version.institute}
            year={eduData.version.year}
            grade={eduData.version.grade}
          />
        </div>

        <h3 className="text-lg font-semibold mt-6">Skills </h3>
        <div className="px-4">
          <div className="flex gap-2 items-center mt-6">
            <IoLayersOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Frontend </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="HTML" cname="bg-green-100 py-1 " />
            <Pills text="SCSS" cname="bg-blue-100 py-1" />
            <Pills text="JavaScript" cname="bg-purple-100 py-1" />

            <Pills text="Vue JS" cname="bg-indigo-100 py-1" />
            <Pills text="NextJS" cname="bg-pink-100 py-1" />
            <Pills text="React" cname="bg-yellow-100 py-1 " />
          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoServerOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Backend </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="Python" cname="bg-blue-100 py-1" />
            <Pills text="Django" cname="bg-gray-100 py-1" />
            <Pills text="MySQL" cname="bg-blue-100 py-1" />
            <Pills text="Prisma" cname="bg-red-100 py-1" />
            <Pills text="Firebase" cname="bg-yellow-100 py-1 " />
            <Pills text="PostgreSQL" cname="bg-purple-100 py-1 " />

            <Pills text="REST API" cname="bg-green-100 py-1 " />
          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoSettingsOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Tools & Frameworks </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="DSA" cname="bg-red-100 py-1 " />
            <Pills text="TailwindCSS" cname="bg-purple-100 py-1 " />
            <Pills text="Bulma" cname="bg-pink-100 py-1 " />
            <Pills text="Bootstrap" cname="bg-gray-100 py-1 " />
            <Pills text="Webpack" cname="bg-green-100 py-1 " />
            <Pills text="Git" cname="bg-indigo-100 py-1 " />
            <Pills text="Github" cname="bg-blue-100 py-1 " />
            <Pills text="VCS" cname="bg-gray-100 py-1 " />
          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoDiceOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Design & Others </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="Google Analytics" cname="bg-blue-100 py-1 " />
            <Pills text="AWS" cname="bg-red-100 py-1 " />
            <Pills text="DigitalOcean" cname="bg-pink-100 py-1 " />
            <Pills text="MS Office" cname="bg-gray-100 py-1 " />
            <Pills text="Photoshop" cname="bg-green-100 py-1 " />
            <Pills text=" After Effects" cname="bg-red-100 py-1 " />
            <Pills text="Illustrator" cname="bg-yellow-100 py-1 " />
          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoPersonOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Personal </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="Public Speaking" cname="bg-red-100 py-1 " />
            <Pills text="Project Management" cname="bg-blue-100 py-1 " />
            <Pills text="Leadership" cname="bg-yellow-100 py-1 " />
            <Pills text="Team Work" cname="bg-green-100 py-1 " />
            <Pills text="Basketball" cname="bg-gray-100 py-1 " />
          </div>
        </div>
      </Layout>
    </>
  );
}
