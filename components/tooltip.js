// imports

// local imports
import tooltipStyles from "../styles/Tooltip.module.css";

function Tooltip(props) {

    let tooltipPlacementStyle;

    switch(props.tooltipPosition) {
        case "top":
            tooltipPlacementStyle = tooltipStyles.tooltipTop;
            break;

        case "bottom":
            tooltipPlacementStyle = tooltipStyles.tooltipBottom;
            break;

        case "left":
            tooltipPlacementStyle = tooltipStyles.tooltipLeft;
            break;

        case "right":
            tooltipPlacementStyle = tooltipStyles.tooltipRight;
            break;

        default:
            tooltipPlacementStyle = tooltipStyles.tooltipTop;
            break;
    }

    return (
        <abbr
            className={`${tooltipStyles.tooltip} ${tooltipPlacementStyle}`}
            data-tooltip={props.tooltipText}
        >
            {props.children}
        </abbr>
    )
} 

export default Tooltip;