// imports
import {IoIosExpand} from "react-icons/io";
import {BsPlusCircle, BsTriangleFill} from "react-icons/bs";
import {BiSquare} from "react-icons/bi";
import {RiCloseLine, RiGalleryLine} from "react-icons/ri";
import {MdAddCircleOutline, MdAddComment} from "react-icons/md";

// local imports
import styles from "../styles/Home.module.css";

function TaskBoardModal(props) {

    const {handleDeleteSinlgeElement, handleCloseModal, singleElement} = props;

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

export default TaskBoardModal;