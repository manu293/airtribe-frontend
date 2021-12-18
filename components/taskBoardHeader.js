// imports
import {BsPlusCircleDotted, BsSearch, BsArrowsAngleExpand} from "react-icons/bs";
import {MdMoreHoriz} from "react-icons/md";

// local imports
import Header from "./header";
import taskBoardHeaderStyle from "../styles/TaskBoardHeader.module.css";

function TaskBoardHeader() {
    return (
        <div className={taskBoardHeaderStyle.taskBoardHeaderContainer}>
    
            <div className={taskBoardHeaderStyle.leftSection}>
                <Header 
                    hText="Task Board"
                    hStyle="h4"
                />
                <div className={taskBoardHeaderStyle.viewContainer}>
                    <BsPlusCircleDotted 
                        size={20}
                        color="ababa9"
                    />
                    <p className={taskBoardHeaderStyle.viewText}>Add a view</p>
                </div>
            </div>

            <div className={taskBoardHeaderStyle.rightSection}>

                <div className={taskBoardHeaderStyle.iconTextContainer}>
                    <BsSearch 
                        size={20}
                        color="ababa9"
                    />
                    <p className={taskBoardHeaderStyle.viewText}>Search</p>
                </div>

                <div className={taskBoardHeaderStyle.iconContainer}>
                    <BsArrowsAngleExpand 
                        size={20}
                        color="ababa9"
                    />
                </div>

                <div className={taskBoardHeaderStyle.iconContainer}>
                    <MdMoreHoriz 
                        size={20}
                        color="ababa9"
                    />
                </div>

                <div className={taskBoardHeaderStyle.iconContainer}>
                    <button className={taskBoardHeaderStyle.buttonContainer}>New</button>
                </div>
        
            </div>

        </div>
    )
}

export default TaskBoardHeader;