import { useContext, useEffect, useState } from "react";
import "./Account.css";
import axios from "axios";
import { StatusContext } from "../App";

function Account() {
  const IPDatabase = useContext(StatusContext);
  const [Account, setAccount] = useState([]);
  const Email = localStorage.getItem("Email");
  const [Image, SetImage] = useState();

  useEffect(() => {
    axios
      .get(IPDatabase + "/Login/Account/Take/" + Email)
      .then((result) => {
        setAccount(result.data);   
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Email, IPDatabase]);


  const HandleImage = (e) => {
    console.log(Image);
    const fd = new FormData();
    fd.append("Image", Image);
    axios.post( IPDatabase + "/Save/Picture/" , fd ).then( result => {
      console.log(result)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="Account" >
      <input type="file" onChange={e => SetImage(e.target.files[0])}/>
      <button onClick={HandleImage}>Save</button>
    </div>
  );
}

export default Account;
