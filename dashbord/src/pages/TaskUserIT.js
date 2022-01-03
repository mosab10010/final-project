import { Button, Row } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table, Col } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"
import AddIcon from "@mui/icons-material/Add"
import TaskCell from "../components/TaskCell"
import SidebarUserIT from "../components/SidebarUserIT"
import TaskUserITCell from "../components/TaskUserITCell "

function TasksUserIT() {
  const { profile, tasks } = useContext(TasksContext)
  const [show, setShow] = useState(false)
  if (!profile) return null
  const tasksFinished = profile.requests.filter(task => task.progress == "The request has been completed successfully")
  const tasksNotFinished = profile.requests.filter(
    task => task.progress !== "The request has been completed successfully"
  )

  return (
    <>
      <SidebarUserIT />

      <div>
        <center>
          <h1>All Task not finsh</h1>
        </center>
        <Table bordered hover style={{ tableLayout: "fixed" }}>
          <thead>
            <tr>
              <th style={{ width: "9%" }}>ID</th>
              <th style={{ width: "18%" }}>Title</th>
              <th style={{ width: "10%" }}>priority</th>
              <th style={{ width: "30%" }}>Description</th>
              <th style={{ width: "18%" }}>department</th>
              <th style={{ width: "18%" }}>Completion rate</th>
              <th style={{ width: "36%" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasksNotFinished.map(request => (
              <TaskUserITCell key={request._id} request={request} />
            ))}
          </tbody>
        </Table>
        <br />
        <br />
        <br />
        <br />
        <center>
          <h1>All Task finsh</h1>
        </center>

        <Table bordered hover style={{ tableLayout: "fixed" }}>
          <tr>
            <th style={{ width: "9%" }}>ID</th>
            <th style={{ width: "18%" }}>Title</th>
            <th style={{ width: "30%" }}>Description</th>
            <th style={{ width: "18%" }}>department</th>
            <th style={{ width: "18%" }}>Completion rate</th>
            <th style={{ width: "36%" }}>Actions</th>
          </tr>
          <tbody>
            {tasksFinished.map(request => (
              <TaskUserITCell key={request._id} request={request} />
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default TasksUserIT
