import { useState, useEffect } from 'react';
import { Combo } from '../components/Combo';
import { ReactComponent as SuperEarth }  from '../assets/SuperEarthOriginalColors.svg';

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
    const randInt = Math.floor( combos.length * Math.random() )
    setCurrentCombo( combos[ randInt ] )
  }

  function resetCombo() {
    setExpectedIndex(0)
  }

  function finishCombo() {
    setTimeout(() => {
      selectNewCombo()
      setExpectedIndex(0)
    }, 300)
  }

  // ON LOAD
  useEffect(()=>{
    selectNewCombo()
  }, [])

  // TESTING: keypress logic
  useEffect(()=>{
    const expectedKey = currentCombo ? keyCodes[ currentCombo.combo[expectedIndex] ] : ""
    console.log("exp:", expectedKey, "index:", expectedIndex)
  }, [expectedIndex])


  // Check Keypress against Combo
  function checkLastKey(keyCode) {
    const expectedKey = currentCombo ? keyCodes[ currentCombo.combo[expectedIndex] ] : ""
    console.log("press:", keyCode, "exp:", expectedKey, "index:", expectedIndex)
    // Correct Keypress
    setExpectedIndex(expectedIndex + 1)
    if (keyCode === expectedKey) {
      // Combo Finished
      if (expectedIndex>=currentCombo.combo.length-1) {
        finishCombo()
        return
      }
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
    <div className={'terminalContainer flexCol'} >
      <Combo combo={currentCombo} expectedIndex={expectedIndex}/>
      <SuperEarth className={'superEarth'}/>
    </div>
  )
}
