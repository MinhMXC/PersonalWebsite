import "./css/projectshowcase.css";

function Tech(prop) {
    return (
        <div class="tech_container" style={{backgroundColor: prop.color}}>
            <p class="tech_name">{prop.name}</p>
        </div>
    );
}

function Project1() {
    return (
        <div class="project_container">
            <img class="project_image" src={require('./resource/steam_achievement.png')} alt=""></img>
            <div class="techstack_container">
                <Tech name="Android" color="#32DE84"/>
                <Tech name="Kotlin" color="#8051FF"/>
                <Tech name="Jetpack Compose" color="#4285F4"/>
                <Tech name="SQLite" color="#004562"/>
            </div>
            <div class="desc_container">
                <a class="p_title" href="https://github.com/MinhMXC/SteamAchievementApp/tree/master" target="_blank">Steam Achievement Manager</a>
                <p class="p_desc">
                    An Android app to track Steam game achievements for Achievement Hunters, 
                    including guide integration with TrueAchievement and Playstation Trophies.
                </p>
            </div>
        </div>
    );
}

function Project2() {
    return (
        <div class="project_container">
            <div class="placeholder">
                <img class="project_image" src={require('./resource/steam_achievement.png')} alt=""></img>
                <div class="techstack_container">
                    <Tech name="Android" color="#32DE84"/>
                    <Tech name="Kotlin" color="#A97BFF"/>
                    <Tech name="Jetpack Compose" color="#4285F4"/>
                    <Tech name="SQLite" color="#004562"/>
                </div>
            </div>
            <div class="desc_container">
                <p class="p_title">Coming Soon</p>
                <p class="p_desc">
                    Coming Soon.
                </p>
            </div>
        </div>
    );
}

export default function ProjectShowcase() {
    return (
        <div class="showcase_container">
            <div class="title_container">
                <p class="s_title">Personal Projects Showcase</p>
            </div>
            <div class="showcase_body_container">
                <Project1 />
                <Project2 />
            </div>
        </div>
    );
}