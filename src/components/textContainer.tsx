type Props = {
    topText: string;
    bottomText: string;
    reversed: boolean;
};

export default function TextContainer({
    topText,
    bottomText,
    reversed, }: Props

) {
    return (
        <div className="TextContainer">
            <div className="TopBox" style={{ backgroundColor: "#f6cbcb" }}>
                {topText}
                {reversed}
            </div>
            <div className="BottomBox" style={{ backgroundColor: "#ffffff" }}>
                {bottomText}
            </div>
        </div>

    );
}