
export const RoundTracker = ({ round }) => {


  return (
  <div className={'roundTracker'}>
    <p className={'roundLabel label'}>Round</p>
    <p className={'roundValue value'}>{ round }</p>
  </div>
  )
}