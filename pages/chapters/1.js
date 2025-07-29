// pages/chapters/1.js
import Head from 'next/head';
import Link from 'next/link';

const content = `
*Chapter 1: The Return*

The bus hissed to a stop at the edge of Black Hollow, its brakes exhaling a cloud of steam that mingled with the early morning fog...
[⬅️ Continue with your full chapter 1 content here — preserve spacing and Markdown]
`;

export default function ChapterOne() {
  return (
    <>
      <Head>
        <title>Chapter 1 – Shadows of the Heart</title>
      </Head>

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

      <main className="max-w-3xl mx-auto px-6 py-12 text-white">
        <h1 className="text-3xl font-bold text-blue-400 mb-6">Chapter 1: The Return</h1>
        <article className="prose prose-invert max-w-none whitespace-pre-line">
          {content}
        </article>
      </main>
    </>
  );
}
