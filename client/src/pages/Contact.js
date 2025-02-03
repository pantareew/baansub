import { Template, Banner } from "../containers";
const Contact = () => {
  return (
    <div>
      <Template
        heading="ติดต่อเรา"
        body={
          <>
            <Banner />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6636.419900622889!2d101.323049!3d15.860298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311f9f50828765cb%3A0xb0b9f52a47066d80!2z4LmC4LiE4Lij4LiH4LiB4Liy4Lij4Lie4Lix4LiS4LiZ4Liy4Lib4LmI4Liy4LmE4Lih4LmJ4LiV4Liy4Lih4LmB4LiZ4Lin4Lie4Lij4Liw4Lij4Liy4LiK4LiU4Liz4Lij4Li04Lia4LmJ4Liy4LiZ4LiL4Lix4Lia4LiV4Liw4LmA4LiE4Li14Lii4LiZIOC4lS7guKrguKPguLDguYHguIHguYnguKcg4LitLuC4muC4tuC4h-C4quC4suC4oeC4nuC4seC4mSDguIgu4LmA4Lie4LiK4Lij4Lia4Li54Lij4LiT4LmM4oCL!5e1!3m2!1sth!2sau!4v1700287225588!5m2!1sth!2sau"
              allowFullScreen
              style={{
                width: "100%",
                height: "60vh",
                padding: "20px",
              }}
              title="map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </>
        }
      />
    </div>
  );
};

export default Contact;
