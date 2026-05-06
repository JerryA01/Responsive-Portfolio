import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

interface ProjectDescriptionProps {
  title: string;
  description: string;
  techStack: string;
  githubUrl: string;
  liveUrl?: string;
}

export default function ProjectDescription({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
}: ProjectDescriptionProps) {
  return (
    <div className="flex h-full flex-col justify-center px-6 py-6">
      <h3 className="text-xl font-semibold mb-4 text-purple-200">{title}</h3>

      <p className="leading-relaxed">
        {description}
        <br />
        <br />
        {techStack}
      </p>

      {/* Links */}
      <div className="mt-6 flex flex-col items-center gap-3">

        {/* Live Demo (only if provided) */}
        {liveUrl && (
          <div className="flex items-center gap-2">
            <FaArrowRight size={16} />
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-fuchsia-300 transition-colors"
            >
              Live Demo
            </a>
          </div>
        )}

        {/* GitHub */}
        <div className="flex items-center gap-2">
          <FaGithub size={26} />
          <FaArrowRight size={16} />
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-fuchsia-300 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
