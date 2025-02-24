import defaultSvg from '../assets/icons/logo.svg'
import { useState, useEffect } from 'react';
// const reqSvgs  = require.context ( '../assets/stratagems', true, /\.svg$/ )
// const svgKeys = reqSvgs.keys()
const svgs = import.meta.glob('./assets/stratagems/*.svg');


export const ComboQueue = ({ comboQueue, queueIndex }) => {
  const [svgPaths, setSvgPaths] = useState({});

  useEffect(() => {
    const loadSvgs = async () => {
      const paths = {};
      for (const combo of comboQueue) {
        const svgKey = `../assets/stratagems/${combo.name}.svg`;
        paths[combo.name] = svgs[svgKey] ? (await svgs[svgKey]()).default : defaultSvg;
      }
      setSvgPaths(paths);
    };

    loadSvgs();
  }, [comboQueue]);


  if (!comboQueue) {
    return(<div></div>)
  }
  
  // const getLogo = (combo) => {
  //   const svgKey = `./${combo.name}.svg`
  //   const svgPath = svgKeys.includes(svgKey)
  //     ? reqSvgs(svgKey)
  //     : defaultSvg
  //   return svgPath
  // }


  return (
    <div className={'flexRow comboQueue'}>
      { comboQueue.map((c,i)=>{
        return (
          <img 
            key={i} 
            className={`comboIcon ${i == 2 ? 'activeIcon' : 'inactiveIcon'}`}
            // src={getLogo(c)}
            src={svgPaths[c.name] || defaultSvg}
          />
        )
      })
      }
    </div>
  )
}