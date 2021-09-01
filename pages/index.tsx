import type { NextPage } from "next";
import Page from "../components/Page";
import Welcome from "../components/Welcome";
import Grid from "../components/Grid";
import GridLink from "../components/GridLink";
import Description from "../components/Description";
import Code from "../components/Code";

const HomePage: NextPage = () => {
  return (
    <Page>
      <Welcome />

      <Description>
        Kio 会在这里分享脚本 <Code>demo.js</Code> （大概）
      </Description>

      <Grid>
        <GridLink name="上传" disabled>
          上传你自己的绝妙代码，并让大家看到。
        </GridLink>
        <GridLink name="随机" link="/random">
          交给计算机，让它随便给你一个脚本！
        </GridLink>
        <GridLink name="标签" disabled>
          看看都有哪些标签，没准这样比较好找呢？
        </GridLink>
        <GridLink name="最新" disabled>
          查看这里最新的代码，希望不会有漏洞。
        </GridLink>
      </Grid>
    </Page>
  );
};

export default HomePage;
