import TextContainer from "../components/textContainer"
import logo from "../assets/logo.gif";
import dna from "../assets/dna.gif";
import pc from "../assets/pc.gif";
import scientist from "../assets/scientist.gif";
import wings from "../assets/wings.gif";

export default function Home() {
    return(
        <div className="Container">
            <img src={logo} style={{marginTop: "4rem"}}></img>
            <div>
            <TextContainer
            topText="TESTTOP"
            bottomText="TESTBOT"
            reversed={false}
            />
            </div>
        </div>
    );
}