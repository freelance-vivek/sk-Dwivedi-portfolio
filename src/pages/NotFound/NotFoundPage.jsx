import { Link } from 'react-router-dom';
export default function NotFoundPage(){return <div className="min-h-screen flex flex-col items-center justify-center gap-4"><h1 className="text-5xl font-bold text-[#00478d]">404</h1><p>Page not found</p><Link to="/" className="underline text-[#00478d]">Back to Home</Link></div>;}
