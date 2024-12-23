const positions = [
  {
    title: "Web3 Frontend Engineer",
    description:
      "Join our team to build decentralized applications and user interfaces for blockchain technology.",
  },
  {
    title: "ASP.NET Backend Developer",
    description:
      "Develop robust backend services and APIs using ASP.NET framework.",
  },
];

export const Career: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 max-h-[calc(100vh-64px)] min-h-[calc(100vh-88px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Career Opportunities
        </h2>
        <div className="mt-10">
          {positions.map((position, index) => (
            <div key={index} className="mb-4">
              <button className="w-full text-left bg-white border border-gray-300 rounded-lg p-4 flex justify-between items-center relative z-10 hover:-translate-y-1 transition-all hover:shadow-md">
                <span className="font-medium">{position.title}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
