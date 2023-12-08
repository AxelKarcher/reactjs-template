import Modal from 'components/Modal/Modal'
import Button from 'components/Button/Button'

import './ConfirmModal.scss'

const ConfirmModal = ({
  children, isActive, className, handleCancel,
  label, handleClose, handleConfirm
}) => {
  return (
    <Modal
      className={`confirm-modal-container ${className}`}
      handleClose={handleClose}
      label={label}
      isActive={isActive}
    >
      {children}
      <div className='btns'>
        <Button onClick={handleCancel ?? handleClose} isDanger className='btn' label='Cancel' />
        <Button onClick={handleConfirm} className='btn' label='Confirm' />
      </div>
    </Modal>
  )
}

export default ConfirmModal