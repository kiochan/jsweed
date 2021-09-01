// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { readdir } from "fs";

export interface ListResult {
  error?: string;
  scripts: string[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ListResult>
) {
  readdir("data/scripts/js", (err, dirname) => {
    let data: ListResult;
    if (err) {
      data = {
        error: String(err),
        scripts: [],
      };
    } else {
      data = {
        scripts: dirname,
      };
    }
    res.status(200).json(data);
  });
}
