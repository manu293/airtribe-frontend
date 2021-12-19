// imports
import {HiPlus} from "react-icons/hi";
import {MdOutlineCancel, MdCheckCircleOutline} from "react-icons/md";

// local imports
import SingleBoardStatus from "./singleBoardStatus";

// css
import taskBoardStatus from "../styles/TaskBoardStatus.module.css";

function TaskBoardStatus(props) {

    const {statusList, toggleShowStatusInputField, showStausInputField, 
        handleUpdateInputField, newStatus, handleAddMoreGroup,} = props;

    return (
        <div className={taskBoardStatus.taskBoardStatusContainer}>
            
            {
                statusList.map((sList) => {
                    return (
                        <SingleBoardStatus
                            sList={sList}
                            key={`sList-${sList.id}`}
                        />
                    )
                })
            }

            <div className={taskBoardStatus.addMoreConatinerContainer}>

                {
                    (showStausInputField === false) ? 
                    (
                        <div
                            className={taskBoardStatus.addMoreContainer}
                            onClick={() => toggleShowStatusInputField()}
                        >
                            <span className={taskBoardStatus.iconConatiner}>
                                <HiPlus 
                                    size={16}
                                    color="acadaa"
                                />
                            </span>
                        
                            <p className={taskBoardStatus.addMoreText}>Add more group</p>
                        </div>
                    )
                :
                    (
                        <div className={taskBoardStatus.taskBoardInputContainer}>
                            <input
                                className={taskBoardStatus.taskBoardInputField}
                                type="text"
                                onChange={(e) => handleUpdateInputField(e)}
                                value={newStatus}
                                onKeyPress={(e) => {
                                    if(e.key === "Enter") {
                                        handleAddMoreGroup()
                                    }
                                }}
                            />

                            <span
                                onClick={() => toggleShowStatusInputField()}
                                className={taskBoardStatus.taskBoardInputFieldIcons}
                            >
                                <MdOutlineCancel
                                    size={18}
                                    color="acadaa" 
                                />
                            </span>

                            <span onClick={() => handleAddMoreGroup()}>
                                <MdCheckCircleOutline
                                    size={18}
                                    color="acadaa" 
                                />
                            </span>
                        </div>
                    )
                }
                
            </div>

        </div>
    )

}

export default TaskBoardStatus;