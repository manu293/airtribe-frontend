// imports

// local imports
import TaskBoardElements from "../components/taskBoardElements";

function TaskboardElementsContainer(props) {
    const {statusElements} = props;

    if (statusElements.length === 0) {
        return null;
    } else {
        return (
            <TaskBoardElements {...props} />
        )
    }

}

export default TaskboardElementsContainer;
