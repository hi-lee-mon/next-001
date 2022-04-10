import Head from "next/head";
import Link from "next/link";
import Header from "./components/Header";

export default function Main() {
  return (
    <>
      <Head>
        <title>メインページ</title>
      </Head>
      <Header title="メインページ"/>
      <Link href="/about">
        <a>about</a>
      </Link>
    </>
  );
}
