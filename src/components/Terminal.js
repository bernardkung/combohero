import { useState, useEffect } from 'react';
import { Combo } from '../components/Combo';
import { Display } from '../components/Display';
import { ReactComponent as SuperEarth }  from '../assets/SuperEarthOriginalColors.svg';

export const Terminal = ({ combos }) => {

  // const [ playing, setPlaying ] = useState(false)
  const [ currentCombo, setCurrentCombo ] = useState()
  const [ comboQueue, setComboQueue ] = useState([])
  const [ queueIndex, setQueueIndex ] = useState(0)
  const [ expectedIndex, setExpectedIndex ] = useState(0)
  const [ lastKey, setLastKey ] = useState()
  const [ keyPressed, setKeyPressed ] = useState(false)
  const [ wrongPress, setWrongPress ] = useState(false)
  const [ listening, setListening ] = useState(true)
  const [ score, setScore ] = useState(0)
  const [ round, setRound ] = useState(0)
  const [ endlessMode, setEndlessMode ] = useState(true)

  const keyCodes = {
    'up'    : 87,
    'right' : 68,
    'down'  : 83,
    'left'  : 65,
  }

  function generateRandomCombo() {
    const randInt = Math.floor( combos.length * Math.random() )
    return combos[ randInt ]
  }

  function generateComboQueue(q=3) {
    const queue = [{}, {}]
    for (let i=0; i<q; i++) {
      queue.push(generateRandomCombo())
    }
    setComboQueue(queue)
  }

  function selectNewCombo() {
    setCurrentCombo( generateRandomCombo() )
  }

  function resetCombo(t=0) {
    setTimeout(()=>{
      setWrongPress(false)
      setListening(true)
      setExpectedIndex(0)
    }, t)
  }

  function finishCombo() {
    setScore(score+1)
    setRound(round+1)
    // setQueueIndex(queueIndex+1)
    setTimeout(() => {
      // selectNewCombo()
      setExpectedIndex(0)
      if (endlessMode) {
        const newQueue = comboQueue.slice(1)
        newQueue.push(generateRandomCombo())
        console.log("nq:", newQueue)
        setComboQueue(newQueue)
      }
    }, 300)
  }

  function failedCombo() {
    setWrongPress(true)
    setListening(false)
    setScore(0)
    resetCombo(1000)
  }


  // ON LOAD
  useEffect(()=>{
    selectNewCombo()
    generateComboQueue()
  }, [])

  // Update Current Combo
  useEffect(()=>{
    setCurrentCombo(comboQueue[2])
  }, [comboQueue])

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
      {/* <SuperEarth className={'superEarth'}/> */}

      <Display 
        combo={currentCombo} 
        comboQueue={comboQueue} 
        queueIndex={queueIndex} 
        score={score} 
        round={round} 
      />

      <Combo 
        currentCombo={comboQueue[2]} 
        expectedIndex={expectedIndex} 
        wrongPress={wrongPress} 
      />

    </div>
  )
}
