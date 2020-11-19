import React from "react";
import PropTypes from 'prop-types';

GetAvg.propTypes = {
    avgList: PropTypes.array,
}
GetAvg.defaultProps = {
    avgList: [],
}

function GetAvg(props) {
    const { avgList } = props;
    return (
        (
            avgList.map(data => (

                <div className="avgRow" key={data.timeid}>
                    <span className="avgName">{data.nome}</span>
                    <span className="avgAverage">{Math.round(data.media * 10) / 10}</span>
                </div>
            ))
        )

    );
}

export default GetAvg;