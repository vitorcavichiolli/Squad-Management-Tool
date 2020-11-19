import "./TeamTable.css";
import React, { useEffect, useState } from "react";
import GetTeams from '../tools/GetTeams';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import DataTable from 'react-data-table-component';
import IconButton from '@material-ui/core/IconButton';
import History from '../tools/History';
import { func } from "prop-types";
import $ from 'jquery';


export default (props) => {

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

    const columns = [
        {
            name: 'Name',
            selector: 'nome',
            sortable: true,
        },
        {
            name: 'Description',
            selector: 'descricao',
            sortable: true,
        },
        {
            cell: () => <IconButton className='btnRow' >
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></IconButton>,
            button: true,
        },
        {
            cell: () => <IconButton className='btnRow' ><FontAwesomeIcon icon={faShare}></FontAwesomeIcon></IconButton>,
            button: true,
        },
        {
            cell: row => <a className='btnRow' row={row} onClick={() => handleEdit(row)} ><FontAwesomeIcon icon={faPen}></FontAwesomeIcon></a>,
            button: true,
        },
    ];



    let team_id = '';
    function handleEdit(row) {
        team_id = row.id;
        var link = document.getElementById('changePag');
         for (var i = 0; i < 50; i++)
             link.click();
    }

    return (
        // <div className="TeamTable">
        //     <table className='TeamTable__table'>
        //         <thead>
        //             <tr>
        //                 <th >Name </th>
        //                 <th>Description</th>
        //             </tr>
        //         </thead>
        //         <tbody className='TeamTable__table_body'>
        //             <GetTeams teamsList={teamsList}></GetTeams>
        //         </tbody>
        //     </table>
        // </div>
        <div>
            <DataTable
                columns={columns}
                data={teamsList}
                highlightOnHover
                keyField='id'

            />
            <a id="changePag" href='' onClick={() => History.push('/Edit/' + team_id)} >muda</a>
        </div>
    );
};
