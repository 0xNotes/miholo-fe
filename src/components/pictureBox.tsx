import PictureFrame from "./pictureFrame";
import Milady from "../assets/milady.jpg";
import Miaura from "../assets/milady-aura.jpg";
import Pixelady from "../assets/pixelady.png";
import RadBro from "../assets/radbro.jpg";
import BoredMiladyMaker from "../assets/bored-milady2.jpg";
import Bitch from "../assets/milady-that-bitch.jpg";
import Ghiblady from "../assets/ghiblady.jpg";
import McLady from "../assets/mclady.jpg";
import Remi from "../assets/rem_baby.jpg";



export default function PictureBox() {
    return(
        <div className="PictureBox">
            <PictureFrame collection="Milady Maker" image={Milady} link={"https://miladymaker.net/"}/>
            <PictureFrame collection="Milady Aura" image={Miaura} link={"https://opensea.io/collection/miladyaura"}/>
            <PictureFrame collection="Pixelady" image={Pixelady} link={"https://pixeladymaker.net/"}/>
            <PictureFrame collection="Radbro Webring" image={RadBro} link={"https://radbro.xyz/"}/>
            <PictureFrame collection="Ghiblady Maker" image={Ghiblady} link={"https://www.ghibladymaker.net/"}/>
            <PictureFrame collection="Remilio Babies" image={Remi} link={"https://www.scatter.art/collection/0xd3d9ddd0cf0a5f0bfb8f7fceae075df687eaebab?tab=mint"}/>
            <PictureFrame collection="Bored Milady Maker" image={BoredMiladyMaker} link={"https://opensea.io/collection/boredmilady"}/>            
            <PictureFrame collection="McLady Maker" image={McLady} link={"https://opensea.io/collection/mclady-maker"}/>
            <PictureFrame collection="Milady, That B.I.T.C.H" image={Bitch} link={"https://opensea.io/collection/miladybitch"}/>
            <div style={{width: "100%", paddingBottom: "1rem"}}>... and more!!!</div>
        </div>

    );
}