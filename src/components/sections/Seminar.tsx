import Button from "../ui/Button";

const Seminar = () => {
  return (
    <section className="py-24">

      <div className="max-w-screen-xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-10">

        <div data-aos="fade-right">
          <h1 className="text-5xl text-[#8b2c4a] font-semibold">IT Seminar</h1>
          <p className="mt-4 text-gray-600">Seminar Nasional Teknologi Informasi ini mengangkat tema "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif.”Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti.</p>

          <div className="mt-6">
            <Button title="DAFTAR SEMINAR" />
          </div>
        </div>

        <img
          data-aos="fade-left"
          src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
          className="w-[400px]"
        />

      </div>

    </section>
  );
};

export default Seminar;
