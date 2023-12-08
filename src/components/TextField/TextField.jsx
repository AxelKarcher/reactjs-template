import {useRef} from 'react'

import './TextField.scss'

const TextField = ({
  value, placeholder, isDisabled,
  isDanger, onChange, className, onEnter
}) => {

  const fieldRef = useRef(null)

  const handleKeyDown = (e) => {
    if (e?.code !== 'Enter') {return}

    onEnter()
    fieldRef.current.blur()
  }

  return (
    <input
      ref={fieldRef}
      className={`
        text-field-container
        ${isDanger && 'danger'}
        ${isDisabled ? 'disabled' : 'enabled'}
        ${className}
      `}
      type='text'
      value={value}
      placeholder={placeholder}
      disabled={isDisabled}
      onChange={(e) => onChange ? onChange(e?.target?.value) : null}
      onKeyDown={(e) => handleKeyDown(e)}
    />
  )
}

export default TextField