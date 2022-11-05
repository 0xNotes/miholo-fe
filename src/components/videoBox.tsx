import vidTemp from "../assets/mihologram-video-placeholder.jpg"

export default function VideoBox() {
    return(
        <div className="VideoContainer">
            <img src={vidTemp}></img>
            <div className="VideoBottom">MiHolograms are industrailly hardened and hand-fabricated in oliveoil's hologram factory in Brooklyn, NY.</div>

        </div>

    );
}