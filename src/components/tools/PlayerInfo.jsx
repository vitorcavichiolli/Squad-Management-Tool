import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';


// function GetPlayer(props) {
//     const { playerList } = props;


//     return (
//         (
//             playerList.map(data => (

//                 <div className="PlayerStatsCard__box" key={data.nome}>
//                     <div className='PlayerStatsCard__player'>{data.nome}</div>
//                     <span className="PlayerStatsCard__per"></span>
//                 </div>
//             ))
//         )

//     );
// }

// export default GetPlayer;

export default (props) => {
    const { playerList } = props;
    const [teamsList, setTeamsList] = useState([]);
    useEffect(() => {
        async function fetchTeamsList() {
            try {
                const requestUrl = "https://squad-tool.000webhostapp.com/ws/gettimes.php";
                const response = await fetch(requestUrl);
                const responseJson = await response.json();
                console.log(responseJson);
                setTeamsList(responseJson);
            }
            catch {

            }
        }
        fetchTeamsList();
    }, []);

    console.log(teamsList.length);
    return (
        (playerList.map(data => (

            <div className="PlayerStatsCard__box" key={data.nome}>
                <div className='PlayerStatsCard__player'>{data.nome}</div>
                <span className="PlayerStatsCard__per">{Math.round((100 * data.quantidade) / teamsList.length) + "%"}</span>
                <div className="PlayerStatsCard__circ"></div>
            </div>
        )))
    );
};
