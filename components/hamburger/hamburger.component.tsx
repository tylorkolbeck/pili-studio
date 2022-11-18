import React, { MouseEventHandler } from 'react'
import styles from './hamburger.module.scss';
import classnames from 'classnames'

export default function Hamburger(props: HamburgerProps) {
  const { color } = props
  return (
    <div className={classnames(styles.hamburger, 'cursor')} onClick={props.onClick}>
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
    </div>
  )
}

declare interface HamburgerProps {
  color: string,
  onClick: MouseEventHandler<HTMLDivElement>
}


