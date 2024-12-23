import { useScroll } from "../../hooks";
import { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { BaseType } from "types";

export const Team: React.FC<BaseType> = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      image:
        "https://futureheal.com/wp-content/uploads/2022/04/Emrah-Aydin.png",
      bio: "With over 15 years of experience in healthcare innovation",
      vision:
        "I believe in creating a healthcare system that's not just reactive, but proactive. Our team's culture is built on continuous learning and embracing innovation.",
      linkedin: "https://linkedin.com/in/sarah-johnson",
      twitter: "https://twitter.com/sarahjohnson",
    },
    {
      name: "Dr. Michael Chen",
      role: "Head of Research",
      image: "https://futureheal.com/wp-content/uploads/2022/04/Can-CMO.png",
      bio: "Leading breakthrough research in medical technology",
      vision:
        "Our team thrives on pushing boundaries. We're not just following best practices; we're creating them. Innovation is in our DNA.",
      linkedin: "https://linkedin.com/in/michael-chen",
      twitter: "https://twitter.com/michaelchen",
    },
    {
      name: "Dr. Emily Williams",
      role: "Technical Director",
      image:
        "https://futureheal.com/wp-content/uploads/2022/04/Murat-Kayvgusuz.png",
      bio: "Specializing in AI-driven healthcare solutions",
      vision:
        "Technology should enhance the human touch in healthcare, not replace it. We're building a future where AI and human expertise work in perfect harmony.",
      linkedin: "https://linkedin.com/in/emily-williams",
      twitter: "https://twitter.com/emilywilliams",
    },
    {
      name: "Dr. James Wilson",
      role: "Head of Operations",
      image:
        "https://futureheal.com/wp-content/uploads/2023/05/Mehmet-yayla.png",
      bio: "Expert in healthcare systems optimization",
      vision:
        "Efficiency and compassion aren't mutually exclusive. Our team culture emphasizes both technical excellence and genuine care for patients.",
      linkedin: "https://linkedin.com/in/james-wilson",
      twitter: "https://twitter.com/jameswilson",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [teamMembers.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      nextSlide();
    } else if (event.key === "ArrowLeft") {
      prevSlide();
    }
  };

  const { isVisible, sectionRef } = useScroll();

  return (
    <section
      className={`py-20 bg-white ${
        isVisible ? "fade-in" : "opacity-0"
      } transition-opacity`}
      ref={sectionRef}
      id={id}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Expert healthcare professionals dedicated to your well-being
          </p>
        </div>

        {/* Vision/Culture Slider */}
        <div className="mt-12 relative bg-blue-50 rounded-xl p-8">
          <div className="max-w-3xl mx-auto flex items-center jusify-between">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="p-2 rounded-full text-blue-600"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
            <div className="relative overflow-hidden">
              <div
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div className="flex">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="w-full flex flex-col gap-2 flex-shrink-0 px-4 text-center"
                    >
                      <div className="relative flex w-full justify-center">
                        <div className="aspect-w-1 aspect-h-1 h-32 w-32">
                          <img
                            className="object-cover rounded-full"
                            src={member.image}
                            alt={member.name}
                          />
                        </div>
                      </div>
                      <p className="font-semibold text-blue-600">
                        {member.name}
                      </p>
                      <p className="text-sm text-gray-500">{member.role}</p>
                      <div className="flex justify-center space-x-4">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-500"
                        >
                          <FaLinkedin className="h-5 w-5" />
                        </a>
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-500"
                        >
                          <FaTwitter className="h-5 w-5" />
                        </a>
                      </div>
                      <p className="text-xl italic text-gray-700">
                        {member.vision}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="p-2 rounded-full text-blue-600"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
