interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = ''
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black/50 transition-opacity duration-300"
        onClick={onClose}
      ></div>
      <div 
        className={`relative bg-white rounded-lg overflow-hidden shadow-xl lg:w-6/12 md:w-2/5 ${className}`}
      >
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
