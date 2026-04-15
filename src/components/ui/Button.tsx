interface buttonProps {
  title: string;
}

const Button: React.FC<buttonProps> = ({ title }) => {
  return (
     <button className="relative px-6 py-3 bg-[#8b2c4a] text-white rounded-lg overflow-hidden group hover:scale-105 transition">

      <span className="relative z-10">{title}</span>

      <span className="
        absolute top-0 right-0 h-full w-10 
        bg-white opacity-10 rotate-6 translate-x-20
        transition-all duration-700
        group-hover:-translate-x-52
      " />

    </button>
  );
};

export default Button;