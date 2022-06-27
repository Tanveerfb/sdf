import React, { useContext } from 'react'

const CSNetwork = React.createContext();
export const context = useContext(CSNetwork);


export function Context({children}) {
  return (
    <div>Context</div>
  )
}
