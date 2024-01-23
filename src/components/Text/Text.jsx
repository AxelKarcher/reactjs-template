import './Text.scss'

const Text = ({children, isBold, size, isItalic, className, onClick}) => {
  return (
    <span
      onClick={onClick}
      className={`
        text-container
        ${onClick && 'clickable'}
        ${isBold && 'bold'}
        ${isItalic && 'italic'}
        ${size}
        ${className}
      `}
    >
      {children}
    </span>
  )
}

export default Text