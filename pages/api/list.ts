// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Articles = {
  name: string;
  desc: string;
  href: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Articles[]>
) {
  const list: Articles[] = [
    {
      name: "First entry",
      desc: "This is the beginning of this blog",
      href: "/first",
    },
  ];
  res.status(200).send(list);
}
