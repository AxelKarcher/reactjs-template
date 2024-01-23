import './Carousel.scss'

const Carousel = ({title, elements}) => {
  return (
    <div className='carousel-container'>
      <span className='title'>{title}</span>
      <div className='elements'>{elements}</div>
    </div>
  )
}

export default Carousel