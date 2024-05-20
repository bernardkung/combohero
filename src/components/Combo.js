
import { ReactComponent as upArrow } from '../assets/up.svg';
import { ReactComponent as rightArrow } from '../assets/right.svg';
import { ReactComponent as downArrow }  from '../assets/down.svg';
import { ReactComponent as leftArrow }  from '../assets/left.svg';


export const Combo = ({ combo, expectedIndex, wrongPress }) => {
  
  if (!combo) {
    return(<div></div>)
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
      <span className={'flexRow comboArrows'}>
      { combo.combo.map((c,i)=>{
        const Arrow = arrowComponents[c] 
        return (
        <div key={i} style={{height: 100, width: 100}}>
          <p>{c}</p>
          <Arrow 
            key={i}
            className={`arrow ${
              i < expectedIndex 
                ? wrongPress 
                  ? 'error' : 'activated' 
                : 'deactivated'
            }`} 
          />
        </div>)
      })
      }

        
      </span>
    </div>
  )
}