import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function ChapterPage() {
  const router = useRouter();
  const { id } = router.query;
  const chapterId = parseInt(id);

  // Simulated placeholder content — replace with real chapter data
  const chapterTitle = `Chapter ${chapterId}`;
  const chapterText = `This is where the story content for Chapter ${chapterId} will go. Stay tuned as Davinto unleashes suspense, action, romance, and horror…`;

  return (
    <>
      <Head>
        <title>{chapterTitle} - Shadows of the Heart</title>
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-blue-400 mb-4">{chapterTitle}</h1>
        <p className="text-gray-200 leading-relaxed mb-10">{chapterText}</p>

        <div className="flex justify-between items-center text-sm text-blue-400">
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
