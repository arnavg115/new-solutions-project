import axios from "axios";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Spacer from "../components/Spacer";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ImgItem } from "../components/ImgItem";
import { props } from "../interfaces";

export default function Home({ data }: props) {
  const Thumbs = (children: React.ReactChild[]) => {
    return children.map((item) => {
      return (
        <Image
          width={100}
          height={200}
          // @ts-ignore
          src={item.props.src}
          key={Math.floor(Math.random() * 100000)}
        />
      );
    });
  };
  const [size, setSize] = useState(200);
  const resize = (e: UIEvent) => {
    e.preventDefault();
    setSize(window.innerWidth);
  };
  useEffect(() => {
    setSize(window.innerWidth);
    window.addEventListener("resize", (e) => {
      resize(e);
    });
  }, []);
  return (
    <div className="home">
      <Head>
        <title>Home</title>

        <meta name="title" content="New Solutions Project" />
        <meta name="description" content="The New Solutions Project." />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://new-solutions-project.vercel.app/"
        />
        <meta property="og:title" content="New Solutions Project" />
        <meta property="og:description" content="The New Solutions Project." />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://new-solutions-project.vercel.app/"
        />
        <meta property="twitter:title" content="New Solutions Project" />
        <meta
          property="twitter:description"
          content="The New Solutions Project."
        />
      </Head>
      <div
        className="total"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Spacer y={3} />
        <div
          style={{
            width: size > 200 ? "80vw" : "",
          }}
          className="landing"
        >
          <div>
            <h1
              style={{
                marginBottom: "0px",
                fontSize: "260%",
                marginTop: "0px",
              }}
              className="header"
            >
              The New Solutions Project
            </h1>
            <h4 className="desc">
              Our mission is to research world problems and find viable
              solutions to these problems to improve living standards around the
              world. We produce high quality editions where we detail these
              issues and solutions.
            </h4>
          </div>
          <Carousel
            infiniteLoop
            autoPlay
            showStatus={false}
            autoFocus
            renderThumbs={Thumbs}
          >
            <ImgItem
              legend="placeholder"
              src="https://images.unsplash.com/photo-1519430044529-9a9a57177865?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1961&q=80"
            />
            <ImgItem
              legend="placeholder"
              src="https://images.unsplash.com/photo-1519430044529-9a9a57177865?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1961&q=80"
            />
          </Carousel>
        </div>
        <h2>Take a look out our editions</h2>
        <div className="row">
          {data.map((x) => {
            return (
              <div className="card hover" key={x.num}>
                <h3>{x.name}</h3>
                {x.articles.map((y) => {
                  return (
                    <p key={Math.floor(Math.random() * 100000)}>{y.name}</p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  try {
    const res = await axios.get(
      "https://new-solutions-project.vercel.app//api/list"
    );
    const data = res.data;
    console.log(data);
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        data: [],
      },
    };
  }
}
