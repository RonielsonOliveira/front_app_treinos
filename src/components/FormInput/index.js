import React from 'react'
import { Wrapper } from './styled'

export default function FormInput({
  label,
  className,
  as = 'input',
  ...props
}) {
  const Component = as

  return (
    <Wrapper className={className}>
      {label && <label htmlFor={props.id}>{label}</label>}

      <Component {...props} />
    </Wrapper>
  )
}
