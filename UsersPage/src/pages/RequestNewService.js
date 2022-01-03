import { Card, Container, Row, Table, Col } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import TasksContext from "../utils/TasksContext"
import AddIcon from "@mui/icons-material/Add"
import TaskAddModal from "../components/AddTaskViewModel"
import CategoryItem from "../components/CategoryItem"
import Navbar from "../components/Navbar"

function RequestNewService() {
  const { category } = useContext(TasksContext)

  return (
    <>
           <Navbar />
           <center>

           <h1>Request a new service</h1>
           </center>
    <div style={{ marginTop: "80px", marginBottom: "80px" }}>


      <Container>
        <Row xs={1} md={2} className="g-4">
          {category.map(categor => (
 <CategoryItem categor={categor} />
          ))}
        </Row>
      </Container>
    </div>
    </>
  )
}

export default RequestNewService
