import "./SquadConfig.css";
import React, { useEffect, useState } from "react";
import Container from '../layout/Container';
import ListPlayers from '../tools/ListPlayers';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Formation from './Formation';

export default (props) => {

    const [playerList, setPlayerList] = useState([]);

    const [filter, setFilter] = useState("");

    function filterChange(e) {
        setFilter(e.target.value);
        console.log(e.target.value)
        fetchPlayerList(e.target.value);
    }



    async function fetchPlayerList(par) {
        try {
            const requestUrl = "https://squad-tool.000webhostapp.com/ws/getfilteredjogadores.php?par=" + par;
            const response = await fetch(requestUrl);
            const responseJson = await response.json();
            console.log(responseJson);
            setPlayerList(responseJson);
        }
        catch {

        }
    }



    return (
        <div className="SquadConfig">
            <h2 className='SquadConfig__titulo'>CONFIGURE SQUAD</h2>
            <Container width='100%'>
                <Container width='50%'>
                    <div className='TeamInfo__box'>
                        <Formation></Formation>
                    </div>
                </Container>
                <Container width='50%'>
                    <div className='TeamInfo__box'>
                        <div className="input-group-2">
                            <label htmlFor="filterPlayer" className='lbl '>Search Players</label>
                            <input id="filterPlayer" placeholder="Type player name" className='txtFiltro' value={filter} onChange={filterChange} />
                        </div>
                        <div className='playersList'>
                            <ListPlayers playersList={playerList}></ListPlayers>
                        </div>
                    </div>
                </Container>
            </Container>
        </div>
    );
};
