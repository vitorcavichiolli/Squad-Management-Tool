import React, { useState } from "react";
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "@emotion/styled";
import InfoPlayer from '../templates/InfoPlayer';

GetPlayers.propTypes = {
    playersList: PropTypes.array,
}
GetPlayers.defaultProps = {
    playersList: [],
}


function GetPlayers(props) {
    const { playersList } = props;

    const [state, setState] = useState({ player: playersList });

    const grid = 100;
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const PlayerItem = styled.div`
  display: flex;
  padding: 10px;
  border: 1px dashed #9f9f9f;
  background-image: linear-gradient(to bottom, #fff, #e5e5e5);
  margin: 10px 0;
`;

    function Player({ player, index }) {
        return (
            <Draggable draggableId={player.id} index={index}>
                {provided => (
                    <PlayerItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <InfoPlayer name={player.nome} id={player.id} age={player.idade} nac={player.nacionalidade}></InfoPlayer>
                    </PlayerItem>
                )}
            </Draggable>
        );
    }
    const PlayerList = React.memo(function PlayerList({ players }) {
        return playersList.map((data, index) => (
            <Player player={data} index={index} key={data.id} />
        ));
    });

    function onDragEnd(result) {
        if (!result.destination) {
            return;
        }

        if (result.destination.index === result.source.index) {
            return;
        }

        // const players = reorder(
        //     state.player,
        //     result.source.index,
        //     result.destination.index
        // );

        // setState({ players });
    }


    return (
        (
          
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="list">
                    {provided => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            <PlayerList players={state.player} />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        )

    );
}

export default GetPlayers;