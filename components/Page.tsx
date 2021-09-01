import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export interface PageProps {
  children: React.ReactNode;
  title?: string;
}

const Page = (props: PageProps) => {
  const title = props.title ? props.title + " - JS大麻" : "JS大麻";
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Blog of Kiochan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{props.children}</main>

      <footer className={styles.footer}>
        JavaScript 是世界上最好的语言（大概）{" "}
        <Image
          src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
          alt="JavaScript Logo"
          width={126.5}
          height={28}
        />
      </footer>
    </div>
  );
};

export default Page;
