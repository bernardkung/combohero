import defaultSvg from '../assets/logo.svg'
const reqSvgs  = require.context ( '../assets/stratagems', true, /\.svg$/ )
const svgKeys = reqSvgs.keys()


export const ComboQueue = ({ comboQueue, queueIndex }) => {

  if (!comboQueue) {
    return(<div></div>)
  }
  
  const getLogo = (combo) => {
    const svgKey = `./${combo.name}.svg`
    const svgPath = svgKeys.includes(svgKey)
      ? reqSvgs(svgKey)
      : defaultSvg
    return svgPath
  }


  return (
    <div className={'flexRow comboQueue'}>
      { comboQueue.map((c,i)=>{
        return (
          <img 
            key={i} 
            className={`comboIcon ${i == 2 ? 'activeIcon' : 'inactiveIcon'}`}
            src={getLogo(c)}
          />
        )
      })
      }
    </div>
  )
}