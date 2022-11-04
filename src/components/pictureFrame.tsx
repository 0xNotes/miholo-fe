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
        <div>
            <div>{collection}</div>
            <img src={image}></img>
        </div>

    );
}