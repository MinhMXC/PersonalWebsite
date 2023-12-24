import './css/header.css';
import React from 'react';
import ImageHoverText from './HoverText';
import cv from "./download/CV.docx";
import avatar_image from "./resource/avatar.png"


const WIDTH = window.screen.width;
const HEIGHT = window.screen.height;

//AVATAR
function AvatarPicture(prop) {
    return (
        <div id={prop.mobile ? "m_avatar_container" : "avatar_container"}>
            <img src={avatar_image} alt="avatar_image" id="avatar_image"></img>
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
    return (
        <div id="info">
            <div id="name_container">
                <p id="name">Nguyen Quang Minh</p>
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
            <div id="gmail" className="container" style={{ padding: "1%", marginTop: "0.5%" }}>
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

function Badge(prop) {
    const textMargin = prop.mobile ? window.innerWidth / 7.5 : window.screen.width / 42;
    return (
        <div id={prop.mobile ? "m_badge_container" : "badge_container"}>
            <ImageHoverText src="./resource/C_language_badge.png" title="Ceer" text="Know All The C Languages" {...prop}/>
            <div id="badge_text_container" style={{ marginLeft: textMargin }}>
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
            <Badge {...prop}/>
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
        <div className="header_container" style={{height: HEIGHT / 8}}>
            <AvatarPicture />
            <Info />
            <LevelBadge />
        </div>
    );
}

export default function Header(prop) {
    return prop.mobile ? M_Header(prop) : D_Header();
}