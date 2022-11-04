type Props = {
    collection: string;
    image: any;
}

export default function PictureFrame(
    {
        collection,
        image,
    }: Props
) {
    return (
        <div className="FrameContainer" style={{border: "1px solid salmon"}}>
            <div className="CollectionText">{collection}</div>
            <img src={image} style={{transform: "scale(0.5)"}}></img>
        </div>

    );
}