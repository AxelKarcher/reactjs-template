import './BulletPoints.scss'
import Text from 'components/Text/Text'

const BulletPoints = ({title, list, isNumbered = false}) => {
  return (
    <div className='bullet-points-container'>
      <Text isBold>{title}</Text>
      {list.map((elem, i) => (
        <span key={i}>{`${isNumbered ? i + 1 + '.' : '-'} ${elem}`}</span>
      ))}
    </div>
  )
}

export default BulletPoints