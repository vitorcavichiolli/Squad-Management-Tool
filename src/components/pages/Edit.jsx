import React, { useEffect, useState } from "react";
import axios from 'axios';
import $ from 'jquery';
import Container from '../layout/Container';
import Card from '../templates/Card';
import TeamInfoEdit from '../templates/TeamInfoEdit'
import SquadConfig from '../templates/SquadConfig'
import Modal from 'react-awesome-modal';
import History from '../tools/History';

export default (props) => {


    


    const [teamType, setTeamType] = useState('r');
    const [teamTags, setTeamTags] = useState([]);
    const [teamName, setTeamName] = useState('');
    const [teamSite, setTeamSite] = useState('');
    const [teamDesc, setTeamDesc] = useState('');
    let teamid = props.match.params.id;
    function setName(name) {
        setTeamName(name)
    }
    function setSite(site) {
        setTeamSite(site)
    }
    function setDesc(desc) {
        setTeamDesc(desc)

    }
    function setType(type) {
        setTeamType(type)
        console.log(type)

    }
    function setTags(tags) {
        setTeamTags(tags)
    }



    $('form').bind("keypress", function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });

    const handleSubmit = (event) => {
        console.log("submits")

        var tags = '';

        teamTags.map((data) => (
            tags += '|' + data.displayValue
        ));
        console.log(tags);
        console.log(teamName);
        console.log(teamSite);
        console.log(teamType);
        console.log(teamDesc);


        var bodyFormData = new FormData();
        bodyFormData.append('nome', teamName);
        bodyFormData.append('website', teamSite);
        bodyFormData.append('tipo', teamType);
        bodyFormData.append('descricao', teamDesc);
        bodyFormData.append('tags', tags);
        bodyFormData.append('id', teamid);

        axios({
            method: 'post',
            url: 'https://squad-tool.000webhostapp.com/ws/editteam.php',
            data: bodyFormData,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(async function (response) {
                //handle success
                console.log(response);
                openModal();
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
        event.preventDefault();
    };

    const [modal, setModal] = useState(false);


    function closeModal() {
        setModal(false);
        console.log(modal)
    };
    function openModal() {
        setModal(true);
        console.log(modal)
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="content">

                <Container width='100%'>
                    <Card titulo="Edit your team" color="#fff" button='false'>
                        <TeamInfoEdit teamid={teamid} getName={setName} getSite={setSite} getDesc={setDesc} getType={setType} getTags={setTags}></TeamInfoEdit>
                        <SquadConfig></SquadConfig>
                    </Card>
                </Container>
                <section>
                    <Modal
                        visible={modal}
                        width="400"
                        height="300"
                        effect="fadeInUp"
                        onClickAway={() => History.push('/')}
                    >
                        <div className='modal'>
                            <h1 className='modalTitle'>Changes have been recorded </h1>
                            <p className='modalText'>Great! The changes on your team {teamName} are saved. <br />
    Very good changes, you're a true manager!</p>
                            <a className='modalButton' href="" onClick={() => History.push('/')}>Close</a>
                        </div>
                    </Modal>
                </section>
            </div>
        </form>
    );
};