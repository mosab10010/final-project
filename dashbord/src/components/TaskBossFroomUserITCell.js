import { useState } from "react"
import { Button,ListGroup } from "react-bootstrap"
import ChangeProgress from "./progressChange"
import DeleteDeleteModal from "./TaskDeleteModel"
import TaskFromBossProgressChange from "./TaskFromBossProgressChange"
import TaskFromBossViewModal from "./TaskFromBossViewModal "
import TaskViewModal from "./TaskViewModal"
import UserITTaskViewModal from "./UserITTaskViewModal"
import UserChangeProgress from "./UserprogressChange"
import UserViewModal from "./UserViewModel"

function TaskBossFroomUserITCell(props) {
  const {requestBoss,task} = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{requestBoss._id}</td>
      <td>{requestBoss.title}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{requestBoss.decscription}</td>
     
      
     
        <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
           Task
        </Button>
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
        status
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
       <TaskFromBossViewModal show={viewShow} setShow={setViewShow} requestBoss={requestBoss}  />
      <TaskFromBossProgressChange show={editShow} setShow={setEditShow} requestBoss={requestBoss} /> 
      
     
    </tr>
  )
}

export default TaskBossFroomUserITCell
