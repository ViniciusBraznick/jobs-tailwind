import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();
  return(
    <div className="h-full bg-blue-500 flex flex-col gap-8 items-center justify-center">
      <h1 className="text-9xl font-bold text-white tracking-widest">404</h1>
      <button onClick={() => navigate(-1)} className="text-gray-200 text-xl">Voltar</button>
    </div>
  )
}