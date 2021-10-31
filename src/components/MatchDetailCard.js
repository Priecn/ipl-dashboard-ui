import './MatchDetailCard.scss';
import { React } from 'react';
import { Link } from 'react-router-dom';
export const MatchDetailCard =  ({match, teamName}) => {
    const otherTeam = teamName === match.teamToBatFirstInn ? match.teamToBatSecondInn : match.teamToBatFirstInn;

    const otherTeamRoute = `/teams/${otherTeam}`;

    const isMatchWon = teamName === match.matchWinner;

  return (
    <div className={ isMatchWon ? "MatchDetailCard won" : "MatchDetailCard lost" }>
      
      <div>
        <span className="vs">vs</span>
        <h1>
          <Link to={otherTeamRoute}> { otherTeam } </Link>
        </h1>
        <h2 className="match-date">{ match.matchDate }</h2>
        <h3 className="match-venue"> at { match.venue}, {match.city} </h3>
        <h3 className="match-result"> { match.matchWinner } won by { match.resultMargin} { match.matchResult } </h3>
      </div>
      
      <div className="additional-detail">
        <h3> First Innings </h3>
        <p> {match.teamToBatFirstInn} </p>
        <h3> Second Innings </h3>
        <p> {match.teamToBatSecondInn} </p>
        <h3> Man of the match </h3>
        <p> {match.playerOfMatch} </p>
        <h3> Umpires </h3>
        <p> {match.umpire1}, {match.umpire2} </p>
      </div>
      
    </div>
  );
}