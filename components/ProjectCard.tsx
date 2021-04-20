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
    <div className="flex flex-col items-center justify-evenly rounded-3xl hover:shadow-xl card hover-trigger">
      <img
        src={project_image}
        className="hover-image w-auto h-36 rounded-lg "
      />
      <h1 className="text-2xl font-semibold ">{title}</h1>
      <p className="text-md px-6 font-medium text-center">{desc}</p>
      <a href={more_url}>
        <button className="rounded-lg bg-blue-900 hover-target text-white px-4 py-2">
          Learn More
        </button>
      </a>
    </div>
  );
};

export default ProjectCard;
