import React, { useEffect, useState } from "react";
import Spacer from "../components/Spacer";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ImgItem } from "../components/ImgItem";
import { props } from "../interfaces";
import { Header } from "../components/Header";
import { Link } from "@geist-ui/react";
import { client } from "../graphql-client/client";
import { gql } from "@apollo/client";

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
      <Header title="Home" />
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
                fontSize: "260%",
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
                <Link
                  href={`/edition/${x.num}`}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <h3>{x.name}</h3>
                  {x.articles.map((y) => {
                    return (
                      <p key={Math.floor(Math.random() * 100000)}>{y.name}</p>
                    );
                  })}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { data } = await client.query({
    query: gql`
      {
        getAll {
          num
          name
          articles {
            name
            desc
            href
          }
        }
      }
    `,
  });
  return {
    props: {
      data: data.getAll,
    },
  };
}
