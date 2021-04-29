import React from 'react';
import Layout from '@/components/Layout';
import InternshipCard from '@/components/InternshipCard';
import MentorshipCard from '@/components/MentorshipCard';
import VolunteerCard from '@/components/VolunteerCard';
import Head from 'next/head';

export default function skillsAndExperience() {
  const internData = {
    celebmark: {
      title: 'CelebMark (Event & Celebrity Management Platform)',
      date: 'Feb 2019 – May 2019',
      place: 'Mumbai, India',
      desc:
        'Developed React and Django based web application with CRUD API, user signup, bookings, registration and event listing, etc.',
      link: 'https://github.com/dntandan/celebmark',
      linkText: 'Github Repository',
    },
  };
  const mentData = {
    techhub: {
      org: 'TechHub Community',
      date: '2018 - Present',
      desig: 'Community Lead',
      desc:
        "At TechHub, we've developed a huge community around solving programming challenges, building exciting real-world projects in every stack, and daily discussions.",
      link: 'https://github.com/techhub-community',
      linkText: 'Github Organization',
    },
    bellatrix: {
      org: 'Bellatrix Data',
      date: '2020',
      desig: 'Frontend Developer',
      desc:
        'Bellatrix Data is a data analytics platform to analyse the data and visualise them to the users. We help companies in recruitment by shortlisting developers based upon their contributions at different platforms by visualising their data in a very meaningful way.',

      link: 'https://github.com/bellatrixdata',
      linkText: 'Github Organization',
    },
  };
  const volData = {
    space: {
      title: 'NASA Space Apps Challenge',
      desig: 'Event Assistant',
      year: '2018',
      place: 'Bangalore, India',
    },
    akp: {
      title: 'Akshay Patra Foundations',
      desig: 'Event Co-ordinator',
      year: '2017',
      place: 'Bangalore, India',
    },
  };

  return (
    <>
      <Head>
        <title>Expereience :: GitWind</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold mt-3">Internships</h3>
        <InternshipCard
          title={internData.celebmark.title}
          date={internData.celebmark.date}
          place={internData.celebmark.place}
          desc={internData.celebmark.desc}
          link={internData.celebmark.link}
          linkText={internData.celebmark.linkText}
        />

        <h3 className="text-lg font-semibold mt-3">Mentorship</h3>
        <MentorshipCard
          org={mentData.techhub.org}
          date={mentData.techhub.date}
          desig={mentData.techhub.desig}
          desc={mentData.techhub.desc}
          link={mentData.techhub.link}
          linkText={mentData.techhub.linkText}
        />
        <MentorshipCard
          org={mentData.bellatrix.org}
          date={mentData.bellatrix.date}
          desig={mentData.bellatrix.desig}
          desc={mentData.bellatrix.desc}
          link={mentData.bellatrix.link}
          linkText={mentData.bellatrix.linkText}
        />
        <h3 className="text-lg font-semibold mt-3">Volunteer Experience</h3>
        <VolunteerCard
          title={volData.space.title}
          desig={volData.space.desig}
          year={volData.space.year}
          place={volData.space.place}
        />
        <VolunteerCard
          title={volData.akp.title}
          desig={volData.akp.desig}
          year={volData.akp.year}
          place={volData.akp.place}
        />
      </Layout>
    </>
  );
}
