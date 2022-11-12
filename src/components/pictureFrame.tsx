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
            <img src={image} style={{height: "310px", width: "250px", objectFit: "cover"}}></img>
            <div className="CollectionText">{collection}</div>
        </div>

    );
}