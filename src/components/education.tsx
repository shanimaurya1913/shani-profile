import { EducationItem } from "@/types/profile.type";

// Education Section Component Props
interface EducationSectionProps {
  education: EducationItem[];
}
export const EducationSection: React.FC<EducationSectionProps> = ({
  education,
}) => (
  <section id="education" className="py-20 px-6 md:px-12 bg-gray-900">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">
        Education
      </h2>
      <div className="space-y-10">
        {education.length > 0 ? (
          education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700"
            >
              <h3 className="text-2xl font-semibold text-white">
                {edu.degree}
              </h3>
              <p className="text-teal-400 text-lg mb-2">
                {edu.institution} | {edu.duration}
              </p>
              <p className="text-gray-300 leading-relaxed">{edu.description}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">
            No education details available. Please add them in the code.
          </p>
        )}
      </div>
    </div>
  </section>
);
