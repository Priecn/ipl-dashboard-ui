import './YearSelector.scss';
import { React } from 'react';
import { Link } from 'react-router-dom';

export const YearSelector =  ({selectedYear, teamName}) => {

    let years = [];
    const startYear = process.env.REACT_APP_DATA_START_YEAR;
    const endYear = process.env.REACT_APP_DATA_END_YEAR;

    for(let i = startYear; i <= endYear; i++) {
        years.push(+i);
    }

    console.log(selectedYear);

    return (
        <div className="YearSelector">
            { years.map(year => 
            
            <div key={year} className={ +selectedYear === year ? "selectedYear" : "year" }> 
                <Link to={ `/teams/${teamName}/matches/${year}` }> 
                    { year }
                </Link>
            </div>
            
            ) }
        </div>
    );
}