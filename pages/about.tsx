import Link from "next/link";
import { Children, ReactNode } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PageTitle from "../components/PageTitle";
import Column from "../components/base/Column";
import Row from "../components/base/Row";
import Spacer from "../components/base/Spacer";
import ParticleBackground from "../components/ParticleBackground";

import {
  faTwitter,
  faLinkedin,
  faGithub,
  faReddit,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

import {
  faHome,
  faCoffee,
  faHandsHelping,
  faIdBadge,
  faRssSquare,
} from "@fortawesome/free-solid-svg-icons";

const AboutSection: React.FC<{ title: string }> = ({ title, children }) => (
  <Column style="mt-8">
    <p className="text-3xl">{title}</p>
    {children}
  </Column>
);

const ProfileMessage = () => (
  <div className="mt-8 px-8 text-lg">
    <p className="text-xl">
      I’m a senior software Engineer from India. Currently working at
      Housing.com. Having 4+ Years of experince in Android development with
      Kotlin and Java. Enthusiast about open source and Mobile technology and
      want to explore all opportunity around them. Core team member of Kotlin
      Mumbai and The Code Monk. Technical Blogger at Draft.dev and Personally
      write blogs at chetangupta.net and Medium
    </p>
  </div>
);

const Resume = () => (
  <AboutSection title="Resume 🔖">
    <p className="px-8 pt-4 text-lg">
      Download my resume from{" "}
      <Link href="https://docs.google.com/document/d/1BqqJ05CoB9_neN3j5wR5XCcQOXIAdf1y9JGl9y-sD_Y/edit?usp=sharing">
        <a target="_blank" className="text-teal-300">
          here
        </a>
      </Link>
    </p>
  </AboutSection>
);

const Highlights = () => (
  <AboutSection title="Highlights 🔦">
    <ul className="list-disc px-8 pt-4 text-lg">
      <li>
        Senior Android Developer at housing.com, building digital realestate
        listing application for Proptiger.
      </li>
      <li>
        Senior Android Developer at Dutshe Telekom Digital Lab, building OTT
        platform.
      </li>
      <li>
        Core team member at Kotlin Mumbai, Organize and Host Kotlin & Android
        talks.
      </li>
      <li>
        Core team member at the Code Monk, contribute and develop Open Source
        Project in Android & Kotlin.
      </li>
      <li>
        Feature at Various newsletter and magazine, KotlinWeekly, AndroidWeekly,
        ProAndroidDev, DroidCon
      </li>
    </ul>
  </AboutSection>
);

const Contact = () => (
  <AboutSection title="Contact 📞">
    <p className="px-8 pt-4 text-lg">
      You can connect with me through{" "}
      <Link href="https://t.me/ch810">
        <a target="_blank" className="text-teal-300">
          Telegram @ChetanGupta
        </a>
      </Link>{" "}
      or Write me at{" "}
      <Link href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvmZfwGcvVTPnBJSgvfWcRGMFwznXdfkwkXHRCfSTrzRcmlpnZJcFcbkzZsxCmfTNRZBtg">
        <a target="_blank" className="text-teal-300">
          dev.ch8n@gmail.com
        </a>
      </Link>
    </p>
  </AboutSection>
);

const SocialIcon = ({ icon, label, url }) => (
  <a href={url} target="_blank">
    <div className="px-1.5 text-center">
      <FontAwesomeIcon icon={icon} style={{ fontSize: 36, color: "white" }} />
      <p>{label}</p>
    </div>
  </a>
);

const Connect = () => (
  <AboutSection title="Connect 🌎">
    <p className="px-8 py-4 text-lg">You can follow me on social media on :</p>
    <Row style="py-2">
      <SocialIcon
        icon={faTwitter}
        label={"Twitter"}
        url={"https://bit.ly/ch8n-twitter"}
      />
      <SocialIcon
        icon={faLinkedin}
        label={"LinkedIn"}
        url={"https://bit.ly/ch8n-linkdIn"}
      />
      <SocialIcon
        icon={faGithub}
        label={"Github"}
        url={"https://github.com/ch8n"}
      />
      <SocialIcon
        icon={faReddit}
        label={"Reddit"}
        url={"https://www.reddit.com/user/dev-ch8n"}
      />
      <SocialIcon
        icon={faMedium}
        label={"Medium"}
        url={"https://bit.ly/ch8n-medium-blog"}
      />
    </Row>
  </AboutSection>
);

const WorkExperience = () => (
  <AboutSection title="Work Experience ☕️">
    <ul className="px-8 pt-4 text-lg list-none">
      <li>
        Read more details about my past jobs from{" "}
        <Link href="https://chetangupta.net/experience/">
          <a target="_blank" className="text-teal-300">
            here
          </a>
        </Link>
        ,
      </li>
      <li>
        {" "}
        if your interested to look into my community contributions click{" "}
        <Link href="https://chetangupta.net/experience/">
          <a target="_blank" className="text-teal-300">
            here
          </a>
        </Link>{" "}
        and
      </li>
      <li>
        {" "}
        If you want to see my personal projects click{" "}
        <Link href="https://chetangupta.net/experience/">
          <a target="_blank" className="text-teal-300">
            here
          </a>
        </Link>
        .
      </li>
      <li>
        {" "}
        If you want to see where I have been featured, visit my indiviual Post.
        It has feature section on it. For more connect with me via{" "}
        <Link href="https://bit.ly/ch8n-linkdIn">
          <a target="_blank" className="text-teal-300">
            LinkedIn
          </a>
        </Link>{" "}
        for more.
      </li>
    </ul>
  </AboutSection>
);

const Education = ({ course, authority, link, score }) => (
  <Column style="mt-4">
    <p className="text-lg font-semibold">{course}</p>
    <p className="text-base">{authority}</p>
    <p className="text-base">
      Download marksheet from{" "}
      <a href={link} target="_blank" className="text-teal-300">
        here
      </a>
    </p>
    <p className="text-base">CGPA - {score}</p>
  </Column>
);

const Qualification = () => (
  <AboutSection title="Qualification 🎓">
    <p className="px-8 pt-4 text-lg">
      My College and Schooling Details:{" "}
      <Column style="mx-2">
        <Education
          course={"B.Tech - Computer Science"}
          authority={"Apeejay Stya University"}
          link={
            "https://drive.google.com/file/d/19OnO1SUrQwkHVyIzWzWezoM3R8hn-IPa/view?usp=sharing"
          }
          score={"4.09/4.3"}
        />
        <Education
          course={"Class XII (High School)"}
          authority={"Deep public School"}
          link={
            "https://drive.google.com/file/d/1qJHaH59qA-2yxnIPW-7iuBQgS0Nd6Okk/view?usp=sharing"
          }
          score={"7.9/10"}
        />
        <Education
          course={"Class X (Mid-High School)"}
          authority={"Andra Education Socity School"}
          link={
            "https://drive.google.com/file/d/1cauXSVJU5hrdwwy51EeYSo56VdgGmlij/view?usp=sharing"
          }
          score={"7.6/10"}
        />
      </Column>
    </p>
  </AboutSection>
);

const Awards = () => (
  <AboutSection title="Awards 🏆">
    <p className="px-8 pt-4 text-lg">
      You can see list of Awards I have won over my contibution in the
      communities and participation into various challenges and events from{" "}
      <Link href="">
        <a target="_blank" className="text-teal-300">
          here
        </a>
      </Link>
    </p>
  </AboutSection>
);

const Testimonials = () => (
  <AboutSection title="Testimonials 💐">
    <p className="px-8 pt-4 text-lg">
      I’m greatful to the community who spread kinds words about me, read or
      wirte one from{" "}
      <Link href="">
        <a target="_blank" className="text-teal-300">
          here
        </a>
      </Link>
    </p>
  </AboutSection>
);

const AboutWebsite = () => (
  <AboutSection title="About Website 📜">
    <ul className="list-disc px-8 py-4 text-lg">
      <li>Build using React, NextJs, TailWind Css</li>
      <li>
        All logos are open sourced and used under Creative Commons This is
        non-commerical website, contains ads for supporting hosting cost.
      </li>
      <li>For Queries or Concerns about this site read Site policy.</li>
    </ul>
  </AboutSection>
);

const AboutDetails = () => (
  <Column style="about-details px-8">
    <Resume />
    <Highlights />
    <Contact />
    <Connect />
    <WorkExperience />
    <Qualification />
    <Awards />
    <Testimonials />
    <AboutWebsite />
    <Spacer style="my-12" />
  </Column>
);

const ContentIndex = () => (
  <Column style="hidden top-0 right-0 w-36 outline-dashed my-8 outline-4  outline-red-500">
    <ul className="list-none hover:list-disc">
      <p className="text-2xl">Content 📒</p>
      <li>Highlights</li>
      <li>Contact</li>
      <li>Connect</li>
      <li>Work Experience</li>
      <li>Qualifications</li>
      <li>Awards</li>
      <li>Testimonials</li>
      <li>About Website</li>
    </ul>
  </Column>
);

const BottomNavigationIcon = ({ icon, label, url }) => (
  <Link href={url}>
    <div className="px-2 pt-2 text-center">
      <FontAwesomeIcon icon={icon} style={{ fontSize: 24, color: "white" }} />
      <p className="text-xs pb-1">{label}</p>
    </div>
  </Link>
);

const BottomNavigation = () => (
  <Row
    style="fixed 
  bg-stone-800 
  bottom-0 
  grid gap-auto grid-cols-5 grid-rows-1 
  py-2
  shadow-inner
  shadow-white
  w-full"
  >
    <BottomNavigationIcon icon={faHome} label={"Home"} url={""} />
    <BottomNavigationIcon icon={faCoffee} label={"Work"} url={""} />
    <BottomNavigationIcon icon={faHandsHelping} label={"Community"} url={""} />
    <BottomNavigationIcon icon={faIdBadge} label={"About"} url={"/about"} />
    <BottomNavigationIcon icon={faRssSquare} label={"Updates"} url={""} />
  </Row>
);

const IntoChip = ({ emoji, desc, main }) => (
  <Row style="my-4 bg-white rounded-lg text-black px-4 py-1 shadow shadow-white">
    <p className="text-5xl font-normal self-center">{emoji}</p>
    <Column style="pl-4 self-center">
      <p className="text-sm font-normal">{desc}</p>
      <p className="text-2xl font-bold">{main}</p>
    </Column>
  </Row>
);

//TODO Convert to pager
const IntroPager = () => (
  <Column>
    <IntoChip emoji="👋🏻" desc="Hello there!, myself" main="Chetan Gupta" />
    <IntoChip
      emoji="💻"
      desc="Senior Software Engineer "
      main="Android Developer"
    />
    <IntoChip emoji="💼" desc="I’m Currently Working at," main="Housing.com" />
    <IntoChip
      emoji="📚"
      desc="Mobile Technology Enthusiast"
      main="Kotlin, Clean, TDD"
    />
  </Column>
);

const IntoSection = () => (
  <Column style="px-8">
    <Image
      src="/images/intro-about.png"
      alt="Picture of the author"
      layout="responsive"
      width={734}
      height={509}
    />
    <IntroPager />
    <ProfileMessage />
  </Column>
);

const AboutPage = () => (
  <div className="root">
    <ParticleBackground />
    <Column style="relative">
      <PageTitle name="About Me" views={999} />
      <IntoSection />
      <ContentIndex />
      <AboutDetails />
      <BottomNavigation />
    </Column>
  </div>
);

export default AboutPage;
