import Link from "next/link";

export default function Login()
{
    return (
        <>
            <form>
                <fieldset className="container-login">
                    <h2>Login</h2>

                    <input type="text" id="email-login" name="email-login" placeholder="E-Mail *" required />
                    <input type="text" id="password-login" name="password-login" placeholder="Passwort *" required />
                    <Link href="#">Passwort vergessen?</Link>

                    <Link href="/formular" className="button">Anmelden</Link>

                    <h2>Neues Konto anlegen</h2>

                    <input type="text" id="email-neuernutzer" name="email-neuernutzer" placeholder="E-Mail *" required />
                    <input type="text" id="password-neuernutzer" name="password-neuernutzer" placeholder="Passwort *" required />

                    <div href="#" className="button">Jetzt Konto anlegen</div>

                </fieldset>
            </form>

        </>
    )
}