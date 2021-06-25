// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Editions } from "../../interfaces";
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Editions[]>
) {
  const list: Editions[] = [
    {
      num: 1,
      name: "Edition 1",
      articles: [
        {
          name: "How do we urge people to create deeper connections in our increasingly disconnected modern world?",
          desc: "Comming Soon",
          href: "deep-connections-disconnected-world",
        },
        {
          name: "How do we find a common identity in the United States which will bring together the contrasting perspectives that exist? ",
          desc: "Comming Soon",
          href: "omingoon",
        },
      ],
    },
    {
      num: 2,
      name: "Edition 2",
      articles: [
        {
          name: "Coming soon",
          desc: "Comming Soon",
          href: "omingoon",
        },
        {
          name: "Coming soon",
          desc: "ommingoon",
          href: "omingoon",
        },
      ],
    },
  ];
  res.status(200).send(list);
}
