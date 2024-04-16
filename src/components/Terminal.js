import { useState, useEffect } from 'react';
import { Combo } from '../components/Combo';

export const Terminal = ({ combos }) => {

  const [ activeCombo, setActiveCombo ] = useState()
  // const [ active, setActive ] = useState(false)
  const [ expectedIndex, setExpectedIndex ] = useState(0)
  const [ lastKey, setLastKey ] = useState()
  const [ keyPressed, setKeyPressed ] = useState(false)
  
  const keyCodes = {
    'up'    : 87,
    'right' : 68,
    'down'  : 83,
    'left'  : 65,
  }

  function selectNewCombo() {
    console.log("Generating new combo!")
    const randInt = Math.floor( combos.length * Math.random() )
    setActiveCombo( combos[ randInt ] )
    setExpectedIndex(0)
  }

  function resetCombo() {
    setExpectedIndex(0)
  }

  useEffect(()=>{
    console.log("x")
    selectNewCombo()
  }, [])

  useEffect(()=>{
    const expectedKey = activeCombo ? keyCodes[ activeCombo.combo[expectedIndex] ] : ""
    console.log("exp:", expectedKey, "index:", expectedIndex)
  }, [expectedIndex])

  // Select a new combo to display
  useEffect(()=>{
    if (combos && combos.length > 0) { 
      selectNewCombo()
    }
  }, [ combos ])

  // Checks last key against active combo
  function checkLastKey(keyCode) {
    const expectedKey = activeCombo ? keyCodes[ activeCombo.combo[expectedIndex] ] : ""
    console.log("press:", keyCode, "exp:", expectedKey, "index:", expectedIndex)
    // If correct key pressed
    if (keyCode === expectedKey) {
      // If combo finished
      if (expectedIndex>=activeCombo.combo.length-1) {
        selectNewCombo()
        return
      }
      // Otherwise proceed through combo
      setExpectedIndex(expectedIndex + 1)
    }
    // If wrong key pressed
    else {
      resetCombo()
      return
    }
  }

  // Triggers on keypress
  useEffect(()=>{
    if (keyPressed) {
      setKeyPressed(false)
      checkLastKey(lastKey)
    }
  }, [keyPressed])

  // Handle Keylistener
  function handleKeyDown(e) {
    console.log(e.keyCode)
    setLastKey(e.keyCode)
    setKeyPressed(true)
  }

  // Keylistener
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    
    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [lastKey]);

  
  return (
    <div className={'terminalContainer'} >
      <Combo combo={activeCombo} expectedIndex={expectedIndex}/>
    </div>
  )
}
