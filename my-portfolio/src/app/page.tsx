"use client";

import Image from "next/image";
import ProjectDescription from "./components/ProjectDescription";

const projects = [
  {
    title: "Adaptive Learning Platform",
    descriptionTitle: "What This Platform Does",
    description:
      "An interactive, full-stack web application designed to improve the learning of Java programming through structured modules, adaptive learning paths, and real-time code evaluation.",
    techStack:
      "🔧 Full-stack architecture with adaptive learning features, structured lesson delivery, and live code feedback for Java learners.",
    githubUrl: "https://github.com/JerryA01/adaptive-learning-platform",
    youtubeUrl: "https://www.youtube.com/embed/iiC-daTAA1I",
  },
  {
    title: "Tic Tac Toe Game",
    descriptionTitle: "What This Game Does",
    description:
      "Multiplayer Tic Tac Toe game built in Java with real-time play, GUI controls, and synchronized server-client communication.",
    techStack:
      "🔧 Uses Java Swing, Socket I/O, and threading constructs like Lock & Condition — no frameworks, just raw Java engineering.",
    githubUrl: "https://github.com/JerryA01/TicTacToeGame",
    youtubeUrl: "https://www.youtube.com/embed/Nq2k1KxFM3s",
  },
  {
    title: "Social Media Application",
    descriptionTitle: "What This App Does",
    description:
      "Chirrup is a social media app for university students with real-time posts, media sharing, and threaded comments.",
    techStack:
      "🔧 Built with Vue.js, Node.js, SQLite & Bootstrap using a scalable microservice architecture.",
    githubUrl: "https://github.com/JerryA01/SocialMediaApplicationBackEnd",
    youtubeUrl: "https://www.youtube.com/embed/e2Op1XRsc7Q",
  }
];

export default function Home() {
  return (
    <>
      <main className="px-6 py-8 md:px-10 lg:px-16">
        {/* Hero */}
        <section className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="text-center lg:text-left">
              <h1 className="font-raleway text-5xl sm:text-6xl lg:text-7xl text-white drop-shadow-md font-light">
                Jerry Arthur
              </h1>
              <p className="mt-3 font-raleway text-2xl sm:text-3xl text-white drop-shadow-md italic font-light">
                Software Engineer
              </p>
              <p className="mt-3 text-sm sm:text-base font-raleway text-white drop-shadow-md font-semibold">
                Full Stack Developer • Strong in Java, Fluent Across the Stack
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative rounded-full bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 animate-spinSlow p-[5px]">
                <div className="rounded-full bg-white flex items-center justify-center">
                  <Image
                    src="/profile.png"
                    alt="Jerry Arthur profile"
                    width={180}
                    height={180}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto mt-10 mb-8 h-[3px] w-4/5 rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

        {/* Projects Header */}
        <section className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl sm:text-4xl font-bold bg-white-700 font-raleway">
            My Projects
          </h2>
        </section>

        {/* Projects Grid */}
        <section className="mx-auto mt-10 max-w-7xl">
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl bg-white/10 backdrop-blur-sm p-4 shadow-xl shadow-[0_0_25px_rgba(168,85,247,0.4)]"
              >
                <h3 className="mb-4 text-center font-raleway text-2xl sm:text-3xl font-semibold bg-white-700">
                  {project.title}
                </h3>

                <div className="grid grid-cols-1 gap-6">
                  {/* Video */}
                  <div className="sway w-full rounded-xl bg-gradient-to-r from-violet-700 via-fuchsia-500 to-purple-700 p-3 animate-spinSlow">
                    <div className="overflow-hidden rounded-md bg-white aspect-video">
                      <iframe
                        className="h-full w-full"
                        src={project.youtubeUrl}
                        title={project.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="sway min-h-[320px] rounded-[2rem] bg-gradient-to-br from-purple-900 via-violet-800 to-fuchsia-700 text-white shadow-lg">
                    <ProjectDescription
                      title={project.descriptionTitle}
                      description={project.description}
                      techStack={project.techStack}
                      githubUrl={project.githubUrl}
                    />
                  </div>
                </div>
              </article>
            ))}

            {/* Coming soon card */}
            <article className="rounded-3xl bg-white/10 backdrop-blur-sm p-4 shadow-xl">
              <h3 className="mb-4 text-center font-raleway text-2xl sm:text-3xl font-semibold bg-white-700">
                Coming Soon
              </h3>

              <div className="grid grid-cols-1 gap-6">
                <div className="sway rounded-xl bg-gradient-to-r from-violet-700 via-fuchsia-500 to-purple-700 p-3 animate-spinSlow">
                  <div className="aspect-video rounded-md bg-black" />
                </div>

                <div className="sway flex min-h-[280px] items-center justify-center rounded-[2rem] bg-white-800 p-6 text-center text-white shadow-lg">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-blue-200">
                      More projects on the way...
                    </h4>
                    <a
                      href="https://github.com/JerryA01"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-fuchsia-300 transition-colors"
                    >
                      View my GitHub
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}