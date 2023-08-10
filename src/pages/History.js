import { Blog, Template } from "../containers";
import mount from "../assets/about-mount.jpeg";
const History = () => {
  const texts = [
    "เนื่องด้วยผู้อำนวยการสำนักบริหารพื้นที่อนุรักษ์ที่ 11 มีความประสงค์ที่จะก่อตั้งโครงการอันเนื่องมาจากพระราชดำริ ณ บ้านซับตะเคียน เพื่อน้อมนำทฤษฏีการพัฒนาฟื้นฟูป่าไม้อันเนื่องมาจากพระราชดำริมาปรับใช้ในการแก้ปัญหาพื้นที่ป่าที่ทรุดโทรมและป้องกันการบุกรุกผืนป่าจากประชาชนในพื้นที่",
    "ในช่วงปีพ.ศ. 2535 - 2540 กรมป่าไม้และหน่วยงานที่เกี่ยวข้องได้ทำการย้ายที่อยู่ผู้บุกรุกที่ดินในเขตรักษาพันธุ์สัตว์ป่าตะเบาะ - ห้วยใหญ่ จึงทำให้ไม่เหลือประชากรอาศัยอยู่ ณ บริเวณนั้น",
    "ในทางกลับกัน ณ เขตป่าสงวนแห่งชาติแม่น้ำป่าสัก มีชุมชนเข้าบุกรุกพื้นที่เพื่อตั้งถิ่นฐานและเพาะปลูก ซึ่งนำมาสู่ปัญหาจำนวนมาก อาทิ เขาหัวโล้น ผลผลิตตกต่ำ รายได้ลดลง ฝนตกไม่ตามฤดูกาล และขาดน้ำดื่มเพื่อบริโภคในช่วงหน้าแล้ง ",
    "ยิ่งไปกว่านั้น พื้นที่บริเวณนี้เป็นพื้นที่รับน้ำสำหรับอ่างเก็บน้ำคลองลำกง อำเภอหนองไผ่ และอ่างเก็บน้ำห้วยเล็ง อำเภอวิเชียรบุรี จังหวัดเพชรบูรณ์ โดยอ่างเก็บน้ำเหล่านี้ถูกสร้างขึ้นโดยพระราชดำริของพระบาทสมเด็จพระเจ้าอยู่หัว รัชกาลที่ 9",
  ];
  return (
    <div>
      <Template
        heading="ประวัติความเป็นมา"
        body={<Blog image={mount} texts={texts} />}
      />
    </div>
  );
};

export default History;
