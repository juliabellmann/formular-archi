import Head from "next/head";

export default function RootLayout({ children }) {
    return (
        <>
            <Head>
            <link rel="icon" href="/icon.png" />
            </Head>
            <header>

            </header>
            <main>
                {children}
            </main>
            {/* <NavBar /> */}
        </>
    );
}