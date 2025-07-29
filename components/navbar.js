import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-center space-x-6 text-sm border-b border-gray-700">
      <Link href="/" className="hover:text-blue-400">🏠 Home</Link>
      <Link href="/about" className="hover:text-blue-400">📖 About</Link>
      <Link href="/contact" className="hover:text-blue-400">📬 Contact</Link>
      <Link href="#" onClick={() => alert("Support Davinto via Access Bank – 1719816647")} className="hover:text-blue-400">❤️ Support</Link>
    </nav>
  );
}
