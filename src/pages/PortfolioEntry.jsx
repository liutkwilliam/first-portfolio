import { Link, useParams } from 'react-router-dom';
import MarkdownContent from '../components/MarkdownContent';
import { developerProjects, galleryProjects, portfolioProjects, blogPosts } from '../content/collections';

const collectionMap = {
  portfolio: portfolioProjects,
  developer: developerProjects,
  gallery: galleryProjects,
  posts: blogPosts,
};

const labelMap = {
  portfolio: 'Design Portfolio',
  developer: 'Developer Portfolio',
  gallery: 'Photography',
  posts: 'Blog',
};

const backMap = {
  portfolio: '/portfolio',
  developer: '/developer',
  gallery: '/photography',
  posts: '/blog',
};

function PortfolioEntry({ type = 'portfolio' }) {
  const { id } = useParams();
  const item = collectionMap[type]?.find((entry) => entry.slug === id);

  if (!item) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-4xl font-bold text-slate-950">Project not found</h1>
        <Link className="mt-6 inline-block font-semibold text-blue-600" to={backMap[type]}>
          Back to {labelMap[type]}
        </Link>
      </main>
    );
  }

  const imageBase = `/images/${item.folder ? `${item.folder}/` : ''}`;

  return (
    <>
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-slate-950 text-center text-white">
        {item.coverImage && (
          <img
            src={item.coverImage}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
        )}
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-200">
            {labelMap[type]}
          </p>
          <h1 className="text-4xl font-black tracking-tight md:text-6xl">{item.title}</h1>
          {item.date && <p className="mt-4 text-lg">{item.date.getFullYear()}</p>}
          {item.categories?.length > 0 && (
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em]">
              {item.categories.join(', ')}
            </p>
          )}
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <Link className="mb-8 inline-block font-semibold text-blue-600 hover:text-blue-800" to={backMap[type]}>
          {'<'} Back to {labelMap[type]}
        </Link>
        <article className="mx-auto max-w-3xl">
          <MarkdownContent>{item.content}</MarkdownContent>
        </article>

        {item.images.length > 0 && (
          <section className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {item.images.map((image, index) => (
              <figure key={`${image.image_path}-${index}`} className="mb-5 break-inside-avoid overflow-hidden rounded-2xl bg-white shadow">
                <img
                  src={`${imageBase}${image.image_path}`}
                  alt={image.title || `${item.title} image ${index + 1}`}
                  className="w-full object-cover"
                  loading="lazy"
                />
                {image.title && <figcaption className="p-3 text-sm text-slate-600">{image.title}</figcaption>}
              </figure>
            ))}
          </section>
        )}
      </main>
    </>
  )
}

export default PortfolioEntry
