import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from 'react';
import ReactDOM from 'react-dom';
import LazyLoad from "react-lazyload";

export async function getStaticProps(context) {
  const json_parties =
    "https://api.cosmicjs.com/v2/buckets/tulum/objects?pretty=true&query=%7B%22type%22%3A%22parties%22%7D&limit=20&props=slug,title,content,metadata";

  const res = await fetch(json_parties);
  const data = await res.json();

  const parties = data?.objects;

  if (!parties) {
    return {
      notFound: true,
    };
  }

  return {
    props: { parties }, // will be passed to the page component as props
  };
}

export default function Home({ parties }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="row">
          <section>
            <h1>Welcome</h1>
            <button>Toggle theme!</button>
            <p className="text-third">
              Current mode is: <output>system default</output>
            </p>
          </section>
        </div>

        <div className="row">
          <section>
            <h1>World PARTY</h1>
            <h3>Parties, Nightlife & Techno Music</h3>
            <h5>THE BEST PARTIES & EVENTS HAPPENING AROUND TULUM</h5>
          </section>
        </div>

        <div className="row">
          <section>
            <div className="card text-white bg-success">
              <div className="card-img-top">image here</div>

              <div className="card-body">
                <h3 className="card-title">Have Fun</h3>
                <h5 className="card-subtitle">LIVE THE TULUM EXPERIENCE</h5>
                <p className="card-text">
                  Tulum, Mexico is a world-wide recognized spot for electronic
                  music parties. Surrounded by impressive landscapes, Tulum
                  congregates the best world DJ&apos;s along open minded travelers
                  from all around the globe.
                </p>
                <button className="btn btn-dark">join our commnity</button>
                <div className="card-footer">STAY IN TUNE @ TELEGRAM</div>
              </div>
            </div>
          </section>
        </div>

        <div className="row">
          <section>
            <div className="card">
              <div className="card-body">
                <h5 className="card-subtitle">TULUM 2021</h5>
                <h2 className="card-title">DID YOU KNOW ...</h2>
                <p className="card-text text-second">
                  The evidence of the first inhabitants of Cob?? is recorded
                  between 100 BC. and 300 A.D.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="row">
          <section id="parties">
            <h1>Events</h1>

            {parties.map((event) => (
              <div key={event.title} className="card">
                <div className="card-img-top">
                  <LazyLoad height={80}>
                    <img style={{maxWidth: "100%", maxHeight: "100%"}}
                      
                      src={event.metadata.main_image.imgix_url}
                      alt={event.title}
                    />
                  </LazyLoad>
                  {/* <img
                    style={{
                      objectFit: "contain",
                      height: "80vw",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
           
                    alt={event.title}
                  /> */}
                </div>

                <div className="card-body">
                  <p className="card-text">{event.title}</p>
                </div>
                <hr />
              </div>
            ))}
          </section>
        </div>

        <div className="row">
          <div className="col">1 of 2</div>
          <div className="col">2 of 2</div>
        </div>

        <div className="row">
          <div className="col">1 of 3</div>
          <div className="col">2 of 3</div>
          <div className="col">3 of 3</div>
        </div>
      </main>

      <footer>Powered by simple html</footer>
    </div>
  );
}
