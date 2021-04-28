import React from 'react';
import Layout from '@/components/Layout';
import ProjectCards from '@/components/ProjectCards';
import Head from 'next/head';

export default function projects() {
  const projectData = {
    project1: {
      title: 'Awesome Project Title',
      subTitle: 'Subtitle',
      desc:
        "Used Django, HTML, CSS , JavaScript, Git, PostgreSQL, SQLite. This project is hosted on a Digital Ocean's Linux droplet.",
      link: 'https://www.dntandan.ml/',
      linkText: 'Website',
      stacks: [
        { title: 'Django', color: 'text-red-200' },
        { title: 'Git', color: 'text-blue-200' },
        { title: 'PostgreSQL', color: 'text-gray-200' },
        { title: 'DRF', color: 'text-yellow-200' },
        { title: 'Digital Ocean', color: 'text-green-200' },
      ],
    },
    project2: {
      title: 'Another Awesome Project Title',
      subTitle: 'Subtitle',
      desc:
        "Used Django, HTML, CSS , JavaScript, Git, PostgreSQL, SQLite. This project is hosted on a Digital Ocean's Linux droplet.",
      link: 'https://www.dntandan.ml/',
      linkText: 'Website',
      stacks: [
        { title: 'Django', color: 'text-red-200' },
        { title: 'Git', color: 'text-blue-200' },
        { title: 'PostgreSQL', color: 'text-gray-200' },
        { title: 'DRF', color: 'text-yellow-200' },
        { title: 'Digital Ocean', color: 'text-green-200' },
      ],
    },
  };

  return (
    <>
      <Head>
        <title>Projects :: GitWind</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold my-4">
          Here's what I have worked on based on my interests...
        </h3>
        <div className="grid gap-4 mb-3">
          <ProjectCards
            title={projectData.project1.title}
            subTitle={projectData.project1.subTitle}
            desc={projectData.project1.desc}
            link={projectData.project1.link}
            linkText={projectData.project1.linkText}
            stacks={projectData.project1.stacks}
          />
          <ProjectCards
            title={projectData.project2.title}
            subTitle={projectData.project2.subTitle}
            desc={projectData.project2.desc}
            link={projectData.project2.link}
            linkText={projectData.project2.linkText}
            stacks={projectData.project2.stacks}
          />
          <ProjectCards
            title={projectData.project1.title}
            subTitle={projectData.project1.subTitle}
            desc={projectData.project1.desc}
            link={projectData.project1.link}
            linkText={projectData.project1.linkText}
            stacks={projectData.project1.stacks}
          />
          <ProjectCards
            title={projectData.project2.title}
            subTitle={projectData.project2.subTitle}
            desc={projectData.project2.desc}
            link={projectData.project2.link}
            linkText={projectData.project2.linkText}
            stacks={projectData.project2.stacks}
          />
          <ProjectCards
            title={projectData.project1.title}
            subTitle={projectData.project1.subTitle}
            desc={projectData.project1.desc}
            link={projectData.project1.link}
            linkText={projectData.project1.linkText}
            stacks={projectData.project1.stacks}
          />
          <ProjectCards
            title={projectData.project2.title}
            subTitle={projectData.project2.subTitle}
            desc={projectData.project2.desc}
            link={projectData.project2.link}
            linkText={projectData.project2.linkText}
            stacks={projectData.project2.stacks}
          />
        </div>
      </Layout>
    </>
  );
}
