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
        <meta name="description" content="An interactive novel by Davinto blending Action, Romance, Horror, and Thriller." />
      </Head>

      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">📖 Shadows of the Heart</h1>
        <p className="text-gray-300 mb-8 text-center">
          A story of love, loss, and things that never die...
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {chapters.map((chapter) => (
            <Link key={chapter.id} href={`/chapters/${chapter.id}`}>
              <div className="bg-gray-800 hover:bg-gray-700 transition-colors rounded p-3 text-center cursor-pointer">
                {chapter.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
