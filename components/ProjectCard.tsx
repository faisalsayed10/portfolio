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
    <div className="flex flex-col w-96 items-center justify-center relative rounded-3xl hover:shadow-2xl hover-trigger py-12">
      <img src={project_image} className="hover-image w-40 h-40" />
      <h1 className="pb-4 text-2xl font-semibold">{title}</h1>
      <p className="pb-12 text-md">{desc}</p>
      <a href={more_url}>
        <button className="rounded-xl bg-blue-900 hover-target text-white px-6 py-3">
          Learn More
        </button>
      </a>
    </div>
  );
};

export default ProjectCard;
