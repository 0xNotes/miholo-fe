import PictureFrame from "./pictureFrame";
import Milady from "../assets/milady.jpg";
import Miaura from "../assets/milady-aura.jpg";
import Pixelady from "../assets/pixelady.png";
import AntiMilady from "../assets/antimilady.jpg";



export default function PictureBox() {
    return(
        <div className="PictureBox">
            <PictureFrame collection="Milady Maker" image={Milady}/>
            <PictureFrame collection="Milady Aura" image={Miaura}/>
            <PictureFrame collection="Pixelady" image={Pixelady}/>
            <PictureFrame collection="Anti-Miladies" image={AntiMilady}/>
        </div>

    );
}