// 404.js
import Link from "next/link";
import { doesShortURLExist } from "./api";

export async function getServerSideProps(context: {
  params: { shortURL: string };
}) {
  // Fetch data from external API
  return doesShortURLExist(context.params.shortURL).then((res) => {
    console.log("res", res);
    if (res.data.Items.length === 0) {
      console.log("hereeeeee");
      return { props: {} };
    }

    return {
      redirect: {
        permanent: false,
        destination: "http://" + res.data.Items[0]?.originalURL,
      },
    };
  });
  return { props: {} };
}

export default function redirector() {
  return (
    <>
      <h1>Redirect didnt worked!</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  );
}
