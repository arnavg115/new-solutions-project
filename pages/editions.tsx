import { gql } from "@apollo/client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Spacer from "../components/Spacer";
import { client } from "../graphql/client";
import { props } from "../interfaces";

const Editions = ({ data }: props) => {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Spacer y={3} />
      {data.map((x) => {
        return (
          <div key={Math.floor(Math.random() * 1039485098)}>
            <div className="card hover" key={x.num} style={{ width: "80vw" }}>
              <h2>{x.name}</h2>
              {x.articles.map((y) => {
                return (
                  <div key={Math.random()}>
                    <Link href={"/articles/" + y.href}>
                      <a>
                        <h4>{y.name}</h4>
                        <p className="desc">{y.desc}</p>
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
            <Spacer y={4} />
          </div>
        );
      })}
    </div>
  );
};

export default Editions;

export async function getServerSideProps(context: any) {
  const { data } = await client.query({
    query: gql`
      {
        getMany {
          name
          num
          articles {
            name
            desc
            href
          }
        }
      }
    `,
  });
  console.log({
    props: {
      data: data.getMany,
    },
  });

  return {
    props: {
      data: data.getMany,
    },
  };
}
