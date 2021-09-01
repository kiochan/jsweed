import styles from "../styles/Home.module.css";

type Node = string | JSX.Element | (JSX.Element | string)[];

export interface GridProps {
  children: Node;
}

const Grid = (props: GridProps) => {
  return <div className={styles.grid}>{props.children}</div>;
};

export default Grid;
