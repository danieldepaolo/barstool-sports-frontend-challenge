import { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import { ApiFeed } from "../../types";
import Story from "../Story";

export default function Feed () {
  const [data, setData] = useState<ApiFeed>();

  useEffect(() => {
    fetch(API_URL).then((response) => response.json()).then((data) => setData(data));
  }, [])

  console.log(data);
  
  return (
    <section className="[&>article]:mt-4">
      {data?.map((story) => <Story story={story} />)}
    </section>
  );
}
