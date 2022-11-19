import { ReactNode } from "react";

export default function Text(props: TextProps) {
  const fontFamily = props.fontFamily ? { fontFamily: props.fontFamily } : {}
  const size = props.size ? { fontSize: props.size } : {}
  const align = props.align ? { textAlign: props.align } : {}
  const color = props.color ? { color: `var(--color-${props.color})` } : {}
  const lineHeight = props.lineHeight ? { lineHeight: props.lineHeight } : {}
  const bold = props.bold ? { fontWeight: 'bold' } : {}
  const center = props.center ? { textAlign: 'center' } : {}
  const underline = props.underline ? { textDecoration: 'underline' } : {}


  return (
    <p style={{ ...fontFamily, ...size, ...align, ...color, ...lineHeight, ...props.styles, ...bold, ...center, ...underline }}>{props.children}</p>
  )
}

interface TextProps {
  size?: string;
  fontFamily?: string;
  align?: 'left' | 'center' | 'right',
  children: ReactNode,
  color?: 'secondary' | 'primary' | 'light',
  lineHeight?: string,
  styles?: any,
  bold?: boolean,
  center?: boolean,
  underline?: boolean
}
