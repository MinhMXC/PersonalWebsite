import './css/langshowcase.css'
import './css/projectshowcase.css'
import ImageHoverText from './HoverText';
import React, { useLayoutEffect, useState } from 'react';

function Achievement(prop) {
    return (
        <div id={prop.id} className="lang_container">
            <ImageHoverText src={prop.src} title={prop.title} mobile={prop.mobile}/>
        </div>
    );
}

export default function LangShowcase(prop) {
    const height = prop.mobile ? prop.width / 3 :  window.screen.width / 50;
    
    return (
        <div className="showcase_container">
            <div className="title_container">
                <p className="s_title">Language + Tech Showcase</p>
            </div>
            <div className={prop.mobile ? "m_l_showcase_body_container" : "l_showcase_body_container"} style={{height: height}}>
                <Achievement id="1" src="./resource/logo/C.png" title="C" mobile={prop.mobile} />
                <Achievement id="2" src="./resource/logo/C++.svg" title="C++" mobile={prop.mobile} />
                <Achievement id="3" src="./resource/logo/CSharp.png" title="C# / C Sharp" mobile={prop.mobile} />
                <Achievement id="4" src="./resource/logo/js.png" title="Javascript" mobile={prop.mobile} />
                <Achievement id="5" src="./resource/logo/python.png" title="Python" mobile={prop.mobile} />
                <Achievement id="6" src="./resource/logo/java.png" title="Java" mobile={prop.mobile} />
                <Achievement id="7" src="./resource/logo/kotlin.svg" title="Kotlin" mobile={prop.mobile} />
                <Achievement id="8" src="./resource/logo/jetpack_compose.png" title="Jetpack Compose" mobile={prop.mobile} />
                <Achievement id="9" src="./resource/logo/sql.png" title="SQL" mobile={prop.mobile} />
                <Achievement id="12" src="./resource/logo/react.png" title="React" mobile={prop.mobile} />
                <Achievement id="10" src="./resource/logo/html5.png" title="HTML" mobile={prop.mobile} />
                <Achievement id="11" src="./resource/logo/css.png" title="CSS" mobile={prop.mobile} />
            </div>
        </div>
    );
}