// imports
import {MdDelete} from "react-icons/md";
import {HiPlus} from "react-icons/hi";

// local imports
import singleBoardStatusStyle from "../styles/SingleBoardStatus.module.css";

function SingleBoardStatus(props) {
    const {sList, statusElements, handleDeleteStatus} = props;

    let statusCount = 0;

    const filteredStatusElement = statusElements.filter((sEle) => sEle.id === sList.id);

    if (filteredStatusElement.length > 0) {
        statusCount = filteredStatusElement[0].statusElements.length;
    }


    let backgroundColor;

    switch(sList.statusColor) {
        case "#fff":
            backgroundColor = singleBoardStatusStyle.statusNameBackground0;
            break;
    
        case "#cfe2ff":
            backgroundColor = singleBoardStatusStyle.statusNameBackground1;
            break;
        
        case "#e2e3e5":
            backgroundColor = singleBoardStatusStyle.statusNameBackground2;
            break;

        case "#d1e7dd":
            backgroundColor = singleBoardStatusStyle.statusNameBackground3;
            break;

        case "#f8d7da":
            backgroundColor = singleBoardStatusStyle.statusNameBackground4;
            break;

        case "#fff3cd":
            backgroundColor = singleBoardStatusStyle.statusNameBackground5;
            break;

        case "#cff4fc":
            backgroundColor = singleBoardStatusStyle.statusNameBackground6;
            break;

        case "#d3d3d4":
            backgroundColor = singleBoardStatusStyle.statusNameBackground7;
            break;
        
        default:
            backgroundColor = singleBoardStatusStyle.statusNameBackground0;
            break;
    }

    return (
        <div className={singleBoardStatusStyle.singleBoardStausSubContainer}>
                <div className={singleBoardStatusStyle.leftSide}>

                    <span className={`${singleBoardStatusStyle.statusName} ${backgroundColor}`}>
                        {sList.statusName}
                    </span>

                    <span className={singleBoardStatusStyle.statusCount}>{statusCount}</span>
                </div>

                <div className={singleBoardStatusStyle.rightSide}>
                    {
                        (sList.id !== "status1") &&
                        (
                            <span
                                onClick={() => handleDeleteStatus(sList.id)}
                                className={singleBoardStatusStyle.iconConatiner}
                            >
                                <MdDelete 
                                    size={20}
                                    color="acadaa"
                                />
                            </span>
                        )
                    }

                    <span className={singleBoardStatusStyle.iconConatiner}>
                        <HiPlus 
                            size={20}
                            color="acadaa"
                        />
                    </span>
                </div>
            </div>
    )

}

export default SingleBoardStatus;