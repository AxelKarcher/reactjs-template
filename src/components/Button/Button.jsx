import './Button.scss'

const Button = ({label, onClick, isDisabled, isDanger, className}) => {
  return (
    <button
      className={`
        button-container
        ${isDanger && 'danger'}
        ${isDisabled ? 'disabled' : 'enabled'}
        ${ className}
      `}
      onClick={onClick}
      disabled={isDisabled}
    >
      <span>{label}</span>
    </button>
  )
}

export default Button