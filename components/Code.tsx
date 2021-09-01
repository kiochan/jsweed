import styles from "../styles/Home.module.css";

type Node = string | JSX.Element | (JSX.Element | string)[];

export interface CodeProps {
  children: Node;
}

const Code = (props: CodeProps) => {
  return <code className={styles.code}>{props.children}</code>;
};

export default Code;
