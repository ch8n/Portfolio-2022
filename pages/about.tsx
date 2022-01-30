import Link from "next/link";
import { Children, ReactNode } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faReddit,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

type Props = {
  children: ReactNode;
  title: string;
};

const AboutMessage = () => (
  <div className="mt-8 px-8 text-lg">
    <p>
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
  <div className="my-8">
    <p className="text-3xl">Resume 🔖</p>
    <p className="px-8 py-4 text-lg">
      Download my resume from{" "}
      <Link href="https://docs.google.com/document/d/1BqqJ05CoB9_neN3j5wR5XCcQOXIAdf1y9JGl9y-sD_Y/edit?usp=sharing">
        <a target="_blank" className="text-teal-300">
          here
        </a>
      </Link>
    </p>
  </div>
);

const Highlights = () => (
  <div className="my-8">
    <p className="text-3xl">Highlights 🔦</p>
    <ul className="list-disc px-8 py-4 text-lg">
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
  </div>
);

const Contact = () => (
  <div className="my-8">
    <p className="text-3xl">Contact 📞</p>
    <p className="px-8 py-4 text-lg">
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
  </div>
);

const SocialIcon = ({ icon, label, url }) => (
  <a href={url} target="_blank">
    <div className="px-2 text-center">
      <FontAwesomeIcon icon={icon} style={{ fontSize: 36, color: "white" }} />
      <p>{label}</p>
    </div>
  </a>
);

const Connect = () => (
  <div className="my-8">
    <p className="text-3xl">Connect 🌎</p>
    <p className="px-8 py-4 text-lg">You can follow me on social media on :</p>
    <div className="flex flex-row">
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
    </div>
  </div>
);

const WorkExperience = () => (
  <div className="my-8">
    <p className="text-3xl">Work Experience ☕️</p>
    <ul className="px-8 py-4 text-lg list-none">
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
  </div>
);

const AboutContent = ({ title, children }: Props) => (
  <div className="outline-dashed my-8 outline-4  outline-red-500">
    <p className="text-3xl">{title}</p>
    {children}
  </div>
);

const AboutDetails = () => (
  <div className="about-details px-8">
    <Resume />
    <Highlights />
    <Contact />
    <Connect />
    <WorkExperience />

    <AboutContent title="Qualification 🎓">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem velit,
        nemo aperiam quidem, laudantium inventore assumenda architecto neque
        ratione dolor quod explicabo in optio natus autem earum voluptatibus.
        Asperiores, animi.
      </p>
    </AboutContent>

    <AboutContent title="Awards 🏆">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem velit,
        nemo aperiam quidem, laudantium inventore assumenda architecto neque
        ratione dolor quod explicabo in optio natus autem earum voluptatibus.
        Asperiores, animi.
      </p>
    </AboutContent>

    <AboutContent title="Testimonials 💐">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem velit,
        nemo aperiam quidem, laudantium inventore assumenda architecto neque
        ratione dolor quod explicabo in optio natus autem earum voluptatibus.
        Asperiores, animi.
      </p>
    </AboutContent>

    <AboutContent title="About Website 📜">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem velit,
        nemo aperiam quidem, laudantium inventore assumenda architecto neque
        ratione dolor quod explicabo in optio natus autem earum voluptatibus.
        Asperiores, animi.
      </p>
    </AboutContent>
  </div>
);

const ContentIndex = () => (
  <div className="hidden top-0 right-0 w-36 outline-dashed my-8 outline-4  outline-red-500">
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
  </div>
);

const BottomNavigation = () => (
  <div className="bottom-navigation ">
    {/* bottom-navigation */}
    <div className="fixed bg-stone-800 bottom-0 grid gap-auto grid-cols-5 grid-rows-1">
      <div className="outline-dashed outline-4  outline-red-500">
        {/* browse */}
        Home
      </div>
      <div className="outline-dashed outline-4  outline-red-500">
        {/* workexp */}
        Work Experience
      </div>
      <div className="outline-dashed outline-4  outline-red-500">
        {/* awards/talks/community/open-source/blogs/testimonials */}
        Community
      </div>
      <div className="outline-dashed outline-4  outline-red-500">
        {/* about */}
        about
      </div>
      <div className="outline-dashed outline-4  outline-red-500">
        {/* feeds/newsletter */}
        updates
      </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="outline-dashed outline-4 outline-red-500 container">
    <div className="mt-8 px-8">
      <Image
        src="/images/intro-about.png"
        alt="Picture of the author"
        width={500}
        height={220}
      />
    </div>

    <AboutMessage />
    <div className="w-full h-screen">
      <div className="flex">
        <ContentIndex />
        <AboutDetails />
      </div>
      <div className="h-16" />
    </div>

    <BottomNavigation />
  </div>
);

export default AboutPage;
