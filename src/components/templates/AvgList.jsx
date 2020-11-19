import "./AvgList.css";
import React, { useEffect, useState } from "react";
import GetavgList from '../tools/GetAvgList';

export default (props) => {

    const [avgList, setAvgList] = useState([]);
    useEffect(() => {
        async function fetchAvgList() {
            try {
                console.log(props.url)
                const requestUrl = props.url;
                const response = await fetch(requestUrl);
                const responseJson = await response.json();
                console.log(responseJson);
                setAvgList(responseJson);
            }
            catch {

            }
        }
        fetchAvgList();
    }, []);



    return (
      <div className="listBox">
          <div className="avgList">
            { <GetavgList avgList={avgList}></GetavgList> }
          </div>
      </div>
    );
};
