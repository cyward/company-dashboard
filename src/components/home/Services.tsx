import { useScroll } from "../../hooks";
import { BaseType } from "types";

export const Services: React.FC<BaseType> = ({ id }) => {
  const services = [
    {
      title: "IT Strategy Consulting",
      description:
        "Expert guidance to align your IT strategy with business goals.",
      image:
        "https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/1135346386BusinessApplicationsManager.jpg=ws1280x960",
    },
    {
      title: "Cloud Solutions",
      description:
        "Seamless migration and management of cloud services tailored to your needs.",
      image:
        "https://preciseinfotech.com/wp-content/uploads/2024/05/service-5.jpg",
    },
    {
      title: "Cybersecurity Services",
      description:
        "Comprehensive security assessments and solutions to protect your data.",
      image:
        "https://senlainc.com/wp-content/webp-express/webp-images/uploads/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0-2560%D1%851600.jpg.webp",
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
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover"
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
                <button className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
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
