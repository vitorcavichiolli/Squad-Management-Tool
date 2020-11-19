import React from "react";
import PropTypes from 'prop-types';

GetTeams.propTypes = {
    teamsList: PropTypes.array,
}
GetTeams.defaultProps = {
    teamsList: [],
}

function GetTeams(props) {
    const { teamsList } = props;
    return (
        (
            teamsList.map(data => (

                <tr key={data.id} >
                    <td>{data.nome}</td>
                    <td>{data.nacionalidade}</td>
                </tr>
            ))
        )

    );
}

export default GetTeams;