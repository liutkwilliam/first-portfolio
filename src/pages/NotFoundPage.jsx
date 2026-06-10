import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-center text-white">
      <div>
        <img src="/images/404help.svg" alt="" className="mx-auto mb-8 max-h-64" />
        <h1 className="text-5xl font-black">404</h1>
        <p className="mt-4 text-lg text-slate-300">This page wandered off with a camera.</p>
        <Link className="mt-8 inline-block rounded-full bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700" to="/">
          Back home
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
