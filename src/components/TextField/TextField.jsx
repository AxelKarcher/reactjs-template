import { useRef } from 'react'

import './TextField.scss'

const TextField = ({
  value, placeholder, isDisabled, isSecure,
  isDanger, onChange, className, onEnter, isFullWidth
}) => {

  const fieldRef = useRef(null)

  const handleKeyDown = (e) => {
    if (!onEnter || e?.code !== 'Enter') { return }

    onEnter()
    fieldRef.current.blur()
  }

  return (
    <input
      ref={fieldRef}
      className={`
        text-field-container
        ${isFullWidth && 'full-width'}
        ${isDanger && 'danger'}
        ${isDisabled ? 'disabled' : 'enabled'}
        ${className}
      `}
      type={isSecure ? 'password' : 'text'}
      value={value ?? ''}
      placeholder={placeholder}
      disabled={isDisabled}
      onChange={(e) => onChange ? onChange(e?.target?.value) : null}
      onKeyDown={(e) => handleKeyDown(e)}
    />
  )
}

export default TextField