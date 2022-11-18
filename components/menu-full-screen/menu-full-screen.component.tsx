import styles from './menu-full-screen.module.scss'
import classNames from 'classnames'
import { MouseEventHandler, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group';
import React from 'react'

export default function MenuFullScreen(props: MenuFullScreenProps) {

  const menuItemsData: any = [
    {
      id: 1,
      text: 'Story',
      nodeRef: React.useRef() as React.MutableRefObject<HTMLInputElement>
    },
    {
      id: 2,
      text: 'Schedule',
      nodeRef: React.useRef() as React.MutableRefObject<HTMLInputElement>
    },
    {
      id: 3,
      text: 'RELIEF PRINTS',
      nodeRef: React.useRef() as React.MutableRefObject<HTMLInputElement>
    },
    {
      id: 4,
      text: 'PHOTOGRAPHS',
      nodeRef: React.useRef() as React.MutableRefObject<HTMLInputElement>
    },
    {
      id: 5,
      text: 'ALOHA',
      nodeRef: React.useRef() as React.MutableRefObject<HTMLInputElement>
    },
    {
      id: 6,
      text: 'CARE',
      nodeRef: React.useRef() as React.MutableRefObject<HTMLInputElement>
    },
  ]

  const duration = 200;

  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 0,
    transform: 'scale(1.2)',
  }

  const transitionStyles: any = {
    entering: { opacity: 0 },
    entered: { opacity: 1, transform: 'scale(1.0)' },
    exiting: { opacity: 0, },
    exited: { opacity: 0, },
  };

  const [menuItems, setMenuItems] = useState([])
  const counter = useRef(1)
  const intervalRef = useRef() as React.MutableRefObject<NodeJS.Timer>

  useEffect(() => {
    if (props.isOpen) {
      intervalRef.current = setInterval(() => {
        let item = menuItemsData.find((item: any) => item.id === counter.current)
        if (item) {
          setMenuItems((prev) => [...prev, item])
          counter.current = counter.current + 1

        } else {
          clearInterval(intervalRef.current)
        }
      }, 50)
    }
  }, [props.isOpen])

  function closeMenuHandler(event: any) {
    setMenuItems([])
    counter.current = 1;
    props.onClick(event)
  }

  return (
    <div className={classNames(styles.menu, {
      [styles.open]: props.isOpen
    })}>
      <header className={styles.menuHeader}>
        <button onClick={closeMenuHandler} className={classNames(styles.closeBtn, 'cursor')}>
          <Image src='/images/closeBtn.svg' height={40} width={40} alt="Close Menu"></Image>
        </button>
      </header>
      <main>

        <ul className={classNames(styles.menuItems, 'no-style', 'upper')}>
          <TransitionGroup>
            {
              menuItems.map((item: any, index) => (
                <CSSTransition nodeRef={item.nodeRef} in={props.isOpen} timeout={duration} key={item.id}>
                  {state => <li
                    style={{
                      ...defaultStyle,
                      ...transitionStyles[state]
                    }}
                    ref={item.nodeRef} >{item.text}</li>}
                </CSSTransition>
              ))
            }</TransitionGroup>
        </ul>
      </main>
    </div>
  )
}

interface MenuFullScreenProps {
  isOpen: boolean,
  onClick: MouseEventHandler
}