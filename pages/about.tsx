import Link from "next/link";
import { ReactNode } from "react";
import Layout from "../components/Layout";
import Image from "next/image";

type Props = {
  children: ReactNode;
  title: string;
};

const AboutMessage = () => (
  <div className="mt-8">
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

const AboutContent = ({ title, children }: Props) => (
  <div className="outline-dashed my-8 outline-4  outline-red-500">
    <p className="text-3xl">{title}</p>
    {children}
  </div>
);

const AboutDetails = () => (
  <div className="about-details">
    <AboutContent title="Resume 🔖">
      <p>Download my resume from here</p>
    </AboutContent>

    <AboutContent title="Highlights 🔦">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem velit,
        nemo aperiam quidem, laudantium inventore assumenda architecto neque
        ratione dolor quod explicabo in optio natus autem earum voluptatibus.
        Asperiores, animi.
      </p>
    </AboutContent>

    <AboutContent title="Contact  📞">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem velit,
        nemo aperiam quidem, laudantium inventore assumenda architecto neque
        ratione dolor quod explicabo in optio natus autem earum voluptatibus.
        Asperiores, animi.
      </p>
    </AboutContent>

    <AboutContent title="Connect  🌎">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem velit,
        nemo aperiam quidem, laudantium inventore assumenda architecto neque
        ratione dolor quod explicabo in optio natus autem earum voluptatibus.
        Asperiores, animi.
      </p>
    </AboutContent>

    <AboutContent title="Work Experience  ☕️">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem velit,
        nemo aperiam quidem, laudantium inventore assumenda architecto neque
        ratione dolor quod explicabo in optio natus autem earum voluptatibus.
        Asperiores, animi.
      </p>
    </AboutContent>

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
  <div className="fixed top-0 right-0 w-36 outline-dashed my-8 outline-4  outline-red-500">
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
  <div className="bottom-navigation">
    {/* bottom-navigation */}
    <div className="fixed bottom-0 grid gap-auto grid-cols-5 grid-rows-1">
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
    <div className="mt-8">
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
