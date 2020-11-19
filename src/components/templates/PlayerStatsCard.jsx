import "./PlayerStatsCard.css";
import React, { useEffect, useState } from "react";
import PlayerInfo from '../tools/PlayerInfo';

export default (props) => {

    const [highList, setHighList] = useState([]);
    useEffect(() => {
        async function fetchHighList() {
            try {
                const requestUrl = 'https://squad-tool.000webhostapp.com/ws/getmostpicked.php';
                const response = await fetch(requestUrl);
                const responseJson = await response.json();
                console.log(responseJson);
                setHighList(responseJson);
            }
            catch {

            }
        }
        fetchHighList();
    }, []);

    const [lowList, setLowList] = useState([]);
    useEffect(() => {
        async function fetchLowList() {
            try {
                const requestUrl = 'https://squad-tool.000webhostapp.com/ws/getlesspicked.php';
                const response = await fetch(requestUrl);
                const responseJson = await response.json();
                console.log(responseJson);
                setLowList(responseJson);
            }
            catch {

            }
        }
        fetchLowList();
    }, []);

    

    return (
        <div className='PlayerStatsCard'>
            <div className='PlayerStatsCard__content'>
                <h2 className="PlayerStatsCard__title">Most picked player</h2>
                <PlayerInfo playerList={highList} ></PlayerInfo>
            </div>
            <div className='PlayerStatsCard__content'>
                <h2 className="PlayerStatsCard__title">Less picked player</h2>
                <PlayerInfo playerList={lowList} ></PlayerInfo>
            </div>
        </div>
    );
};
