import Separator from 'components/Separator/Separator'
import closeSvg from 'icons/close.svg'
import Icon from 'components/Icon/Icon'
import Text from 'components/Text/Text'

import leftArrow from 'icons/leftArrow.svg'
import './Panel.scss'

const Panel = ({
  title, children, className, onClose, isOpen, icons,
  onClick, childrenClassName, forwardedRef, isCollapser, onTitleClick
}) => {

  const handleTitleClick = (e) => {
    e.stopPropagation()
    onTitleClick()
  }

  const isOpened = (isCollapser && isOpen) || !isCollapser

  return (
    <div
      className={`panel-container ${isCollapser && 'collapser'} ${className}`}
      onClick={onClick}
      ref={forwardedRef}
    >
      {
        title &&
        <div className='title-area' onClick={onTitleClick ? handleTitleClick : null}>
          <span className='row'>
            <span className='title-row'>
              {icons?.map((icon, i) => (<Icon key={i} className={`title-icon ${isOpened && 'colored'}`} src={icon} />))}
              <Text className='title-panel' text={title} />
            </span>
            {isCollapser && <Icon className={isOpened ? 'opened' : 'closed'} src={leftArrow} />}
            {onClose && <Icon onClick={onClose} src={closeSvg} />}
          </span>
          {isOpened && <Separator />}
        </div>
      }
      {
        isOpened &&
        <div className={`children-container ${childrenClassName}`}>
          {children}
        </div>
      }
    </div>
  )
}

export default Panel