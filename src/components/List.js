import Combo from '../components/Combo';

const List = ({ combos }) => {

  return (
    <div className={'flexCol listContainer'}>
      {combos.map((combo, index) => (
        <Combo key={index} combo={combo} />
      ))}
    </div>
  )
}

export default List