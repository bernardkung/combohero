import { Combo } from './Combo.jsx';

export const List = ({ combos }) => {

  return (
    <div className={'flexCol listContainer'}>
      {combos.map((combo, index) => (
        <Combo key={index} combo={combo} />
      ))}
    </div>
  )
}