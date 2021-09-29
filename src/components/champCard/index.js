import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Stack } from '@mui/material';
import { motion } from 'framer-motion';


export default function ChampCard(props) {

    
    const [border, setBorder] = useState(0)
    const [pickChamp, setPickChamp] = useState(false)


    function handleClick(e) {
        const id = e.target.id;
        let playedChampions = JSON.parse(localStorage.getItem("played champ"));
        if (pickChamp === false){
            playedChampions.push(id)
            localStorage.setItem('played champ', JSON.stringify(playedChampions));
            setPickChamp(true)
            console.log("you clicked me")
        } else if (pickChamp === true){
            let playedChampions = JSON.parse(localStorage.getItem("played champ"));
            playedChampions = playedChampions.filter(item => id !== (item))
            localStorage.setItem('played champ', JSON.stringify(playedChampions));
            setPickChamp(false)
        }

    }

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            onClick={handleClick} id={props.props}
         
        >
            <Stack margin="10px">
                
                <Box>
                    <img id={props.props} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.props}_0.jpg`} height="225px" />
                </Box>
                <Box sx={{
                    width: "124px",
                    height: "53px",
                    zIndex: 1,
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    marginTop: -60,
                }}>
                    <Box sx={{
                        marginBottom: 5,
                    }}>
                        <h1 style={{ fontSize: "22px", marginTop: "5px", marginLeft: "10px", color: "white", fontFamily: "Friz Quadrata" }}>{props.props}</h1>

                    </Box>
                </Box>
                {pickChamp ?
                  
                    <Box sx={{
                        width: "124px",
                        height: "224px",
                        zIndex: 1,
                        bgcolor: 'rgba(0, 0, 0, 0.8)',
                        marginTop: -220,
                        marginBottom: -5
                        
                    }}
                    id={props.props}/>
                : null}
            </Stack>
        </motion.div>


    )

}

