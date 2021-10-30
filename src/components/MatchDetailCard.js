import { React } from 'react';
export const MatchDetailCard =  ({match}) => {
  return (
    <div className="MatchDetailCard">
      <h3>Latest Matches</h3>
      <h4>{ match.teamToBatFirstInn } vs { match.teamToBatSecondInn }</h4>
    </div>
  );
}