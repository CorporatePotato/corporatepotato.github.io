'use client'

import classNames from 'classnames'
import { PropsWithChildren } from 'react'

type ButtonProps = {
  type?: 'primary' | 'secondary'
  onClick?: () => void
  href?: string // NEW: add href prop
}

const Button = ({ children, onClick, href, type = 'secondary' }: PropsWithChildren<ButtonProps>) => {
  const buttonStyles = {
    primary: '',
    secondary: ''
  }

const classes = classNames(
  'button',
  buttonStyles[type]
)
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  )
}

export default Button
