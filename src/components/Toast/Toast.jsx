import {useState, useEffect} from 'react'

import Text from 'components/Text/Text'
import './Toast.scss'

// ⚠️ Peut-être un peu goofy

const Toast = ({isActive, handleClose, content, duration = 2000}) => {

  const [isEnding, setIsEnding] = useState(false)

  useEffect(() => {
    if (isActive) {setTimeout(() => {handleCloseLocal()}, [duration < 1000 ? 1000 : duration])}
  }, [isActive])

  const handleCloseLocal = () => {
    setIsEnding(true)
    setTimeout(() => {
      handleClose()
      setIsEnding(false)
    }, 1000)
  }

  if (isActive) return (
    <div className={`toast-container ${isEnding && 'inactive'}`} onClick={handleCloseLocal}>
      <Text isWeight text={content} />
    </div>
  )
}

export default Toast