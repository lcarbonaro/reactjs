import Link from 'next/link';
import Head from 'next/head';

const Menu = () => (   


    <div className="container">
        
        <Head>
            <title>NextJS Example</title>
            <link 
                rel="stylesheet" 
                href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css" />
        </Head>

        <nav className="blue">
            <ul>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/about"><a>About</a></Link>
                </li>
                <li>
                    <Link href="/contact"><a>Contact</a></Link>
                </li>
                <li>
                    <Link href="/members"><a>Members</a></Link>
                </li>
            </ul>

        </nav>
    </div>
    

);

export default Menu;