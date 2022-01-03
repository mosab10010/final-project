import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"
import AddIcon from "@mui/icons-material/Add"
import CategoryCall from "../components/CategoryCall"
import Sidebar from "../components/Sidebar"
import CategoryAddModal from "../components/CategoryAddModel"

function Categorys() {
  const { categorys } = useContext(TasksContext)
  const [show, setShow] = useState(false)

  return (
    <>
      <Sidebar />

          
        <tbody>
          <center>
          <h1>Category</h1>
          </center>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={() => setShow(true)} variant="outline-primary">
              <AddIcon /> add New Category
            </Button>
          </div>
          <br />
          
          {categorys.map(category => (
            <CategoryCall key={category._id} category={category} />
          ))}
        </tbody>
      <CategoryAddModal show={show} setShow={setShow} />
    </>

    
  )
}

export default Categorys
