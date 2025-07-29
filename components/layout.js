import { useState } from 'react';

export default function Layout({ children }) {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("1719816647").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

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
          This work by <strong>Davinto</strong> is licensed under
          <a
            href="https://creativecommons.org/licenses/by-nc/4.0/"
            className="text-blue-400 underline ml-1"
            target="_blank"
          >
            CC BY-NC 4.0
          </a>.
        </p>

        <hr className="my-3 border-gray-700" />

        <p className="mb-2 text-white font-medium">💖 Support the Author</p>

        <button
          onClick={copyToClipboard}
          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded mb-2"
        >
          Copy Account Number
        </button>
        {copied && <p className="text-green-400">✔ Account copied!</p>}

        <br />

        <button
          onClick={() => setShowModal(true)}
          className="text-blue-400 underline mt-2"
        >
          Show Bank Transfer Info
        </button>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <div className="bg-white text-black rounded-xl p-6 w-80 shadow-lg text-left relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-3 text-lg font-bold text-red-600"
              >
                ×
              </button>
              <h2 className="text-lg font-semibold mb-3">💸 Bank Transfer Info</h2>
              <p><strong>Bank Name:</strong> Access Bank</p>
              <p><strong>Account Name:</strong> Chima Chimdindu Macdonald</p>
              <p><strong>Account Number:</strong> <span className="font-mono">1719816647</span></p>
              <p className="text-sm text-gray-700 mt-3">Thanks for supporting Shadows of the Heart 💙</p>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
          }
