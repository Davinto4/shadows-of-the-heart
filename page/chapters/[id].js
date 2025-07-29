// pages/chapters/[id].js
import { useRouter } from 'next/router';
import Link from 'next/link';

const chapters = [
  "The Return",
  "Smoke in the Pines",
  "Her Eyes Again",
  // ... all 100 titles
  "Redemption’s Fire"
];

export default function ChapterPage() {
  const router = useRouter();
  const id = parseInt(router.query.id);
  const chapterIndex = id - 1;

  if (!id || isNaN(id) || chapterIndex >= chapters.length) return <p>Loading...</p>;

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-4">{id}. {chapters[chapterIndex]}</h1>
      <p className="mb-8">[Chapter content goes here]</p>

      <div className="flex justify-between">
        {id > 1 ? (
          <Link href={`/chapters/${id - 1}`} className="text-blue-400">← Previous</Link>
        ) : <span />}
        {id < chapters.length ? (
          <Link href={`/chapters/${id + 1}`} className="text-blue-400">Next →</Link>
        ) : <span />}
      </div>
    </main>
  );
}
