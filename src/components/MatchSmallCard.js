import { React } from 'react';
import { Link } from 'react-router-dom';
export const MatchSmallCard =  ({match, teamName}) => {

    const otherTeam = teamName === match.teamToBatFirstInn ? match.teamToBatSecondInn : match.teamToBatFirstInn;

    const otherTeamRoute = `/teams/${otherTeam}`;

    return (
        <div className="MatchSmallCard">
        <h3> vs  
            <Link to={otherTeamRoute}> { otherTeam } </Link>
        </h3>
        <p> { match.matchWinner } won by { match.resultMargin} { match.matchResult } </p>
        </div>
    );
}