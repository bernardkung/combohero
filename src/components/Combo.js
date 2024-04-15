import up from '../assets/up.svg';
import right from '../assets/right.svg';
import down from '../assets/down.svg';
import left from '../assets/left.svg';


export const Combo = ({ combo }) => {
  
  if (!combo) {
    return(<div></div>)
  }
  
  const arrows = {
    "up"    : up,
    "right" : right,
    "down"  : down,
    "left"  : left,
  }

  // console.log(combo)

  return (
    <div className={'flexCol comboContainer'}>
      <span className={'comboName'}>{ combo.name }</span>
      <span className={'comboCategory'}>{ combo.category }</span>
      <span className={'flexRow comboArrows'}>
        { combo.combo.map((c,i)=>(
          <img key={i} className={'arrow'} src={arrows[c]} alt={c}/>
        ))}
      </span>
    </div>
  )
}