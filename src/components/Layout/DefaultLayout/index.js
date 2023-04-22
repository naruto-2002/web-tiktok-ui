import { Header, Sidebar } from '../components';

function DefaultLayout({ children }) {
    return (
        <div className="container">
            <Header />
            <div className="content">
                <Sidebar />
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;
