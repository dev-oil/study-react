import { Link } from 'react-router-dom';

export const Home = () => {
  const menuItems = [
    { path: '/typescript', label: 'TypeScript' },
    { path: '/ui', label: 'UI' },
    { path: '/interactivity', label: '상호작용' },
  ];
  return (
    <div className='min-h-screen p-10 bg-white'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-12'>
          🧪 React 19 실험실 🧪
        </h1>

        <ul className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {menuItems.map(({ path, label }, i) => (
            <li key={path}>
              <Link
                to={path}
                className='block rounded-2xl p-6 bg-white shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-transform duration-200'
              >
                <span className='text-lg font-semibold text-gray-800'>
                  {i}. {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
