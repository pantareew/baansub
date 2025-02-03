import { Template } from "../containers";
import { HorizCard } from "../components";
import { useState, useEffect } from "react";
const Events = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchEvent = async () => {
      const res = await fetch("/events");
      const json = await res.json();
      if (res.ok) {
        const result = json.map((item) => ({
          title: item.title,
          image: item.image,
          content: item.content,
          date: [
            new Intl.DateTimeFormat("th", { dateStyle: "medium" }).format(
              Date.parse(item.start_date)
            ),
            item.finish_date
              ? " - " +
                new Intl.DateTimeFormat("th", { dateStyle: "medium" }).format(
                  Date.parse(item.finish_date)
                )
              : null,
          ],
        }));

        setData(result);
      }
    };
    fetchEvent();
  }, []);
  return (
    <div>
      {data && (
        <Template heading="ภาพกิจกรรม" body={<HorizCard cards={data} />} />
      )}
    </div>
  );
};

export default Events;
