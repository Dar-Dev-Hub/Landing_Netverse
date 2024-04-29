"use client"
import ToasterContext from "@/app/context/ToastContext";
import Header from "../Header";
import Lines from "../Lines";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";



export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div>
            <Lines />
            <Header />
            <ToasterContext />
            {children}
            <Footer />
            <ScrollToTop />

        </div>
    );
}