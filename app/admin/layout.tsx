import Container from "@/components/global/Container";
import { Separator } from "@/components/ui/separator";
import AdminSidebar from "./Sidebar";

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Container>
      <h2 className="pt-12 pb-2 capitalize text-xl font-semibold tracking-wider">
        My products
      </h2>
      <Separator />
      <div className="grid grid-cols-[auto_1fr] gap-x-8 py-2">
        <AdminSidebar />
        {children}
      </div>
    </Container>
  );
}
