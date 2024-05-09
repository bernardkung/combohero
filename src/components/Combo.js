import up from '../assets/up.svg';
import right from '../assets/right.svg';
import down from '../assets/down.svg';
import left from '../assets/left.svg';
// import { Arrow } from '../components/Arrow';
import { ReactComponent as upArrow } from '../assets/up.svg';
import { ReactComponent as rightArrow } from '../assets/right.svg';
import { ReactComponent as downArrow }  from '../assets/down.svg';
import { ReactComponent as leftArrow }  from '../assets/left.svg';


export const Combo = ({ combo, expectedIndex }) => {
  
  if (!combo) {
    return(<div></div>)
  }
  
  const arrows = {
    "up"    : up,
    "right" : right,
    "down"  : down,
    "left"  : left,
  }

  const arrowComponents = {
    "up"    : upArrow,
    "right" : rightArrow,
    "down"  : downArrow,
    "left"  : leftArrow,
  }


  // console.log(combo)

  return (
    <div className={'flexCol comboContainer'}>
      <span className={'comboName'}>{ combo.name }</span>
      <span className={'comboCategory'}>{ combo.category }</span>
      <span className={'flexRow comboArrows'}>
      { combo.combo.map((c,i)=>{
        const Arrow = arrowComponents[c] 
        return (
        <div style={{height: 100, width: 100}}>
          <p>{c}</p>
          <Arrow 
            key={i}
            className={`arrow ${i < expectedIndex ? 'activated' : 'deactivated'}`} 
          />
        </div>)
      })
      }

        
        {/* { combo.combo.map((c,i)=>(
          <Arrow key={i} i={i} c={c} expectedIndex={expectedIndex}/>
        ))} */}
        
      </span>
    </div>
  )
}