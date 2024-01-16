import "./css/projectshowcase.css";

function Tech(prop) {
    return (
        <div className="tech_container" style={{backgroundColor: prop.color}}>
            <p className="tech_name">{prop.name}</p>
        </div>
    );
}

function Project1(prop) {
    return (
        <div className={prop.mobile ? "m_project_container" : "project_container"}>
            <img className="project_image" src={require('./resource/steam_achievement.png')} alt=""></img>
            <div className="techstack_container">
                <Tech name="Android" color="#32DE84"/>
                <Tech name="Kotlin" color="#8051FF"/>
                <Tech name="Jetpack Compose" color="#4285F4"/>
                <Tech name="SQLite" color="#004562"/>
            </div>
            <div className="desc_container">
                <a className="p_title" href="https://github.com/MinhMXC/SteamAchievementApp/tree/master" target="_blank">Steam Achievement Manager</a>
                <p className="p_desc">
                    An Android app to track Steam game achievements for Achievement Hunters, 
                    including guide integration with TrueAchievement and Playstation Trophies.
                </p>
            </div>
        </div>
    );
}

function Project2(prop) {
    return (
        <div className={prop.mobile ? "m_project_container" : "project_container"}
             style={{marginTop: prop.mobile ? "2%" : "0"}}>
            <img className="project_image" src={require('./resource/anarchy_forum.png')} alt=""></img>
            <div className="techstack_container">
                <Tech name="React" color="#5ED3F3" />
                <Tech name="Typescript" color="#2F74C0" />
                <Tech name="Ruby on Rails" color="#C60000" />
                <Tech name="PostgreSQL" color="#386B93" />
                <Tech name="Docker" color="#1D63ED" />
            </div>
            <div className="desc_container">
                <a className="p_title" href="https://github.com/MinhMXC/Forum_FrontEnd" target="_blank">Anarchy Forum</a>
                <p className="p_desc">
                    A Forum where users can posts and discuss topics, with comment system like Reddit
                    and token authentication, built using Material UI library and has support for Docker.
                </p>
            </div>
        </div>
    );
}

export default function ProjectShowcase(prop) {
    return (
        <div className="showcase_container">
            <div className="title_container">
                <p className="s_title">Personal Projects Showcase</p>
            </div>
            <div className="showcase_body_container"
                 style={{display: prop.mobile ? "block" : "flex", marginRight: prop.mobile ? "1%" : "0"}}>
                <Project1 {...prop}/>
                <Project2 {...prop}/>
            </div>
        </div>
    );
}