import { useEffect, useState } from 'react';
import { deletePortfolioItem, fetchPortfolio, getPortfolioItemDate } from '../services/portfolioServices';
import Button from './Button';

const formatDate = (value) => {
  if (!value) return 'Not set';

  const date = typeof value.toDate === 'function' ? value.toDate() : new Date(value);
  if (Number.isNaN(date.getTime())) return 'Not set';

  return new Intl.DateTimeFormat('en-AU', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);
};

export default function AdminPortfolioList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let ignore = false;

    const loadProjects = async () => {
      try {
        const portfolioItems = await fetchPortfolio();
        const sortedItems = [...portfolioItems].sort((a, b) => {
          const aTime = getPortfolioItemDate(a)?.getTime() || 0;
          const bTime = getPortfolioItemDate(b)?.getTime() || 0;

          return bTime - aTime;
        });

        if (!ignore) {
          setProjects(sortedItems);
        }
      } catch (error) {
        console.error('Error loading portfolio items:', error);
        if (!ignore) {
          setError('Portfolio items could not be loaded. Please try again.');
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    loadProjects();

    return () => {
      ignore = true;
    };
  }, []);

  const handleDelete = async (project) => {
    const confirmed = window.confirm(`Delete "${project.title || 'this project'}"?`);
    if (!confirmed) return;

    try {
      await deletePortfolioItem(project.id);
      setProjects((currentProjects) => currentProjects.filter((item) => item.id !== project.id));
    } catch (error) {
      console.error('Error deleting portfolio item:', error);
      setError('Portfolio item could not be deleted. Please try again.');
    }
  };

  if (loading) {
    return <p className="mt-4 rounded bg-white p-4 text-slate-600 shadow">Loading portfolio items...</p>;
  }

  return (
    <div className="mt-4 overflow-hidden rounded bg-white shadow">
      <div className="grid grid-cols-[1.5fr_2fr_1fr_1fr_120px] gap-4 border-b bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700">
        <p>Project</p>
        <p>Description</p>
        <p>Category</p>
        <p>Display Date</p>
        <p>Actions</p>
      </div>

      {error && <p className="border-b px-4 py-3 text-sm text-red-600">{error}</p>}

      {projects.length === 0 ? (
        <p className="px-4 py-6 text-sm text-slate-500">No portfolio items found.</p>
      ) : (
        projects.map((project) => {
          const imageUrl = project.coverImageUrl || project.imageUrls?.[0];
          const displayDate = project.date || project.updatedAt || project.createdAt;

          return (
            <div key={project.id} className="grid grid-cols-[1.5fr_2fr_1fr_1fr_120px] items-center gap-4 border-b px-4 py-3 last:border-b-0">
              <div className="flex min-w-0 items-center gap-3">
                {imageUrl ? (
                  <img src={imageUrl} alt={project.title} className="h-14 w-14 rounded object-cover" />
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded bg-slate-200 text-xs text-slate-500">
                    No image
                  </div>
                )}
                <p className="truncate font-medium text-slate-900">{project.title || 'Untitled project'}</p>
              </div>
              <p className="line-clamp-2 text-sm text-slate-600">{project.shortDescription || 'No description'}</p>
              <p className="text-sm text-slate-600">{project.category || 'Not set'}</p>
              <p className="text-sm text-slate-600">{formatDate(displayDate)}</p>
              <div className="flex gap-2">
                <Button to={`/admin/edit/${project.id}`} size="sm">
                  Edit
                </Button>
                <Button type="button" onClick={() => handleDelete(project)} variant="danger" size="sm">
                  Delete
                </Button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
