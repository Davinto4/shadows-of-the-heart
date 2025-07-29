export default function About() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-4">About the Author</h1>

      <p className="mb-4">
        Davinto is a creative mind from the 029 Nursing Science set at EBSU — but beyond the world of medicine,
        he lives and breathes stories. From adrenaline-laced action to tender romance and creeping horror,
        Davinto weaves tales that grip the soul and haunt the heart.
      </p>

      <p className="mb-6">
        Shadows of the Heart is a personal project fueled by emotion, imagination, and late-night writing sprints.
        Every chapter is handcrafted with love, suspense, and a bit of fear.
      </p>

      <hr className="border-gray-700 my-6" />

      <div className="text-sm text-gray-400">
        <a rel="license" href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">
          <img
            alt="Creative Commons License"
            style={{ borderWidth: 0 }}
            src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png"
          />
        </a>
        <p className="mt-2">
          This work by <strong>Davinto</strong> is licensed under
          <a
            href="https://creativecommons.org/licenses/by-nc/4.0/"
            className="text-blue-400 underline ml-1"
            target="_blank"
          >
            CC BY-NC 4.0
          </a>. Commercial use is not allowed without permission.
        </p>
      </div>
    </main>
  );
}
