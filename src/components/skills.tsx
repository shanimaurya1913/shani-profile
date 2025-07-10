// Skills Section Component Props
interface SkillsSectionProps {
  skills: string[];
}
export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => (
  <section id="skills" className="py-20 px-6 md:px-12 bg-gray-900">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-xl shadow-md flex items-center justify-center text-center hover:bg-teal-700 hover:text-white transition duration-300 transform hover:scale-105 border border-gray-700"
          >
            <span className="text-lg font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
