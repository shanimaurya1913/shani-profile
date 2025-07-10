// Contact/Footer Section Component Props
interface ContactSectionProps {
  linkedinUrl?: string;
  githubUrl?: string;
  email?: string;
  name: string;
}
export const ContactSection: React.FC<ContactSectionProps> = ({
  linkedinUrl,
  githubUrl,
  email,
  name,
}) => (
  <section id="contact" className="py-20 px-6 md:px-12 bg-gray-800 text-center">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-4xl font-bold text-teal-400 mb-8">Get In Touch</h2>
      <p className="text-lg text-gray-300 mb-8">
        I&apos;m always open to new opportunities, collaborations, and
        interesting discussions. Feel free to reach out!
      </p>
      <div className="flex justify-center space-x-6 mb-10">
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-teal-400 transition duration-300"
          >
            {/* LinkedIn Icon - Using inline SVG for simplicity */}
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM4 9H0v12h4V9zM2 6a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-teal-400 transition duration-300"
          >
            {/* GitHub Icon - Using inline SVG for simplicity */}
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.683-.233.683-.518 0-.256-.009-1.04-.015-2.042-2.78-.607-3.367-1.34-3.367-1.34-.454-1.156-1.11-1.46-1.11-1.46-.908-.619.069-.605.069-.605 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.953 0-1.096.39-1.993 1.029-2.697-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.025 2.747-1.025.546 1.379.202 2.398.099 2.65.64.704 1.028 1.601 1.028 2.697 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .288.213.608.693.504C20.147 20.197 23 16.442 23 12.017 23 6.484 18.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            className="text-gray-300 hover:text-teal-400 transition duration-300"
          >
            {/* Email Icon - Using inline SVG for simplicity */}
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M1.5 8.056V4.5A1.5 1.5 0 013 3h18a1.5 1.5 0 011.5 1.5v3.556L12 14.5 1.5 8.056zM22.5 10.444V19.5A1.5 1.5 0 0121 21H3a1.5 1.5 0 01-1.5-1.5v-9.056L12 17.5l10.5-7.056z" />
            </svg>
          </a>
        )}
      </div>
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} {name}. All rights reserved.
      </p>
    </div>
  </section>
);
