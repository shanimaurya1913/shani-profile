// About Section Component Props
interface AboutSectionProps {
  about: string;
}
export const AboutSection: React.FC<AboutSectionProps> = ({ about }) => (
  <section id="about" className="py-20 px-6 md:px-12 bg-gray-800">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">
        About Me
      </h2>
      <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700">
        <p className="text-lg text-gray-300 leading-relaxed">{about}</p>
      </div>
    </div>
  </section>
);
