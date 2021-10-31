import './HomePage.scss';
import { React,  useState, useEffect } from "react";
import { TeamTile } from '../components/TeamTile';

export const HomePage =  () => {

    const [teamList, setTeamList] = useState();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(
        () => {
            function fetchTeam() {
                fetch(`http://localhost:8080/team`)
                .then(res => res.json())
                .then(
                    (result) => {
                        setTeamList(result);
                        setIsLoaded(true);
                    },
                    (error) => {
                        setError(error);
                        setIsLoaded(true);
                    }
                );
            }

            fetchTeam();
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
    } else if (!teamList) {
        return (<div>
                    <h1>Not Found - 404 !!</h1>
                </div>);
    } else {
        return (
          <div className="HomePage">
            <div>
              <h1 className="title">IPL Teams</h1>
            </div>
            <div className="team-list">
                {
                    teamList.map((t) => (
                        <TeamTile team={t}/>
                    ))
                }
            </div>     
          </div>
        );
    }
}