import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

interface ProjectDescriptionProps {
  title: string;
  description: string;
  techStack: string;
  githubUrl: string;
}

export default function ProjectDescription({
  title,
  description,
  techStack,
  githubUrl,
}: ProjectDescriptionProps) {
  return (
    <div className="flex h-full flex-col justify-center px-6 py-6">
      <h3 className="text-xl font-semibold mb-4 text-blue-200">{title}</h3>

      <p className="leading-relaxed">
        {description}
        <br />
        <br />
        {techStack}
      </p>

      <div className="mt-6 flex items-center justify-center gap-2">
        <FaGithub size={26} />
        <FaArrowRight size={16} />
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-300 transition-colors"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}