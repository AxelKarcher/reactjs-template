import {useState} from 'react'

import Panel from 'components/Panel/Panel'
import Button from 'components/Button/Button'
import './Modal.scss'

const Modal = ({
  isActive, handleClose, children, className,
  title, onConfirm, isConfirmDisabled
}) => {

  const [isClosing, setIsClosing] = useState(false)

  const handleLocalClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      handleClose()
      setIsClosing(false)
    }, 500)
  }

  if (isActive) {
    return (
      <div
        className={`
          modal-container
          ${isClosing && 'inactive'}
          ${className}`
        }
      >
        <Panel
          className='modal-panel'
          childrenClassName='modal-children'
          onClose={handleLocalClose}
          title={title}
          onClick={(e) => e?.stopPropagation()}
        >
          {children}
          {
            onConfirm &&
            <div className='row flex-end'>
              <Button label='Confirm' onClick={onConfirm} isDisabled={isConfirmDisabled} />
              <Button isDanger label='Cancel' onClick={handleClose} />
            </div>
          }
        </Panel>
      </div>
    )
  }
}

export default Modal