// imports

// local imports
import SingleElementList from "./singleElementList";
// css
import taskBoardStatus from "../styles/TaskBoardStatus.module.css";

function TaskBoardStatusContainer(props) {
    const {statusElements, handleAddElementToGroup, statusList,
        handleElementInputChange, handleElementDragAndDrop, handleSingleElementClick } = props;

    return (
        <div className={taskBoardStatus.taskBoardStatusContainer}>
            
            {
                statusElements.map((sEle) => {
                    return (
                        <SingleElementList
                            sEle={sEle}
                            key={`taskBoardElement-${sEle.id}`}   
                            statusList={statusList}         
                            handleAddElementToGroup={handleAddElementToGroup}
                            handleElementInputChange={handleElementInputChange}
                            handleElementDragAndDrop={handleElementDragAndDrop}
                            handleSingleElementClick={handleSingleElementClick}
                        />
                    )
                })
            }

        </div>
    )
}

export default TaskBoardStatusContainer;