'use client';
import Arrow from "../assets/Arrow.png";
import github from "../assets/github (1).png";
import gradient from "../assets/Gradient (1).png";
import Leetcode from "../assets/leetcode.png";
import linkn from "../assets/linkedin (2).png";
import avtar from "../assets/Me.png";
import Dock from "../components/Dock"; // <-- your Dock component
import TextType from "../components/Word";
function Main() {
  // Sample dock items
  const dockItems = [
    { 
      label: "Portfolio", 
      icon: <img src={avtar} alt="Portfolio" className="w-6 h-6 rounded-full" />, 
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }) 
    },
    { 
      label: "GitHub", 
      icon: <img src= {github} alt="GitHub" className="w-6 h-6" />, 
      onClick: () => window.open("https://github.com/areebkhan205", "_blank") 
    },
    { 
      label: "LinkedIn", 
      icon: <img src={linkn} alt="LinkedIn" className="w-6 h-6" />, 
               
      onClick: () => window.open("  https://www.linkedin.com/in/areeb-khan-533754317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" , "_blank") 
    },
     { 
      label: "LeetCode", 
      icon: <img src= {Leetcode} alt="GitHub" className="w-6 h-6" />, 
      onClick: () => window.open("https://leetcode.com/u/areeb_khan1603/", "_blank") 
    },
  ];

  return (
    <div id="Home" className="min-h-[119vh] relative text-white flex flex-col md:flex-row items-center justify-center px-4">
      
      {/* Greeting */}
      <p className="text-lg bottom-[-36px] relative md:left-[104px] md:bottom-[159px] text-purple-300 mb-2">
        Hello! I am <span className="text-pink-400 font-medium">Areeb Khan</span>
      </p>

      {/* Decorative Arrow */}
      <img
        className="rotate-[343deg] md:rotate-[238deg] relative md:bottom-[105px] md:left-[70px]"
        src={Arrow}
        alt="arrow"
      />

      <div className="w-auto md:flex text-center flex-row flex-wrap space-y-6">
        {/* Avatar & Gradient */}
        <img
          src={avtar}
          alt="Avatar"
          className="h-[259px] w-[259px] md:w-[308px] md:h-[306px] relative z-20 md:left-[251px] md:mx-auto rounded-full md:shadow-lg"
        />
        <img
          src={gradient}
          alt="Gradient"
          className="h-[259px] w-[259px] md:w-[323px] md:h-[326px] relative md:bottom-0 bottom-[270px] z-10 md:right-[82px] md:mx-auto rounded-full md:shadow-lg"
        />

        {/* Text Description */}
        <div className="relative md:bottom-[86px] bottom-[200px] md:right-[30px] text-white p-8">
          <p className="text-base text-purple-400 mb-1">A Developer who</p>

          <h1 className="text-2xl md:text-xl font-bold leading-snug">
            writes <span className="text-purple-400">clean</span>, 
            <span className="text-purple-400">fast</span>, 
            future-proof <br /> code
            <br />
            <span className="relative inline-block">
              <span className="text-purple-400">designed to scale</span>
              <span className="absolute inset-0 border-white rounded-full transform translate-y-2 scale-105" />
            </span>
          </h1>

          <p className="text-xs mt-2 text-gray-300">
            because messy code doesn’t just write bugs — <br />
            it writes problems for the future
          </p>
        </div>

        {/* Typing Text */}
        <div>
          <p className="text-3xl font-semibold relative md:left-[200px] md:bottom-0 bottom-[200px] ">
            I’m a{' '}
            <TextType
              as="span"
              text={['Software Engineer.', 'Frontend Developer.', 'UI/UX Designer.']}
              typingSpeed={55}
              deletingSpeed={35}
              pauseDuration={1400}
              loop={true}
              showCursor={true}
              cursorCharacter="|"
              className="font-medium"
              textColors={['#7c3aed']}
            />
          </p>

          <p className="text-sm text-gray-400 relative md:top-[47px] top-[-160px] md:right-[-200px] max-w-xl px-2">
            A self-taught UI/UX designer,🚀 B.Tech CSE student passionate about
            turning ideas into interactive web products. Top 8 @ CODE ASTRAA |
            Web Dev Intern | Exploring AI, design & modern tech.
          </p>
        </div>
      </div>

      {/* Decorative Arrow for mobile/desktop */}
      <img
        className="sm:hidden hidden rotate-[32deg] relative md:bottom-[113px] md:block md:right-[467px]"
        src={Arrow}
        alt="arrow"
      />

      {/* ---------------- Dock ---------------- */}
      <div className="absolute rotate-0  bottom-[600px] md:bottom-0 left-0 w-full flex justify-center pb-6 z-50">
        <Dock 
          items={dockItems} 
          magnification={70} 
          distance={200} 
          baseItemSize={50} 
          dockHeight={80} 
        />
      </div>
    </div>
  );
}

export default Main;
