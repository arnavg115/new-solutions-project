import { gql } from "@apollo/client";
import Link from "next/link";
import { Input, Button } from "@geist-ui/react";
import React, { useEffect, useState } from "react";
import Spacer from "../components/Spacer";
import { client } from "../graphql-client/client";
import { props } from "../interfaces/index";
import { IoSearch } from "react-icons/io5";
import { Header } from "../components/Header";
const Editions = ({ data }: props) => {
  const [datag, setDatag] = useState(data);
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
  const [s, setS] = useState("");
  const search = async () => {
    const res = await client.query({
      query: gql`
        query Search($query: String!) {
          getSearch(query: $query) {
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
      variables: { query: s },
    });
    console.log(res.data);
    setDatag(res.data.getSearch);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100vw",
        marginTop: "30px",
      }}
    >
      <Header title="Editions" />
      <Spacer y={3} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Input
          placeholder="Search"
          icon={<IoSearch />}
          clearable
          style={{
            width: size > 550 ? "50vw" : "20vw",
          }}
          value={s}
          onChange={(e) => {
            setS(e.target.value);
          }}
        />
        <div style={{ width: "30px" }}></div>
        <Button
          size="small"
          onClick={(e) => {
            search();
          }}
          type="success"
        >
          Search
        </Button>
      </div>
      <Spacer y={5} />
      {datag.map((x: any) => {
        return (
          <div key={Math.floor(Math.random() * 1039485098)}>
            <div className="card hover" key={x.num} style={{ width: "80vw" }}>
              <Link href={`/edition/${x.num}`}>
                <a>
                  <h2>{x.name}</h2>
                  {x.articles.map((y: any) => {
                    return (
                      <div key={Math.random()}>
                        <h4>{y.name}</h4>
                        <p className="desc">{y.desc}</p>
                      </div>
                    );
                  })}
                </a>
              </Link>
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
        getAll {
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
      data: data.getAll,
    },
  });

  return {
    props: {
      data: data.getAll,
    },
  };
}
