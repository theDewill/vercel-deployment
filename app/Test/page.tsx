import Head from 'next/head';

export default function TestPage() {
  return (
    <>
      <Head>
        <title>Test Page</title>
        <meta name="description" content="This is a test page." />
      </Head>
      <div>
        This is a test page.
      </div>
    </>
  );
}
