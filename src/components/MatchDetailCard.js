import { React } from 'react';
import { Link } from 'react-router-dom';
export const MatchDetailCard =  ({match, teamName}) => {
    const otherTeam = teamName === match.teamToBatFirstInn ? match.teamToBatSecondInn : match.teamToBatFirstInn;

    const otherTeamRoute = `/teams/${otherTeam}`;

  return (
    <div className="MatchDetailCard">
      <h3>Latest Matches</h3>
      <h1> vs <Link to={otherTeamRoute}> { otherTeam } </Link></h1>
      <h2>{ match.matchDate }</h2>
      <h3> at { match.venue}, {match.city} </h3>
      <h3> { match.matchWinner } won by { match.resultMargin} { match.matchResult } </h3>
    </div>
  );
}