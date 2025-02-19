import { ArrowButton } from "@/components/Button";
import { Criteria } from "@/components/Criteria";
import { Footer } from "@/components/Footer";
import { Info } from "@/components/Info";
import { Nav } from "@/components/Nav";
import { PrizeTracks } from "@/components/PrizeTracks";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [dots, setDots] = useState("...");

  useEffect(() => {
    setTimeout(() => {
      if (dots.length > 2) {
        setDots("");
      } else {
        setDots(dots + ".");
      }
    }, 500);
  }, [dots, setDots]);

  return (
    <>
      <Head>
        <title>UCSC ACM Hackathon</title>
        <meta
          name="description"
          content="A hackathon brought to you by UCSC ACM"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="w-screen flex flex-col items-center">
        <div className="w-full flex justify-center bg-black text-white bg-[url('/images/background.jpg')] bg-fixed">
          <div className="w-full max-w-screen-lg">
            <div className="h-screen flex flex-col justify-center items-center gap-4">
              <h1 className="text-6xl">
                ACM
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Hacks
                </span>
              </h1>
              <p className="italic text-gray-400">
                A hackathon brought to you by UCSC ACM{dots}
              </p>
              <div className="flex flex-col items-center gap-4">
                <ArrowButton
                  text="I'm interested"
                  link="https://forms.gle/3BucxBSo2u9JGnMeA"
                />
                <ArrowButton
                  text="I'm confused"
                  link="https://docs.google.com/document/d/1SGO2PNgb6kVti7tRsKwAwTuuforlvzyYxPmu59Bjdfk/edit?usp=sharing"
                />
              </div>
            </div>
          </div>
        </div>
        <img src="/images/waves.svg" />
        <div className="w-full flex flex-col items-center gap-16 pb-16">
          <Info />
          <Criteria />
          <PrizeTracks />
        </div>
        <div id="sponsors" className="w-full max-w-screen-md">
          <div className="max-w-screen-md flex flex-col gap-4">
            <h2 className="text-4xl">Sponsors</h2>
            <p className="text-gray-500">
              We'd like to give a huge thanks to our sponsors for making this
              year's hackathon possible!
            </p>
            <div className="w-full flex justify-center">
              <div className="flex flex-col gap-4 items-center max-w-lg">
                <a href="https://aops.com">
                  <img src="/images/sponsors/aops.png" />
                </a>
                <a href="https://www.sashido.io">
                  <img src="/images/sponsors/sashido.png" />
                </a>
                <a href="https://www.wolfram.com">
                  <img src="/images/sponsors/wolfram.png" />
                </a>
                <a href="https://www.leading-learners.com">
                  <img src="/images/sponsors/leading-learners.webp" />
                </a>
                <a href="https://www.desmos.com">
                  <img src="/images/sponsors/desmos.webp" />
                </a>
                <a href="https://cookiedb.com">
                  <img src="/images/sponsors/cookiedb.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
