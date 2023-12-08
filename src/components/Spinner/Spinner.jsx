import './Spinner.scss'

const Spinner = ({isLoading, size, className}) => {
  if (isLoading) return (
    <div className='spinner-container'>
      <div className={`spinner ${size} ${className}`} />
    </div>
  )
}

export default Spinner