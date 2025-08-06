'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-TealBlue text-whitesmoke py-10 p-4 space-y-0">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      {['dashboard', 'posts', 'users'].map((item) => (
        <Link
          key={item}
          href={`/admin/${item}`}
          className={`block px-3 py-2 rounded  ${
            pathname === `/admin/${item}` ? 'bg-customBlue' : ''
          }`}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Link>
      ))}
    </aside>
);}