const Sponsor = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-screen-xl mx-auto px-8">

        {/* TITLE */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-700">
            Sponsor <span className="text-[#8b2c4a]">Invofest 2025</span>
          </h2>

          <p className="text-gray-500 mt-4">
            Media Partner INVOFEST 2025
          </p>
        </div>

        {/* LOGO */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center">

          <img
            data-aos="zoom-in"
            src="https://www.invofest-harkatnegeri.com/assets/media_partner/LOGO%20HMP%20TEKNIK%20KOMPUTER%20.png"
            className="mx-auto opacity-70 hover:opacity-100 transition"
          />

          <img
            data-aos="zoom-in"
            data-aos-delay="100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa29XdnddYzsMfjddQqf0UZ3KhJGtxIK-jdA&s"
            className="mx-auto opacity-70 hover:opacity-100 transition"
          />

          <img
            data-aos="zoom-in"
            data-aos-delay="200"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypF31tIqf536B7WVUMkGXlOqzeS8sASxedQ&s"
            className="mx-auto opacity-70 hover:opacity-100 transition"
          />

          <img
            data-aos="zoom-in"
            data-aos-delay="300"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKf0YSwqbfs3nlRG8Ks82qKExENRL9YriqQ&s"
            className="mx-auto opacity-70 hover:opacity-100 transition"
          />

          <img
            data-aos="zoom-in"
            data-aos-delay="400"
            src="https://www.invofest-harkatnegeri.com/assets/media_partner/LOGO%20HMP%20D3%20PERHOTELAN.png"
            className="mx-auto opacity-70 hover:opacity-100 transition"
          />

        </div>

      </div>

    </section>
  );
};

export default Sponsor;