import { useContext } from "react"
import { Col, Container, Row, Table } from "react-bootstrap"
import Navbar from "../components/Navbar"
import ListAltIcon from "@mui/icons-material/ListAlt"
import TasksContext from "../utils/TasksContext"

function MyRequests() {
  const { profile, tasks } = useContext(TasksContext)

  return (
    <>
      <div
        style={{
          backgroundColor:"#FFF8F3",
          backgroundAttachment: "fixed",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <Container>
          <div style={{ marginTop: "20px" }}>
            <center>
              <h1 style={{ fontFamily: "serif", color: "#4B6587" }}>
                My requests
                <ListAltIcon sx={{ fontSize: 50 }} />
              </h1>
            </center>
          </div>

          <Table bordered style={{ color:"white", marginLeft: "10px", marginBottom: "50px", marginTop: "30px" }}>
            <thead>
              <tr style={{ backgroundColor:"#4B6587"}}>
                <td style={{ textAlign: "center", width: "20%" }}>Title of the request</td>
                <td style={{ textAlign: "center", width: "30%" }}>description of the request</td>
                <td style={{ textAlign: "center", width: "10%" }}>CompletionRrate</td>
                <td style={{ textAlign: "center", width: "30%" }}>process progress</td>
                <td>Task Do</td>
              </tr>
            </thead>
            <tbody>
              {profile.requests?.map(request => (
                <tr style={{ color: "black" }}>
                  <th style={{ textAlign: "center",}}> {request.title}</th>
                  <th style={{ textAlign: "center",}}>{request.decscription}</th>
                  <th style={{ textAlign: "center",}}> {request.CompletionRrate}</th>
                  <th style={{ textAlign: "center",}}>{request.progress}</th>
                  {request.taskDo ? (
                    <th style={{ textAlign: "center" }}>
                      {request.taskDo.firstName} {request.taskDo.lastName}
                    </th>
                  ) : (
                    <th style={{ textAlign: "center" }}>-</th>
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  )
}

export default MyRequests
