import Footer from "./footer/Footer";
import Header from "./header/Header";

function MasterLayout({ Page }) {
    return (
        <>
            <Header />
            {Page}
            <Footer />
        </>
    );
}

export default MasterLayout;