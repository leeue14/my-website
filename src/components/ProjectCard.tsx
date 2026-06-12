interface Props {
  name: string;
  description: string;
  githubUrl: string;
  image: string;
}

export default function ProjectCard({ name, description, githubUrl, image }: Props) {
  return (
    <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
      <div className={`aspect-video ${image}`} />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-black dark:text-white">{name}</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{description}</p>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          GitHub &rarr;
        </a>
      </div>
    </div>
  );
}
