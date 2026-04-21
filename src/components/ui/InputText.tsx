import React from "react";

interface InputTextProps {
  label: string;
  nama: string;
  error?: string;
  register: any;
}

export const InputText: React.FC<InputTextProps> = ({
  label,
  nama,
  error,
  register,
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-xs text-gray-500 mb-1">
        {label}
      </label>

      <input
        type="text"
        {...register(nama)}
        placeholder={label}
        className="border border-gray-200 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#7a2e2e]/30 focus:border-[#7a2e2e] transition"
      />

      {error && (
        <p className="text-red-400 text-xs mt-1">
          {error}
        </p>
      )}
    </div>
  );
};