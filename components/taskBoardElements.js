// imports

// local imports
import SingleElementList from "./singleElementList";
// css
import taskBoardStatus from "../styles/TaskBoardStatus.module.css";

function TaskBoardStatusContainer(props) {
    const {statusElements, handleAddElementToGroup, handleElementInputChange} = props;

    return (
        <div className={taskBoardStatus.taskBoardStatusContainer}>
            
            {
                statusElements.map((sEle) => {
                    return (
                        <SingleElementList
                            sEle={sEle}
                            key={`taskBoardElement-${sEle.id}`}
                            handleAddElementToGroup={handleAddElementToGroup}
                            handleElementInputChange={handleElementInputChange}
                        />
                    )
                })
            }

        </div>
    )
}

export default TaskBoardStatusContainer;