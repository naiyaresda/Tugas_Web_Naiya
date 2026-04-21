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
    <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100">
      <h1 className="text-2xl font-semibold text-[#7a2e2e] mb-6">
        Create Account
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputText label="Nama" nama="nama" register={register} error={errors.nama?.message} />
        <InputText label="Email" nama="email" register={register} error={errors.email?.message} />

        <Select
          label="Jenis Event"
          nama="jenis_event"
          register={register}
          options={["Seminar", "Workshop", "Talkshow", "Competition"]}
          error={errors.jenis_event?.message}
        />

        <TextArea
          label="Biodata Singkat"
          nama="biodata"
          register={register}
          error={errors.biodata?.message}
        />

        <InputPassword label="Password" nama="password" register={register} error={errors.password?.message} />
        <InputPassword label="Confirm Password" nama="password_confirm" register={register} error={errors.password_confirm?.message} />

        <Button title="Register" />
      </form>
    </div>
  );
}