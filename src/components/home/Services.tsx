import { useScroll } from "../../hooks";
import { BaseType } from "types";

export const Services: React.FC<BaseType> = ({ id }) => {
  const services = [
    {
      title: "IT Strategy Consulting",
      description:
        "Expert guidance to align your IT infrastructure with your business goals and market demands. Our consultants analyze your current systems, identify gaps, and create comprehensive roadmaps for digital transformation. We help you optimize costs, improve operational efficiency, and stay ahead of technological trends while ensuring long-term scalability.",
      image: "/assets/software.png",
    },
    {
      title: "Cloud Solutions",
      description:
        "Seamless migration and management of cloud services customized to meet your specific business requirements. We provide end-to-end cloud solutions including architecture design, deployment, and 24/7 monitoring to ensure optimal performance and security. Our expertise spans across major cloud platforms, helping you leverage the full potential of cloud computing while reducing operational costs.",
      image: "/assets/cloud.png",
    },
    {
      title: "Blockchain Development",
      description:
        "Rapid development of decentralized applications and smart contracts using cutting-edge blockchain technologies. Our team specializes in creating secure, scalable, and efficient blockchain solutions for various industries including finance, supply chain, and healthcare. We provide comprehensive support from concept development to deployment, ensuring your blockchain implementation delivers real business value.",
      image: "/assets/blockchain.png",
    },
  ];
  const { isVisible, sectionRef } = useScroll();

  return (
    <section
      className={`py-20 ${
        isVisible ? "fade-in" : "opacity-0"
      } transition-opacity`}
      ref={sectionRef}
      id={id}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive healthcare solutions tailored to your needs
          </p>
        </div>

        <div className="mt-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 mb-20 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-transparent max-w-lg mx-auto">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-contain w-full h-full max-h-[300px]"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  {service.description}
                </p>
                <button 
                  className="mt-6 inline-flex items-center px-6 py-3 
                  border border-transparent text-base font-medium rounded-md 
                  text-white bg-[rgb(17,26,37)]
                  transition-all duration-300 ease-in-out
                  hover:bg-[rgb(25,35,48)] hover:shadow-lg
                  active:opacity-80
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
