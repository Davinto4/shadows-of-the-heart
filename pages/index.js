// pages/index.js import Link from 'next/link';
import Link from 'next/link';

const chapters = [ "The Return", "Smoke in the Pines", "Her Eyes Again", "Stranger at the Gate", "Whispers in the Wall", "Midnight Footsteps", "The Sheriff’s Warning", "Old Scars, New Wounds", "Shadows in the Mirror", "Blood Beneath the Church", "A Town That Forgot", "The Unwelcome Guest", "Crossroads", "Rain on the Roof", "The Locked Room", "Letters Never Sent", "Eyes in the Forest", "Her Voice in the Dark", "Storm Warning", "The Barn Door Opens", "The Hound Beneath", "Cold Hands", "Second Chances", "Unearthed", "Dinner with Ghosts", "The Black Tree", "Firewatch", "Heartbeat in the Silence", "The Red Room", "Glass in the Sink", "The Mask Falls", "Run", "Hollow Ground", "Lovers & Liars", "The Fog Returns", "Handprint on the Mirror", "She Remembers", "The Basement Door", "One Night Alone", "Gunpowder and Roses", "Her Touch, His Blood", "Forgotten Names", "He Saw Her Die", "The Pact", "Screams Below", "Her Ring Still Shines", "Day 6", "No Way Out", "When He Was Human", "Between Two Graves", "They’re Watching", "The Tunnel Beneath", "His Final Mission", "Rain & Fire", "The Shovel", "Her Last Words", "Nowhere Safe", "The Portrait Blinks", "Nails on Wood", "The Old Trail", "Buried Truths", "The Last Embrace", "The Ritual Begins", "A Kiss and a Gun", "Voices From the Attic", "The Knife in Her Hand", "Lights Go Out", "Through the Smoke", "He Lied", "The Dress Still Hangs", "The Devil's Smile", "Lovers’ Grave", "Deadwood Creek", "Two Hearts, One Bullet", "The Scratch on the Wall", "Behind the Curtain", "The Locket", "Cold Skin, Warm Blood", "The Daylight Burns", "Something in the Lake", "The Whispering Tree", "Holding On", "Crossfire", "The End Begins", "The Voice in Her Ear", "Black Ink, Red Rain", "The Last Dance", "His Promise", "The Key", "Back From Below", "Her Name Again", "Bleeding Sky", "Dead Don’t Sleep", "A Heart Left Beating", "The Shot", "Goodbye for Now", "Just One More Breath", "The Wedding Never Came", "Love Among Monsters", "Redemption’s Fire" ];

export default function Home() { return ( <main className="min-h-screen bg-black text-white p-8"> <h1 className="text-4xl font-bold mb-4">Shadows of the Heart</h1> <p className="mb-4 max-w-xl"> A former black-ops agent, presumed dead, returns to a cursed town to find the woman he loved—only to discover she's engaged to the sheriff... and the town is haunted by something ancient and violent. </p> <Link href="/chapters/1" className="bg-white text-black px-4 py-2 rounded"> Start Reading </Link>

<div className="mt-12">
    <h2 className="text-2xl mb-2">Chapters</h2>
    <ul className="list-disc list-inside space-y-1">
      {chapters.map((title, idx) => (
        <li key={idx}>
          <Link href={`/chapters/${idx + 1}`} className="text-blue-400 hover:underline">
            {idx + 1}. {title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
</main>

); }

// You can now create the following files: // - pages/chapters/[id].js → for each chapter // - pages/about.js → about the author // - pages/contact.js → contact details // TailwindCSS should be configured in tailwind.config.js and globals.css

