import React, { createContext, useState } from 'react'
import { auth } from './util/firebase'

export const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => window.sessionStorage.getItem('token'))

  const value = {
    isAuth,
    activateAuth: user => {
      window.sessionStorage.setItem('user', JSON.stringify(user))
      setIsAuth(true)
    },
    removeAuth: () => {
      window.sessionStorage.removeItem('user')
      auth().signOut()
      setIsAuth(false)
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default { Provider, Consumer: Context.Consumer }
