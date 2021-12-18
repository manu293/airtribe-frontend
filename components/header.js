// imports

// local imports
import headerStyle from "../styles/Header.module.css";

function Header(props) {

    let headerPStyle;

    switch(props.hStyle) {
        case "h1":
            headerPStyle = headerStyle.headerStyle1;
            break;
        case "h2":
            headerPStyle = headerStyle.headerStyle2;
            break;
        case "h3":
            headerPStyle = headerStyle.headerStyle3;
            break;
        case "h4":
            headerPStyle = headerStyle.headerStyle4;
            break;
        default:
            headerPStyle = headerStyle.headerStyle3;
            break;
    }

    return (
        <p className={headerPStyle}>{props.hText}</p>
    )
}

export default Header;