import "./HyLap.css";
import axios from "axios";
import { useState, useEffect, useCallback, useContext } from "react";
import { StatusContext } from "../App";

function HyLap() {
  const IPDatabase = useContext(StatusContext);
  const [Chuong, setChuong] = useState({
    Phan: 1,
    TenBang: "c1_tthl",
    Ten: "THẾ GIỚI CỦA NHỮNG THẦN THOẠI",
  });
  const [Content, setContent] = useState([]);
  const [TenChuong, setTenChuong] = useState([]);
  const [SoPhan, setSoPhan] = useState([]);
  useEffect(() => {
    axios
      .get(
        IPDatabase + "/DanhSachTTHL/" +
          Chuong.TenBang +
          "/" +
          Chuong.Phan
      )
      .then((result) => {
        setContent(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Chuong.TenBang, Chuong.Phan, IPDatabase]);

  useEffect(() => {
    axios
      .get( IPDatabase + "/DanhSachTTHL/SL/" + Chuong.TenBang)
      .then((result) => {
        setSoPhan(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Chuong.TenBang, IPDatabase]);

  useEffect(() => {
    axios
      .get( IPDatabase + "/DanhSachTTHL")
      .then((result) => {
        setTenChuong(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [IPDatabase]);

  const Change = useCallback((TenBang, Phan, Ten) => {
    setChuong({ TenBang: TenBang, Phan: Phan, Ten: Ten });
  }, []);

  return (
    <div className="HyLap">
      <div className="Nav-HL">
        <h3 className="Title-Nav-HL">THẦN THOẠI HY LẠP</h3>
        {TenChuong.map((TC) => (
          <div className="Option-Nav-HL">
            <button
              className="Button-Nav-HL"
              onClick={() => Change(TC.Ten_Bang, 1, TC.Ten)}
            >
              {TC.Ten}
              <span className="Line-HL"></span>
            </button>
          </div>
        ))}
      </div>
      <div className="Content-Left-HL">
        <div className="Title">
          <h3>{Chuong.Ten}</h3>
        </div>
        <div className="Content-HL">
          {Content.map((C) => (
            <p className="Text-Content-HL">{C.Noi_Dung}</p>
          ))}
        </div>
        <div className="Select-Chapter-HL">
          {SoPhan.map((SP) => (
            <div className="Select-HL">
              <button
                className="Button-Select-HL"
                onClick={() => Change(Chuong.TenBang, SP.SL, Chuong.Ten)}
              >
                {SP.SL}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HyLap;
