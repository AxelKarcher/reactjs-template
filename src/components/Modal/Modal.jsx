import Panel from 'components/Panel/Panel'
import './Modal.scss'

const Modal = ({isActive, handleClose, children, className, label}) => {

  const handleCloseOnChildren = (e) => {e?.stopPropagation()}

  if (isActive) {
    return (
      <div className={`modal-container ${className}`} onClick={handleClose}>
        <Panel
          childrenClassName='children-container'
          onClose={handleClose}
          label={label}
          onClick={handleCloseOnChildren}
        >
          {children}
        </Panel>
      </div>
    )
  }
}

export default Modal