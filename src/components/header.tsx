// Header Component Props
interface HeaderProps {
  name: string;
}
export const Header: React.FC<HeaderProps> = ({ name }) => (
  <header className="fixed w-full z-10 bg-gray-900 bg-opacity-80 backdrop-blur-sm shadow-lg py-4 px-6 md:px-12">
    <nav className="container mx-auto flex justify-between items-center">
      <a
        href="#hero"
        className="text-xl font-bold text-teal-400 hover:text-teal-300 transition duration-300"
      >
        {name.split(" ")[0]}&apos;s Portfolio
      </a>
      <ul className="hidden md:flex space-x-6">
        <li>
          <a
            href="#about"
            className="hover:text-teal-400 transition duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="hover:text-teal-400 transition duration-300"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="hover:text-teal-400 transition duration-300"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#education"
            className="hover:text-teal-400 transition duration-300"
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:text-teal-400 transition duration-300"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-teal-400 transition duration-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
);
