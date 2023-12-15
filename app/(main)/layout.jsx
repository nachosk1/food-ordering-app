import Footer from "../../components/Footer";
import Header from "../../components/Header";


export default function RootLayout({ children }) {
    return (
        <>
            <Header />
            <div className='max-w-5xl mx-auto px-4'>
                {children}
            </div>
            <Footer />
        </>
    )
}