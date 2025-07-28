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
    <div>
      <h3 className="text-xl font-semibold mb-2 text-blue-200 mt-7">{title}</h3>
      <p>
        {description}
        <br /><br />
        {techStack}
        <br /><br />
        <span className="flex items-center space-x-2 ml-9">
          <FaGithub size={30} />
          <FaArrowRight size={16} />
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-300"
          >
            GitHub
          </a>
        </span>
      </p>
    </div>
  );
}
