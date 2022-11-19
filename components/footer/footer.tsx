import styles from './footer.module.scss'
import Text from '../typography/text/text.component'
import Hr from '../hr/hr.component'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <Text
          color="secondary"
          styles={{
            letterSpacing: '.11rem',
            fontWeight: '100',
            'text-decoration-line': 'underline',
            'text-decoration-thickness': "1px",
            'text-decoration-color': 'currentColor',
            textUnderlineOffset: '0.5rem'
          }}
          size="calc((2.2 - 1) * 1.2vw + 1rem)"
          fontFamily='HVMuse'>PILI STUDIO</Text>
      </Link>
      <Text
        color='light'
        size="calc((1 - 1) * calc(.012 * min(100vh, 900px)) + 1rem)">
        by kaila k.  ·  atlantic beach, florida · Instagram
      </Text>
      <div className={styles.divider}>
        <Hr
          color="secondary"
          height={1} />
      </div>
      <div>
        <Text color='light'>real. true. you. · © copyright 2022 pili art studio · all rights reserved</Text>
      </div>
    </footer>
  )
}
