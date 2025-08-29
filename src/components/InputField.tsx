import { PropsWithChildren } from 'react'

type InputFieldProps = {
  type?: 'primary' | 'secondary'
  onClick?: () => void
}

const InputField = ({ children, onClick, type = 'secondary' }: PropsWithChildren<InputFieldProps>) => {
  const className = type === 'primary' ? 'input-field-primary' : 'input-field'

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default InputField
