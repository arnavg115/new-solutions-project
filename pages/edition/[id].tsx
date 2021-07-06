import { useRouter } from "next/router";
import React, { FC } from "react";
import { gql } from "@apollo/client";

import { client } from "../../graphql/client";

const Edition: FC = (props) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <p>Hello {id}</p>
      {/* @ts-ignore */}
      <p>{props.hello}</p>
    </div>
  );
};

export default Edition;

export async function getServerSideProps() {
  const { data, error } = await client.query({
    query: gql`
      {
        hello(text: "james")
      }
    `,
  });
  console.log(data ? data : error);
  return {
    props: error ? error : data,
  };
}
