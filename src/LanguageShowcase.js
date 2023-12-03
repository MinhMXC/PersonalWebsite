import './css/langshowcase.css'
import './css/projectshowcase.css'
import ImageHoverText from './HoverText';

export default function LangShowcase() {
    const WIDTH = window.screen.width;
    const height = WIDTH / 50;
    
    return (
        <div class="showcase_container">
            <div class="title_container">
                <p class="s_title">Language + Tech Showcase</p>
            </div>
            <div class="l_showcase_body_container" style={{height: height}}>
                <div id="1" class="lang_container">
                    <ImageHoverText src="./resource/logo/C.png" title="C"/>
                </div>
                <div id="2" class="lang_container">
                    <ImageHoverText src="./resource/logo/C++.svg" title="C++"/>
                </div>
                <div id="3" class="lang_container">
                    <ImageHoverText src="./resource/logo/CSharp.png" title="C# / C Sharp"/>
                </div>
                <div id="4" class="lang_container">
                    <ImageHoverText src="./resource/logo/js.png" title="Javascript"/>
                </div>
                <div id="5" class="lang_container">
                    <ImageHoverText src="./resource/logo/python.png" title="Python"/>
                </div>
                <div id="6" class="lang_container">
                    <ImageHoverText src="./resource/logo/java.png" title="Java"/>
                </div>
                <div id="7" class="lang_container">
                    <ImageHoverText src="./resource/logo/kotlin.svg" title="Kotlin"/>
                </div>
                <div id="8" class="lang_container">
                    <ImageHoverText src="./resource/logo/jetpack_compose.png" title="Jetpack Compose"/>
                </div>
                <div id="9" class="lang_container">
                    <ImageHoverText src="./resource/logo/sql.png" title="SQL"/>
                </div>
                <div id="10" class="lang_container">
                    <ImageHoverText src="./resource/logo/html5.png" title="HTML"/>
                </div>
                <div id="11" class="lang_container">
                    <ImageHoverText src="./resource/logo/css.png" title="CSS"/>
                </div>
                <div id="12" class="lang_container">
                    <ImageHoverText src="./resource/logo/react.png" title="React"/>
                </div>
            </div>
        </div>
    );
}