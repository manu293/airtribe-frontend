// imports
import { useEffect, useState } from "react";

// local imports
import TaskBoardStatus from "../components/taskBoardStatus";

function TaskBoardStatusContainer() {

    const [statusList, setStatusList] = useState([]);
    const [showStausInputField, setShowStatusInputField] = useState(false);
    const [newStatus, setNewStatus] = useState("");

    useEffect(() => {
    
        if (
          (localStorage.getItem("status") === undefined) ||
          (localStorage.getItem("status") === null)
        )  {
          const initalStatus = [
            {
              id: "status1",
              statusName: "No Status",
              statusColor: "#fff",
            }
          ];

          const initalStatusElements = [
              {
                  id: "status1",
                  statusElements: [],
              }
          ]

          setStatusList(initalStatus);
      
          localStorage.setItem("status", JSON.stringify(initalStatus))
          localStorage.setItem("statusElements", JSON.stringify(initalStatusElements))
        } else {
            const parsedStatusItem = JSON.parse(localStorage.getItem("status"));

            if (parsedStatusItem !== null) {
                setStatusList(parsedStatusItem);
            }
        }
    
      }, [])

    useEffect(() => {
        if (statusList.length > 0) {
            localStorage.setItem("status", JSON.stringify(statusList))
        }
        setShowStatusInputField(false);
        setNewStatus("")
    }, [statusList.length])


    const toggleShowStatusInputField = () => {
        setShowStatusInputField((prevState) => !prevState);
    }

    const handleUpdateInputField = (e) => {
        setNewStatus(e.target.value);
    }

    const handleAddMoreGroup = () => {

        if (newStatus.length === 0) {
            alert("Please enter a group name");
            return;
        } else {
        
            const colorList = ["#cfe2ff", "#e2e3e5", "#d1e7dd", "#f8d7da", "#fff3cd", "#cff4fc", "#d3d3d4"];
            const randomValue = Math.floor(Math.random() * colorList.length)

            const cloneStausList = [...statusList];
    
            cloneStausList.push({
                id: `status${cloneStausList.length + 1}`,
                statusName: newStatus,
                statusColor: colorList[randomValue],
            });

            setStatusList(cloneStausList);
        }

    }


    if (statusList.length === 0) {
        return null;
    } else {
        return (
            <TaskBoardStatus
                statusList={statusList}
                toggleShowStatusInputField={toggleShowStatusInputField}
                showStausInputField={showStausInputField}
                handleUpdateInputField={handleUpdateInputField}
                newStatus={newStatus}
                handleAddMoreGroup={handleAddMoreGroup}
            />
        )
    }
 
}

export default TaskBoardStatusContainer;

