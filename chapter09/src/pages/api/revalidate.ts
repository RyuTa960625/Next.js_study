import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await res.revalidate('/');
    return res.json({ revaldate: true})
  } catch (error) {
    res.status(500).send("Revalidation Failed");
  }
}