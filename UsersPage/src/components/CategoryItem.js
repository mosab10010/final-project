import { useState } from "react"
import { Card, Container, Row, Table, Col } from "react-bootstrap"
import { Button } from "react-bootstrap"
import TaskAddModal from "./AddTaskViewModel"

function CategoryItem(props) {
  const [show, setShow] = useState(false)
  const { categor } = props
  return (
    <>
      <Col md={6}>
        <Card>
          <Card.Img style={{ height: "350px"  }} variant="top" src={categor.post} />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>{categor.name}</Card.Title>
            <Card.Text style={{ textAlign: "center" }}>
              {categor.decscription}.
              <Button variant="link" onClick={() => setShow(true)}>
                Link
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <TaskAddModal show={show} setShow={setShow} key={categor._id} categor={categor} />
    </>
  )
}

export default CategoryItem
