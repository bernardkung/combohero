
export const ScoreTracker = ({ score }) => {


  return (
  <div className={'scoreTracker'}>
    <p className={'scoreLabel label'}>Score</p>
    <p className={'scoreValue value'}>{ score }</p>
  </div>
  )
}