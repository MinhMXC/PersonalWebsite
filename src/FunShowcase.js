import "./css/projectshowcase.css";
import minecraft_map from "./download/calculator_map.zip"

const WIDTH = window.screen.width;

function Tech(prop) {
    return (
        <div className="tech_container" style={{backgroundColor: prop.color}}>
            <p className="tech_name">{prop.name}</p>
        </div>
    );
}

function Project1(prop) {
    const width =  prop.mobile ? prop.width : WIDTH / 6;

    return (
        <div className={prop.mobile ? "m_project_container" : "project_container"}>
            <iframe title="yt_video" src="https://www.youtube.com/embed/PulU7kVTtDY" className="yt_video" width={width} height={width / 16 * 9} allowFullScreen={true}></iframe>
            <div className="techstack_container">
                <Tech name="Python" color="#3572A5"/>
            </div>
            <div className="desc_container">
                <p className="p_title">CS1101S in Source Academy</p>
                <p className="p_desc">
                    Source Academy is where I had my first programming module. This project includes
                    a modified version (to output Source Academy codes instead of Desmos) of my past 
                    project <a href="https://github.com/MinhMXC/ImageToGraph">ImageToGraph</a> and 
                    a simple <a href="https://github.com/MinhMXC/MIDIToSourceAcademy">MIDIToSourceAcademy</a> codes parser.
                </p>
            </div>
        </div>
    );
}

function Project2(prop) {
    const width =  prop.mobile ? prop.width : WIDTH / 6;

    return (
        <div className={prop.mobile ? "m_project_container" : "project_container"} style={{marginTop: prop.mobile ? "2%" : "0"}}>
            <iframe title="yt_video" src="https://www.youtube.com/embed/A7Pq-aBa_NU" className="yt_video" width={width} height={width / 16 * 9} allowFullScreen={true}></iframe>
            <div className="techstack_container">
                <Tech name="Minecraft" color="#52A535"/>
                <Tech name="Redstone" color="#DE270E"/>
            </div>
            <div className="desc_container">
                <a className="p_title" href={minecraft_map} download>Minecraft 32-bit Calculator</a>
                <p className="p_desc">
                    Inspired by Ben Eater. I made my own calculator in Minecraft.
                    <br></br>
                    <br></br>
                    Addition + Subtraction: 64bit
                    <br></br>
                    Multiplication + Division: 32bit
                </p>
            </div>
        </div>
    );
}

export default function FunShowcase(prop) {
    return (
        <div className="showcase_container">
            <div className="title_container">
                <p className="s_title">Fun Projects Showcase</p>
            </div>
            <div className="showcase_body_container" style={{display: prop.mobile ? "block" : "flex"}}>
                <Project1 {...prop}/>
                <Project2 {...prop}/>
            </div>
        </div>
    );
}