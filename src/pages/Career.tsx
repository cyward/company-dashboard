import { Modal } from "../components/common/Modal";
import { useState } from "react";

type TPos = {
  title: string;
  description: React.ReactNode;
};

export const Career: React.FC = () => {
  const positions: TPos[] = [
    {
      title: "Full Stack Blockchain Developer",
      description: (
        <div className="p-6 flex flex-col gap-2">
          <div className="">
            <h2 className="text-lg font-bold">Overview</h2>
            <ul>
              <li>Company: Block Black Hole</li>
              <li>Location: Hybrid / Fully Remote</li>
              <li>Job Type: Full-time, Freelancer</li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-lg font-bold">Key Responsibilities</h2>
            <ul>
              <li>
                - Design and implement user interfaces and server-side logic
                that interact with the backend systems.
              </li>
              <li>
                - Collaborate with backend developers to integrate front-end and
                back-end systems, ensuring smooth data flow and functionality.
              </li>
              <li>
                - Optimize web applications for performance and scalability,
                leveraging your expertise in modern JavaScript frameworks and
                tools.
              </li>
              <li>
                - Optimize applications for maximum speed and scalability.
              </li>
              <li>
                - Write comprehensive tests and documentation for both
                client-side and server-side code, ensuring maintainability and
                reliability.
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-lg font-bold">Required Qualifications</h2>
            <ul>
              <li>- 5 years of professional software development experience</li>
              <li>- 2 years of experience in the EVM ecosystem</li>
              <li>
                - 1-2 years of professional Rust experience and solidity
                experience
              </li>
              <li>
                - 3-4 years of professional TypeScript experience and Typescript
                libraries (Reactjs, Nextjs, Nodejs, Express.js)
              </li>
              <li>
                - 3-4 years of professional experiences about the SQL database
                (MySQL, PostgreSQL)
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-lg font-bold">Benifits</h2>
            <ul>
              <li>
                -Competitive salary range of $75,000 to $85,000 USD annually,
                depending on experience and qualifications.
              </li>
              -Comprehensive benefits program, including health insurance,
              retirement plans, and paid time off.
              <li>
                -Flexible and remote work environment, allowing you to maintain
                a healthy work-life balance.
              </li>
              <li>
                -Opportunity to work at the intersection of blockchain and
                cutting-edge technologies, shaping the future of decentralized
                applications.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "ASP.NET Backend Developer",
      description: (
        <div className="p-6 flex flex-col gap-2">
          <div className="">
            <h2 className="text-lg font-bold">Overview</h2>
            <ul>
              <li>Company: Block Black Hole</li>
              <li>Location: Hybrid / Fully Remote</li>
              <li>Job Type: Full-time, Freelancer</li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-lg font-bold">Key Responsibilities</h2>
            <ul>
              <li>
                - Develop and maintain user-friendly web applications using
                React and TypeScript.
              </li>
              <li>
                - Collaborate with cross-functional teams to define, design, and
                ship new features.
              </li>
              <li>
                - Implement responsive designs and ensure the technical
                feasibility of UI/UX designs.
              </li>
              <li>- Integrate with blockchain technologies and Web3 APIs.</li>
              <li>
                - Optimize applications for maximum speed and scalability.
              </li>
              <li>
                - Conduct code reviews and provide constructive feedback to team
                members.
              </li>
              <li>
                - Stay updated with emerging technologies and industry trends.
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-lg font-bold">Required Qualifications</h2>
            <ul>
              <li>
                - Proven experience as a Frontend Developer or similar role.
              </li>
              <li>- Strong proficiency in React and TypeScript.</li>
              <li>
                - Experience with Web3 technologies and blockchain development.
              </li>
              <li>
                - Familiarity with RESTful APIs and modern frontend build
                pipelines and tools.
              </li>
              <li>
                - Understanding of responsive design principles and best
                practices.
              </li>
              <li>
                - Excellent problem-solving skills and attention to detail.
              </li>
              <li>- Strong communication and collaboration skills.</li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-lg font-bold">Preferred Qualifications</h2>
            <ul>
              <li>
                - Experience with state management libraries (e.g., Redux,
                MobX).
              </li>
              <li>- Knowledge of testing frameworks (e.g., Jest, Cypress).</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [position, setPosition] = useState<TPos>(positions[0]);
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <section
      className="py-20 max-h-[calc(100vh-112px)] min-h-[calc(100vh-112px)] relative"
      style={{
        backgroundImage: "url('/assets/background4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gray-900/50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 relative z-10">
        <h2 className="text-3xl font-extrabold text-center text-white">
          Career Opportunities
        </h2>
        <div className="mt-10">
          {positions.map((position, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => {
                  toggleModal();
                  setPosition({ ...position });
                }}
                className="group w-full text-left bg-white/80 border border-black rounded-lg p-6 
                  flex justify-between items-center relative z-10 
                  transition-all duration-300 ease-in-out
                  hover:bg-white hover:shadow-lg active:shadow-md
                  before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r 
                  before:from-transparent before:to-transparent before:opacity-0 
                  before:transition-opacity before:duration-300
                  hover:before:opacity-100"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className="h-10 w-10 flex-shrink-0 rounded-full bg-blue-100 
                    flex items-center justify-center group-hover:bg-blue-200 
                    transition-colors duration-300"
                  >
                    <svg
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-lg text-gray-900">
                      {position.title}
                    </span>
                    <p className="text-sm text-gray-500 mt-1">
                      Block Black Hole • Remote
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-2">View Details</span>
                  <svg
                    className="h-5 w-5 text-blue-600 transform transition-transform duration-300 
                      group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        title={position.title}
        className="animate-modal-appear mt-[100px]"
      >
        {position.description}
        <div className="border-t p-4 flex items-center justify-end">
          <a
            href="mailto:cyward@blockblackhole.com"
            className="bg-blue-500 text-white font-bold px-6 py-3 rounded-md
            transition-all duration-300 ease-in-out
            hover:bg-blue-600 hover:shadow-lg
            active:opacity-80
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Apply
          </a>
        </div>
      </Modal>
    </section>
  );
};
