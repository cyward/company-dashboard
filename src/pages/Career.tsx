import { Modal } from "../components/common/Modal";
import { useState } from "react";

type TPos = {
  title: string;
  description: React.ReactNode;
};

export const Career: React.FC = () => {
  const positions: TPos[] = [
    {
      title: "Web3 Frontend Engineer",
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
    <section className="py-20 bg-gray-50 max-h-[calc(100vh-64px)] min-h-[calc(100vh-88px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
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
                className="w-full text-left bg-white border border-gray-300 rounded-lg p-4 flex justify-between items-center relative z-10 hover:-translate-y-1 transition-all hover:shadow-md"
              >
                <span className="font-medium">{position.title}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={toggleModal} title={position.title}>
        {position.description}
        <div className="border-t p-4 flex items-center justify-end">
          <a
            href="mailto:cyward@blockblackhole.com"
            className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
          >
            Apply
          </a>
        </div>
      </Modal>
    </section>
  );
};
