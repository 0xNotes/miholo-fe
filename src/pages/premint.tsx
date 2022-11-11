import TextContainer from "../components/textContainer"
import MultiBox from "../components/multiBox";
import VideoBox from "../components/videoBox";
import logo from "../assets/logo.gif";
import dna from "../assets/dna.gif";
import pc from "../assets/pc.gif";
import scientist from "../assets/scientist.gif";
import wings from "../assets/wings.gif";
import ShippingBox from "../components/shippingBox";


export default function Home() {

    const shipping = false;

    return (
        <div className="Container">
            <img src={logo} style={{ marginTop: "4rem" }}></img>
            <div className="ImgTextBlock">
                <img src={pc} style={{ width: "10%", height: "10%", marginLeft: "4rem" }} ></img>
                <TextContainer
                    topText="Welcome to MiHolograms! 홀로그램에 오신 것을 환영합니다"
                    topColor="#f6cbcb"
                    bottomText="MiHolograms are a limited-release collection of 180 unique 1/1 holographic prints made as a collaboration between artists *olive oil* and *SpyMilk*."
                    bottomColor="#ffffff"
                    subscribe={false}
                    picture={false}
                />
                <img src={pc} style={{ width: "10%", height: "10%", marginRight: "4rem" }} ></img>
            </div>
            <div className="DetailsText">
                <span style={{ textDecoration: "underline", fontWeight: "bold", marginBottom: "2rem" }}>Details</span>
                <div style={{ marginBottom: "1rem" }}><span style={{ fontWeight: "bold" }}>-Loving Resepect for the Miladyverse: </span> <span>Each hologram contains six of Milady from various corners of the extended Milady universe, blending them into neochibi-holograms celebrating network spirituality.</span></div>
                <div style={{ marginBottom: "1rem" }}><span style={{ fontWeight: "bold" }}>-Drip Mixes: </span> <span>Randomized traits and characteristics are melded together in holographic form creating unique and never before seen aesthetic mashups.</span></div>
                <div style={{ marginBottom: "1rem" }}><span style={{ fontWeight: "bold" }}>-Industrial Design: </span> <span>MiHolograms are long-lasting design objects made of an 8" x 10" Lenticular Holographic print affixed to an acrylic-plated backing.</span></div>
                <div style={{ marginBottom: "1rem" }}><span style={{ fontWeight: "bold" }}>-Uniqueness: </span> <span>MiHolograms 1/1, unique and will never be reproduced. MiHolograms are numbered and signed on the back for authenticity.</span></div>
            </div>

            {shipping ?
                <ShippingBox />

                : <TextContainer
                    topText="MiHologram Minting"
                    topColor="#ffffff"
                    bottomText="The limited collection of 180 MiHolograms will be simultaneously released for .18 eth each on November, 25, 2022. Sign Up to receive a notification for the collection release:"
                    bottomColor="#f6cbcb"
                    subscribe={true}
                    picture={false}
                />}



            <div style={{ width: "55%", borderBottom: "1px solid #ffffff", marginTop: "5rem", marginBottom: "5rem" }} />
            <TextContainer
                topText="The many tribes of Milady meet in the Holographic Realm"
                topColor="#f6cbcb"
                bottomText="MiHolograms refract Milady and it's spin-off versions, as well as memes made by the Milady community, carefully chosen to represent network spirituality in all it's millenarian eccentricity and style. MiHolograms draw their source energy from collections including:"
                bottomColor="#ffffff"
                subscribe={false}
                picture={true}
            />
            <VideoBox />
            <MultiBox />

            <div className="GifBlock">
                <img src={scientist} style={{ width: "10%" }} />
                <img src={dna} style={{ width: "10%" }} />
                <img src={wings} style={{ width: "20%" }} />
                <img src={dna} style={{ width: "10%" }} />
                <img src={scientist} style={{ width: "10%" }} />
            </div>

        </div>
    );
}