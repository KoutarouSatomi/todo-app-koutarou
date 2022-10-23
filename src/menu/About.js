import React from 'react';
import huutrong from '../assets/images/face.jpg';
import '../styles/css/about.css';

const About = () => (
  <header>
    <center>
      <img className="photo" src={huutrong} alt="my face" />
    </center>
    <div className="name">
      <h1>Đồng Hữu Trọng</h1>
      <h2>Lớp: K46.CNTT.D</h2>
    </div>

    <div className="text-profile">
      <div className="infomation">
        <h4 className="typed">Họ và Tên: Đồng Hữu Trọng</h4>
        <h4 className="typed">Ngày Sinh: 09/04/2002</h4>
        <h4 className="typed">MSSV: 46.01.104.201</h4>
        <h4 className="typed">Địa chỉ: TP HCM</h4>
        <h4 className="typed">
          Thêm: Hiện đang là sinh viên năm 3, <br />
          khoa công nghệ thông tin, Trường Đại Học Sư Phạm TP HCM
        </h4>
      </div>
      <div className="contact">
        <h4>
          <i className="fa-solid fa-globe" />
          &nbsp; nationality: Việt Nam
        </h4>
        <h4>
          <i className="fa-solid fa-cake-candles" /> &nbsp; BirthDay: 09/04/2002
        </h4>
        <h4>
          <i className="fa-solid fa-phone" /> &nbsp;Phone: (+84) 0349186599
        </h4>
        <h4>
          <i className="fa-solid fa-envelope" /> &nbsp;Email:
          kirigayayuuki165@gmail.com
        </h4>
      </div>
      <div className="icons">
        <a
          title="Add friend with me"
          href="https://www.facebook.com/profile.php?id=100011726735102"
        >
          <i className="fa-brands fa-facebook" />
        </a>
        &ensp;
        <a
          title="Follow me <3"
          href="https://www.instagram.com/satomi_koutarou/"
        >
          <i className="fa-brands fa-instagram" />
        </a>
        &ensp;
        <a title="Follow me <3" href="https://www.tiktok.com/@satomikoutarou">
          <i className="fa-brands fa-tiktok" />
        </a>
        &ensp;
        <a title="Follow me <3" href="https://twitter.com/SatomiKoutarou1">
          <i className="fa-brands fa-twitter" />
        </a>
      </div>
    </div>
  </header>
);

export default About;
