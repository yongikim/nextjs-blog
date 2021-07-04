import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import Link from "next/link";
import neumoStyles from "../styles/neumo.module.css";

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
      <section className={`${utilStyles.headingMd} ${utilStyles.alignCenter}`}>
        <p>A software engineer & Web developer.</p>
      </section>

      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${neumoStyles.listContainer}`}
      >
        <h2 className={`${utilStyles.headingLg}`}>Blog</h2>
        <ul className={`${utilStyles.list}`}>
          {allPostsData.map(({ id, date, title }) => (
            <>
              <li className={`${utilStyles.listItem}`} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            </>
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
