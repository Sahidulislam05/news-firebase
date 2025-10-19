import { useLoaderData, useParams } from "react-router";
import DetailsCard from "../components/DetailsCard";
import Header from "../components/Header";
import RighAside from "../components/homelayout/RighAside";
import { useEffect, useState } from "react";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
//   console.log(data, id, news);
  useEffect(() => {
    const newsDetails = data.find((news) => news.id === String(id));
    setNews(newsDetails);
  }, [data, id]);

  return (
    <div>
      <header className="py-3">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
        <section className="col-span-9">
          <h2 className="font-bold mb-5">News details</h2>
          <DetailsCard news={news} ></DetailsCard>
        </section>
        <aside className="col-span-3">
          <RighAside></RighAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
