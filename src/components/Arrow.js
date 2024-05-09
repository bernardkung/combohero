import up from '../assets/up.svg';
import right from '../assets/right.svg';
import down from '../assets/down.svg';
import left from '../assets/left.svg';

import { ReactComponent as upArrow } from '../assets/up.svg';
import { ReactComponent as rightArrow } from '../assets/right.svg';
import { ReactComponent as downArrow }  from '../assets/down.svg';
import { ReactComponent as leftArrow }  from '../assets/left.svg';

export const Arrow = ({ i,c, expectedIndex })=>{

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

  return (
    <div>
      {arrowComponents[c]}
    </div>
    // <svg 
    //   key={i} 
    //   className={`arrow ${i < expectedIndex ? 'activated' : 'deactived'}`} 
    //   // xmlns={arrows[c]} 
	  //   xmlns="<http://www.w3.org/2000/svg>"
    //   alt={c}
    //   // fill={"green"}
    //   viewBox="0 0 24 24"
    //   >
		// 	<use xlinkHref={arrows[c]} transform={scale(5)} />
    // </svg>
  )



}