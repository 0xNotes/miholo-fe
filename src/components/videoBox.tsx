import vidTemp from "../assets/schitzoedit.mp4";

export default function VideoBox() {
    return(
        <div className="VideoContainer">
            <video controls src={vidTemp}></video>
            <div className="VideoBottom">MiHolograms are industrially hardened and hand-fabricated at Olive Oil's Hologram Factory in New York, NY est. 2016. <br/>Shipping is included in the mint price. We ship to anywhere in the world.</div>

        </div>

    );
}