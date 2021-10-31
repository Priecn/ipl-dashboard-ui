import './MatchSmallCard.scss';
import { React } from 'react';
import { Link } from 'react-router-dom';
export const MatchSmallCard =  ({match, teamName}) => {

    const otherTeam = teamName === match.teamToBatFirstInn ? match.teamToBatSecondInn : match.teamToBatFirstInn;

    const otherTeamRoute = `/teams/${otherTeam}`;

    const isMatchWon = teamName === match.matchWinner;

    return (
        <div className={ isMatchWon ? "MatchSmallCard won" : "MatchSmallCard lost" }>
            <span className="vs">vs</span>
            <h3 className="team-name"> 
                <Link to={otherTeamRoute}> { otherTeam } </Link>
            </h3>
            <p className="match-result"> { match.matchWinner } won by { match.resultMargin} { match.matchResult } </p>
        </div>
    );
}