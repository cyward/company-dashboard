import { useScroll } from "../../hooks";
import {
  FaLaptopCode,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

export const Features: React.FC = () => {
  const features = [
    {
      icon: <FaLaptopCode className="h-12 w-12 text-blue-500" />,
      title: "Custom Software Development",
      description:
        "Tailored software solutions to meet your unique business needs.",
    },
    {
      icon: <FaCloud className="h-12 w-12 text-blue-500" />,
      title: "Cloud Consulting",
      description:
        "Expert guidance on cloud strategy, migration, and management.",
    },
    {
      icon: <FaShieldAlt className="h-12 w-12 text-blue-500" />,
      title: "Cybersecurity Solutions",
      description:
        "Protect your business with our comprehensive security services.",
    },
    {
      icon: <FaChartLine className="h-12 w-12 text-blue-500" />,
      title: "Data Analytics",
      description:
        "Transform data into actionable insights for better decision-making.",
    },
  ];
  const { isVisible, sectionRef } = useScroll();

  return (
    <section
      className={`py-20 bg-gray-50 ${
        isVisible ? "fade-in" : "opacity-0"
      } transition-opacity`}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience excellence in IT consulting with our comprehensive
            features
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">
                {feature.title}
              </h3>
              <p className="mt-3 text-base text-gray-500 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
