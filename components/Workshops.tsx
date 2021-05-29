import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "util/fetcher";
import WorkshopCard from "./WorkshopCard";

interface Props {}

type Workshop = {
  slug: string;
  name: string;
  description: string;
  img: string;
  tags: any[];
  author: string;
};

const url = "https://workshops.hackclub.com/workshops.json";

const Workshops: React.FC = () => {
  const { data, error } = useSWR<Workshop[]>(url, fetcher);
  const [workshops, setWorkshops] = useState<Workshop[]>();

  if (error) console.log(error);

  useEffect(() => {
    if (!data) return;
    const filtered = data.filter(
      (workshop) => workshop.author === "@faisalsayed10"
    );

    setWorkshops(filtered);
  }, [data]);

  return (
    <>
      <div className="mb-20">
        <h3 className="text-gray-700 lg:mb-12 text-lg md:text-xl ml-6 mr-2 font-medium antialiased text-center">
          I've also written many workshops for{" "}
          <a href="https://hackclub.com" target="_blank" className="underline">
            Hack Club!
          </a>
        </h3>
        <div className="grid place-items-center">
          <div
            className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-3 w-screen-lg"
            style={{ maxWidth: "90vw" }}
            data-aos="fade-up"
          >
            {workshops &&
              workshops.map((workshop) => (
                <WorkshopCard key={workshop.slug} {...workshop} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Workshops;
