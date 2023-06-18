import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function App() {
  return (
    <div style={{
      margin:"10%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
    }}>
      <div
        style={{
          width: "500px",
          // position: "absolute",
          // left: "30%",
          // marginTop: "20px",
        }}
      >
        <h1>Github Profile README Generator</h1>
        </div>

     <div style={{
     
      width:"50px",
      // position:"relative",
      // left:"43%"
     }}> <FontAwesomeIcon icon={faGithub} size="3x" /> </div>
      <Link to={"/form"}>
        <div
          style={{
            color:"white",
            backgroundColor: "#4296f5",
            width: "120px",
            position: "absolute",
            height: "40px",
            top: "45%",
            left: "43%",
            fontWeight: "bold",
            fontSize: "16px",
            whiteSpace: "nowrap",
            borderRadius: "10px",
            textAlign: "center",
            paddingTop: "12px",
          }
        }
        >
          Click to Enter!!
        </div>
      </Link>
    </div>
  );
}

export default App;
