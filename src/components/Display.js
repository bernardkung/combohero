import { ScoreTracker } from '../components/ScoreTracker';
import { RoundTracker } from '../components/RoundTracker';

import defaultSvg from '../assets/logo.svg'
const reqSvgs  = require.context ( '../assets/stratagems', true, /\.svg$/ )
const svgKeys = reqSvgs.keys()

export const Display = ({ combo, score }) => {
  if (!combo) { return(<div></div>) }

  const svgKey = `./${combo.name}.svg`
  const svgPath = svgKeys.includes(svgKey)
    ? reqSvgs(svgKey)
    : defaultSvg

  return (
  <div className={'displayContainer flexCol'}>
    <span className={'flexRow'}>

      <RoundTracker round={0} />
      <img className={'comboIcon'} src={svgPath} />
      <ScoreTracker score={score} />

    </span>
    <span className={'comboName'}>{ combo.name.toUpperCase() }</span>
  </div>)
}