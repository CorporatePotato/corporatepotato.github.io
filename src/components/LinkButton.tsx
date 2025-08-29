import classNames from 'classnames'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

type LinkButtonProps = {
  href: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  type?: 'primary' | 'secondary'
}

const LinkButton = ({
  children,
  href,
  target = '_self',
  type = 'secondary'
}: PropsWithChildren<LinkButtonProps>) => {
  const buttonStyles = {
    primary: 'bg-white  text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50',
    secondary: 'bg-white/10 text-white shadow-xs hover:bg-white/20'
  }

  return (
    <Link
      href={href}
      target={target}
      className={classNames(
        'cursor-pointer px-3.5 py-2.5 text-sm font-semibold',
        buttonStyles[type]
      )}
    >
      {children}
    </Link>
  )
}

export default LinkButton
