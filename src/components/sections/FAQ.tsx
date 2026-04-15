import Collapse from "../ui/Collapse";

const FAQ = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-screen-xl mx-auto px-8">

        {/* TITLE */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-700">
            Punya Pertanyaan? <span className="text-[#8b2c4a]">Lihat Disini</span>
          </h2>

          <p className="text-gray-500 mt-4">
            Ada banyak informasi yang terkait dengan INVOFEST, Anda dapat melihat daftar pertanyaan di bawah ini.
          </p>
        </div>

        {/* FAQ */}
        <div className="grid lg:grid-cols-2 gap-6">

          <div data-aos="fade-up">
            <Collapse
              title="Apa itu INVOFEST?"
              description="Invofest (Informatics Vocational Festival) adalah festival tahunan yang diakan oleh program studi sarjana terapan teknik informatika Universitas Harkat Negeri, yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital."
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <Collapse
              title="Kapan dan dimana INVOFEST dilaksanakan?"
              description="INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan tanggal 27 November 2025. Untuk acara workshop, seminar, talkshow diadakan secara Offline di kampus 1 Universitas Harkat Negeri dan kompetisi diadakan secara Online."
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <Collapse
              title="Apakah ada biaya pendaftaran di INVOFEST?"
              description="Semua kegiatan dipastikan berbayar ya teman-teman."
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <Collapse
              title="Bagaimana saya mengetahui pemenang kompetisi?"
              description="Pemenang akan diinformasikan melalui media sosial instagram dari invofest @invofest_harkatnegeri."
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default FAQ;