import Button from "../ui/Button";

const Workshop = () => {
  return (
    <section className="py-24">

      <div className="max-w-screen-xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-10">

        <div data-aos="fade-right">
          <h1 className="text-5xl text-[#8b2c4a] font-semibold">IT Workshop</h1>
          <p className="mt-4 text-gray-600">Workshop "AI for a Sustainable Future: The Role of Z Generation in the Digital Era” ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan. Peserta akan dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital.</p>

          <Button title="DAFTAR WORKSHOP" />
        </div>

        <img
          data-aos="fade-left"
          src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
          className="w-[400px]"
        />

      </div>

    </section>
  );
};

export default Workshop;
