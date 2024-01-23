import './Spinner.scss'

const Spinner = ({size = 'medium', className}) => {
  return (
    <div className='spinner-container'>
      <div className={`spinner ${size} ${className}`} />
    </div>
  )
}

export default Spinner