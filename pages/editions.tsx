import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Spacer from "../components/Spacer";
import { props } from "../interfaces";

const editions = ({ data }: props) => {
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
          <div>
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

export default editions;

export async function getServerSideProps(context: any) {
  try {
    const res = await axios.get("http://localhost:3000/api/list");
    const data = res.data;
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
