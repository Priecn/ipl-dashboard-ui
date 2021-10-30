import { React } from 'react';
export const MatchSmallCard =  ({match}) => {
  return (
    <div className="MatchSmallCard">
      <p>{ match.teamToBatFirstInn } vs { match.teamToBatSecondInn }</p>
    </div>
  );
}