// pages/chapters/1.js
import Head from 'next/head';
import Link from 'next/link';

const content = `
*Chapter 1: The Return*

The bus hissed to a stop at the edge of Black Hollow, its brakes exhaling a cloud of steam that mingled with the early morning fog. Jack Mercer stepped off, his boots crunching on the gravel shoulder. The town hadn't changed much in fifteen years—same sagging porches, same peeling paint, same sense of something lurking just beneath the surface.

Jack adjusted the duffel bag on his shoulder, the weight of it familiar and comforting. Inside were the remnants of a life he'd tried to leave behind: a worn leather jacket, a few changes of clothes, and a pistol he hoped he wouldn't need.

He took a deep breath, the air thick with the scent of pine and something else—something metallic, like blood. Memories surged, unbidden: the laughter of friends long gone, the warmth of a lover's touch, the screams that haunted his dreams.

As he walked down Main Street, the town slowly came to life. Shopkeepers opened their stores, casting wary glances his way. Children on bicycles paused, sensing something different about the stranger in their midst. Jack kept his gaze forward, his expression unreadable.

He stopped in front of a dilapidated building that once housed the local diner. The sign above the door hung askew, the paint faded and chipped. He pushed the door open, the bell above jingling a discordant note.

Inside, the diner was a time capsule. The red vinyl booths were cracked, the linoleum floor scuffed and stained. A jukebox in the corner stood silent, its lights flickering weakly. Behind the counter, a woman looked up from wiping a glass.

"Can I help you?" she asked, her voice cautious.

Jack nodded. "Coffee. Black."

She poured a cup and slid it across the counter. "Haven't seen you around here before."

"I used to live here," Jack replied, taking a sip. The coffee was bitter, but it grounded him.

The woman studied him. "You look familiar."

"Jack Mercer."

Her eyes widened. "Jack? As in... Jack Mercer?"

He nodded.

"People thought you were dead."

"Not quite."

She hesitated, then extended her hand. "I'm Linda. I used to work here back when you were... well, before."

Jack shook her hand. "Good to see a familiar face."

Linda glanced around, then leaned in. "You should be careful. Things have changed since you left."

Jack raised an eyebrow. "How so?"

"People disappear. Strange noises at night. And the sheriff... well, he's not the man he used to be."

Jack's grip tightened on his coffee cup. "Is she still here?"

Linda hesitated. "You mean Sarah?"

He nodded.

"Yeah, she's here. Married the sheriff a few years back."

Jack's heart sank. He'd known it was a possibility, but hearing it confirmed was a blow.

"Thanks for the coffee," he said, leaving a few bills on the counter.

As he stepped outside, the fog had thickened, cloaking the town in a ghostly shroud. Jack pulled his jacket tighter and headed toward the outskirts, where the old Mercer house stood.

The house was in disrepair, the yard overgrown, the windows boarded up. Jack pushed open the gate, its hinges protesting, and walked up the creaking steps. He reached into his pocket and pulled out a key, its metal cold against his skin.

Inside, the air was stale, filled with dust and decay. Furniture lay covered in white sheets, like ghosts waiting to be unveiled. Jack moved through the rooms, memories flooding back with each step.

In the living room, he paused before a fireplace, its mantle adorned with photographs. He picked up one: a younger version of himself, arm around Sarah, both smiling.

A floorboard creaked behind him.

Jack turned, muscles tensing.

A figure stood in the doorway, silhouetted by the dim light.

"Jack?"

Her voice was soft, disbelieving.

"Sarah."

She stepped into the room, her eyes searching his face. "I thought you were dead."

"I was... in a way."

Tears welled in her eyes. "Why didn't you come back?"

"I couldn't. Not until now."

They stood in silence, the weight of years between them.

"I have to go," she said abruptly. "If the sheriff finds out you're here..."

Jack nodded. "I understand."

As she turned to leave, he called out, "Sarah?"

She paused.

"I'm not leaving again."

She looked back, her eyes filled with a mix of hope and fear. "Then be careful. This town isn't safe anymore."
`;

export default function ChapterOne() {
  return (
    <>
      <Head>
        <title>Chapter 1 – Shadows of the Heart</title>
      </Head>

      {/* ✅ Global Nav */}
      <nav className="bg-gray-900 text-white px-6 py-4 flex justify-center space-x-6 text-sm border-b border-gray-700">
        <Link href="/" className="hover:text-blue-400">🏠 Home</Link>
        <Link href="/about" className="hover:text-blue-400">📖 About</Link>
        <Link href="/contact" className="hover:text-blue-400">📬 Contact</Link>
        <button
          onClick={() => alert("Support Davinto via Access Bank – 1719816647")}
          className="hover:text-blue-400"
        >
          ❤️ Support
        </button>
      </nav>

      {/* ✅ Chapter Content */}
      <main className="max-w-3xl mx-auto px-6 py-12 text-white">
        <h1 className="text-3xl font-bold text-blue-400 mb-6">Chapter 1: The Return</h1>
        <article className="prose prose-invert max-w-none whitespace-pre-line">
          {content}
        </article>
      </main>
    </>
  );
        }
