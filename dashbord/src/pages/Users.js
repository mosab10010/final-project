import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"
import AddIcon from "@mui/icons-material/Add"
import UserCell from "../components/UserCell"
import UserITAddModal from "../components/UserITAddModel"
import Sidebar from "../components/Sidebar"

function Users() {
  const { users } = useContext(TasksContext)
  const [show, setShow] = useState(false)
  return (
    <>
          <Sidebar/>

     <center>
     <Button onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon /> add users
        </Button>
          
        <Table bordered hover style={{ tableLayout: "fixed" }}>
          <thead>
            <tr style={{ backgroundColor: "#14274E", color: "white" }}>
              <th>#</th>
              <th>Title</th>
              <th>department</th>
              <th>Description</th>
              <th>category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {users.map(user => (
            <UserCell key={user._id} user={user} />
          ))}
      <UserITAddModal show={show} setShow={setShow} />
       </tbody>
        </Table>
       
          </center>
    </>
  )
}

export default Users
