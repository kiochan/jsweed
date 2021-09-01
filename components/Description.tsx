import styles from "../styles/Home.module.css";

export interface DescriptionProps {
  children: React.ReactNode;
}

const Description = (props: DescriptionProps) => {
  return <p className={styles.description}>{props.children}</p>;
};

export default Description;
