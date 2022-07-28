// 404.js
import Link from "next/link";
import { doesShortURLExist } from "./api";

export async function getServerSideProps(context: {
  params: { shortURL: string };
}) {
  // Fetch data from external API
  try {
    doesShortURLExist(context.params.shortURL).then(
      (success) => {
        console.log("success", success);
        return {
          redirect: {
            permanent: false,
            destination: "https://google.com",
          },
        };
      },
      (reject) => {
        console.log("reject", reject);
      }
    );
  } catch (error) {
    console.log("error is", error);
  }

  return { props: { 1: context.params } };
}

export default function redirector() {
  return (
    <>
      <h1>Short URL Page bruh</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  );
}
