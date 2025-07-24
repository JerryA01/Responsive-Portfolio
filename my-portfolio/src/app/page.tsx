"use client";

import Image from "next/image";
import { FaGithub, FaArrowRight } from "react-icons/fa";

export default function Home() {
  const showBorders = true;

  return (
    <div
      className={`grid grid-cols-1 2xl:grid-cols-3 gap-y-0 gap-x-0 p-8 ${showBorders ? "border border-white-400" : ""
        }`}
      style={showBorders ? { outline: "1px solid red" } : {}}
    >
      {/* === Top Row (Full Width - Image Right, Text Center) === */}
      <div className={`${showBorders ? "border border-blue-500" : ""} col-span-1 2xl:col-span-3 flex flex-col 2xl:flex-row items-center 2xl:items-start`}>
        {/* Text */}
        <div className="2xl:w-2/3 text-center 2xl:translate-x-72 ">
          <div className="font-raleway text-7xl text-white drop-shadow-md font-light mb-2 mt-4">
            Jerry Arthur
          </div>
          <div className="font-raleway text-3xl text-white drop-shadow-md italic font-light mb-1">
            Software Engineer
          </div>
          <div className="text-md font-raleway text-white drop-shadow-md font-semibold">
            Full Stack Developer • Strong in Java, Fluent Across the Stack
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center w-1/3 2xl:-translate-x-45">
          <div className="relative w-[160px] h-[160px] rounded-full bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 animate-spinSlow p-[5px]">
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


      {/* === Middle Row (Full Width - Bio Left, Projects Middle) === */}
      <div className={`${showBorders ? "border border-blue-500" : ""} col-span-3 flex flex-col gap-6 mt-1`}>

        {/* Decorative Horizontal Line */}
        <div className="w-2/3 h-[2px] bg-black opacity-80 mx-auto mt-12 mb-2 rounded-full py-4">
          {/* Hanging Squiggly Lines */}
          <div className="hidden 2xl:grid relative w-3/3 mx-auto 2xl:grid-cols-3">

            {/* Left Squiggle */}
            <svg className="justify-self-start ml-85" width="24" height="249" viewBox="0 0 24 290 ">
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
            <svg className="justify-self-end -mr-40" width="24" height="249" viewBox="0 0 24 290">
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



      {/* Row between the bottom and middle row */}
      {/* === Section Title Divider === */}
      <div className={`${showBorders ? "border border-blue-500" : ""} col-span-3 `}>
        <h2 className="sway text-center text-3xl sm:text-4xl md:text-4xl 2xl:text-4xl font-bold text-blue-700 font-raleway">
          My Projects
        </h2>
      </div>


      {/* === Second to Bottom Row () === */}
      <div className={`${showBorders ? "border border-blue-500" : ""} col-span-1 2xl:col-span-3 2xl:mt-27`}>

        <div className={`sway flex flex-col 2xl:flex-row 2xl:justify-between items-center 2xl:mb-1 mt-1 ${showBorders ? "border border-red-500" : ""}`}>
          {/* Left Title */}
          <div className="font-raleway text-2xl sm:text-3xl 2xl:text-3xl text-blue-700 font-semibold text-center 2xl:ml-126">
            Social Media Application
          </div>

          {/* Right Title */}
          <div className="hidden 2xl:block font-raleway text-2xl 2xl:text-3xl text-blue-700 font-semibold 2xl:mr-113">
            Tic Tac Toe Game
          </div>
        </div>

        {/* Video + Text Row */}
        <div className="w-full flex flex-col items-center 2xl:flex-row 2xl:justify-start 2xl:items-start ">

          {/* Description Box Left*/}
          <div className="sway 2xl:w-[300px] 2xl:h-[350px] w-[300px] h-[350px] sm:w-[330px] sm:h-[370px] md:w-[390px] md:h-[410px] p-4 bg-blue-800 text-white rounded-full font-raleway text-center shadow-2xl mt-5 2xl:mt-1 2xl:ml-20">
            <h3 className="text-xl font-semibold mb-2 text-blue-200 mt-7 ">What This App Does</h3>
            <p>
              Chirrup is a social media app for university students with real-time posts, media sharing, and threaded comments.
              <br /><br />
              🔧 Built with Vue.js, Node.js, SQLite & Bootstrap using a scalable microservice architecture.
              <br /><br />
              {/* GitHub link with icon and arrow */}
              <span className="flex items-center space-x-2 ml-9">
                <FaGithub size={30} />
                <FaArrowRight size={16} />
                <a
                  href="https://github.com/JerryA01/SocialMediaApplicationBackEnd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-300"
                >
                  GitHub
                </a>
              </span>
            </p>
          </div>

          {/* Video Frame - Left */}
          <div className="sway p-3 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 animate-spinSlow mt-4 z-10">
            <div className="bg-white rounded-md overflow-hidden 2xl:w-[550px] md:w-[610px] aspect-video">
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

          {/* Mobile-only centered title */}
          <div className="2xl:hidden sway w-full flex justify-center mt-4 ">
            <div className="font-raleway text-2xl sm:text-3xl md:text-4xl text-blue-700 font-semibold text-center">
              Tic Tac Toe Game
            </div>
          </div>

          {/* Video Frame - Right */}
          <div className="sway p-3 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 animate-spinSlow mt-4 2xl:ml-7">
            <div className="bg-white rounded-md overflow-hidden 2xl:w-[550px] md:w-[610px] aspect-video">
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

          {/* Description Box - Right */}
          <div className="sway w-[300px] h-[350px] sm:w-[330px] sm:h-[370px] md:w-[390px] md:h-[410px] 2xl:h-[350px] 2xl:w-[300px] p-4 bg-blue-800 text-white rounded-full font-raleway text-center shadow-2xl mt-6 2xl:mt-1">
            <h3 className="text-xl font-semibold mb-2 text-blue-200 mt-7">What This Game Does</h3>
            <p>
              Multiplayer Tic Tac Toe game built in Java with real-time play, GUI controls, and synchronized server-client communication.
              <br /><br />
              🔧 Uses Java Swing, Socket I/O, and threading constructs like Lock & Condition — no frameworks, just raw Java engineering.
              <br />
              <span className="flex items-center space-x-2 ml-9">
                <FaGithub size={30} />
                <FaArrowRight size={16} />
                <a
                  href="https://github.com/JerryA01/TicTacToeGame"
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

      </div>


      {/* === Bottom Row () === */}
      <div className={`${showBorders ? "border border-blue-500" : ""} col-span-3 -mt-7`}>

        {/* Hanging Squigglies Between Middle & Bottom Rows */}
         <div className="w-2/3 mx-auto rounded-full">
          <div className="relative w-full grid grid-cols-3">

            {/* Left Squiggle */}
            <svg className="stroke-0 2xl:stroke-[2.5] justify-self-start ml-85 z-0" width="24" height="249" viewBox="0 0 24 290" >
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
         </div>

        {/* Video + Text Row */}
        <div className="w-full flex flex-col 2xl:flex-row items-center justify-start 2xl:-mt-9">
          {/* Description Box Left*/}
          <div className="sway w-[300px] h-[350px] sm:w-[330px] sm:h-[370px] md:w-[390px] md:h-[410px] 2xl:h-[350px] 2xl:w-[300px] p-4 bg-blue-800 text-white rounded-full font-raleway text-center shadow-2xl -mt-52 2xl:mt-2 2xl:ml-20">
            <h3 className="text-xl font-semibold mb-2 text-blue-200 mt-7 ">Coming soon...</h3>
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
          {/* Video Frame - Left */}
          <div className="sway p-3 rounded-2xl bg-gradient-to-r from-blue-600 mt-6 2xl:-mt-1 via-blue-500 to-blue-600 animate-spinSlow ">
            <div className="bg-white rounded-md overflow-hidden w-[283px] md:w-[610px] 2xl:w-[520px] aspect-video">
              <iframe
                className="w-full h-full"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>


      </div>

    </div>
  );
}
