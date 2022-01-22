import Link from "next/link";
import { ReactNode } from "react";
import Layout from "../components/Layout";

type Props = {
  children: ReactNode;
  title: string;
};

const AboutContent = ({ title, children }: Props) => (
  <div>
    <p className="text-lg">{title}</p>
    {children}
  </div>
);

const BottomNavigation = () => (
  <div>
    {/* bottom-navigation */}
    <div className="bottom-navigation bottom-0 fixed grid gap-auto grid-cols-5 grid-rows-1">
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
  <div className="outline-dashed outline-4  outline-red-500 container">
    <div className="w-full h-screen">
      {/* 
      Column > 
        Row > Toolbar  
        Column >
          Box > Into circle
          Para > content
          Row >
            Coloumn > 
              Index Items
            Column >
              Content items
      
        // when mobile 
        bottom navigation should come 
      */}

      <AboutContent title="Resume 🔖">
        <p>Download my resume from here</p>
      </AboutContent>

      <AboutContent title="Highlights 🔦">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          velit, nemo aperiam quidem, laudantium inventore assumenda architecto
          neque ratione dolor quod explicabo in optio natus autem earum
          voluptatibus. Asperiores, animi.
        </p>
      </AboutContent>

      <AboutContent title="Contact  📞">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          velit, nemo aperiam quidem, laudantium inventore assumenda architecto
          neque ratione dolor quod explicabo in optio natus autem earum
          voluptatibus. Asperiores, animi.
        </p>
      </AboutContent>

      <AboutContent title="Connect  🌎">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          velit, nemo aperiam quidem, laudantium inventore assumenda architecto
          neque ratione dolor quod explicabo in optio natus autem earum
          voluptatibus. Asperiores, animi.
        </p>
      </AboutContent>

      <AboutContent title="Work Experience  ☕️">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          velit, nemo aperiam quidem, laudantium inventore assumenda architecto
          neque ratione dolor quod explicabo in optio natus autem earum
          voluptatibus. Asperiores, animi.
        </p>
      </AboutContent>

      <AboutContent title="Qualification 🎓">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          velit, nemo aperiam quidem, laudantium inventore assumenda architecto
          neque ratione dolor quod explicabo in optio natus autem earum
          voluptatibus. Asperiores, animi.
        </p>
      </AboutContent>

      <AboutContent title="Awards 🏆">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          velit, nemo aperiam quidem, laudantium inventore assumenda architecto
          neque ratione dolor quod explicabo in optio natus autem earum
          voluptatibus. Asperiores, animi.
        </p>
      </AboutContent>

      <AboutContent title="Testimonials 💐">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          velit, nemo aperiam quidem, laudantium inventore assumenda architecto
          neque ratione dolor quod explicabo in optio natus autem earum
          voluptatibus. Asperiores, animi.
        </p>
      </AboutContent>

      <AboutContent title="About Website 📜">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          velit, nemo aperiam quidem, laudantium inventore assumenda architecto
          neque ratione dolor quod explicabo in optio natus autem earum
          voluptatibus. Asperiores, animi.
        </p>
      </AboutContent>
    </div>
    <BottomNavigation />
  </div>
);

export default AboutPage;
