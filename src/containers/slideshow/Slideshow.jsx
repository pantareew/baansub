import Carousel from "../../components/carousel/Carousel";
import Signboard from "../../assets/signboard.jpg";
import Office from "../../assets/office.jpg";
import Seedling from "../../assets/seedling.jpg";
import Mount from "../../assets/mount.jpg";
import Sunnhemp from "../../assets/sunnhemp.jpeg";
import Sunflower from "../../assets/sunflower.jpeg";
import "./slideshow.css";
const Slideshow = () => {
  const slides = [
    {
      content: Signboard,
      title: "ป้ายโครงการ",
    },
    {
      content: Office,
      title: "อาคารสำนักงาน",
    },
    {
      content: Seedling,
      title: "แจกจ่ายกล้าไม้ให้แก่ชาวบ้าน",
    },
    {
      content: Mount,
      title: "เปลี่ยนเขาหัวโล้นหัวกลับมาอุดมสมบูรณ์",
    },
    {
      content: Sunnhemp,
      title: "ส่งเสริมชาวบ้านให้ปลูกดอกปอเทืองเพื่อป้องกันหน้าดินพังทลาย",
    },
    {
      content: Sunflower,
      title: "ไร่ดอกทานตะวัน ณ บ้านซับตะเคียน",
    },
  ];
  return (
    <div className="slideshow">
      <Carousel id={"slideshowCarousel"} slides={slides} />
    </div>
  );
};

export default Slideshow;
