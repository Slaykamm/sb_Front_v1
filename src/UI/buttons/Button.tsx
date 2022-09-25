import { FC } from 'react'
import { ButtonProps } from 'react-bootstrap'
import cl from './Button.module.scss'

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
        <div className={cl.Btn}>
            <button
                type='button'
                {...otherProps}
                >
                {children}
            </button>
        </div>
  )
}
