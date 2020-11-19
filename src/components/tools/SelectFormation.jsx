import React from "react";
import PropTypes from 'prop-types';

GetFormations.propTypes = {
    formList: PropTypes.array,
}
GetFormations.defaultProps = {
    formList: [],
}

function GetFormations(props) {
    const { formList } = props;
    return (
        (
            formList.map(data => (

                <option key={data.id} value={data.id}>{data.formacao}</option>
            ))
        )

    );
}

export default GetFormations;