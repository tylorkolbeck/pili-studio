import styles from './hr.module.scss'
export default function Hr(props: HrProps) {
  const color = props.color ? { backgroundColor: `var(--color-${props.color})` } : {}
  const height = props.height ? { height: props.height + 'px' } : {}


  return (
    <hr className={styles.hr} style={{ ...color, ...height }} />
  )
}

interface HrProps {
  color?: 'light' | 'primary' | 'secondary',
  height?: number;
}
