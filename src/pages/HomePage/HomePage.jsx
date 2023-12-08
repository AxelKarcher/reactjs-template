import {useState, useEffect} from 'react'

import Button from 'components/Button/Button'
import TextField from 'components/TextField/TextField'
import Panel from 'components/Panel/Panel'
import ConfirmModal from 'components/ConfirmModal/ConfirmModal'
import Spinner from 'components/Spinner/Spinner'

import './HomePage.scss'

const HomePage = ({}) => {

  const [field, setField] = useState('')
  const [isModal, setIsModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {if (isLoading) {setTimeout(() => {setIsLoading(false)}, [1500])}}, [isLoading])

  return (
    <div id='home-page-container'>
      <ConfirmModal
        isActive={isModal}
        handleClose={() => setIsModal(false)}
        label='Confirmer'
        handleConfirm={() => console.warn('ConfirmModal: handleConfirm')}
      />
      <Panel label={import.meta.env.VITE_API_URL}>
        <Button label='Open modal' onClick={() => setIsModal(true)} />
        <Button isDisabled={isLoading} label='Start loading' onClick={() => setIsLoading(true)} />
        <Spinner isLoading={isLoading} />
        <TextField
          placeholder='Placeholder'
          value={field}
          onChange={(e) => setField(e)}
          onEnter={() => console.warn('TextField: onEnter:', field)}
        />
      </Panel>
    </div>
  )
}

export default HomePage