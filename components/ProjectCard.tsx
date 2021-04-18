interface Props {
  project_image: string;
  title: string;
  desc: string;
  more_url: string;
}

const ProjectCard: React.FC<Props> = ({
  project_image,
  title,
  desc,
  more_url,
}) => {
  return (
    <div className="flex flex-col card w-96 items-center justify-evenly relative rounded-3xl hover:shadow-2xl hover-trigger px-8 my-8 mx-4">
      <img src={project_image} className="hover-image w-auto h-36 rounded-lg" />
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-md">{desc}</p>
      <a href={more_url}>
        <button className="rounded-xl bg-blue-900 hover-target text-white px-6 py-3">
          Learn More
        </button>
      </a>
    </div>
  );
};

export default ProjectCard;
