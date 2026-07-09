import Button from '../components/Button';
import useSubtitle from '../hooks/useSubtitle';

function NotFoundPage() {
  useSubtitle({ title: '404 Not Found', description: 'The page you are looking for does not exist.' });
  return (
    <>
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-center text-white">
        <div>
          <img src="/images/404help.svg" alt="" className="mx-auto mb-8 max-h-64" />
          <h1 className="text-5xl font-black">404</h1>
          <p className="mt-4 text-lg text-slate-300">This page wandered off with a camera.</p>
          <Button to="/" size="lg" className="mt-8 rounded-full">
            Back home
          </Button>
        </div>
      </main>
    </>
  )
}

export default NotFoundPage
