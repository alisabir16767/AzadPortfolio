import { User } from "lucide-react";

const StickyCard = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://www.linkedin.com/in/sabirali123/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-blue-600 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all text-sm sm:text-base"
      >
        <User size={20} className="mr-2" />
        <span className="font-medium text-center">
          Develop By ~ Sabir Ali (click to contact)
        </span>
      </a>
    </div>
  );
};

export default StickyCard;
