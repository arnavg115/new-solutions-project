import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import React from "react";
import { Header } from "../components/Header";
import Spacer from "../components/Spacer";

const about = () => {
  const { data } = useQuery(gql`
    {
      getAll {
        name
      }
    }
  `);
  return (
    <div className="about">
      <Header title="About" />
      <div className="aboutmain">
        <div
          style={{
            backgroundColor: "#f4f4f4",
            width: "100vw",
            height: "150px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 className="aboutheader">About</h1>
        </div>
        <Spacer y={1} />
        <div
          style={{
            width: "80vw",
          }}
        >
          <h2>What we do?</h2>
          <h4 className="desc">
            This project is meant to be an organized think tank that works to
            create solutions to help the world.
          </h4>
          <h2>Our Mission Statement</h2>
          <h4 className="desc">
            Our mission is to give opportunities to individuals to think towards
            the betterment of our world while collaborating with others who care
            about helping people. In doing this, participants will improve their
            understanding of different issues. Through gaining new knowledge of
            the context of people’s misfortunes, we will become less judgmental
            and find more desire to help others
          </h4>
          <h2>Sign Up</h2>
          <h4 className="desc">
            To signup please fill out this brief Google form.
          </h4>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe4zDy26vp1Z5AEsWoLuEapv8Uw1lg67k1uZ9-mC6ws5qY4Bw/viewform"
            style={{
              width: "80vw",
              height: "35vh",
              borderStyle: "none",
              overflowX: "hidden",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default about;
