import type { NextPage } from "next";
import Page from "../components/Page";
import Description from "../components/Description";
import { useEffect, useCallback } from "react";

import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import GridLink from "../components/GridLink";
import Grid from "../components/Grid";
import axios from "axios";
import { RandomFileResult } from "./api/random";
import { FileResult } from "./api/code";
import Welcome from "../components/Welcome";
import Code from "../components/Code";

const CodePage: NextPage = () => {
  const defaultCodeName = "loading.js";
  const defaultCodeTitle = "加载中";
  const defaultCodeContent = "Editor.on('loaded', Editor.setContext)";

  const [content, setContent] = useState<string>(defaultCodeContent);
  const [name, setName] = useState<string>(defaultCodeName);
  const [title, setTitle] = useState<string>(defaultCodeTitle);
  const [tag, setTag] = useState<string[]>([]);

  const newCode = useCallback(
    async function (file?: string) {
      const res = await (file === undefined
        ? getRandomCodeExclude(name)
        : getCode(file));

      if ("error" in res) {
        // TODO: handle error
      } else {
        setContent(res.content);
        setTitle(res.title);
        setName(res.name);
        setTag(res.tag);
        window.location.hash = res.name;
      }
    },
    [name]
  );

  // first time
  useEffect(() => {
    const filename = window.location.hash.replace(/^#/, "");
    if (filename) {
      newCode(filename);
    } else {
      newCode();
    }
  }, []);

  return (
    <Page>
      <Welcome />

      <Description>
        {title} <Code>{name}</Code>
      </Description>

      <div
        style={{
          width: "100%",
          borderRadius: "1rem",
          filter: "drop-shadow(0 0.8rem 1rem rgba(0, 0, 0, 0.8))",
          background: "rgb(45, 45, 45)",
          padding: "1rem",
        }}
      >
        <Editor
          value={content}
          onValueChange={setContent}
          highlight={(code) => highlight(code, languages.js)}
          padding={10}
          style={{
            color: "#eee",
            width: "100%",
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: "1rem",
          }}
        />
      </div>

      {tag.length > 1 ? (
        <Description>
          {tag.map((tag, key) => {
            console.log(tag);
            return <Code key={key}>{tag}</Code>;
          })}
        </Description>
      ) : null}

      <Grid>
        <GridLink name="似乎有帮助" disabled>
          表示此代码有帮助。
        </GridLink>
        <GridLink name="垃圾代码" disabled>
          你觉得这个代码很垃圾。
        </GridLink>
        <GridLink name="下一个" onClick={() => newCode()}>
          即刻查看下一个代码。
        </GridLink>
        <GridLink name="回家" link="/">
          返回主页。（真的有用吗？）
        </GridLink>
      </Grid>
    </Page>
  );
};

async function getRandomCodeExclude(
  exclude: string
): Promise<RandomFileResult> {
  const data = (await axios.get<RandomFileResult>(`/api/random?not=${exclude}`))
    .data;
  return data;
}

async function getCode(file: string): Promise<FileResult> {
  const data = (await axios.get<FileResult>(`/api/code?file=${file}`)).data;
  return data;
}

export default CodePage;
