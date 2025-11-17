import NavBar from "@/components/NavBar";
import Sidebar from "@/components/sideBar/Sidebar";

export default function SrcLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <NavBar />
        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  );
}
