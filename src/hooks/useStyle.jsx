import { useState, useEffect } from 'react'

const useStyle = () => {

  const [routerContainer, setRouterContainer] = useState()

  useEffect(() => {
    const element = document.getElementById('router-container')

    if (element) { setRouterContainer(getComputedStyle(element)) }
  }, [document])

  const getProperty = (property) => {
    if (!routerContainer) { return }

    return routerContainer.getPropertyValue(property)
  }

  return { getProperty }
}

export default useStyle