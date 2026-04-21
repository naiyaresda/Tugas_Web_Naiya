import React from "react";

interface SelectProps {
  label: string;
  nama: string;
  options: string[];
  error?: string;
  register: any;
}

export const Select: React.FC<SelectProps> = ({
  label,
  nama,
  options,
  error,
  register,
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-xs text-gray-500 mb-1">
        {label}
      </label>

      <select
        {...register(nama)}
        className="border border-gray-200 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#7a2e2e]/30 focus:border-[#7a2e2e] transition"
      >
        <option value="">Pilih {label}</option>

        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      {error && (
        <p className="text-red-400 text-xs mt-1">
          {error}
        </p>
      )}
    </div>
  );
};