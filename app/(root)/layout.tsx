import RootNav from "@components/RootNav/RootNav";

export default function SrcLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="page-content">
            <RootNav/>
            {children}
        </main>
    );
}
