// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { readFile, readdir } from "fs";

export type RandomFileResult = FileResultWithError | FileResultWithoutError;

export interface FileResultWithError {
  error: string;
  name?: string;
}
export interface FileResultWithoutError {
  name: string;
  content: string;
  title: string;
  tag: string[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RandomFileResult>
) {
  const exclude = String(req.query.not);

  return new Promise<void>((resolve) => {
    readdir("data/scripts/js", (err, dirname) => {
      dirname = dirname.filter((name) => name != exclude);

      if (err) {
        res.status(200).json({
          error: String(err),
        });
        resolve();
      }

      const name = String(dirname[Math.floor(dirname.length * Math.random())]);

      if (!name.match(/^[a-z-_]+\.js$/)) {
        res.status(200).json({
          error: "Error: illegal file name.",
          name,
        });
        resolve();
      }

      readFile(`data/scripts/js/${name}`, (err, file) => {
        let data: RandomFileResult;
        if (err) {
          data = {
            error: String(err),
            name,
          };
        } else {
          let content = file.toString("utf-8");

          let title: string = "untitled";
          let tag: string[] = [];
          let matchRes = content.match(/(^|\n)\/\/@title:(.*)(\n|$)/);
          if (matchRes !== null) {
            const res: string | void = matchRes[2]?.trim();
            if (res) {
              title = res;
            }
          }
          matchRes = content.match(/(^|\n)\/\/@tag:(.*)(\n|$)/);
          if (matchRes !== null) {
            const arrayString: string | void = matchRes[2]?.trim();
            if (arrayString) {
              tag = arrayString.split(",").map((s) => s.trim());
            }
          }

          data = {
            name,
            content,
            title,
            tag,
          };
        }
        res.status(200).json(data);
        resolve();
      });
    });
  });
}
