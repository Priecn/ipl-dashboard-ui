import { React,  useState, useEffect } from "react";
import { useParams } from "react-router";
import { MatchDetailCard } from "../components/MatchDetailCard";

export const MatchPage =  () => {

    const [matchList, seMatchList] = useState();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const {teamName, year} = useParams();

    useEffect(
        () => {
            function fetchTeam() {
                console.log("UseEffect::");
                fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        seMatchList(result);
                        setIsLoaded(true);
                    },
                    (error) => {
                        setError(error);
                        setIsLoaded(true);
                    }
                );
            }

            fetchTeam();
        }, [teamName, year]
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
    } else if (!matchList) {
        return (<div>
                    <h1>Not Found - 404 !!</h1>
                </div>);
    } else {
        return (
            <div className="MatchPage">
            <h3>Matche Page</h3>
            <p>{ teamName } - { year }</p>
            {matchList.map(m => <MatchDetailCard match={m} teamName={ teamName } key={ m.id }/>)}
            </div>
        );
    }
}