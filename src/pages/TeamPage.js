    import './TeamPage.scss';
    import { React, useEffect, useState } from 'react';
    import { useParams, Link } from 'react-router-dom';
    import { MatchDetailCard } from '../components/MatchDetailCard';
    import { MatchSmallCard } from '../components/MatchSmallCard';
    import { PieChart } from 'react-minimal-pie-chart';
    import { FaAngleDoubleRight } from 'react-icons/fa';

    export const TeamPage =  () => {


        const [team, setTeam] = useState();
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);

        let latestYear;

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
            latestYear = team.matchList[0].matchDate.split('-')[0];
            return (
                <div className="TeamPage">
                    <div className="team-name-section">
                        <h1 className = "team-name">{ team.name }</h1>
                    </div>
                    <div className="win-loss-section">
                    <PieChart data={[
                                { title: 'Loss', value: team.totalMatchPlayed - team.totalWins, color: '#975050' },
                                { title: 'Wins', value: team.totalWins, color: '#53a553' }
                            ]}
                    />
                    </div>
                    
                    <div className="match-detail-section">
                        <h3>Latest Matches</h3>
                        <MatchDetailCard match={ team.matchList[0] } teamName={ team.name }/>
                    </div>
                    

                    {
                        team.matchList.slice(1).map(m => <MatchSmallCard match={m} teamName={ team.name } key={ m.id }/>)
                    
                    }

                    <div className="show-more">
                        <Link to={ `/teams/${team.name}/matches/${latestYear}` }> 
                            <FaAngleDoubleRight />
                        </Link>
                    </div>
                </div>
            );
        }
    }
