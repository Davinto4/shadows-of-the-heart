import Head from 'next/head';
import Link from 'next/link';

const chapters = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: `Chapter ${i + 1}`,
}));

export default function Home() {
  return (
    <>
      <Head>
        <title>Shadows of the Heart</title>
        <meta
          name="description"
          content="An interactive novel by Davinto blending Action, Romance, Horror, and Thriller."
        />
      </Head>

      <div className="p-6 max-w-4xl mx-auto">
        {/* ✅ Hero Section */}
        <section className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">Shadows of the Heart</h1>
          <p className="text-gray-300 text-lg sm:text-xl">
            A haunted past. A cursed town. A love that won't die.
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            Written by <strong>Davinto</strong>
          </p>
        </section>

        {/* ✅ Chapters Grid */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Chapters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {chapters.map((chapter) => (
              <Link key={chapter.id} href={`/chapters/${chapter.id}`}>
                <div className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg p-4 text-center text-sm cursor-pointer">
                  {chapter.title}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
