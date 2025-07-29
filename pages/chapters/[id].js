import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ChapterPage() {
  const router = useRouter();
  const { id } = router.query;
  const chapterId = parseInt(id);

  const [chapterTitle, setChapterTitle] = useState('');
  const chapterTitles = [
    "The Return", "Smoke in the Pines", "Her Eyes Again", "Stranger at the Gate", "Whispers in the Wall",
    "Midnight Footsteps", "The Sheriff’s Warning", "Old Scars, New Wounds", "Shadows in the Mirror", "Blood Beneath the Church",
    "A Town That Forgot", "The Unwelcome Guest", "Crossroads", "Rain on the Roof", "The Locked Room",
    "Letters Never Sent", "Eyes in the Forest", "Her Voice in the Dark", "Storm Warning", "The Barn Door Opens",
    "The Hound Beneath", "Cold Hands", "Second Chances", "Unearthed", "Dinner with Ghosts",
    "The Black Tree", "Firewatch", "Heartbeat in the Silence", "The Red Room", "Glass in the Sink",
    "The Mask Falls", "Run", "Hollow Ground", "Lovers & Liars", "The Fog Returns",
    "Handprint on the Mirror", "She Remembers", "The Basement Door", "One Night Alone", "Gunpowder and Roses",
    "Her Touch, His Blood", "Forgotten Names", "He Saw Her Die", "The Pact", "Screams Below",
    "Her Ring Still Shines", "Day 6", "No Way Out", "When He Was Human", "Between Two Graves",
    "They’re Watching", "The Tunnel Beneath", "His Final Mission", "Rain & Fire", "The Shovel",
    "Her Last Words", "Nowhere Safe", "The Portrait Blinks", "Nails on Wood", "The Old Trail",
    "Buried Truths", "The Last Embrace", "The Ritual Begins", "A Kiss and a Gun", "Voices From the Attic",
    "The Knife in Her Hand", "Lights Go Out", "Through the Smoke", "He Lied", "The Dress Still Hangs",
    "The Devil's Smile", "Lovers’ Grave", "Deadwood Creek", "Two Hearts, One Bullet", "The Scratch on the Wall",
    "Behind the Curtain", "The Locket", "Cold Skin, Warm Blood", "The Daylight Burns", "Something in the Lake",
    "The Whispering Tree", "Holding On", "Crossfire", "The End Begins", "The Voice in Her Ear",
    "Black Ink, Red Rain", "The Last Dance", "His Promise", "The Key", "Back From Below",
    "Her Name Again", "Bleeding Sky", "Dead Don’t Sleep", "A Heart Left Beating", "The Shot",
    "Goodbye for Now", "Just One More Breath", "The Wedding Never Came", "Love Among Monsters", "Redemption’s Fire"
  ];

  useEffect(() => {
    if (!isNaN(chapterId) && chapterId >= 1 && chapterId <= 100) {
      setChapterTitle(chapterTitles[chapterId - 1]);
    }
  }, [chapterId]);

  if (isNaN(chapterId) || chapterId < 1 || chapterId > 100) {
    return (
      <div className="min-h-screen bg-black text-white text-center p-10">
        <Head><title>Invalid Chapter</title></Head>
        <h1 className="text-2xl font-bold text-red-400 mb-4">❌ Invalid Chapter</h1>
        <p>This chapter doesn't exist. Please choose another one.</p>
        <Link href="/" className="text-blue-400 underline mt-6 block">← Back to Home</Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{chapterTitle} - Shadows of the Heart</title>
      </Head>

      {/* ✅ NAVIGATION BAR */}
      <nav className="bg-gray-900 text-white px-6 py-4 flex justify-center space-x-6 text-sm border-b border-gray-700">
        <Link href="/" className="hover:text-blue-400">🏠 Home</Link>
        <Link href="/about" className="hover:text-blue-400">📖 About</Link>
        <Link href="/contact" className="hover:text-blue-400">📬 Contact</Link>
        <Link href="#" onClick={() => alert("Support via Access Bank - 1719816647")} className="hover:text-blue-400">❤️ Support</Link>
      </nav>

      {/* ✅ CHAPTER CONTENT */}
      <div className="max-w-3xl mx-auto px-4 py-10 text-white">
        <h1 className="text-3xl font-bold text-blue-400 mb-4">{chapterTitle}</h1>
        <p className="text-gray-200 leading-relaxed mb-10">
          This is a placeholder for <strong>{chapterTitle}</strong>. The full story will be available soon. Davinto blends romance, horror, action and suspense in a way that keeps you glued. Stay tuned!
        </p>

        {/* ✅ NAVIGATION LINKS */}
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