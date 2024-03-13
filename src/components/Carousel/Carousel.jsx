import './Carousel.scss'
import Text from 'components/Text/Text'

const Carousel = ({
  title, elements,
  className, rightContent
}) => {
  return (
    <div className={`carousel-container ${className}`}>
      <div className='carousel-top'>
        <Text isBold>{title}</Text>
        {rightContent && <span className='right-content'>{rightContent}</span>}
      </div>
      <div className='elements'>{elements}</div>
    </div>
  )
}

export default Carousel