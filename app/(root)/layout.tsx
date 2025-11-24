import RootNav from "@components/RootNav/RootNav";

export default function SrcLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RootNav />
      <main>{children}</main>
    </>
  );
}
