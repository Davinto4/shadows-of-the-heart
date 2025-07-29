import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-grow">{children}</main>

      <footer className="bg-gray-900 text-gray-400 p-6 mt-8 text-sm text-center">
        <div className="mb-3">
          <a rel="license" href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">
            <img
              alt="Creative Commons License"
              style={{ borderWidth: 0, display: 'inline-block' }}
              src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png"
            />
          </a>
        </div>
        <p className="mb-2">
          <span>This work by </span><strong>Davinto</strong> is licensed under
          <a
            href="https://creativecommons.org/licenses/by-nc/4.0/"
            className="text-blue-400 underline ml-1"
            target="_blank"
          >
            CC BY-NC 4.0
          </a>. Commercial use is not allowed.
        </p>

        <hr className="my-3 border-gray-700" />

        <p className="mb-1 text-white font-medium">💖 Support the Author</p>
        <p>Bank Name: Access Bank</p>
        <p>Account Name: Chima Chimdindu Macdonald</p>
        <p>Account Number: <strong className="text-white">1719816647</strong></p>
      </footer>
    </div>
  );
}
