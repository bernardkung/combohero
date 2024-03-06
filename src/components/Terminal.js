import { useState, useEffect } from 'react';
import { Combo } from '../components/Combo';

export const Terminal = ({ combos }) => {

  const [ activeCombo, setActiveCombo ] = useState()
  const [ active, setActive ] = useState(false)
  
  // Select a new combo
  useEffect(()=>{
    if (combos && combos.length > 0) {
      setActiveCombo(
        combos[ Math.floor(combos.length * Math.random()) ]
      )
    }
  }, [ combos ])
  
  return (
    <div className={'terminalContainer'}>
      <Combo combo={activeCombo} />
    </div>
  )
}
