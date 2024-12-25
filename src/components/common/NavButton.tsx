interface NavButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}
export const NavButton: React.FC<NavButtonProps> = ({ onClick, children }) => {
  return (
    <div className="group">
      <button
        onClick={onClick}
        className="text-white hover:text-blue-600 transition-all h-[60px]"
      >
        {children}
      </button>
      <div className="w-0 group-hover:w-full border-b-4 border-b-blue-500 transition-all" />
    </div>
  );
};
