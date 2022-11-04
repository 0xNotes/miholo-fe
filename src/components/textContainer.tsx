type Props = {
    topText: string;
    topColor: string;
    bottomText: string;
    bottomColor: string;
    

};

export default function TextContainer({
    topText,
    topColor,
    bottomText,
    bottomColor,
 }: Props

) {
    return (
        <div className="TextContainer">
            <div className="TopBox" style={{ backgroundColor: topColor }}>
                {topText}
            </div>
            <div className="BottomBox" style={{ backgroundColor: bottomColor}}>
                {bottomText}
            </div>
        </div>

    );
}