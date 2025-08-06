import AdminLayout from '@/app/components/AdminLayout';

export default function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  return <AdminLayout>{children}</AdminLayout>;
}
