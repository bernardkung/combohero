
export const ScoreTracker = ({ score }) => {


  return (
  <div className={'scoreTracker'}>
    <p className={'scoreValue'}>{ score }</p>
    <p className={'scoreLabel'}>Score</p>
  </div>
  )
}