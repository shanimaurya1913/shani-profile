// Hero Section Component Props
interface HeroSectionProps {
  name: string;
  title: string;
  tagline: string;
  resumeUrl: string;
}
export const HeroSection: React.FC<HeroSectionProps> = ({
  name,
  title,
  tagline,
  resumeUrl,
}) => (
  <section
    id="hero"
    className="relative h-screen flex items-center justify-center text-center p-6 overflow-hidden"
  >
    {/* Background animation/pattern */}
    <div className="absolute inset-0 z-0 opacity-10">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="720"
          cy="400"
          r="300"
          fill="url(#paint0_radial)"
          className="animate-pulse-slow"
        />
        <circle
          cx="200"
          cy="600"
          r="150"
          fill="url(#paint1_radial)"
          className="animate-pulse-slow delay-1000"
        />
        <circle
          cx="1200"
          cy="200"
          r="180"
          fill="url(#paint2_radial)"
          className="animate-pulse-slow delay-2000"
        />
        <defs>
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(720 400) rotate(90) scale(300)"
          >
            <stop stopColor="#81E6D9" />
            <stop offset="1" stopColor="#319795" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="paint1_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(200 600) rotate(90) scale(150)"
          >
            <stop stopColor="#63B3ED" />
            <stop offset="1" stopColor="#3182CE" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="paint2_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1200 200) rotate(90) scale(180)"
          >
            <stop stopColor="#F6AD55" />
            <stop offset="1" stopColor="#DD6B20" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
    <div className="relative z-10 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 animate-fade-in-up">
        Hi, I&apos;m <span className="text-teal-400">{name}</span>
      </h1>
      <p className="text-2xl md:text-3xl text-gray-300 mb-8 animate-fade-in-up delay-300">
        {title}
      </p>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-600">
        {tagline}
      </p>
      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 animate-fade-in-up delay-900"
      >
        Download Resume
      </a>
    </div>
  </section>
);
