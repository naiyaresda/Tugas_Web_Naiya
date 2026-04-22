import { useForm } from "react-hook-form";
import { InputText } from "../components/ui/InputText";
import { InputPassword } from "../components/ui/InputPassword";
import { TextArea } from "../components/ui/TextArea";
import { Select } from "../components/ui/Select";
import Button from "../components/ui/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type FormData = {
  nama: string;
  email: string;
  password: string;
  password_confirm: string;
  jenis_event: string;
  biodata: string;
};

const schema = z.object({
  nama: z.string().min(1, "Nama harus diisi"),
  email: z.string().email("Email tidak valid"),
  password: z.string().min(8, "Minimal 8 karakter"),
  password_confirm: z.string().min(8, "Konfirmasi password wajib"),
  jenis_event: z.string().min(1, "Pilih jenis event"),
  biodata: z.string().min(1, "Biodata wajib diisi"),
});

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="bg-gradient-to-br from-[#fffaf7] via-[#fdeee8] to-[#f9e0d6] p-8 rounded-2xl shadow-[0_10px_40px_rgba(122,46,46,0.15)] border border-[#f1d5c9]">
      
      {/* TITLE */}
      <h1 className="text-2xl font-semibold text-[#7a2e2e] mb-6 text-center">
        Create Account
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

        {/* 1. Nama */}
        <InputText
          label="Nama"
          nama="nama"
          register={register}
          error={errors.nama?.message}
        />

        {/* 2. Email */}
        <InputText
          label="Email"
          nama="email"
          register={register}
          error={errors.email?.message}
        />

        {/* 3. Password */}
        <InputPassword
          label="Password"
          nama="password"
          register={register}
          error={errors.password?.message}
        />

        {/* 4. Confirm Password */}
        <InputPassword
          label="Confirm Password"
          nama="password_confirm"
          register={register}
          error={errors.password_confirm?.message}
        />

        {/* 5. Jenis Event */}
        <Select
          label="Jenis Event"
          nama="jenis_event"
          register={register}
          options={["Seminar", "Workshop", "Talkshow", "Competition"]}
          error={errors.jenis_event?.message}
        />

        {/* 6. Biodata */}
        <TextArea
          label="Biodata Singkat"
          nama="biodata"
          register={register}
          error={errors.biodata?.message}
        />

        <Button title="Register" />

      </form>
    </div>
  );
}