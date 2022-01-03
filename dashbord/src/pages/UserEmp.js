import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"
import AddIcon from "@mui/icons-material/Add"
import UserCell from "../components/UserCell"
import UserITAddModal from "../components/UserITAddModel"
import UserEmpCell from "../components/UsersEmpCell"
import Sidebar from "../components/Sidebar"
import UserEmpAddModal from "../components/UserEmpAddModel"

function UsersEmp() {
  const { usersEmp } = useContext(TasksContext)
  const [show, setShow] = useState(false)
  console.log(usersEmp)
  return (
    <>
    <Sidebar/>
    <div>
      <br />
     <Button style={{marginLeft: "800px", marginTop:"20px",position:"absolute" }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
          Add Users
        </Button>
      <h2 style={{ left:"500px", marginLeft:"100px" ,position:"absolute" }}>Add users page</h2>
        </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <br /> <br />
      </div>
      
      <Table bordered hover style={{ tableLayout: "fixed", marginTop:"90px" }}>
        <thead>
        
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>first name</th>
            <th style={{ width: "18%" }}>last name</th>
            <th style={{ width: "18%" }}>avatar</th>
            <th style={{ width: "9%" }}>Dept.</th>
            <th style={{ width: "36%" }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {usersEmp.map(userEmp => (
            <UserEmpCell key={userEmp._id} userEmp={userEmp} />
          ))}
        </tbody>
      </Table>
      <UserEmpAddModal show={show} setShow={setShow} />
    </>
  )
}

export default UsersEmp
