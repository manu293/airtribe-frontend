// imports
import {BsPlusCircle} from "react-icons/bs";
import {RiMoreLine} from "react-icons/ri";

// local imports
import Tooltip from "./tooltip";

// css
import singleElementListStyle from "../styles/SingleElementList.module.css";


function SingleElementList(props) {

    const {sEle, handleAddElementToGroup, handleElementInputChange, handleElementDragAndDrop} = props;

    const renderDraggableElement = (statusEle, indexVal, groupId) => {
        return (
            <div
                key={`${groupId}-${indexVal}`}
                draggable={true}
                id={sEle.id}
                className={singleElementListStyle.singleElementCardContainer}
                onDragStart={(e) => handleDragStart(e, statusEle, indexVal, groupId)}
                // onDragOver={(e) => handleDragOver(e)}
                // onDrop={(e) => handleDragDrop(e, statusEle, indexVal, groupId)}
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

    const handleDragStart = (e, statusEle, indexValue, id) => {
        const fromElement = JSON.stringify({
            id,
            indexValue,
            statusEle,
        })
        e.dataTransfer.setData("dragContenet", fromElement)
    }

    const handleDragOver = (e) => {
        e.preventDefault();
        return false;
    }

    const handleDragDrop = (e, statusEle, indexValue, id) => {
        e.preventDefault();

        const toElement = {
            id,
            indexValue,
            statusEle
        }
        const fromElement = JSON.parse(e.dataTransfer.getData("dragContenet"));

        handleElementDragAndDrop(fromElement, toElement);
    }

    return (
        <div
            className={singleElementListStyle.singleElementContainer}
            // onDragStart={(e) => handleDragStart(e, statusEle, indexVal, groupId)}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDragDrop(e, "", 0, sEle.id)}
        >
    
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