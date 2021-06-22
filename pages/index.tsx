import axios from "axios";
import Head from "next/head";

type Articles = {
  name: string;
  desc: string;
  href: string;
};

type props = {
  data: Articles[];
};

export default function Home(props: props) {
  return (
    <div className="home">
      <div
        className="total"
        style={{
          display: "flex",
          height: "200px",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            marginTop: "100px",
            marginBottom: "0px",
            fontSize: "260%",
          }}
          className="header"
        >
          The New Solutions Project
        </h1>
        <div
          style={{
            width: "80vw",
          }}
        >
          <h3>What is our goal?</h3>
          <h4 className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore hic
            itaque quae molestias molestiae aliquam velit dignissimos cumque
            quisquam omnis magnam minima repudiandae, eum unde libero impedit
            ullam! Animi, nisi. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Officiis magni repudiandae sequi optio? Magnam
            labore iusto excepturi quos, maiores possimus impedit veniam
            necessitatibus fugit, dolorum laudantium enim molestias corporis
            pariatur.
          </h4>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  try {
    const res = await axios.get("http://localhost:3000/api/list");
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
