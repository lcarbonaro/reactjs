import Menu from './Menu';
import Footer from './Footer';

const Layout = (props) => (

    <div>
        <Menu/>

        <div className="container">
            {props.children}
            <Footer/>
        </div>      

        
    </div>

);

export default Layout;