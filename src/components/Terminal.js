import { useState, useEffect } from 'react';
import { Combo } from '../components/Combo';
import { Display } from '../components/Display';
import { ReactComponent as SuperEarth }  from '../assets/SuperEarthOriginalColors.svg';

export const Terminal = ({ combos }) => {

  // const [ playing, setPlaying ] = useState(false)
  const [ currentCombo, setCurrentCombo ] = useState()
  const [ expectedIndex, setExpectedIndex ] = useState(0)
  const [ lastKey, setLastKey ] = useState()
  const [ keyPressed, setKeyPressed ] = useState(false)
  const [ wrongPress, setWrongPress ] = useState(false)
  const [ listening, setListening ] = useState(true)
  
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

  function resetCombo(t=0) {
    setTimeout(()=>{
      setWrongPress(false)
      setListening(true)
      setExpectedIndex(0)
    }, t)
  }

  function finishCombo() {
    setTimeout(() => {
      selectNewCombo()
      setExpectedIndex(0)
    }, 300)
  }

  function failedCombo() {
    setWrongPress(true)
    setListening(false)
    resetCombo(1000)
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

    setExpectedIndex(expectedIndex + 1)

    // Correct Keypress
    if (keyCode === expectedKey) {
      // Combo Finished
      if (expectedIndex>=currentCombo.combo.length-1) {
        finishCombo()
        return
      }
    }
    // Incorrect Keypress
    else {
      failedCombo()
      return
    }
  }

  // Triggers on keypress
  useEffect(()=>{
    console.log("t:", keyPressed && listening)
    if ( keyPressed ) {
      setKeyPressed(false)
      if (listening) {
        checkLastKey(lastKey)
      }
    }
  }, [keyPressed])

  // Handle Keylistener
  function handleKeyDown(e) {
    console.log(e.keyCode, listening)
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
      
      <p className={'title'} >DANCE DANCE LIBERATION!!!</p>
      <Display combo={currentCombo} />
      <Combo combo={currentCombo} expectedIndex={expectedIndex} wrongPress={wrongPress} />
      <SuperEarth className={'superEarth'}/>
    </div>
  )
}
