// imports
import { useEffect, useState } from 'react';
import {IoIosExpand} from "react-icons/io";
import {BsPlusCircle, BsTriangleFill} from "react-icons/bs";
import {BiSquare} from "react-icons/bi";
import {RiCloseLine, RiGalleryLine} from "react-icons/ri";
import {MdAddCircleOutline, MdAddComment} from "react-icons/md";
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

  const [singleElement, setSingleElement] = useState({
    groupId: "",
    statusEle: "",
    elementIndex: 0,
    id: "",
  });
  const [statusList, setStatusList] = useState([]);
  const [statusElements, setStatusElements] = useState([]);
  const [showStausInputField, setShowStatusInputField] = useState(false);
  const [newStatus, setNewStatus] = useState("");
  const [showModal, setShowModal] = useState(false);

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

  const handleElementDragAndDrop = (fromElement, toElement) => {
    const clonedStatusElements = [...statusElements];

    const fromElementIndex = clonedStatusElements.findIndex((cEle) => cEle.id === fromElement.id);
    const toElementIndex = clonedStatusElements.findIndex((cEle) => cEle.id === toElement.id);

    if (fromElementIndex !== -1) {
      clonedStatusElements[fromElementIndex].statusElements.splice(fromElement.indexValue, 1);
    }

    if (toElementIndex !== -1) {
      clonedStatusElements[toElementIndex].statusElements.splice(toElement.indexValue, 0, fromElement.statusEle);
    }
  
    setStatusElements(clonedStatusElements);

  }

  const handleDeleteSinlgeElement = () => {
    
    const {elementIndex, id} = singleElement;
    console.log("singleElement", singleElement)
    const clonedStatusElements = [...statusElements];
    const filteredGroupIndex = clonedStatusElements.findIndex((cEle) => cEle.id === id);

    if (filteredGroupIndex > -1) {
      clonedStatusElements[filteredGroupIndex].statusElements.splice(elementIndex, 1);
    }

    setStatusElements(clonedStatusElements);

    handleCloseModal();

  }

  const handleSingleElementClick = (statusEle, groupId, indexVal, id) => {
    setShowModal(true);
    setSingleElement({
      groupId,
      statusEle,
      elementIndex: indexVal,
      id,
    })
  }

  const handleCloseModal = () => {
    setShowModal(false);
    setSingleElement({
      groupId: "",
      statusEle: "",
    });
  }

  const renderModal = () => {
    return (
      <div className={styles.taskBoardModal}>
        <div className={styles.taskBoardModalSection}>

          <div className={styles.taskBoardModalHeader}>
            <div className={styles.taskBoardModalLeftHeader}>
              <IoIosExpand
                size={18}
                color="#ababa9"
              />
              <span className={styles.taskBoardModalLeftText}>Open As Page</span>
            </div>

            <div className={styles.taskBoardModalRightHeader}>
              <span className={styles.taskBoardModalLeftText}>Share</span>
              <span className={styles.taskBoardModalLeftText}>Updates</span>
              <span
                className={styles.taskBoardModalLeftText}
                onClick={() => handleDeleteSinlgeElement()}
              >
                Delete
              </span>
              <span
                className={styles.taskBoardModalLeftText}
                onClick={() => handleCloseModal()}
              >
                <RiCloseLine 
                  size={20}
                  color="#ababa9"
                />
              </span>
              
            </div>
          </div>

          <div className={styles.taskBoardModalBody}>

            <div className={styles.taskBoardModalSection1}>

              <span className={styles.taskBoardModalSectionIconConatiner}>
                <MdAddCircleOutline
                  size={18}
                  color="#ababa9"
                />
                <span className={styles.taskBoardModalLeftText}>Add Icon</span>
              </span>

              <span className={styles.taskBoardModalSectionIconConatiner}>
                <RiGalleryLine
                  size={18}
                  color="#ababa9"
                />
                <span className={styles.taskBoardModalLeftText}>Add Cover</span>
              </span>

            </div>

            <div className={styles.taskBoardModalSection2}>
              <p className={styles.taskBoardModalSectionHeader}>{singleElement.statusEle}</p>
            </div>

            <div className={styles.taskBoardModalSection3}>

              <div className={`${styles.taskBoardModalLeftHeader} ${styles.taskBoardModalMaring}`}>
                <BiSquare
                  size={18}
                  color="#ababa9"
                />
                <span className={styles.taskBoardModalLeftText}>Status</span>
                <span className={`${styles.taskBoardModalLeftText} ${styles.taskBoardModalLeftTextMargin}`}>
                  {singleElement.groupId}
                </span>
              </div>

              <div className={`${styles.taskBoardModalLeftHeader} ${styles.taskBoardModalMaring}`}>
                <BsTriangleFill
                  size={18}
                  color="#ababa9"
                />
                <span className={styles.taskBoardModalLeftText}>Assign</span>
                <span className={`${styles.taskBoardModalLeftText} ${styles.taskBoardModalLeftTextMargin}`}>
                  Unassigned
                </span>
              </div>

              <div className={styles.taskBoardModalLeftHeader}>
                <BsPlusCircle
                  size={18}
                  color="#ababa9"
                />
                <span className={styles.taskBoardModalLeftText}>Add A Property</span>
              </div>
              
            </div>

            <div className={styles.taskBoardModalSection4}>
              <MdAddComment
                size={20}
                color="#ababa9"
              />

              <p className={styles.taskBoardModalText}>Add a component</p>
            </div>

            <p>Please ENTER to continue with Empty Page.</p>

          </div>

        </div>
      </div>
    );
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
              statusList={statusList}
              handleAddElementToGroup={handleAddElementToGroup}
              handleElementInputChange={handleElementInputChange}
              handleElementDragAndDrop={handleElementDragAndDrop}
              handleSingleElementClick={handleSingleElementClick}
            />
          </div>

        </div>
      
      </main>

      {
        (showModal === true) && renderModal()
      }

    </div>
  )
}

export default Home;