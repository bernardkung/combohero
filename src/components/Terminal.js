import { useState, useEffect } from 'react';
import { Combo } from '../components/Combo';

export const Terminal = ({ combos }) => {

  // const [ playing, setPlaying ] = useState(false)
  const [ currentCombo, setCurrentCombo ] = useState()
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
    setCurrentCombo( combos[ randInt ] )
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
    const expectedKey = currentCombo ? keyCodes[ currentCombo.combo[expectedIndex] ] : ""
    console.log("exp:", expectedKey, "index:", expectedIndex)
  }, [expectedIndex])

  // Select a new combo to display
  useEffect(()=>{
    if (combos && combos.length > 0) { 
      selectNewCombo()
    }
  }, [ combos ])

  // Check Keypress against Combo
  function checkLastKey(keyCode) {
    const expectedKey = currentCombo ? keyCodes[ currentCombo.combo[expectedIndex] ] : ""
    console.log("press:", keyCode, "exp:", expectedKey, "index:", expectedIndex)
    // Correct Keypress
    if (keyCode === expectedKey) {
      // Combo Finished
      if (expectedIndex>=currentCombo.combo.length-1) {
        selectNewCombo()
        return
      }
      // Combo Not Finished
      setExpectedIndex(expectedIndex + 1)
    }
    // Incorrect Keypress
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
    
    // Cleanup
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [lastKey]);

  
  return (
    <div className={'terminalContainer'} >
      <Combo combo={currentCombo} expectedIndex={expectedIndex}/>
    </div>
  )
}
