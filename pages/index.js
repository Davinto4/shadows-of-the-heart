import Head from 'next/head';
import Link from 'next/link';

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

      {/* ✅ Top Nav */}
      <nav className="bg-gray-900 text-white px-6 py-4 flex justify-center space-x-6 text-sm border-b border-gray-700">
        <Link href="/" className="hover:text-blue-400">🏠 Home</Link>
        <Link href="/about" className="hover:text-blue-400">📖 About</Link>
        <Link href="/contact" className="hover:text-blue-400">📬 Contact</Link>
        <Link href="#" onClick={() => alert("Support Davinto via Access Bank – 1719816647")} className="hover:text-blue-400">❤️ Support</Link>
      </nav>

      {/* ✅ Hero */}
      <div className="p-6 max-w-4xl mx-auto">
        <section className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-white">Shadows of the Heart</h1>
          <p className="text-gray-300 text-lg sm:text-xl">
            A haunted past. A cursed town. A love that won't die.
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            Written by <strong>Davinto</strong>
          </p>
        </section>

        {/* ✅ Chapters Grid */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">📚 Chapters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {chapterTitles.map((title, index) => (
              <Link key={index} href={`/chapters/${index + 1}`}>
                <div className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg p-4 text-center text-sm cursor-pointer text-gray-200 hover:text-blue-300">
                  <span className="block font-semibold mb-1 text-white">Chapter {index + 1}</span>
                  <span className="text-xs">{title}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
