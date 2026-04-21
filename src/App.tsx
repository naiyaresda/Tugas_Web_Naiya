import RegisterForm from "./pages/RegisterForm";

function App() {
  return (
    <div className="min-h-screen grid md:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="hidden md:flex flex-col justify-center px-16 bg-[#7a2e2e] text-white">
        <h1 className="text-5xl font-semibold leading-tight mb-4">
          Join Our <br /> Exclusive Event
        </h1>

        <p className="text-sm text-red-100 leading-relaxed">
          Daftarkan dirimu sekarang dan jadilah bagian dari pengalaman event terbaik tahun ini.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center bg-[#fdf6f0] px-6 py-10">
        <div className="w-full max-w-md">
          <RegisterForm />
        </div>
      </div>

    </div>
  );
}

export default App;