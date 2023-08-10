import { Template } from "../containers";
import { ButtonCard } from "../components";
import call from "../assets/call.png";
import seed from "../assets/seed.png";
import book from "../assets/book.png";
import tree from "../assets/tree-icon.png";
import survey from "../assets/survey.png";
import manual from "../assets/manual.png";
const Services = () => {
  const cards = [
    {
      topic: "แจ้งเรื่องร้องเรียน",
      image: call,
      link: "http://petition.mnre.go.th/",
    },
    {
      topic: "ระบบแจกจ่ายกล้าไม้",
      image: seed,
      link: "https://fp.forest.go.th/rfd_app/rfd_nursery/app/index.php",
    },
    {
      topic: "ระบบการเรียนรู้ออนไลน์",
      image: book,
      link: "https://mooc.mnre.go.th/",
    },
    {
      topic: "ปลูกต้นไม้อะไรดี",
      image: tree,
      link: "https://site-matching.forest.go.th/",
    },
    {
      topic: "แบบสำรวจความพึงพอใจ",
      image: survey,
      link: "https://www.mnre.go.th/th/questionnaire/q/420",
    },
    {
      topic: "คู่มือสำหรับประชาชน",
      image: manual,
      link: "https://www.forest.go.th/psdg/act-2/guide_for_the_citizens/",
    },
  ];
  return (
    <div>
      <Template heading="บริการประชาชน" body={<ButtonCard cards={cards} />} />
    </div>
  );
};

export default Services;
