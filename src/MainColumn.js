import './css/App.css';
import React, { useLayoutEffect, useState } from 'react';
import Header from './Header.js';
import ProjectShowcase from './ProjectShowcase.js';
import FunShowcase from './FunShowcase.js';
import LangShowcase from './LanguageShowcase.js';

const WIDTH = window.screen.width;
const HEIGHT = window.screen.height;
const COL_SIZE = 0.35;

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([document.body.clientWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export default function MainColumn() {
    let [width, height] = useWindowSize();
    let mobile = width < WIDTH * 0.28;

    let desktop_width = WIDTH * 0.35;
    if (width < WIDTH * COL_SIZE) {
        desktop_width = width
    }

    let prop = {
        mobile: mobile,
        width: width,
        height: height,
    }

    return (
        <div className="main_col" style={{width: mobile ? "100%" : desktop_width}}>
            <Header {...prop}/>
            <ProjectShowcase {...prop}/>
            <FunShowcase {...prop}/>
            <LangShowcase {...prop}/>
        </div>
    );
}