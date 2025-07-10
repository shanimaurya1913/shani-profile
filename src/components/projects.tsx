import { ProjectItem } from "@/types/profile.type";

// Projects Section Component Props
interface ProjectsSectionProps {
  projects: ProjectItem[];
}
export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
}) => (
  <section id="projects" className="py-20 px-6 md:px-12 bg-gray-800">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700 flex flex-col h-full"
            >
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>
              <div className="mb-4">
                <p className="text-teal-400 font-medium mb-2">
                  Technologies Used:
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-700 text-gray-200 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-full text-center transition duration-300 self-start"
                >
                  View Project
                </a>
              )} */}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No project details available. Please add them in the code.
          </p>
        )}
      </div>
    </div>
  </section>
);
