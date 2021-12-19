// imports
import {BsPlusCircle} from "react-icons/bs";
import {RiMoreLine} from "react-icons/ri";

// local imports
import Tooltip from "./tooltip";

// css
import singleElementListStyle from "../styles/SingleElementList.module.css";


function SingleElementList(props) {
    const {sEle, handleAddElementToGroup, handleElementInputChange} = props;

    const renderDraggableElement = (statusEle, indexVal, groupId) => {
        return (
            <div
                key={`${groupId}-${indexVal}`}
                draggable={true}
                className={singleElementListStyle.singleElementCardContainer}
            >
                <div className={singleElementListStyle.singleElementCardLeft}>
                    <input
                        className={singleElementListStyle.singleElementInputField}
                        type="text"
                        placeholder="Type A Name"
                        onChange={(e) => handleElementInputChange(groupId, indexVal, e.target.value)}
                        value={statusEle}
                    />
                </div>

                <div className={singleElementListStyle.singleElementCardRight}>
                    <Tooltip
                        tooltipPosition="bottom"
                        tooltipText="Rename, delete, move to and more..."
                    >
                        <RiMoreLine
                            size={20}
                            color="ababa9"
                        />
                    </Tooltip>
                </div>
            </div>
        )
    }

    return (
        <div className={singleElementListStyle.singleElementContainer}>
    
            {
                (sEle.statusElements.length > 0) && (
                    sEle.statusElements.map((statusEle, index) => renderDraggableElement(statusEle, index, sEle.id))
                )
            }

            <div
                onClick={() => handleAddElementToGroup(sEle.id)}
                className={singleElementListStyle.singleElementNewContainer}
            >
                <BsPlusCircle 
                    size={20}
                    color="ababa9"
                />
                <p className={singleElementListStyle.singleElementNewText}>New</p>
            </div>

        </div>
    )
}

export default SingleElementList;