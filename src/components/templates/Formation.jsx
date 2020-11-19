import "./Formation.css";
import React, { useEffect, useState } from "react";
import SelectFormation from '../tools/SelectFormation';


export default (props) => {

    const [formList, setFormList] = useState([]);
    useEffect(() => {
        async function fetchFormList() {
            try {
                const requestUrl = "https://squad-tool.000webhostapp.com/ws/getformacoes.php";
                const response = await fetch(requestUrl);
                const responseJson = await response.json();
                console.log(responseJson);
                setFormList(responseJson);
            }
            catch {

            }
        }
        fetchFormList();
    }, []);


    
    return (
        <div className="Formation">
            <div className="select-group">
                <label className='lblSelect'>Formation</label>
                <select className='formSelect'>
                    <SelectFormation formList={formList}></SelectFormation>
                </select>
            </div>
            <div className="field"></div>
            <button type='submit' className='btnSave'>Save</button>
        </div>
    );
};
