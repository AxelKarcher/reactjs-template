import './Icon.scss'

const Icon = ({src, onClick, size = 'medium', className}) => {
  return (
    <img
      className={`
        icon-container
        ${size}
        ${onClick && 'clickable'}
        ${className}
      `}
      src={src}
      onClick={onClick}
      alt='icon'
    />
  )
}

export default Icon