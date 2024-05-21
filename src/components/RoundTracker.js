
export const RoundTracker = ({ round }) => {


  return (
  <div className={'roundTracker'}>
    <p className={'roundValue'}>{ round }</p>
    <p className={'roundLabel'}>Round</p>
  </div>
  )
}