import { React, useState } from "react";
import ChampCard from "../champCard";
import Box from '@material-ui/core/Box';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import PlayedChampCard from "../playedChampCard";
import { Paper, InputBase, Divider } from "@mui/material";

var champions = ['Aatrox', 'Ahri', 'Akali', 'Akshan', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Aphelios', 'Ashe', 'AurelionSol', 'Azir', 'Bard', 'Blitzcrank', 'Brand', 'Braum', 'Caitlyn', 'Camille', 'Cassiopeia', 'Chogath', 'Corki', 'Darius', 'Diana', 'DrMundo', 'Draven', 'Ekko', 'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Graves', 'Gwen', 'Hecarim', 'Heimerdinger', 'Illaoi', 'Irelia', 'Ivern', 'Janna', 'JarvanIV', 'Jax', 'Jayce', 'Jhin', 'Jinx', 'Kaisa', 'Kalista', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kayn', 'Kennen', 'Khazix', 'Kindred', 'Kled', 'KogMaw', 'Leblanc', 'LeeSin', 'Leona', 'Lillia', 'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai', 'MasterYi', 'MissFortune', 'Mordekaiser', 'Morgana', 'Nami', 'Nasus', 'Nautilus', 'Neeko', 'Nidalee', 'Nocturne', 'Nunu', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke', 'Qiyana', 'Quinn', 'Rakan', 'Rammus', 'RekSai', 'Rell', 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze', 'Samira', 'Sejuani', 'Senna', 'Seraphine', 'Sett', 'Shaco', 'Shen', 'Shyvana', 'Singed', 'Sion', 'Sivir', 'Skarner', 'Sona', 'Soraka', 'Swain', 'Sylas', 'Syndra', 'TahmKench', 'Taliyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'TwistedFate', 'Twitch', 'Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar', 'Velkoz', 'Vi', 'Viego', 'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'MonkeyKing', 'Xayah', 'Xerath', 'XinZhao', 'Yasuo', 'Yone', 'Yorick', 'Yuumi', 'Zac', 'Zed', 'Ziggs', 'Zilean', 'Zoe', 'Zyra', 'Vex']
var playedChampions = JSON.parse(localStorage.getItem("played champ"));
console.log(playedChampions)
determineChampionsLeft();

function determineChampionsLeft() {

    champions = champions.filter(item => !playedChampions.includes(item))
    console.log(champions)
}


export default function Home() {

    const [term, setTerm] = useState("");
    const handleInputChange = event => {
        setTerm(event.target.value)
    }
    const championFilter = champions.filter(champion =>
        champion.toLowerCase().startsWith(term.toLowerCase()))
    console.log(championFilter)

    const [showPlayedChamps, setShowPlayedChamps] = useState(false)
    const [showUnplayedChamps, setShowUnplayedChamps] = useState(true)
    const [playedButton, setPlayedButton] = useState(true)
    const [unplayedButton, setUnplayedButton] = useState(false)

    const [showRandomChamp, setShowRandomChamp] = useState(false);
    const [count, setCount] = useState(0);

    let randomNum = Math.floor(Math.random() * champions.length);

    function handleRandomChamp() {
        setShowRandomChamp(false);
        randomNum = Math.floor(Math.random() * champions.length);
        // randomChampImage = <img src={`http://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/${champions[randomNum]}.png`} />
        setShowRandomChamp(true);
        setCount(champions[randomNum])
        console.log(champions[randomNum])

    }

    function handleLockIn() {
        window.location.reload(false);
    }

    function handleShowPlayedChamps() {

        setShowUnplayedChamps(false)
        setShowPlayedChamps(true)
        setPlayedButton(false)
        setUnplayedButton(true)
    }

    function handleShowUnplayedChamps() {

        setShowUnplayedChamps(true)
        setShowPlayedChamps(false)
        setPlayedButton(true)
        setUnplayedButton(false)
    }

    function handleChampReset() {
        playedChampions = [];
        localStorage.setItem('played champ', JSON.stringify(playedChampions));
        window.location.reload(false);
    }
    return (
        <Box>
            <Box sx={{ flexGrow: 1 }} align="center" style={{ position: "fixed", top: 0, width: "100%", height: "145px", backgroundColor: "#121c40", zIndex: 10, boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} boxShadow="initial">
                <Grid container justifyContent="center" spacing={0}>
                    <Grid marginTop="45px" marginLeft="-100px" marginRight="20px">
                        <Button size="large" onClick={handleLockIn} variant="contained"><span style={{ fontFamily: "Friz Quadrata" }}>Lock In </span></Button>
                    </Grid>

                    <Grid item xs={0} marginTop="45px" marginRight="100px">
                        <Button size="large" onClick={handleRandomChamp} variant="contained"><span style={{ fontFamily: "Friz Quadrata" }}>Random</span></Button>
                    </Grid>
                    <Grid marginTop="5px" width="90px" height="90px" marginLeft="-50px" marginRight="53px">

                        <Box width="90px" height="90px" marginLeft="50px" marginRight="50px">
                        {showRandomChamp ? <img height="90px" src={`http://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/${count}.png`} /> : null}
                        </Box>

                        <Box margin="10px">
                            <Paper
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 160,}}
                            >
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search Champions"
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                    onChange={handleInputChange}
                                />
                                
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid marginTop="45px" marginLeft="100px">
                        <Button size="large" onClick={handleChampReset} variant="contained"><span style={{ fontFamily: "Friz Quadrata" }}>Reset</span></Button>
                    </Grid>
                    {playedButton ?
                        <Grid marginTop="45px" marginLeft="20px" marginRight="-100px">
                            <Button size="large" onClick={handleShowPlayedChamps} variant="contained"><span style={{ fontFamily: "Friz Quadrata" }}>Played</span></Button>
                        </Grid>
                        : null}
                    {unplayedButton ?
                        <Grid marginTop="45px" marginLeft="20px" marginRight="-100px">
                            <Button size="large" onClick={handleShowUnplayedChamps} variant="contained"><span style={{ fontFamily: "Friz Quadrata" }}>Unplayed</span></Button>
                        </Grid>
                        : null}
                </Grid>

            </Box>
            {showUnplayedChamps ?
                <Grid display="flex" flexWrap="wrap" marginLeft="25px" marginTop="150px">
                    {championFilter.map(champ => <ChampCard props={champ} />)}
                </Grid>
                : null}

            {showPlayedChamps ?
                <Grid display="flex" flexWrap="wrap" marginLeft="12px" marginTop="150px">
                    {playedChampions.map(champ => <PlayedChampCard props={champ} />)}
                </Grid>
                : null}
        </Box>
    )
}