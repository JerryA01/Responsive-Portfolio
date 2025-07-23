import { projects } from './data';

export default function ProjectsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid gap-6">
        {projects.map(project => (
          <div
            key={project.id}
            className="bg-white rounded-lg p-6 shadow-md border"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <a
              href={project.github}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
