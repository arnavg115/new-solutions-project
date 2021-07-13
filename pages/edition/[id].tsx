import { Loading, Card, Text, Divider } from "@geist-ui/react";
import Link from "next/link";
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
      index: parseInt(id),
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
    <div className="center-horiz">
      <Header title={data.getOneEdition.name} />
      <h1>{data?.getOneEdition.name}</h1>
      <Divider type="success" volume={2}>
        Articles
      </Divider>
      <div className="gd">
        {data.getOneEdition.articles.map((y) => {
          return (
            <Card key={y.name} hoverable>
              <Link href={`/articles/${y.href}`}>
                <a>
                  <Text h2>{y.name}</Text>
                  <p className="desc">{y.desc}</p>
                </a>
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Edition;
