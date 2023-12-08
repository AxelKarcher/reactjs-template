import Separator from 'components/Separator/Separator'
import closeSvg from 'icons/close.svg'
import Icon from 'components/Icon/Icon'
import './Panel.scss'

const Panel = ({
  label, children, className, onClose,
  onClick, childrenClassName
}) => {
  return (
    <div className={`panel-container ${className}`} onClick={onClick}>
      {
        label &&
        <div className='label-area'>
          <span className='row'>
            <span className='label'>{label}</span>
            {onClose && <Icon onClick={onClose} src={closeSvg} />}
          </span>
          <Separator />
        </div>
      }
      <div className={`children-container ${childrenClassName}`}>
        {children}
      </div>
    </div>
  )
}

export default Panel