import TextContainer from "../components/textContainer"
import MultiBox from "../components/multiBox";
import VideoBox from "../components/videoBox";
import logo from "../assets/logo.gif";
import dna from "../assets/dna.gif";
import pc from "../assets/pc.gif";
import scientist from "../assets/scientist.gif";
import wings from "../assets/wings.gif";
import useCase from "../assets/use-cases.jpg";
import ShippingBox from "../components/shippingBox";


export default function Home() {

    const shipping = false;

    return (
        <div className="Container">
            <img src={logo} style={{ marginTop: "4rem" }}></img>
            <div className="ImgTextBlock">
                <div className="sideGif">
                <a href="https://www.sacred-texts.com/jud/doth/doth04.htm" target="_blank"><img src={pc} style={{ width: "10%", height: "10%", marginLeft: "4rem" }} ></img></a>
                </div>    
                <TextContainer
                    topText="Welcome to MiHolograms! 홀로그램에 오신 것을 환영합니다"
                    topColor="#f6cbcb"
                    bottomText="MiHolograms are 1/1 collectible holographic design objects in a neochibi style. Only 180 MiHolograms will be released, dropping Nov. 25."
                    bottomColor="#ffffff"
                    subscribe={false}
                    picture={false}
                />
                <div className="sideGif">
                <a href="https://whatisnuclear.com/radiation-on-flights.html" target="_blank"><img src={pc} style={{ width: "10%", height: "10%", marginRight: "4rem" }} ></img></a>
                </div>
            </div>
            <div className="DetailsText">
                <span style={{ textDecoration: "underline", fontWeight: "bold", marginBottom: "2rem", textAlign:"center" }}>Details</span>
                <div style={{ marginBottom: "1rem" }}><span style={{ fontWeight: "bold" }}>-Loving Respect for the Miladyverse: </span> <span>Each hologram contains six (6) images of NFTs from the extended Miladyverse, hypermixing them using lenticular technology.</span></div>
                <div style={{ marginBottom: "1rem" }}><span style={{ fontWeight: "bold" }}>-Drip Mix: </span> <span>Randomized traits and characteristics are blended in holographic form creating never before seen aesthetic mashups.</span></div>
                <div style={{ marginBottom: "1rem" }}><span style={{ fontWeight: "bold" }}>-Industrial Design: </span> <span>MiHolograms are long-lasting design objects made of an 8-inch x 10-inch Holographic Print affixed to a thermoplastic mounting plate.</span></div>
                <div style={{ marginBottom: "1rem" }}><span style={{ fontWeight: "bold" }}>-Unique: </span> <span>Each MiHologram is 1/1, unique and will never be reproduced. MiHolograms are hand-numbered on the back for authenticity.</span></div>
                <div style={{ marginBottom: "1rem" }}><span style={{ fontWeight: "bold" }}>-SpyMilk Approved: </span> <span><a href={useCase}>Use-cases for MiHolograms</a> are many.</span></div>
            </div>

            {shipping ?
                <ShippingBox />

                : <TextContainer
                    topText="MiHologram Minting"
                    topColor="#ffffff"
                    bottomText="180 collectible MiHolograms will be simultaneously released for .18 eth each on November, 25, 2022. Please check back on that date to secure your MiHologram before mint-out."
                    bottomColor="#f6cbcb"
                    subscribe={true}
                    picture={false}
                />}



            <div style={{ width: "43em", borderBottom: "1px solid #ffffff", marginTop: "5rem", marginBottom: "5rem" }} />
            
            <VideoBox />

            <div style={{ width: "43em", borderBottom: "1px solid #ffffff", marginTop: "5rem", marginBottom: "5rem" }} />

            <TextContainer
                topText="The Tribes of Milady Meet in the Holographic Realm"
                topColor="#f6cbcb"
                bottomText="MiHolograms are generated from a mix of Milady and Milady derivatives, carefully curated to represent network spirituality. Rare MiHolgrams include memes made by the community and synchronous trait overlaps. We are thankful for the artistic contributions of the following communities, whose images are all included in MiHolograms:"
                bottomColor="#ffffff"
                subscribe={false}
                picture={true}
            />
            <MultiBox />



            <div className="GifBlock">
                <a href="https://www.phatmedia.co.uk/flyers/genre/early-rave?p=4"><img src={scientist} style={{ width: "10%" }} /></a>
                <a href="https://i.imgur.com/Tl6IgaI.jpg"><img src={dna} style={{ width: "10%" }} /></a>
                <a href="https://archive.org/~brenton/petcities.html"><img src={wings} style={{ width: "20%" }} /></a>
                <a href="https://i.imgur.com/lQocYEP.png"><img src={dna} style={{ width: "10%" }} /></a>
                <a href="https://wearehostsformemes.com/"><img src={scientist} style={{ width: "10%" }} /></a>
            </div>

        </div>
    );
}