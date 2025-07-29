import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../../components/Layout';

const chapterData = {
  1: {
    title: "Chapter 1: The Return",
    content: (
      <>
        <p>The bus hissed to a stop at the edge of Black Hollow, its brakes exhaling a cloud of steam...</p>
        <p>Jack Mercer stepped off, his boots crunching on the gravel shoulder...</p>
        <p>Jack adjusted the duffel bag on his shoulder, the weight of it familiar and comforting...</p>
        <p>He took a deep breath, the air thick with the scent of pine and something else—something metallic, like blood...</p>
        <p>As he walked down Main Street, the town slowly came to life...</p>
        <p>He stopped in front of a dilapidated building that once housed the local diner...</p>
        <p>"Can I help you?" she asked, her voice cautious.</p>
        <p>Jack nodded. "Coffee. Black."</p>
        <p>She poured a cup and slid it across the counter...</p>
        <p>"Jack Mercer." ... "Jack? As in... Jack Mercer?" ... "People thought you were dead." ...</p>
        <p>She hesitated, then extended her hand. "I'm Linda..."</p>
        <p>"You should be careful. Things have changed since you left."</p>
        <p>"Is she still here?" ... "You mean Sarah?" ... "Yeah, she's here. Married the sheriff."</p>
        <p>As he stepped outside, the fog had thickened...</p>
        <p>The house was in disrepair... Jack pushed open the gate...</p>
        <p>Inside, the air was stale, filled with dust and decay...</p>
        <p>He picked up a photo... "Sarah." ... "I thought you were dead." ... "Why didn't you come back?" ...</p>
        <p>"I'm not leaving again." ... "Then be careful. This town isn't safe anymore."</p>
      </>
    ),
  },
};

export default function ChapterPage() {
  const router = useRouter();
  const { id } = router.query;
  const chapter = chapterData[id];

  if (!chapter) {
    return (
      <Layout>
        <Head>
          <title>Chapter Not Found – Shadows of the Heart</title>
        </Head>
        <div className="p-6 text-white max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-4 text-red-500">Chapter Not Found</h1>
          <p className="text-gray-300">Sorry, this chapter doesn't exist.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{chapter.title} – Shadows of the Heart</title>
      </Head>
      <div className="p-6 text-white max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-400 mb-6">{chapter.title}</h1>
        <div className="space-y-4 text-gray-200">{chapter.content}</div>
      </div>
    </Layout>
  );
  }
