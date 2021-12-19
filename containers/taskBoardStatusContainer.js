// imports

// local imports
import TaskBoardStatus from "../components/taskBoardStatus";

function TaskBoardStatusContainer(props) {

    const {statusList} = props;

    if (statusList.length === 0) {
        return null;
    } else {
        return (
            <TaskBoardStatus {...props} />
        )
    }
 
}

export default TaskBoardStatusContainer;

