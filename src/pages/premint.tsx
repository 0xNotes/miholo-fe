import TextContainer from "../components/textContainer"
import logo from "../assets/logo.gif";

export default function Home() {
    return(
        <div className="Container">
            <img src={logo} style={{marginTop: "4rem"}}></img>
            <TextContainer
            topText="TESTTOP"
            bottomText="TESTBOT"
            reversed={false}
            />
        </div>
    );
}