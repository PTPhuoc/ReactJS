import "./Story.css";
import { Link } from "react-router-dom";

function Story() {
  return (
    <div className="Story">
      <div className="Col-Story">
        <Link to="/Story/ThanThoaiHyLap" className="Link-Story">
          <span className="Line-Story"></span>
          <div className="Story-Book">
            <div className="Story-PC">
              <img
                className="S-PC"
                alt=""
                src="https://media.gettyimages.com/id/1407326345/vector/antique-engraving-collection-civilization-greek-mythology.jpg?s=612x612&w=0&k=20&c=OhVXuzNbFUECOTd8CFuykwP2v2fYjqCzoZS8fdGTGCQ="
              ></img>
            </div>
            <div className="Story-Content">
              <h3 className="S-T-Title">THẦN THOẠI HY LẠP</h3>
              <hr />
              <p>
                Những câu chuyện thần thoại Hy Lạp sau đây được lấy từ sách
                GREEK AND ROMAN MYTHOLOGY bởi JESSIE M. TATLOCK. Bao gồm 2 phần
                lớn và có toàn bộ 18 Chương.
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="Col-Story">
        <Link to="/Story/ThanThoaiBacAu" className="Link-Story">
          <span className="Line-Story"></span>
          <div className="Story-Book">
            <div className="Story-PC">
              <img
                className="S-PC"
                alt=""
                src="https://media.gettyimages.com/id/1178358255/vector/deities-and-rites-of-the-religious-norse-gals-and-celts-engraving-antique-illustration.jpg?s=612x612&w=0&k=20&c=pnBqodS9g3kmIe_V1bFWZ85WfvSxkWs64eBwreD5ook="
              ></img>
            </div>
            <div className="Story-Content">
              <h3 className="S-T-Title">THẦN THOẠI BẮC ÂU</h3>
              <hr />
              <p>
                Norse Mythology là một cuốn sách của tác giả Neil Gaiman kể lại
                các câu chuyện thần thoại Bắc Âu. Cuốn sách được viết theo phong
                cách hấp dẫn và dễ đọc, và nó đã được dịch sang nhiều ngôn ngữ.
                Và cuốn sách Norse Mythology của Neil Gaiman gồm 18 chương.
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="Col-Story">
        <Link to="/Story/ThanThoaiAiCap" className="Link-Story">
          <span className="Line-Story"></span>
          <div className="Story-Book">
            <div className="Story-PC">
              <img
                className="S-PC"
                alt=""
                src="https://media.gettyimages.com/id/464175609/vector/ancient-sculpture-engraving.jpg?s=612x612&w=0&k=20&c=6ClxDjaQP6B-g3bZoYBwknd7Bpf91wVZOoOa9pI4Lg4="
              ></img>
            </div>
            <div className="Story-Content">
              <h3 className="S-T-Title">THẦN THOẠI AI CẬP</h3>
              <hr />
              <p>
                The Gods of the Egyptians là một cuốn sách về các vị thần và nữ
                thần của người Ai Cập cổ đại, được viết bởi E.A. Wallis Budge.
                Cuốn sách được xuất bản lần đầu tiên vào năm 1904 và đã được tái
                bản nhiều lần. Cuốn sách bao gồm một danh sách các vị thần và nữ
                thần Ai Cập, cùng với những mô tả về hình dáng, tính cách và vai
                trò của họ. Budge cũng cung cấp thông tin về các biểu tượng,
                nghi lễ và thần thoại liên quan đến các vị thần. The Gods of the
                Egyptians của E.A. Wallis Budge gồm 22 chương. Chương 1 giới
                thiệu về thần thoại Ai Cập cổ đại và chương 22 là danh sách các
                vị thần và nữ thần Ai Cập.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Story;
