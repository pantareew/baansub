import "./banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <div className="alert">
        <div className="row">
          <div className="col-lg-4">
            <b>ที่อยู่</b>
            <br /> เลขที่ 99 หมู่ 9 ตำบลสระแก้ว อำเภอบึงสามพัน จังหวัดเพชรบูรณ์
            67160
          </div>
          <div className="col-lg-4 middle">
            <b>โทรศัพท์</b>
            <br />
            0-5500-9937
          </div>
          <div className="col-lg-4">
            <b>เวลาทำการ</b>
            <br />
            จันทร์ - ศุกร์ เวลา 08:00 - 17:00 น.
            <br />
            ปิดทำการเสาร์ - อาทิตย์ และวันหยุดนักขัตฤกษ์
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
