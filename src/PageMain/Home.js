import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="Home-Intro">
        <div className="Home-Intro-Tx">
          <p>
            <b>Thần thoại</b> là một bộ sưu tập các câu chuyện về các vị thần,
            nữ thần, anh hùng và quái vật. Những câu chuyện này được lưu truyền
            qua nhiều thế kỷ và có nguồn gốc từ nhiều nền văn hóa khác nhau trên
            thế giới.
            <br />
            <ul>
              <li>
                Thần thoại thường giải thích về nguồn gốc của thế giới, sự sáng
                tạo của con người, và các hiện tượng tự nhiên.
              </li>
              <li>
                Chúng cũng cung cấp những bài học đạo đức và giá trị về cuộc
                sống.
              </li>
              <li>
                Thần thoại có thể là một nguồn giải trí và thư giãn tuyệt vời.
              </li>
              <li>
                Chúng cũng có thể giúp chúng ta hiểu biết hơn về bản thân và thế
                giới xung quanh.
              </li>
            </ul>
            Nếu bạn quan tâm đến thần thoại, có rất nhiều tài liệu có sẵn để bạn
            đọc và tìm hiểu.
          </p>
        </div>
        <div className="Home-Intro-Pc">
          <img
            className="Home-Pc"
            alt=""
            src="https://images.pexels.com/photos/2908773/pexels-photo-2908773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ></img>
        </div>
      </div>
      <div className="Home-Story">
        <div className="Home-Story-HL">
          <div className="H-S-F-1">
            <img
              className="H-S-HL-Pc"
              alt=""
              src="https://media.gettyimages.com/id/517387874/photo/wonders-of-the-world-statue-of-zeus-by-phidia-bpa-25526.jpg?s=612x612&w=0&k=20&c=n1QlaOku3mnf-_LMF61ILMElSK_BUKrTf8eU_mb_b18="
            ></img>
          </div>
          <div className="H-S-F-1">
            <p className="H-S-HL-Tx">
              <i>Thần thoại Hy Lạp</i> là một bộ sưu tập các câu chuyện về các
              vị thần, nữ thần, anh hùng và quái vật của người Hy Lạp cổ đại.
              Các câu chuyện này được lưu truyền qua nhiều thế kỷ và đã được ghi
              lại trong các tác phẩm văn học như Iliad và Odyssey. Thần thoại Hy
              Lạp là một phần quan trọng của văn hóa Hy Lạp và nó đã được truyền
              cảm hứng cho nghệ thuật, văn học và âm nhạc trong nhiều thế kỷ.
            </p>
          </div>
        </div>
        <div className="Home-Story-BA">
          <div className="H-S-F-1">
            <img
              className="H-S-BA-Pc"
              alt=""
              src="https://media.gettyimages.com/id/858560916/vector/odin-welcomes-heroes-into-valhalla-norse-mythology.jpg?s=612x612&w=0&k=20&c=2VKwt0E9GfXQ9q89Tx47kWrDOxcBUW8xasQ3grXllC0="
            ></img>
          </div>
          <div className="H-S-F-1">
            <p className="H-S-BA-Tx">
              <i>Thần thoại Bắc Âu</i> là một hệ thống các câu chuyện về các vị
              thần, nữ thần, anh hùng và quái vật của người Bắc Âu cổ đại. Các
              câu chuyện này đã được truyền miệng trong nhiều thế kỷ và đã được
              ghi lại trong các tác phẩm văn học như Edda Cổ và Edda Mới. Thần
              thoại Bắc Âu là một phần quan trọng của văn hóa Bắc Âu và đã được
              truyền cảm hứng cho nghệ thuật, văn học và âm nhạc trong nhiều thế
              kỷ.
            </p>
          </div>
        </div>
        <div className="Home-Story-IC">
          <div className="H-S-F-1">
            <img
              alt=""
              className="H-S-IC-Pc"
              src="https://media.gettyimages.com/id/1357940532/vector/ancient-egyptian-gods-and-goddesses-wood-engraving-published-in-1862.jpg?s=612x612&w=0&k=20&c=wZYOK9savilycY28VlP-ZiY1i_7qsVXIlNLElLR4Bz4="
            ></img>
          </div>
          <div className="H-S-F-1">
            <p className="H-S-IC-Tx">
              <i>Thần thoại Ai Cập</i> là một hệ thống các niềm tin và nghi lễ
              tôn giáo đã được phát triển bởi người Ai Cập cổ đại. Nó bao gồm
              một loạt các câu chuyện về các vị thần, nữ thần, anh hùng và quái
              vật. Thần thoại Ai Cập đóng một vai trò quan trọng trong đời sống
              của người Ai Cập cổ đại và nó vẫn còn được nghiên cứu và tìm hiểu
              cho đến ngày nay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
