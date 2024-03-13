import './Button.scss'

const Button = ({
  label, onClick, isDisabled,
  isDanger, className, isFullWidth
}) => {
  return (
    <button
      className={`
        button-container
        ${isFullWidth && 'full-width'}
        ${isDanger && 'danger'}
        ${isDisabled ? 'disabled' : 'enabled'}
        ${className}
      `}
      onClick={onClick}
      disabled={isDisabled}
    >
      <span>{label}</span>
    </button>
  )
}

export default Button