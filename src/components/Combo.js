import up from '../assets/up.svg';
import right from '../assets/right.svg';
import down from '../assets/down.svg';
import left from '../assets/left.svg';


const Combo = ({ combo }) => {
  console.log(combo.combo.split(','))
  const arrows = {
    "up"    : up,
    "right" : right,
    "down"  : down,
    "left"  : left,
  }

  return (
    <div className={'flexCol comboContainer'}>
      <span>{ combo.name }</span>
      <span>{ combo.category }</span>
      <span className={'flexRow'}>
        { combo.combo.split(',').map(c=>(
          <img className={'arrow'} src={arrows[c]} />
        ))}
      </span>
    </div>
  )
}

export default Combo