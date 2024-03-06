import up from '../assets/up.svg';
import right from '../assets/right.svg';
import down from '../assets/down.svg';
import left from '../assets/left.svg';


const Combo = ({ combo }) => {
  
  const arrows = {
    "up"    : up,
    "right" : right,
    "down"  : down,
    "left"  : left,
  }

  return (
    <div className={'flexCol comboContainer'}>
      <span className={'comboName'}>{ combo.name }</span>
      <span className={'comboCategory'}>{ combo.category }</span>
      <span className={'flexRow comboArrows'}>
        { combo.combo.split(',').map((c,i)=>(
          <img key={combo.combo + i} className={'arrow'} src={arrows[c]} />
        ))}
      </span>
    </div>
  )
}

export default Combo