import Link from "next/link";
import styles from "../styles/Home.module.css";

export interface GridLinkProps {
  name: string;
  link?: string;
  children: string;
  disabled?: boolean;
  onClick?: () => void;
}

const GridLink = (props: GridLinkProps) => {
  let component = props.disabled ? (
    <div
      className={styles.card}
      style={{
        filter: "grayscale(100%)",
        opacity: 0.8,
      }}
    >
      <h2>
        {props.name}{" "}
        <span style={{ color: "#222222", fontWeight: 100, fontSize: "0.5rem" }}>
          (未开放)
        </span>
      </h2>
      <p>{props.children}</p>
    </div>
  ) : (
    <a
      className={styles.card}
      style={{
        cursor: props.onClick ? "pointer" : "auto",
      }}
      onClick={props.onClick}
    >
      <h2>{props.name} &rarr;</h2>
      <p>{props.children}</p>
    </a>
  );

  component = props.link ? (
    <Link href={props.link}>{component}</Link>
  ) : (
    component
  );
  return component;
};

export default GridLink;
