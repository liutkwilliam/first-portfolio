import ProjectCard from './ProjectCard';

function ProjectGrid({ items }) {
  return (
    <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
      {items.map((item) => (
        <div key={`${item.type}-${item.slug}`} className="break-inside-avoid">
          <ProjectCard item={item} />
        </div>
      ))}
    </div>
  );
}

export default ProjectGrid;
