import { Template } from "../containers";
import { ButtonCard } from "../components";
import { useEffect, useState } from "react";
const Services = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchService = async () => {
      const res = await fetch("/services");
      const json = await res.json();
      console.log(json);
      if (res.ok) {
        const result = json.map((item) => ({
          title: item.title,
          image: item.icon,
          link: item.link,
        }));
        setData(result);
      }
    };
    fetchService();
  }, []);
  console.log(data);
  return (
    <div>
      {data && (
        <Template heading="บริการประชาชน" body={<ButtonCard cards={data} />} />
      )}
    </div>
  );
};

export default Services;
