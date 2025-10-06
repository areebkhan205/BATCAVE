import BallCanvas from "./BallCanvas";

import cssImg from "../assets/css.png";
import mongoImg from "../assets/dsa.png";
import firebaseImg from "../assets/firebase.png";
import nodeImg from "../assets/git.png";
import htmlImg from "../assets/html.png";
import jsImg from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import tailwindImg from "../assets/tailwind.png";
import CurvedLoop from "./Curveloop";
const technologies = [
  { name: "HTML", icon: htmlImg },
  { name: "CSS", icon: cssImg },
  { name: "JavaScript", icon: jsImg },
  { name: "React", icon: reactImg },
  { name: "Node.js", icon: nodeImg },
  { name: "MongoDB", icon: mongoImg },
  { name: "Firebase", icon: firebaseImg },
  { name: "Tailwind", icon: tailwindImg },
];

const TechSection = () => {
  const handleClick = (tech) => {
    alert(`You clicked on ${tech.name}`);
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="
      relative bottom-[376px]">
 <CurvedLoop 
  marqueeText="MY ✦ TECH ✦ STACK ✦"
  speed={3}
  curveAmount={500}
  direction="right"
  interactive={true}
  className="custom-text-style"
/>
      </div>
     
      <div className="relative bottom-[630px] md:bottom-[500px] grid grid-cols-2 sm:grid-cols-4 gap-8">
        {technologies.map((tech) => (
          <div key={tech.name} className="w-full h-64">
            <BallCanvas
              icon={tech.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSection;
