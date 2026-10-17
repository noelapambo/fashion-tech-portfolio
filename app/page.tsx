export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f0e8] text-[#24201e]">
      <nav className="flex items-center justify-between px-8 py-6 border-b border-black/10">
        <h2 className="text-xl font-bold tracking-widest">NOELA®</h2>
        <p className="text-sm">FASHION × TECHNOLOGY</p>
      </nav>

      <section className="px-8 py-24 md:py-36">
        <p className="mb-6 text-sm uppercase tracking-[0.3em]">
          Creative mind. Digital future.
        </p>

        <h1 className="max-w-4xl text-6xl font-black leading-tight md:text-8xl">
          STYLE IS MY
          <br />
          LANGUAGE.
        </h1>

        <p className="mt-8 max-w-lg text-lg leading-8">
          Exploring the intersection of fashion, technology, and identity.
          Building things online while expressing myself through what I wear.
        </p>

        <a
          href="#about"
          className="mt-10 inline-block border border-black px-7 py-4 text-sm uppercase tracking-widest transition hover:bg-black hover:text-white"
        >
          Discover my world ↘
        </a>
      </section>

      <section
        id="about"
        className="grid gap-10 border-t border-black/10 px-8 py-20 md:grid-cols-2"
      >
        <div>
          <p className="mb-4 text-sm uppercase tracking-widest">01 / About</p>
          <h2 className="text-4xl font-bold">More than one thing.</h2>
        </div>

        <p className="max-w-xl text-lg leading-8">
          I'm a creative exploring technology and personal style. I'm interested
          in how code can solve problems, how clothes tell stories, and how
          digital spaces can bring those worlds together.
        </p>
      </section>

      <section
        id="work"
        className="border-t border-black/10 px-8 py-20"
      >
        <p className="mb-4 text-sm uppercase tracking-widest">02 / My world</p>
        <h2 className="mb-10 text-4xl font-bold">Currently exploring.</h2>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="border border-black/15 p-7">
            <p className="mb-4 text-3xl">⌘</p>
            <h3 className="mb-3 text-xl font-bold">Technology</h3>
            <p className="leading-7">
              Coding, AI, and creating digital experiences that mean something.
            </p>
          </div>

          <div className="border border-black/15 p-7">
            <p className="mb-4 text-3xl">✳</p>
            <h3 className="mb-3 text-xl font-bold">Personal style</h3>
            <p className="leading-7">
              Streetwear, nostalgia, gothic details, and dressing without rules.
            </p>
          </div>

          <div className="border border-black/15 p-7">
            <p className="mb-4 text-3xl">↗</p>
            <h3 className="mb-3 text-xl font-bold">Future projects</h3>
            <p className="leading-7">
              Exploring ideas where fashion and technology meet.
            </p>
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-3 border-t border-black/10 px-8 py-8 md:flex-row md:justify-between">
        <p>NOELA® — Always becoming.</p>
        <p className="text-sm">Made with curiosity & code.</p>
      </footer>
    </main>
  );
}