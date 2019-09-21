import React from 'react'

const Button = ({ type, ...props }) => (
  <button type={type || 'button'} {...props} />
)

export default Button
