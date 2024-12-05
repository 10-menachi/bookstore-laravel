import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import { Toaster } from '@/components/ui/toaster';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="flex min-h-screen flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </div>
            <Toaster />
        </>
    );
}
