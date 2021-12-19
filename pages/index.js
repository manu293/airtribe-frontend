// imports
import { useEffect, useState } from 'react';
import Head from 'next/head'

// local imports

// containers
import TaskboardElementsContainer from "../containers/taskBoardElementsContainer";
import TaskBoardStatusContainer from "../containers/taskBoardStatusContainer";

// components
import TaskBoardHeader from "../components/taskBoardHeader";

// css
import Header from "../components/header";
import styles from "../styles/Home.module.css";

function Home() {

  const [statusList, setStatusList] = useState([]);
  const [statusElements, setStatusElements] = useState([]);
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
      setStatusElements(initalStatusElements);
  
      localStorage.setItem("status", JSON.stringify(initalStatus))
      localStorage.setItem("statusElements", JSON.stringify(initalStatusElements))

    } else {
        const parsedStatusItem = JSON.parse(localStorage.getItem("status"));
        const parsedStatusEle = JSON.parse(localStorage.getItem("statusElements"));

        if (parsedStatusItem !== null) {
          setStatusList(parsedStatusItem);
        }

        if (parsedStatusEle !== null) {
          setStatusElements(parsedStatusEle)
        }
    }

  }, [])

  useEffect(() => {
  
    if (statusList.length > 0) {
        localStorage.setItem("status", JSON.stringify(statusList))
    }
  
    setShowStatusInputField(false);
    setNewStatus("")
  }, [statusList.length]);

  useEffect(() => {
  
    if (statusElements.length > 0) {
        localStorage.setItem("statusElements", JSON.stringify(statusElements))
    }
  
    setShowStatusInputField(false);
    setNewStatus("")
  }, [statusElements])

  const handleAddMoreGroup = () => {

    if (newStatus.length === 0) {
        alert("Please enter a group name");
        return;
    } else {

        let sElements = [];

        const parsedStatusElements = JSON.parse(localStorage.getItem("statusElements"));

        if (parsedStatusElements !== null) {
          sElements = parsedStatusElements;
        }

        const colorList = ["#cfe2ff", "#e2e3e5", "#d1e7dd", "#f8d7da", "#fff3cd", "#cff4fc", "#d3d3d4"];
        const randomValue = Math.floor(Math.random() * colorList.length)

        const cloneStausList = [...statusList];

        cloneStausList.push({
            id: `status${cloneStausList.length + 1}`,
            statusName: newStatus,
            statusColor: colorList[randomValue],
        });

        sElements.push({
          id: `status${cloneStausList.length}`,
          statusElements: [],
        })

        setStatusList(cloneStausList);
        setStatusElements(sElements);
    }

  }

  const toggleShowStatusInputField = () => {
      setShowStatusInputField((prevState) => !prevState);
  }

  const handleUpdateInputField = (e) => {
      setNewStatus(e.target.value);
  }

  const handleAddElementToGroup = (groupId) => {
    const clonedStatusEle = [...statusElements];
    const statusEleIndex = clonedStatusEle.findIndex((cSList) => cSList.id === groupId);

    if (statusEleIndex !== -1) {
      clonedStatusEle[statusEleIndex].statusElements.push("");
    }

    setStatusElements(clonedStatusEle);
  }

  const handleElementInputChange = (groupId, elementIndex, elementValue) => {
    const clonedStatusEle = [...statusElements];
    const statusEleIndex = clonedStatusEle.findIndex((cSList) => cSList.id === groupId);

    if (statusEleIndex !== -1) {
      clonedStatusEle[statusEleIndex].statusElements[elementIndex] = elementValue
    }

    setStatusElements(clonedStatusEle);

  }

  return (
    <div className={styles.homeContainer}>

      <Head>
        <title>Airtribe Frontend Assignment</title>
        <meta name="description" content="Airtribe Frontend Assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>

        <Header 
          hText="Task Board"
          hStyle="h2"
        />

        <div className={styles.taskBoardContainer}>

          <TaskBoardHeader />

          <div className={styles.taskboardElementsContainer}>
            <TaskBoardStatusContainer 
              handleAddMoreGroup={handleAddMoreGroup}
              statusList={statusList}
              handleUpdateInputField={handleUpdateInputField}
              toggleShowStatusInputField={toggleShowStatusInputField}
              newStatus={newStatus}
              showStausInputField={showStausInputField}
              statusElements={statusElements}
            />

            <TaskboardElementsContainer
              statusElements={statusElements}
              handleAddElementToGroup={handleAddElementToGroup}
              handleElementInputChange={handleElementInputChange}
            />
          </div>

        </div>
      
      </main>
      
    </div>
  )
}

export default Home;