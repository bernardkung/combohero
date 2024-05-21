import defaultSvg from '../assets/logo.svg'
const reqSvgs  = require.context ( '../assets/stratagems', true, /\.svg$/ )
const svgKeys = reqSvgs.keys()

export const Display = ({ combo }) => {
  if (!combo) { return(<div></div>) }

  const svgKey = `./${combo.name}.svg`
  const svgPath = svgKeys.includes(svgKey)
    ? reqSvgs(svgKey)
    : defaultSvg

  return (
  <div className={'displayContainer flexCol'}>
    <img className={'comboIcon'} src={svgPath} />
    <span className={'comboName'}>{ combo.name.toUpperCase() }</span>
  </div>)
}