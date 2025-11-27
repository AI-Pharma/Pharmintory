import Footer from "@components/landing-page/footer";
import Root_Nav from "@components/root-nav/root-nav";

export default function SrcLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Root_Nav />
      {children}
      <Footer />
    </>
  );
}
