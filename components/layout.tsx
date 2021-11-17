import Head from "next/head";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Kim Yongi";
export const siteTitle = "Yongi Kim";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="max-w-2xl px-4 mt-12 mx-auto mb-24">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col items-center">
        <ul className="w-full flex flex-row justify-start mb-8">
          <li className="pr-12">
            <a href="/">Home</a>
          </li>
          <li className="pr-12">
            <a href="/">Blog</a>
          </li>
          <li className="pr-12">
            <a href="/">About</a>
          </li>
        </ul>
        {home && (
          <>
            <div className="rounded-full mt-4">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
            </div>
            {/* <h1 className={utilStyles.heading2Xl}>{name}</h1> */}
            <h1 className="text-4xl font-extrabold my-4 mx-0">{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={`mt-8 py-8 px-0 rounded-1 w-full`}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
