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
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export default function MainColumn() {
    let [width, height] = useWindowSize();
    if (width > WIDTH * COL_SIZE) {
        width = WIDTH * COL_SIZE;
    }

    return (
        <div class="main_col" style={{width: width, padding: width / 90}}>
            <Header />
            <ProjectShowcase />
            <FunShowcase />
            <LangShowcase />
        </div>
    );
}