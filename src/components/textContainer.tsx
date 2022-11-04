import SubscribeBox from "./subscribeBox";

type Props = {
    topText: string;
    topColor: string;
    bottomText: string;
    bottomColor: string;
    subscribe: boolean;
    

};

export default function TextContainer({
    topText,
    topColor,
    bottomText,
    bottomColor,
    subscribe,
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

            </div>
        </div>

    );
}