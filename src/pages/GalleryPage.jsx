import ProjectGrid from "../components/ProjectGrid";
import { visibleGalleryProjects } from "../content/collections";

function GalleryPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          Photography
        </p>
        <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
          Photography Portfolio
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Selected event, candid, and creative photography galleries.
        </p>
      </section>
      <ProjectGrid items={visibleGalleryProjects} />
    </main>
  )
}

export default GalleryPage;
