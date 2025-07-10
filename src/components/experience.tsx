import { ExperienceItem } from "@/types/profile.type";

// Experience Section Component Props
interface ExperienceSectionProps {
  experience: ExperienceItem[];
}
export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experience,
}) => (
  <section id="experience" className="py-20 px-6 md:px-12 bg-gray-800">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">
        Experience
      </h2>
      <div className="space-y-10">
        {experience.length > 0 ? (
          experience.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700"
            >
              <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
              <p className="text-teal-400 text-lg mb-2">
                {exp.company} | {exp.duration}
              </p>
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">
            No experience details available. Please add them in the code.
          </p>
        )}
      </div>
    </div>
  </section>
);
