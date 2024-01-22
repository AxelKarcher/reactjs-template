import {useState} from 'react'

import Panel from 'components/Panel/Panel'
import './Modal.scss'

const Modal = ({isActive, handleClose, children, className, title}) => {

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
        onClick={handleLocalClose}
        className={`
          modal-container
          ${isClosing && 'inactive'}
          ${className}`
        }
      >
        <Panel
          childrenClassName='children-container'
          onClose={handleLocalClose}
          title={title}
          onClick={(e) => e?.stopPropagation()}
        >
          {children}
        </Panel>
      </div>
    )
  }
}

export default Modal