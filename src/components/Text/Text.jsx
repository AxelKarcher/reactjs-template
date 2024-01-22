import './Text.scss'

const Text = ({text, isWeight, size, className, onClick}) => {
  return (
    <span
      onClick={onClick}
      className={`
        text-container
        ${onClick && 'clickable'}
        ${isWeight && 'weight'}
        ${size}
        ${className}
      `}
    >
      {text}
    </span>
  )
}

export default Text