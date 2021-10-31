import './TeamTile.scss';
import { React } from 'react';
import { Link } from 'react-router-dom';
import { PieChart } from 'react-minimal-pie-chart';

export const TeamTile =  ({team}) => {

    const teamRoute = `/teams/${team.name}`;

    return (
      <div className="TeamTile">
        <PieChart
          data={[
            {
              title: "Loss",
              value: team.totalMatchPlayed - team.totalWins,
              color: "#975050",
            },
            { title: "Wins", value: team.totalWins, color: "#53a553" },
          ]}
        />

        <h3 className="team-name">
          <Link to={teamRoute}> {team.name} </Link>
        </h3>
      </div>
    );
}