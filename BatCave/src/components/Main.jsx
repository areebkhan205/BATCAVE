'use client';

import Arrow from "../assets/Arrow.png";
import gradient from "../assets/Gradient (1).png";
import avtar from "../assets/Me.png";
import TextType from "../components/Word";

function Main() {
  return (
    <div id="Home" className="min-h-[119vh] text-white flex flex-col md:flex-row items-center justify-center px-4">
      <p className="text-lg bottom-[-36px] relative md:left-[104px] md:bottom-[159px] text-purple-300 mb-2">
        Hello! I am <span className="text-pink-400 font-medium">Areeb Khan</span>
      </p>

      <img
        className="rotate-[343deg] md:rotate-[238deg] relative md:bottom-[105px] md:left-[70px]"
        src={Arrow}
        alt="arrow"
      />

      <div className="w-auto md:flex text-center flex-row flex-wrap space-y-6">
        <img
          src={avtar}
          alt="Avatar"
          className="h-[259px] w-[259px] md:w-[308px] md:h-[306px] relative z-20 md:left-[251px] md:mx-auto rounded-full md:shadow-lg"
        />
         <img
          src={gradient}
          alt="Avatar"
          className="h-[259px] w-[259px] md:w-[323px] md:h-[326px] relative z-10 md:right-[82px] md:mx-auto rounded-full md:shadow-lg"
        />

  <div className="relative md:bottom-[86px] md:right-[30px] text-white p-8">
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


        <img
          className="sm:hidden hidden rotate-[32deg] relative md:bottom-[113px] md:block md:right-[467px]"
          src={Arrow}
          alt="arrow"
        />

        <div>
          <p className="text-2xl font-semibold">
            I’m a{' '}
            <TextType
              as="span"
              text={['Software Engineer.', 'Frontend Developer.', 'UI/UX Designer.']}
              typingSpeed={55}
              deletingSpeed={35}
              pauseDuration={1400}
              loop={true}               // keep rotating
              showCursor={true}
              cursorCharacter="|"
              className="font-medium"
              textColors={['#7c3aed']}  // optional
            />
          </p>

          <p className="text-sm text-gray-400 relative md:top-[47px] md:right-[-70px] max-w-xl px-2">
            A self-taught UI/UX designer,🚀 B.Tech CSE student passionate about
            turning ideas into interactive web products. Top 8 @ CODE ASTRAA |
            Web Dev Intern | Exploring AI, design & modern tech.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
