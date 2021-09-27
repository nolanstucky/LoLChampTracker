import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Stack } from '@mui/material';


export default function ChampCard(props) {

    const [showChamp, setShowChamp] = useState(true);
   

    function handleClick(e) {
        const id = e.target.id;
        let playedChampions = JSON.parse(localStorage.getItem("played champ"));
        playedChampions.push(id)
        localStorage.setItem('played champ', JSON.stringify(playedChampions));
        setShowChamp(false)
        console.log(id);
      }

    return (
        <Stack margin="5px" onClick={handleClick} id={props.props}>
            {showChamp ? 
            <Box>
                <Box sx={{
                    
                }}>
                
                    <img id={props.props} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.props}_0.jpg`} height="225px"/>
                </Box>
                <Box sx={{
                    width: "124px",
                    height: "50px",
                    zIndex:1,
                    bgcolor: 'black',
                    marginTop: -55,
                }}>
                    <Box sx={{
                        marginBottom: 5,
                    }}>
                        <h1 style={{fontSize:"22px", marginTop:"5px", marginLeft:"10px", color:"white", fontFamily:"Friz Quadrata"}}>{props.props}</h1>
                    
                    </Box>
                </Box>
            </Box>
            : null}
        </Stack>


    )

}

