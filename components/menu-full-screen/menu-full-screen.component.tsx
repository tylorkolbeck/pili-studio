import styles from './menu-full-screen.module.scss'
import classNames from 'classnames'
import { MouseEventHandler } from 'react'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

export default function MenuFullScreen(props: MenuFullScreenProps) {

  const menuItemsData: any = [
    {
      id: 1,
      text: 'Story',
      href: 'about',
      nodeRef: React.useRef() as React.MutableRefObject<HTMLInputElement>
    },
    {
      id: 2,
      text: 'Schedule',
      href: 'schedule',
      nodeRef: React.useRef() as React.MutableRefObject<HTMLInputElement>
    },
    {
      id: 3,
      text: 'RELIEF PRINTS',
      href: 'relief-prints',
      nodeRef: React.useRef() as React.MutableRefObject<HTMLInputElement>
    },
    {
      id: 4,
      text: 'PHOTOGRAPHS',
      href: 'photographs',
      nodeRef: React.useRef() as React.MutableRefObject<HTMLInputElement>
    },
    {
      id: 5,
      text: 'ALOHA',
      href: 'contact',
      nodeRef: React.useRef() as React.MutableRefObject<HTMLInputElement>
    },
    {
      id: 6,
      text: 'CARE',
      href: 'care',
      nodeRef: React.useRef() as React.MutableRefObject<HTMLInputElement>
    },
  ]

  return (
    <div className={classNames(styles.menu, {
      [styles.open]: props.isOpen
    })}>
      <header className={styles.menuHeader}>
        <button onClick={props.onClick} className={classNames(styles.closeBtn, 'cursor')}>
          <Image src='/images/closeBtn.svg' height={40} width={40} alt="Close Menu"></Image>
        </button>
      </header>
      <main>

        <ul className={classNames(styles.menuItems, 'no-style', 'upper')}>
          {
            menuItemsData.map((item: any) => (

              <Link href={item.href} key={item.id}>
                <li>
                  {item.text}
                </li>
              </Link>
            ))
          }
        </ul>
      </main>
    </div>
  )
}

interface MenuFullScreenProps {
  isOpen: boolean,
  onClick: MouseEventHandler
}