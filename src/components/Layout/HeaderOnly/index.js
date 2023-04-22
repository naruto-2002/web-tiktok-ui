import { Header } from '../components';

function HeaderOnly({ children }) {
    return (
        <div className="container">
            <div className="content">
                <Header />
                {children}
            </div>
        </div>
    );
}

export default HeaderOnly;
