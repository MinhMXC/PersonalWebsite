import './css/hover.css';

export default function ImageHoverText(prop) {
    const width = prop.mobile ? window.innerWidth /9 : window.screen.width / 50;

    return (
        <div className="wrapper">
            <img className="image" src={require('' + prop.src)} alt="" style={{width: width}}></img>

            <div className="container">
                <p className="text">{prop.title}</p>
                <p className="text">{prop.text}</p>
            </div>
        </div>
    );
}

