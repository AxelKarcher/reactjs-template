import './Icon.scss'

const Icon = ({src, onClick, size}) => {
  return (
    <img
      className={`
        icon-container
        ${size}
        ${onClick && 'clickable'}
      `}
      src={src}
      onClick={onClick}
      alt='icon'
    />
  )
}

export default Icon