    import { React, useEffect, useState } from 'react';
    import { useParams } from 'react-router-dom';
    import { MatchDetailCard } from '../components/MatchDetailCard';
    import { MatchSmallCard } from '../components/MatchSmallCard';
    export const TeamPage =  () => {


        const [team, setTeam] = useState();
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);

        const {teamName} = useParams();

        useEffect(
            () => {
                function fetchTeam() {
                    console.log("UseEffect::");
                    fetch(`http://localhost:8080/team/${teamName}`)
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
                    );
                }

                fetchTeam();
            }, [teamName]
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
        } else if (!team || !team.name) {
            return (<div>
                        <h1>Not Found - 404 !!</h1>
                    </div>);
        } else {
            return (
                <div className="TeamPage">
                    <h1>{ team.name }</h1>
                    <MatchDetailCard match={ team.matchList[0] } teamName={ team.name }/>

                    {team.matchList.slice(1).map(m => <MatchSmallCard match={m} teamName={ team.name } key={ m.id }/>)}
                </div>
            );
        }
    }
