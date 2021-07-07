import { Loading } from "@geist-ui/react";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { Header } from "../../components/Header";
import { useGetOneQuery } from "../../generated/generated";

const Edition: FC = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useGetOneQuery({
    variables: {
      // @ts-ignore
      index: parseInt(id) - 1,
    },
  });
  if (error) {
    return (
      <div>
        <Header title={error.message} />
        <p>{error.message}</p>
      </div>
    );
  }
  if (!data || loading) {
    return (
      <div>
        <Loading size="large" type="success" />
      </div>
    );
  }
  return (
    <div>
      <Header title={data.getOne.name} />
      <h1>{data?.getOne.name}</h1>
    </div>
  );
};

export default Edition;
