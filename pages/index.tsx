import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import Link from "next/link";

interface Post {
  date: string;
  title: string;
  id: string;
}

interface Props {
  allPostsData: Post[];
}

export default function Home({ allPostsData }: Props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="pt-10">
        <h2 className="text-2xl font-bold">Blog</h2>
        <ul className="pt-6">
          {allPostsData.map(({ id, date, title }) => (
            <li className="py-2" key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
