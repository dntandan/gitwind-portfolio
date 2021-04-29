import React from 'react';
import Layout from '@/components/Layout';
import AwardCard from '@/components/AwardCard';
import CertificationCard from '@/components/CertificationCard';
import Head from 'next/head';

export default function awardsAndCertification() {
  const awardData = {
    ahack: {
      title: ' AngelHack Global Hackathon Series',
      date: '2019',
      place: 'Bangalore, India - Winner',
      link: '/angelhack-global-hackathon-series-2019',
      linkText: 'Blog',
    },
    valp: {
      title: 'Valuepitch E Technologies Hackathon',
      date: '2019',
      place: 'Bangalore, India - Second Runner',
      link:
        'https://farm66.staticflickr.com/65535/47702473231_248f82643f_b.jpg',
      linkText: 'Image',
    },
    vtubb: {
      title: 'VTU Inter-Collegiate Basketball Tournament',
      date: '2018',
      place: 'Karnataka, India - Winner',
      link:
        'https://www.facebook.com/photo.php?fbid=1622519817863750&set=t.100003956946689&type=3',
      linkText: 'Social Media Post',
    },
  };
  const certData = {
    dcmp: {
      title: 'Data Science For Everyone',
      platform: 'DataCamp',
      date: '2019',
      link: '',
      linkText: '',
    },
    nptelPython: {
      title: 'Python For Data Science',
      platform: 'NPTEL',
      date: '2019',
      link: '',
      linkText: '',
    },
    nptelcnc: {
      title: 'Cryptography & Network Security',
      platform: 'NPTEL',
      date: '2019',
      link: '',
      linkText: '',
    },
    npteldsa: {
      title: 'Design & Analysis Of Algorithm',
      platform: 'NPTEL',
      date: '2019',
      link: '',
      linkText: '',
    },
  };
  return (
    <>
      <Head>
        <title>Awards & Certification :: GitWind</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold mt-3">Awards</h3>
        <div className="flex flex-col">
          <AwardCard
            title={awardData.ahack.title}
            date={awardData.ahack.date}
            place={awardData.ahack.place}
            link={awardData.ahack.link}
            linkText={awardData.ahack.linkText}
          />
          <AwardCard
            title={awardData.valp.title}
            date={awardData.valp.date}
            place={awardData.valp.place}
            link={awardData.valp.link}
            linkText={awardData.valp.linkText}
          />
          <AwardCard
            title={awardData.vtubb.title}
            date={awardData.vtubb.date}
            place={awardData.vtubb.place}
            link={awardData.vtubb.link}
            linkText={awardData.vtubb.linkText}
          />
        </div>
        <h3 className="text-lg font-semibold mt-3">Certification</h3>
        <div className="flex flex-col">
          <CertificationCard
            title={certData.dcmp.title}
            date={certData.dcmp.date}
            platform={certData.dcmp.platform}
          />
          <CertificationCard
            title={certData.nptelPython.title}
            date={certData.nptelPython.date}
            platform={certData.nptelPython.platform}
          />
          <CertificationCard
            title={certData.nptelcnc.title}
            date={certData.nptelcnc.date}
            platform={certData.nptelcnc.platform}
          />
          <CertificationCard
            title={certData.npteldsa.title}
            date={certData.npteldsa.date}
            platform={certData.npteldsa.platform}
          />
        </div>
      </Layout>
    </>
  );
}
