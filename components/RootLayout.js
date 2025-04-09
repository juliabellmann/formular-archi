import Head from "next/head";

export default function RootLayout({ children }) {
    return (
        <>
            <Head>
            <link rel="icon" href="/icon.png" />
            </Head>
            <header>
                <h1>Formular zum Ausfüllen durch den Architekten</h1>
            </header>
            <main>
                {children}
            </main>
            {/* <NavBar /> */}
        </>
    );
}