import { useContext, useState } from "react";
import "./SignIn.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StatusContext } from "../App";

function SignIn() {
  const IPDatabase = useContext(StatusContext);
  const [Acc, setAcc] = useState({
    Email: "",
    Password: "",
  });

  const [Status, setSatus] = useState("");
  const [Wrong, setWrong] = useState({
    Email: "",
    Password: "",
  });

  const Navigate = useNavigate();

  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        IPDatabase + "/Login/Account/Check/" +
          Acc.Email +
          "/" +
          Acc.Password
      )
      .then((result) => {
        setSatus(result.data)
        console.log(Status);
        if (Status === "Email") {
          setWrong({ Email: "Wrong", Password: "Wrong" });
        } else if (Status === "Password") {
          setWrong({ Password: "Wrong", Email: "" });
        } else if (Status === "Success") {
          localStorage.setItem("IsLogged", "true");
          localStorage.setItem("Email", Acc.Email);
          Navigate("/");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChange = (e) => {
    setAcc({ ...Acc, [e.target.name]: e.target.value });
  };

  console.log(Acc);

  return (
    <div className="Sign-In">
      <div className="PC-Sign-in">
        <img
          className="PC-Login"
          alt=""
          src="https://images.pexels.com/photos/2031774/pexels-photo-2031774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></img>
      </div>
      <form className="Form-Sign-In" onSubmit={HandleSubmit}>
        <h3 className="F-Si-Title">ĐĂNG NHẬP</h3>
        <div className="F-Si-Text">
          <input
            id={Wrong.Email}
            className="Input-Si"
            type="text"
            placeholder="Email"
            name="Email"
            onChange={onChange}
          />
        </div>
        <div className="F-Si-Password">
          <input
            id={Wrong.Password}
            className="Input-Si"
            type="password"
            placeholder="Mật Khẩu"
            name="Password"
            onChange={onChange}
          />
        </div>
        <div>
          <button className="Button-Si" type="submit">
            Xác Nhận
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
