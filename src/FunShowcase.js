import "./css/projectshowcase.css";
import minecraft_map from "./download/calculator_map.zip"

const WIDTH = window.screen.width;

function Tech(prop) {
    return (
        <div class="tech_container" style={{backgroundColor: prop.color}}>
            <p class="tech_name">{prop.name}</p>
        </div>
    );
}

function Project1() {
    const width = WIDTH / 6;

    return (
        <div class="project_container">
            <iframe src="https://www.youtube.com/embed/PulU7kVTtDY" class="yt_video" width={width} height={width / 16 * 9} allowFullScreen="true"></iframe>
            <div class="techstack_container">
                <Tech name="Python" color="#3572A5"/>
            </div>
            <div class="desc_container">
                <p class="p_title">CS1101S in Source Academy</p>
                <p class="p_desc">
                    Source Academy is where I had my first programming module. This project includes
                    a modified version (to output Source Academy codes instead of Desmos) of my past 
                    project <a href="https://github.com/MinhMXC/ImageToGraph">ImageToGraph</a> and 
                    a simple <a href="https://github.com/MinhMXC/MIDIToSourceAcademy">MIDIToSourceAcademy</a> codes parser.
                </p>
            </div>
        </div>
    );
}

function Project2() {
    const width = WIDTH / 6;

    return (
        <div class="project_container">
            <iframe src="https://www.youtube.com/embed/A7Pq-aBa_NU" class="yt_video" width={width} height={width / 16 * 9} allowFullScreen="true"></iframe>
            <div class="techstack_container">
                <Tech name="Minecraft" color="#52A535"/>
                <Tech name="Redstone" color="#DE270E"/>
            </div>
            <div class="desc_container">
                <a class="p_title" href={minecraft_map} download>Minecraft 32-bit Calculator</a>
                <p class="p_desc">
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

export default function FunShowcase() {
    return (
        <div class="showcase_container">
            <div class="title_container">
                <p class="s_title">Fun Projects Showcase</p>
            </div>
            <div class="showcase_body_container">
                <Project1 />
                <Project2 />
            </div>
        </div>
    );
}