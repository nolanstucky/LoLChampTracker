import { React} from "react";
import ChampCard from "../champCard";
import Navbar from "../navbar"
import Box from '@material-ui/core/Box';
import { Grid } from '@mui/material';

const champions = ['Aatrox','Ahri','Akali','Akshan','Alistar','Amumu','Anivia','Annie','Aphelios','Ashe','AurelionSol','Azir','Bard','Blitzcrank','Brand','Braum','Caitlyn','Camille','Cassiopeia','Chogath','Corki','Darius','Diana','DrMundo','Draven','Ekko','Elise','Evelynn','Ezreal','Fiddlesticks','Fiora','Fizz','Galio','Gangplank','Garen','Gnar','Gragas','Graves','Gwen','Hecarim','Heimerdinger','Illaoi','Irelia','Ivern','Janna','JarvanIV','Jax','Jayce','Jhin','Jinx','Kaisa','Kalista','Karma','Karthus','Kassadin','Katarina','Kayle','Kayn','Kennen','Khazix','Kindred','Kled','KogMaw','Leblanc','LeeSin','Leona','Lillia','Lissandra','Lucian','Lulu','Lux','Malphite','Malzahar','Maokai','MasterYi','MissFortune','Mordekaiser','Morgana','Nami','Nasus','Nautilus','Neeko','Nidalee','Nocturne','Nunu','Olaf','Orianna','Ornn','Pantheon','Poppy','Pyke','Qiyana','Quinn','Rakan','Rammus','RekSai','Rell','Renekton','Rengar','Riven','Rumble','Ryze','Samira','Sejuani','Senna','Seraphine','Sett','Shaco','Shen','Shyvana','Singed','Sion','Sivir','Skarner','Sona','Soraka','Swain','Sylas','Syndra','TahmKench','Taliyah','Talon','Taric','Teemo','Thresh','Tristana','Trundle','Tryndamere','TwistedFate','Twitch','Udyr','Urgot','Varus','Vayne','Veigar','Velkoz','Vi','Viego','Viktor','Vladimir','Volibear','Warwick','MonkeyKing','Xayah','Xerath','XinZhao','Yasuo','Yone','Yorick','Yuumi','Zac','Zed','Ziggs','Zilean','Zoe','Zyra','Vex']
var playedChampions = JSON.parse(localStorage.getItem("played champ"));
console.log(playedChampions)
export default function Home() {
    return(
        <Box>
        <Navbar/>
        <Grid display="flex" flexWrap="wrap" marginLeft="15px" marginTop="100px">
            {champions.map(champ=> <ChampCard props={champ}/>)}
        </Grid>
        </Box>
    )
}