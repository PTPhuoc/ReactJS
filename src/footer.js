import "./footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-Name">
        <h3 className="Name-F">
          PHAN TÂN PHƯỚC - PU<span className="Last-Name">sen</span>
        </h3>
      </div>
      <div className="Footer-Gmail">
        <div>
          <i class="fa-regular fa-envelope" id="Icon-F"></i>
        </div>
        <div>
          <p>tanphuocphan370@gmail.com</p>
        </div>
      </div>
      <div>
        <a
          className="Footer-FB"
          href="https://www.facebook.com/profile.php?id=100050163765479"
        >
          <div>
            <i class="fa-brands fa-square-facebook" id="Icon-F"></i>
          </div>
          <div>
            <p>Phan Tân Phước</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Footer;
