"use client";

import Image from "next/image";

export default function Home() {
  const showBorders = true; // toggle this to true/false to see borders

  return (
    <div
      className={`
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-1 gap-x-2
        ${showBorders ? "border border-white-400" : ""}
      `}
      style={showBorders ? { outline: "1px solid red" } : {}}
    >
      {/* First row: 3 columns */}
      <div className={`${showBorders ? "border border-blue-500" : ""} h-50 p-4 flex justify-center items-center relative right-[10px] `}>
        <div className="relative w-[160px] h-[160px] rounded-full bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 animate-spinSlow p-[5px]">
          <div className="rounded-full bg-white w-full h-full flex items-center justify-center transform translate-x-[3px]">
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
      <div className={`${showBorders ? "border border-blue-500" : ""} p-4 text-center`}>
        <div className="font-raleway text-8xl text-white drop-shadow-md font-light mb-5 relative left-[-40px]">Jerry Arthur</div>
        <div className="font-raleway text-3xl text-white drop-shadow-md font-light italic relative left-[-40px]"> Software Engineer</div>
        <div className="text-sm font-raleway text-white drop-shadow-md font- relative left-[-40px]">Full Stack Software Engineer • Strong in Java, Fluent Across the Stack</div>
      </div>
      <div className={`${showBorders ? "border border-blue-500" : ""} font-raleway text-2xl font-semibold p-1 flex justify-center items-end`}>/</div>

      <div className={`${showBorders ? "border border-blue-500" : ""} font-raleway text-ls font-normal p-7 flex justify-center items-top`}>Hi, I’m Jerry Arthur — a passionate developer who’s been coding since I was young. I love solving problems and building new features and projects.
        My first programming language was Java, which was great because it taught me the importance of strong typing — using explicit types like int and String early on — before moving on to more flexible languages like JavaScript.
        I’m always eager to learn and enjoy collaborating with others in team environments</div>
      <div className={`${showBorders ? "border border-blue-500" : ""} font-raleway text-4xl font-normal p-1 flex justify-center items-end p-4 relative left-[-40px]`}>My Projects</div>
      <div className={`${showBorders ? "border border-blue-500" : ""} font-raleway text-ls font-normal p-7 flex justify-center items-top`}>/ </div>


      <div className={`${showBorders ? "border border-blue-500" : ""} h-130 p-4`}>Column 1</div>
      <div className={`${showBorders ? "border border-blue-500" : ""} h-130 p-4 flex flex-col`}>
        {/* Title */}
        <div className="font-raleway text-2xl sm:text-3xl text-blue-400 font-semibold mb-3 text-center">
          Social Media Application
        </div>

        {/* YouTube Video */}
        <div className="flex-1">
          <div className="w-full h-full aspect-video">
            <iframe
              className="w-full h-full rounded-md"
              src="https://www.youtube.com/embed/e2Op1XRsc7Q"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className={`${showBorders ? "border border-blue-500" : ""} h-130 p-4`}>Column 3</div>



    </div>


  );
}
