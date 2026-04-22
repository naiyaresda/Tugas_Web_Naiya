import React from "react";

interface TextAreaProps {
  label: string;
  nama: string;
  error?: string;
  register: any;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  nama,
  error,
  register,
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-xs text-[#7a2e2e] font-medium mb-1">
        {label}
      </label>

      <textarea
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