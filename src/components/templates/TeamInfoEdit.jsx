import "./TeamInfo.css";
import React, { useEffect, useState } from "react";
import Container from '../layout/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { TagInput } from 'reactjs-tag-input';
import $ from 'jquery';


export default (props) => {


    const getName = props.getName;
    const getSite = props.getSite;
    const getDesc = props.getDesc;
    const getType = props.getType;
    const getTags = props.getTags;


    const radioStyle = {
        color: '#a1387e',
    }

    const [teamType, setTeamType] = useState('r');
    const [teamTags, setTeamTags] = useState([]);
    const [teamName, setTeamName] = useState('');
    const [teamSite, setTeamSite] = useState('');
    const [teamDesc, setTeamDesc] = useState('');


    const [teamsList, setTeamsList] = useState([]);
    useEffect(() => {
        async function fetchTeamsList() {
            try {
                console.log(props.teamid);
                let teamid = props.teamid;
                const requestUrl = "https://squad-tool.000webhostapp.com/ws/getteam.php?id=" + teamid;
                const response = await fetch(requestUrl);
                const responseJson = await response.json();
                console.log(responseJson);
                setTeamsList(responseJson);
                responseJson.map(data => {
                    //{index: 1, displayValue: "dsdasdas"}
                   
        
                    //setTeamTags(tags)
                    setTeamType(data.tipo)
                    setTeamName(data.nome)
                    setTeamSite(data.website)
                    setTeamDesc(data.descricao)
                    getName(data.nome);
                    getDesc(data.descricao);
                    getSite(data.website);
                    getType(data.tipo);
                    console.log(teamName)
                })
            }
            catch {

            }
        }
        fetchTeamsList();
    }, []);


    // $(document).ready(function () {
    //     console.log(teamsList)
    //     teamsList.map(data => {
    //         //{index: 1, displayValue: "dsdasdas"}
    //         var splitTags = data.tags.split("|");
    //         console.log(splitTags);
    //         var tags = [];
    //         for (let i = 1; i < splitTags.length; i++) {
    //             var item = {
    //                 displayValue: splitTags[i]
    //             }
    //             tags.push(item);
    //         }
    //         console.log(tags)

    //         //setTeamTags(tags)
    //         // setTeamType(data.tipo)
    //         // setTeamName(data.nome)
    //         // setTeamSite(data.website)
    //         // setTeamDesc(data.descricao)
    //         getName(data.nome);
    //         getDesc(data.descricao);
    //         getSite(data.website);
    //         getType(data.tipo);
    //         console.log(teamName)
    //     })
    // });

    $('form').bind("keypress", function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });

    const radioChange = (event) => {
        setTeamType(event.target.value);
        //console.log(event.target.value);
        getType(event.target.value)
    };

    const nameChange = (event) => {
        setTeamName(event.target.value);
        // console.log(event.target.value);
        getName(event.target.value);
        var div = $('#' + event.target.id).parent();
        var lbl = div.find('.lbl');
        if (event.target.value == "") {
            lbl.addClass('invalid-label');
            $('#' + event.target.id).addClass('invalid-input');
        }
        else {
            lbl.removeClass('invalid-label');
            $('#' + event.target.id).removeClass('invalid-input');
        }
    };

    function validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' +
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
            '((\\d{1,3}\\.){3}\\d{1,3}))' +
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
            '(\\?[;&a-z\\d%_.~+=-]*)?' +
            '(\\#[-a-z\\d_]*)?$', 'i');
        return !!pattern.test(str);
    }

    const siteChange = (event) => {
        setTeamSite(event.target.value);
        //console.log(event.target.value);
        getSite(event.target.value);
        var div = $('#' + event.target.id).parent();
        var lbl = div.find('.lbl');
        if (event.target.value == "") {
            lbl.addClass('invalid-label');
            $('#' + event.target.id).addClass('invalid-input');
        }
        else if (validURL(event.target.value) == false) {
            lbl.addClass('invalid-label');
            $('#' + event.target.id).addClass('invalid-input');
        }
        else {
            lbl.removeClass('invalid-label');
            $('#' + event.target.id).removeClass('invalid-input');
        }
    };

    const descChange = (event) => {
        setTeamDesc(event.target.value);
        //console.log(event.target.value);
        getDesc(event.target.value);

    };


    const onTagsChanged = (newTags) => {
        console.log('tags changed to: ', newTags);
        setTeamTags(newTags)
        getTags(newTags)
    };

    const onInputChanged = (e) => {
        console.log(`input value is now: ${e.target.value}`);
    }

    return (
        <div className="TeamInfo">
            <h2 className='TeamInfo__titulo'>TEAM INFORMATION</h2>
            <Container width='100%'>
                <Container width='50%'>
                    <div className='TeamInfo__box'>
                        <div className="input-group">
                            <label htmlFor="teamName" className='lbl '>Team Name</label>
                            <input type="text" id="teamName" className='teamInput' placeholder="Insert team name" value={teamName} maxLength="124" onChange={nameChange} required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="teamDesc" className='lbl '>Description</label>
                            <textarea id="teamDesc" rows="10" className='teamTextArea' value={teamDesc} onChange={descChange} maxLength="250" ></textarea>
                        </div>
                    </div>
                </Container>
                <Container width='50%'>
                    <div className='TeamInfo__box'>
                        <div className="input-group">
                            <label htmlFor="teamSite" className='lbl '>Team Website</label>
                            <input type="text" id="teamSite" className='teamInput' placeholder="http://myteam.com" pattern="https?://.+" maxLength="124" value={teamSite} onChange={siteChange} required />
                        </div>
                        <div className='radio-group'>
                            <label className='lbl '>Team type</label>
                            <RadioGroup row aria-label="position" name="position" defaultValue="r" onChange={radioChange} value={teamType}>
                                <FormControlLabel
                                    value="r"
                                    control={<Radio style={radioStyle} />}
                                    label="Real"
                                />
                                <FormControlLabel
                                    value="f"
                                    control={<Radio style={radioStyle} />}
                                    label="Fantasy"
                                />
                            </RadioGroup>
                        </div>
                        <div className='tag-group'>
                            <TagInput tags={teamTags} onTagsChanged={onTagsChanged} onInputChanged={onInputChanged} />
                        </div>
                    </div>
                </Container>
            </Container>
        </div>
    );
};
