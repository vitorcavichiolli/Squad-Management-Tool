import React from "react";
import AvgList from '../templates/AvgList';
import Container from '../layout/Container';
import Card from '../templates/Card';
import TeamTable from '../layout/TeamTable';
import PlayerStatsCard from '../templates/PlayerStatsCard';

export default (props) => {

    return (
        <div className="content">
            <Container width='50%' >
                <Card titulo="My Teams" color="#fff" button='true'>
                    <TeamTable></TeamTable>
                </Card>
            </Container>
            <Container width='50%'>
                <Card titulo="Top 5" color="#fff" button='false'>
                    <div className="contentList">
                        <div className='containerList' >
                            <h2 className='listTitle'>Highest avg age</h2>
                            <AvgList url='https://squad-tool.000webhostapp.com/ws/getmaioresmedias.php'></AvgList>
                        </div>
                        <div className='containerList' >
                            <h2 className='listTitle'>Lowest avg age</h2>
                            <AvgList url='https://squad-tool.000webhostapp.com/ws/getmenoresmedias.php'></AvgList>
                        </div>
                    </div>

                </Card>
                <PlayerStatsCard></PlayerStatsCard>
            </Container>
        </div>
    );
};