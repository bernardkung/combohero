import { ScoreTracker } from './ScoreTracker.jsx';
import { RoundTracker } from './RoundTracker.jsx';
import { ComboQueue } from './ComboQueue.jsx';

// import defaultSvg from '../assets/icons/logo.svg'
// const reqSvgs  = require.context ( '../assets/stratagems', true, /\.svg$/ )
// const svgKeys = reqSvgs.keys()

export const Display = ({ combo, comboQueue, queueIndex, score, round }) => {
  if (!combo) { return(<div></div>) }

  const currentCombo = comboQueue[2]

  return (
  <div className={'displayContainer flexCol'}>
    <span className={'display'}>

      <RoundTracker round={round} />
      <ComboQueue comboQueue={comboQueue} queueIndex={queueIndex} />
      <ScoreTracker score={score} />
      
    </span>
    <span className={'comboName'}>{ currentCombo.name.toUpperCase() }</span>
  </div>)
}