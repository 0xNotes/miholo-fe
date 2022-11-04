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
        <div className="FrameContainer" >
            <div className="CollectionText">{collection}</div>
            <img src={image} style={{height: "310px", width: "250px", objectFit: "cover"}}></img>
        </div>

    );
}