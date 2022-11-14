type Props = {
    collection: string;
    link: string;
    image: any;
}

export default function PictureFrame(
    {
        collection,
        link,
        image,
    }: Props
) {
    return (
        <div className="FrameContainer" >
            <img src={image} style={{height: "310px", width: "250px", objectFit: "cover", marginBottom: "0.1rem", border: "1px solid #f6cbcb"}}></img>
            <a href={link} className="CollectionText">{collection}</a>
        </div>

    );
}