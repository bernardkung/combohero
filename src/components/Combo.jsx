// import { ReactComponent as upArrow } from '../assets/up.svg';
// import { ReactComponent as rightArrow } from '../assets/right.svg';
// import { ReactComponent as downArrow } from '../assets/down.svg';
// import { ReactComponent as leftArrow } from '../assets/left.svg';
import upArrow from '../assets/icons/up.svg?react';
import rightArrow from '../assets/icons/right.svg?react';
import downArrow from '../assets/icons/down.svg?react';
import leftArrow from '../assets/icons/left.svg?react';

export const Combo = ({ currentCombo, expectedIndex, wrongPress }) => {
  
  if (!currentCombo) {
    return(<div></div>)
  }
  

  const arrowComponents = {
    "up"    : upArrow,
    "right" : rightArrow,
    "down"  : downArrow,
    "left"  : leftArrow,
  }


  return (
    <div className={'flexRow comboContainer'}>
      { currentCombo.combo.map((c,i)=>{
        const Arrow = arrowComponents[c] 
        return (
          <Arrow 
            key={i}
            className={`arrow ${
              i < expectedIndex 
                ? wrongPress 
                  ? 'error' : 'activated' 
                : 'deactivated'
            }`} 
          />
        )
      })
      }

        
    </div>
  )
}