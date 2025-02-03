import { Blog, Template } from "../containers";
import { useEffect, useState } from "react";
const History = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch("/history");
      const json = await res.json();
      if (res.ok) {
        const result = {
          heading: json.heading,
          image: json.imageUrl,
          texts: json.desc,
        };
        setData(result);
      }
    };
    fetchBlog();
  }, []);
  return (
    <div>
      {data && (
        <Template
          heading={data.heading}
          body={<Blog image={data.image} texts={data.texts} />}
        />
      )}
    </div>
  );
};

export default History;
