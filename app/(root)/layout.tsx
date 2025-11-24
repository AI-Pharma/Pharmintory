import Footer from "@components/landing-page/footer";
import RootNav from "@components/RootNav/RootNav";

export default function SrcLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RootNav />
      {children}
      <Footer />
    </>
  );
}
