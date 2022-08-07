import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { randomBytes } from "crypto";
import { doesOriginalURLExist, getShortURL } from "./api";
import ReCAPTCHA from "react-google-recaptcha";

const Home: NextPage = () => {
  const [originalURL, setOriginalURL] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [copyStatus, setCopyStatus] = useState("");

  const copiedText = "Copied!";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortURL);
    setCopyStatus(copiedText);
  };

  const getShortenLink = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShortURL("");
    const urlPattern =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
    // check if regex is true
    if (urlPattern.test(originalURL)) {
      setOriginalURL("");
      // fetch short url
      const shortURL = randomBytes(3).toString("hex");

      getShortURL({ originalURL: originalURL, shortURL: shortURL }).then(() => {
        setShortURL("rufly.ml/" + shortURL);
      });
      /*
      getShortURL({ originalURL: originalURL, shortURL: shortURL }).then(() => {
        setShortURL("rufly.ml/" + shortURL);
      });
      */
    } else {
      alert("The url is not correct.");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Rufly - A link shortner</title>
        <meta name="description" content="Rufly is a link shortner" />
        <link rel="icon" href="/rufly.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <Image
            width={"50vw"}
            height={"50vw"}
            className={styles.icon}
            alt="Rufly icon"
            src="/rufly.ico"
          />
          <h1 className={styles.title}>Rufly</h1>
        </div>

        <form onSubmit={(e) => getShortenLink(e)} className={styles.urlinput}>
          <input
            title=""
            className={styles.linkInput}
            value={originalURL}
            onChange={(e) => setOriginalURL(e.target.value)}
            required
          />
          <input type="submit" value="" className={styles.linkButton} />
        </form>

        <div
          className={styles.actionset}
          style={shortURL ? { display: "flex" } : {}}
        >
          <div
            onClick={() => copyToClipboard()}
            title="click to copy"
            className={styles.shortURL}
          >
            {shortURL}
          </div>
          <span>{copyStatus}</span>
        </div>
        {/*
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        */}
      </main>

      <footer className={styles.footer}>
        <a href="https://rufly.ml" target="_blank" rel="noopener noreferrer">
          rufly.ml
        </a>
      </footer>
    </div>
  );
};

export default Home;
