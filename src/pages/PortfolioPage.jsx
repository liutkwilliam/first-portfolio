import ProjectGrid from '../components/ProjectGrid';
import {
  visibleBlogPosts,
  visibleDeveloperProjects,
  visiblePortfolioProjects,
} from '../content/collections';

const pageConfig = {
  portfolio: {
    title: 'Design Portfolio',
    description: 'Creative work across graphic design, publication design, website design, and UI design.',
    items: visiblePortfolioProjects,
  },
  developer: {
    title: 'Developer Portfolio',
    description: 'Frontend, static site, and full-stack web projects.',
    items: visibleDeveloperProjects,
  },
  posts: {
    title: 'Blog',
    description: 'Notes, reflections, and project write-ups.',
    items: visibleBlogPosts,
  },
};

function PortfolioPage({ type = 'portfolio' }) {
  const page = pageConfig[type] || pageConfig.portfolio;

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          William Liu
        </p>
        <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
          {page.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">{page.description}</p>
      </section>
      <ProjectGrid items={page.items} />
    </main>
  )
}

export default PortfolioPage
