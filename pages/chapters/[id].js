import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function ChapterPage() {
  const router = useRouter();
  const { id } = router.query;
  const chapterId = parseInt(id);

  const chapterTitle = `Chapter ${chapterId}`;
  const chapterText = `This is where the story content for Chapter ${chapterId} will go. Davinto weaves suspense, romance, horror, and action in every line...`;

  return (
    <>
      <Head>
        <title>{chapterTitle} - Shadows of the Heart</title>
      </Head>

      {/* 🔹 Local Nav Bar */}
      <nav className="bg-gray-900 p-4 flex justify-between items-center text-sm border-b border-gray-700">
        <div className="flex space-x-4 text-blue-400">
          <Link href="/" className="hover:text-blue-300">🏠 Home</Link>
          <Link href="/about" className="hover:text-blue-300">📖 About</Link>
          <Link href="/contact" className="hover:text-blue-300">📬 Contact</Link>
        </div>
        <div>
          {chapterId > 1 && (
            <Link href={`/chapters/${chapterId - 1}`} className="mr-3 hover:text-blue-300">
              ← Previous
            </Link>
          )}
          {chapterId < 100 && (
            <Link href={`/chapters/${chapterId + 1}`} className="hover:text-blue-300">
              Next →
            </Link>
          )}
        </div>
      </nav>

      {/* Chapter Content */}
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-blue-400 mb-4">{chapterTitle}</h1>
        <p className="text-gray-200 leading-relaxed mb-10 whitespace-pre-line">
          {chapterText}
        </p>

        <div className="flex justify-between text-sm text-blue-400">
          <Link href="/" className="underline hover:text-blue-300">← Back to Home</Link>
          {chapterId < 100 && (
            <Link href={`/chapters/${chapterId + 1}`} className="underline hover:text-blue-300">
              Next Chapter →
            </Link>
          )}
        </div>
      </div>
    </>
  );
        }
