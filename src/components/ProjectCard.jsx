import { Link } from 'react-router-dom';

function ProjectCard({ item }) {
  const image = item.coverImage || '/images/portfolio-cover.png';
  const isExternal = item.href?.startsWith('http');
  const className =
    'group mb-6 block overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl';

  const content = (
    <>
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={item.title}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-slate-950/0 transition group-hover:bg-slate-950/45" />
      </div>
      <div className="p-5">
        {/* <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
          {item.categories?.join(', ') || item.type}
        </p> */}
        <h3 className="mt-2 text-xl font-bold text-slate-900">{item.title}</h3>
        {item.description && <p className="mt-2 text-sm text-slate-600">{item.description}</p>}
      </div>
    </>
  );

  if (isExternal) {
    return (
      <a className={className} href={item.href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link className={className} to={item.href}>
      {content}
    </Link>
  );
}

export default ProjectCard;
