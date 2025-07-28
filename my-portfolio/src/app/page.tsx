"use client";

import Image from "next/image";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import ProjectDescription from "./components/ProjectDescription";
import Head from "next/head";

export default function Home() {

  <Head>
    <title>Jerry Arthur | Full Stack Developer Portfolio</title>
    <meta name="description" content="Jerry Arthur's projects" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>

  {/* Allows me to see the grid/container im working within */ }
  const showBorders = false;

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-3 p-8 ${showBorders ? "border border-white-400" : ""
        }`}
      style={showBorders ? { outline: "1px solid red" } : {}}
    >
      {/* === Top Row (Full Width - Heading for all length devices ) === */}
      <div className={`${showBorders ? "border border-blue-500" : ""} col-span-1 lg:col-span-3 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between xl:gap-50 xl:justify-start 2xl:translate-x-16 2xl:gap-179`}>
        <div className="text-center lg:translate-x-70 2xl:translate-x-90">
          <p className="font-raleway text-7xl text-white drop-shadow-md font-light mb-2 mt-4">
            Jerry Arthur
          </p>
          <p className="font-raleway text-3xl text-white drop-shadow-md italic font-light mb-1">
            Software Engineer
          </p>
          <p className="text-md font-raleway text-white drop-shadow-md font-semibold">
            Full Stack Developer • Strong in Java, Fluent Across the Stack
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center w-1/3 2xl:-translate-x-45 xl:translate-x-30 mt-5">
          <div className="relative  rounded-full bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 animate-spinSlow p-[5px]">
            <div className="rounded-full bg-white w-full h-full flex items-center justify-center">
              <Image
                src="/profile.png"
                alt="Jerry Arthur profile"
                width={160}
                height={200}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* === Second Row (Horizontal / Squiggly Lines for all length devices) === */}
      <div className={`${showBorders ? "border border-blue-500" : ""} col-span-3 flex flex-col gap-6 mt-1`}>
        {/* Decorative Horizontal Line */}
        <div className="w-2/3 h-[2px] bg-black opacity-80 mx-auto mt-1 lg:mt-12 mb-2 rounded-full py-4">
          {/* Both squiggly lines linking the horizontal lines to the video's */}
          <div className="hidden lg:grid relative w-full mx-auto lg:grid-cols-3">

            {/* Left Squiggle */}
            <svg className="justify-self-start lg:ml-10 xl:ml-34 2xl:ml-65 " aria-hideen="true" width="24" height="290" viewBox="0 0 24 290 ">
              <path
                stroke="black"
                strokeWidth="2.5"
                fill="none"
              >
                <animate
                  attributeName="d"
                  dur="1.2s"
                  repeatCount="indefinite"
                  values="
                    M12 0 Q24 20 12 40 Q0 60 12 80 Q24 100 12 120 Q0 140 12 160 Q24 180 12 200 Q0 220 12 240 Q24 260 12 280;
                    M12 0 Q20 25 12 45 Q4 65 12 85 Q20 105 12 125 Q4 145 12 165 Q20 185 12 205 Q4 225 12 245 Q20 265 12 285;
                    M12 0 Q24 20 12 40 Q0 60 12 80 Q24 100 12 120 Q0 140 12 160 Q24 180 12 200 Q0 220 12 240 Q24 260 12 280
                    "/>
              </path>
            </svg>


            {/* Right Squiggle */}
            <svg className="justify-self-end lg:-mr-40 xl:-mr-32 2xl:-mr-30" aria-hideen="true" width="24" height="290" viewBox="0 0 24 290">
              <path
                stroke="black"
                strokeWidth="2.5"
                fill="none"
              >
                <animate
                  attributeName="d"
                  dur="1.2s"
                  repeatCount="indefinite"
                  values="
                    M12 0 Q24 20 12 40 Q0 60 12 80 Q24 100 12 120 Q0 140 12 160 Q24 180 12 200 Q0 220 12 240 Q24 260 12 280;
                    M12 0 Q20 25 12 45 Q4 65 12 85 Q20 105 12 125 Q4 145 12 165 Q20 185 12 205 Q4 225 12 245 Q20 265 12 285;
                    M12 0 Q24 20 12 40 Q0 60 12 80 Q24 100 12 120 Q0 140 12 160 Q24 180 12 200 Q0 220 12 240 Q24 260 12 280
                    "/>
              </path>
            </svg>
          </div>
        </div>
      </div>



      {/* === Third Row Projects Title for all length devices === */}
      <div className={`${showBorders ? "border border-blue-500 2xl:mt-5 mt-7" : ""} col-span-3 `}>
        <h2 className="lg:sway k text-center text-3xl sm:text-4xl lg:text-4xl font-bold text-blue-700 font-raleway">
          My Projects
        </h2>
      </div>


      {/* === Fourth Row, Description Boxes-Video Frames for...  === */}
      <div className={`${showBorders ? "border border-blue-500" : ""} col-span-1 lg:col-span-3 lg:mt-27 `}>
        {/* Titles */}
        <div className={`lg:sway flex flex-col lg:flex-row lg:justify-between items-center lg:mb-1 mt-5 lg:-mt-10  ${showBorders ? "border border-red-500" : ""}`}>
          {/* Left Title */}
          <div className="lg:hidden w-full h-[6px] bg-black opacity-80 mx-auto mt-1 mb-2 py-3 rounded-full"></div>
          <div className="font-raleway text-2xl 2xl:text-4xl sm:text-3xl lg:text-2xl text-blue-700 font-semibold text-center xl:text-3xl lg:ml-26 xl:ml-45 2xl:ml-80">
            Social Media Application
          </div>
          {/* Right Title, hide on small screens*/}
          <div className="hidden lg:block font-raleway text-lg 2xl:text-4xl lg:text-2xl text-blue-700 font-semibold xl:text-3xl lg:mr-40 xl:mr-60 2xl:mr-95">
            Tic Tac Toe Game
          </div>
        </div>

        {/* Description Box & Video Frames for some screen sizes! */}
        <div className="w-full flex flex-col items-center lg:flex-row lg:justify-start lg:items-start 2xl:mt-13 2xl:gap-x-3 xl:gap-x-3 lg:gap-x-3">

          {/* Description Box Left - show on small screens and ultra-wide; hide between lg-xl*/}
          <div className="2xl:translate-x-5 block lg:hidden xl:hidden 2xl:block z-[1] sway w-[300px] h-[350px] 2xl:w-[750px] 2xl:h-[370px] p-3 bg-blue-800 text-white rounded-full font-raleway text-center shadow-lg mt-5">
            <ProjectDescription
              title="What This App Does"
              description="Chirrup is a social media app for university students with real-time posts, media sharing, and threaded comments."
              techStack="🔧 Built with Vue.js, Node.js, SQLite & Bootstrap using a scalable microservice architecture."
              githubUrl="https://github.com/JerryA01/SocialMediaApplicationBackEnd"
            />
          </div>

          {/* Video Frame - Left for all screen sizes*/}
          <div className="sway w-full p-3 rounded-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 animate-spinSlow mt-4 z-10 lg:-translate-x-0">
            <div className="bg-white rounded-md overflow-hidden w-full aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/e2Op1XRsc7Q"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Line-formatting for short width devices only */}
          <div className="lg:hidden w-full h-[6px] bg-black opacity-80 mx-auto mt-7 mb-2 py-3 rounded-full"></div>

          {/* Mobile-only centered title - only show on small screens*/}
          <div className="lg:hidden xl:hidden 2xl:hidden sway w-full flex justify-center mt-4 ">
            <div className="font-raleway text-3xl text-blue-700 font-semibold text-center">
              Tic Tac Toe Game
            </div>
          </div>

          {/* Description Box - for devices with < 1024 width */}
          <div className="lg:hidden xl:hidden 2xl:hidden block sway w-[300px] h-[370px] p-4 bg-blue-800 text-white rounded-full font-raleway text-center shadow-lg mt-6">
            <ProjectDescription
              title="What This Game Does"
              description="Multiplayer Tic Tac Toe game built in Java with real-time play, GUI controls, and synchronized server-client communication."
              techStack="🔧 Uses Java Swing, Socket I/O, and threading constructs like Lock & Condition — no frameworks, just raw Java engineering."
              githubUrl="https://github.com/JerryA01/TicTacToeGame"
            />
          </div>

          {/* Video Frame - Right for all screen sizes*/}
          <div className="sway w-full p-3 rounded-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 z-[2] animate-spinSlow mt-4 2xlg:ml-7 2xlg:-translate-x-2">
            <div className="bg-white w-full rounded-md overflow-hidden aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Nq2k1KxFM3s"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Line-formatting for short width devices only */}
          <div className="lg:hidden w-full h-[6px] bg-black opacity-80 mx-auto mt-7 mb-2 py-3 rounded-full"></div>

          {/* Description Box - Right - This is only to be shown on ultra wide screens */}
          <div className="hidden 2xl:z-[1] 2xl:-translate-x-5 lg:hidden xl:hidden 2xl:block 2xl:w-[750px] 2xl:h-[405px] sway p-4 bg-blue-800 text-white rounded-full font-raleway text-center shadow-lg mt-3">
            <ProjectDescription
              title="What This Game Does"
              description="Multiplayer Tic Tac Toe game built in Java with real-time play, GUI controls, and synchronized server-client communication."
              techStack="🔧 Uses Java Swing, Socket I/O, and threading constructs like Lock & Condition — no frameworks, just raw Java engineering."
              githubUrl="https://github.com/JerryA01/TicTacToeGame"
            />
          </div>
        </div>

        {/* Hanging Squiggly Line that connects to the video frame in the bottom row, this is shown only on ultra wide screens */}
        <div className="hidden 2xl:grid relative w-full mx-auto 2xl:grid-cols-3 2xl:-mt-27">
          {/* Left Squiggle */}
          <svg className="justify-self-start lg:ml-10 xl:ml-34 2xl:ml-130" aria-hideen="true" width="24" height="290" viewBox="0 0 24 290 ">
            <path
              stroke="black"
              strokeWidth="2.5"
              fill="none"
            >
              <animate
                attributeName="d"
                dur="1.2s"
                repeatCount="indefinite"
                values="
                    M12 0 Q24 20 12 40 Q0 60 12 80 Q24 100 12 120 Q0 140 12 160 Q24 180 12 200 Q0 220 12 240 Q24 260 12 280;
                    M12 0 Q20 25 12 45 Q4 65 12 85 Q20 105 12 125 Q4 145 12 165 Q20 185 12 205 Q4 225 12 245 Q20 265 12 285;
                    M12 0 Q24 20 12 40 Q0 60 12 80 Q24 100 12 120 Q0 140 12 160 Q24 180 12 200 Q0 220 12 240 Q24 260 12 280
                    "/>
            </path>
          </svg>
        </div>
      </div>


      {/* === Fifth Row Handles Projects coming soon and layout of description boxes for lg and xl devies() === */}
      <div className={`${showBorders ? "border border-white-500" : ""} col-span-3 2xl:col-span-1 mt-4 2xl:mt-7`}>

        {/* Border Wrapper Around Video + Text Row */}
        <div className={`${showBorders ? "border border-green-500 2xl:mt-5 2xl:ml-0" : ""}`}>
          {/* Video + Text Row */}
          <div className="w-full flex flex-col lg:flex-row items-center justify-start lg:-mt-9 block lg:hidden xl:hidden 2xl:block 2xl:-mt-86 ">
            {/* Description Box Left */}
            <div className="sway w-[350px] 2xl:w-[250px] h-[360px] p-4 bg-blue-800 text-white rounded-full font-raleway text-center shadow-lg 2xl:mt-60 2xl:translate-x-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-200 mt-7">Coming soon...</h3>
              <p>
                ...
                <span className="flex items-center space-x-2 ml-9">
                  <FaGithub size={30} />
                  <FaArrowRight size={16} />
                  <a
                    href="https://github.com/JerryA01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-300"
                  >
                    GitHub
                  </a>
                </span>
              </p>
            </div>
            {/*Empty Video Frame - for bigger screens */}
            <div className="hidden lg:block 2xl:-mt-84 2xl:-mr-63 sway p-3 rounded-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 animate-spinSlow mt-4 z-10 lg:-translate-x-0 max-w-[520px] mx-auto">
              <div className="bg-black rounded-md overflow-hidden 2xl:w-[497px] aspect-video">

              </div>
            </div>
          </div>
        </div>

        {/* A row desgined that fit's the description boxes on each side on devices that fit within large and xl category. Also adds a squiggly line that links to the bottom row */}
        <div className="hidden lg:flex lg:flex-row lg:justify-between 2xl:hidden">
          {/* Left Description Box */}
          <div className="sway w-[300px] h-[350px] p-4 bg-blue-800 text-white rounded-full font-raleway text-center shadow-lg mt-5 lg:-mt-6 lg:translate-x-20">
            <ProjectDescription
              title="What This App Does"
              description="Chirrup is a social media app for university students with real-time posts, media sharing, and threaded comments."
              techStack="🔧 Built with Vue.js, Node.js, SQLite & Bootstrap using a scalable microservice architecture."
              githubUrl="https://github.com/JerryA01/SocialMediaApplicationBackEnd"
            />
          </div>

          {/* Right Description Box*/}
          <div className="sway w-[300px] h-[370px] p-4 bg-blue-800 text-white rounded-full font-raleway text-center shadow-lg mt-6 lg:-mt-6 lg:-translate-x-18 lg:z-[1]">
            <ProjectDescription
              title="What This Game Does"
              description="Multiplayer Tic Tac Toe game built in Java with real-time play, GUI controls, and synchronized server-client communication."
              techStack="🔧 Uses Java Swing, Socket I/O, and threading constructs like Lock & Condition — no frameworks, just raw Java engineering."
              githubUrl="https://github.com/JerryA01/TicTacToeGame"
            />
          </div>
        </div>

        {/* A svg that is a squiggly connecting the description box with the video on the bottom row. */}
        <svg className="2xl:hidden stroke-0 lg:stroke-[2.5] justify-self-start ml-85 -mt-20 lg:-ml-7 z-0" aria-hideen="true" width="500" height="300" viewBox="0 0 24 290" >
          <path stroke="black" fill="none">
            <animate
              attributeName="d"
              dur="1.2s"
              repeatCount="indefinite"
              values="
            M12 0 Q24 20 12 40 Q0 60 12 80 Q24 100 12 120 Q0 140 12 160 Q24 180 12 200 Q0 220 12 240 Q24 260 12 280;
            M12 0 Q20 25 12 45 Q4 65 12 85 Q20 105 12 125 Q4 145 12 165 Q20 185 12 205 Q4 225 12 245 Q20 265 12 285;
            M12 0 Q24 20 12 40 Q0 60 12 80 Q24 100 12 120 Q0 140 12 160 Q24 180 12 200 Q0 220 12 240 Q24 260 12 280
          "
            />
          </path>
        </svg>
      </div>


      <section aria-label="Upcoming Project Preview">

        {/* === Sixth Row Video Frame for large and xl devices () === */}
        <div className={`${showBorders ? "border border-black-500" : ""} col-span-3 -mt-6 hidden lg:block 2xl:hidden`}>
          {/* Video Frame - Nothing should show here this is for my next project */}
          <div className="sway p-3 rounded-lg bg-gradient-to-r from-blue-600 mt-2 lg:-mt-10 via-blue-500 to-blue-600 animate-spinSlow inline-block lg:z-[10] lg:relative">
            <div className="bg-black rounded-md overflow-hidden lg:w-[490px] aspect-video">
          
            </div>
          </div>
        </div>
        {/* === Seventh Row - Description Box for large and xl devices () === */}
        <div className={`${showBorders ? "border border-black-500" : ""} col-span-3 -mt-6 hidden lg:block 2xl:hidden`}>
          {/* Description Box that links to the video frame above */}
          <div className="sway w-[300px] h-[350px] p-4 bg-blue-800 text-white rounded-full font-raleway text-center shadow-lg mt-6 lg:mt-1 lg:translate-x-20 lg:z-[1] lg:relative">
            <h3 className="text-xl font-semibold mb-2 text-blue-200 mt-7">Coming soon..</h3>
            <p>
              <br /><br />
              🔧
              <br />
              <span className="flex items-center space-x-2 ml-9">
                <FaGithub size={30} />
                <FaArrowRight size={16} />
                <a
                  href="https://github.com/JerryA01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-300"
                >
                  GitHub
                </a>
              </span>
            </p>
          </div>
        </div>

      </section>


    </div>
  );
}
