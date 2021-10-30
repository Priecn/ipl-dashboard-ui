    import { React, useEffect, useState } from 'react';
    import { MatchDetailCard } from '../components/MatchDetailCard';
    import { MatchSmallCard } from '../components/MatchSmallCard';
    export const TeamPage =  () => {


        const [team, setTeam] = useState();
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);

        useEffect(
            () => {
                 fetch('http://localhost:8080/team/Rajasthan%20Royals')
                .then(res => res.json())
                .then(
                    (result) => {
                        setTeam(result);
                        setIsLoaded(true);
                    },
                    (error) => {
                        setError(error);
                        setIsLoaded(true);
                    }
                )
            }, []
        );

        if (!isLoaded) {
            return <h1> Loading data... </h1>
        } else if (error) {
            return (
                <div>
                    <h1>Error !!</h1>
                    <p>{ error.message }</p>
                </div>
            );
        } else {
            return (
                <div className="TeamPage">
                    <h1>{ team.name }</h1>
                    <MatchDetailCard match={team.matchList[0]}/>

                    {team.matchList.slice(1).map(match => <MatchSmallCard match={match}/>)}
                </div>
            );
        }
    }
