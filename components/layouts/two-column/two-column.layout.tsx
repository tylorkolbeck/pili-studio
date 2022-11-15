import styles from "./two-column.module.scss";

export default function TwoColumn(props: any) {
  return (
    <div className={styles.twoColumn}>
      <div className={styles.left}>{props.left}</div>
      <div className={styles.right}>{props.right}</div>
    </div>
  )
}
