import React, { useState } from "react";

interface InputPasswordProps {
  label: string;
  nama: string;
  error?: string;
  register: any;
}

export const InputPassword: React.FC<InputPasswordProps> = ({
  label,
  nama,
  error,
  register,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col">
      <label className="text-xs text-gray-500 mb-1">
        {label}
      </label>

      <div className="relative">
        <input
          type={show ? "text" : "password"}
          {...register(nama)}
          placeholder={label}
          className="border border-gray-200 rounded-lg px-4 py-3 text-sm w-full pr-10 bg-white focus:outline-none focus:ring-2 focus:ring-[#7a2e2e]/30 focus:border-[#7a2e2e] transition"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-3 text-xs text-gray-500 hover:text-black"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>

      {error && (
        <p className="text-red-400 text-xs mt-1">
          {error}
        </p>
      )}
    </div>
  );
};