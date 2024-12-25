import { BaseType } from "types";

export const Hero: React.FC<BaseType> = ({id}) => {
  return (
    <div 
      className="relative h-screen flex items-center bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: "url('/src/assets/background.jpg')" }}
      id={id}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Empowering Your Business</span>
            <span className="block text-blue-200">With Innovative IT Solutions</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Transform your operations with our cutting-edge technology and expert consulting services.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 gap-4">
            <a
              href="#contact"
              className="w-full sm:w-44 flex items-center justify-center px-8 py-3 
              border border-white text-base font-medium rounded-md 
              text-white bg-transparent
              transition-all duration-300 ease-in-out
              hover:bg-white/10 hover:shadow-lg
              active:opacity-80
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Get Started
            </a>
            <button
              onClick={() => {
                const section = document.getElementById("about");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full sm:w-44 flex items-center justify-center px-8 py-3 
              border border-white text-base font-medium rounded-md 
              text-white bg-transparent
              transition-all duration-300 ease-in-out
              hover:bg-white/10 hover:shadow-lg
              active:opacity-80
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 