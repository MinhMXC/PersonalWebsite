import './css/hover.css';

export default function ImageHoverText(prop) {
    const width = window.screen.width / 55;

    return (
        <div class="wrapper">
            <img class="image" src={require('' + prop.src)} alt="" style={{width: width}}></img>

            <div class="container">
                <p class="text">{prop.title}</p>
                <p class="text">{prop.text}</p>
            </div>
        </div>
    );
}