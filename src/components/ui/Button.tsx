import React from "react";

interface ButtonProps {
  title: string;
}

export default function Button({ title }: ButtonProps) {
  return (
    <button
      type="submit"
      className="w-full bg-[#7a2e2e] text-white py-3 rounded-lg font-medium text-sm mt-3 hover:bg-[#5c2323] transition"
    >
      {title}
    </button>
  );
}