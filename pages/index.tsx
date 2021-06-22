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
      <Head>
        <title>Home</title>

        <meta name="title" content="New Solutions Project" />
        <meta name="description" content="The New Solutions Project." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="New Solutions Project" />
        <meta property="og:description" content="The New Solutions Project." />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
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
