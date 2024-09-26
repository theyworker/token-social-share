import React from 'react';
import Head from 'next/head';

type LayoutProps = {
    children: React.ReactNode;
    title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title = 'Default Title' }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>© 2024 PoloVentures</p>
            </footer>
        </div>
    );
};

export default Layout;