import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"
import AddIcon from "@mui/icons-material/Add"
import TaskCell from "../components/TaskCell"
import BossTaskCell from "../components/BossTaskCell"
import TaskAddModal from "../components/TaskAddModel"
import Home from "./HomeBoss"
import Sidebar from "../components/Sidebar"


function BossTasks() {
  const { bosstasks , users} = useContext(TasksContext)
  const [show, setShow] = useState(false)
  return (
    <>
      
     <Sidebar/>
     <div>
     <Button style={{marginLeft: "800px", marginTop:"40px",position:"absolute" }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
          Add Task
        </Button>
        </div>
     <Table striped bordered hover style={{ marginLeft: "10px", marginTop:"80px",backgroundColor: "#F1F6F9", textAlign: "center" }}>
          <thead>
      <h1 style={{marginLeft:"300px"}}>Employees Tasks</h1>
            <tr style={{ backgroundColor: "#14274E", color: "white" }}>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {bosstasks.map(bosstask => (
            <BossTaskCell key={bosstask._id}  bosstask={bosstask} users={users}/>

            // <Home key={bosstask._id}  bosstask={bosstask} users={users}/>



            ))}
            
            </tbody>
        </Table>
      <TaskAddModal show={show} setShow={setShow} />
    </>
  )
}

export default BossTasks
