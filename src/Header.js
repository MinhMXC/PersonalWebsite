import './css/header.css';
import React, { useLayoutEffect, useState } from 'react';
import ImageHoverText from './HoverText';
import cv from "./download/CV.docx"

const WIDTH = window.screen.width;
const HEIGHT = window.screen.height;

function GetElementLocation(id) {
    const [rec, setRec] = useState([0, 0, 0, 0])
    useLayoutEffect(() => {
        function updateRec() {
            const frame = document.getElementById(id);
            const rectangle = frame.getBoundingClientRect();
            setRec([rectangle.left, rectangle.top, rectangle.right, rectangle.bottom])
        }

        window.addEventListener("resize", updateRec);
        window.addEventListener("load", updateRec);
        updateRec();
        return () => {
            window.removeEventListener("resize", updateRec);
            window.removeEventListener("load", updateRec);
        }
    }, [id]);

    return rec;
}

//AVATAR

function Alias() {
    return (
        <div id="alias">
            <text id="has_also">This programmer has also used:</text>
            <br></br>
            <text id="alias_name">MinhMXC</text>
        </div>        
    );
}

function AvatarPicture(prop) {
    const img_w = prop.mobile ? prop.width / 3 : WIDTH / 18;
    const frame_w = img_w * 1.2;
    const avatar_pad = img_w * 0.1;
    const id_main_container = prop.mobile ? "m_avatar_container" : "avatar_container";

    let [left, top, right, bottom] = GetElementLocation("avatar_frame");
    let [l, t, r, b] = GetElementLocation(id_main_container);

    return (
        <div id={id_main_container}>
            <img id="avatar_frame" src={require('./resource/avatar_frame.png')} alt="" width={frame_w} height={frame_w}></img>
            <img src={require('./resource/avatar.png')} alt="" id="avatar_image" width={img_w} height={img_w} style={{top: top - t + avatar_pad, left: left - l + avatar_pad}}></img>
        </div>
    );
}

//NAME + DESCRIPTION 

function Country(prop) {
    const img_w = prop.mobile ? prop.width / 25 : WIDTH / 120;

    return (
        <div id="country_container">
            <img src={require('./resource/sg_flag.png')} alt="" width={img_w} id="country_pic"></img>
            <p id="country">Singapore</p>
        </div>
    );
}

function Description(prop) {
    return (
        <div id={prop.mobile ? "m_description" : "description"}>
            <p>Hello, I'm currently a Year 1 Computer Science student at the National University of Singapore.</p>
            <p>Welcome to my website \ (•◡•) /.</p>
        </div>
    );
}

function Info() {
    const [isAliasShown, setAliasShown] = useState(false);

    function toggleAlias() {
        isAliasShown ? setAliasShown(false) : setAliasShown(true);
    }

    return (
        <div id="info">
            <div id="name_container">
                <p id="name">Nguyen Quang Minh</p>
                <button type="button" onClick={toggleAlias} id="alias_button">▼</button>
                {isAliasShown ? <Alias /> : null}
                <Country />
                <Description />
            </div>
        </div>
    );
}

//LEVEL + FEATURED BADGE

function MessageGithubButton() {
    return (
        <div id="mg_container">
            <button className="header_button" id="message_button" type="button" onClick={() => window.location.href='https://mail.google.com/mail/u/0/?to=minhmxc.imp@gmail.com&fs=1&tf=cm'}>Message</button>
            <div id="gmail" className="container">
                <p className="text">Gmail: minhmxc.imp@gmail.com</p>
            </div>
            <button className="header_button" type="button" onClick={() => window.location.href='https://github.com/MinhMXC'}>Github</button>
            <button className="header_button" type="button" onClick={() => window.location.href=cv}>CV</button>
        </div>
    );
}

function Level() {
    return (
        <div id="age_container">
            <p id="age">Age</p>
            <p id="age_num">19</p>
        </div>
    );
}

function Badge() {
    return (
        <div id="badge_container">
            <ImageHoverText src="./resource/C_language_badge.png" title="Ceer" text="Know All The C Languages"/>
            <div id="badge_text_container">
                <p className="badge_text">Ceer</p>
                <p className="badge_text">500 XP</p>
            </div>
        </div>
    );
}

function LevelBadge(prop) {
    return (
        <div id={prop.mobile ? "m_levelbadge" : "levelbadge"}>
            <Level />
            <Badge />
            <MessageGithubButton />
        </div>
    );
}

function M_Header(prop) {
    return (
        <div id="m_header">
            <div id="m_name_country">
                <p id="name">Nguyen Quang Minh</p>
                <Country {...prop}/>
            </div>
            <div id="avatar_levelbadge_container">
                <AvatarPicture {...prop}/>
                <LevelBadge {...prop}/>
            </div>
            <Description {...prop}/>
        </div>
    );
}

function D_Header() {
    return (
        <div className="header_container" style={{height: HEIGHT / 7}}>
            <div className="header">
                <AvatarPicture />
                <Info />
                <LevelBadge />
            </div>
        </div>
    );
}

export default function Header(prop) {
    return prop.mobile ? M_Header(prop) : D_Header();
}