const reqSvgs  = require.context ( '../assets/stratagems', true, /\.svg$/ )
const svgPaths = reqSvgs.keys()

export const Display = ({ combo }) => {
  if (!combo) { return(<div></div>) }

  const svgKey = `./${combo.name}.svg`
  
  const svgPath = reqSvgs(svgKey)

  return (
  <div name={'display'} className={'flexCol'}>
    <span className={'comboName'}>{ combo.name }</span>
    <img className={'comboIcon'} src={svgPath} />
    <span className={'comboCategory'}>{ combo.category }</span>
  </div>)
}