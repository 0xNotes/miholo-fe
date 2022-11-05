import SubscribeBox from "./subscribeBox";
import PictureBox from "./pictureBox";
import MultiBox from "./multiBox";

type Props = {
    topText: string;
    topColor: string;
    bottomText: string;
    bottomColor: string;
    subscribe: boolean;
    picture: boolean;


};

export default function TextContainer({
    topText,
    topColor,
    bottomText,
    bottomColor,
    subscribe,
    picture,
 }: Props

) {
    return (
        <div className="TextContainer">
            <div className="TopBox" style={{ backgroundColor: topColor }}>
                {topText}
            </div>
            <div className="BottomBox" style={{ backgroundColor: bottomColor}}>
                {bottomText}
                {subscribe? <SubscribeBox/> : <div></div>}
                {picture? <PictureBox/> : <div></div>}
            </div>
        </div>

    );
}