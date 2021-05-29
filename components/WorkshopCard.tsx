import Link from "next/link";

interface Props {
  slug: string;
  name: string;
  description: string;
  img: string;
}

const WorkshopCard: React.FC<Props> = ({ slug, name, description, img }) => (
  <Link href={`https://workshops.hackclub.com/${slug}`} passHref>
    <div
      className="flex flex-col no-underline p-0 leading-none bg-gray-50 rounded-lg shadow-lg hover-card"
      style={{ maxWidth: "268px" }}
    >
      <div className="p-4">
        <h3 className="my-1 font-bold text-lg">{name}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
      <img
        alt={`${name} demo`}
        src={img}
        style={{ width: "268px", height: "134px" }}
        className="rounded-b-lg mt-auto object-cover object-center"
      />
    </div>
  </Link>
);

export default WorkshopCard;
