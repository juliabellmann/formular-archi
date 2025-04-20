import Link from "next/link";
import styled, { css } from "styled-components";

export default function Login()
{
    return (
        <>
        <h1>Login Bereich</h1>
            <StyledLogin>
                <StyledFieldet className="container-login">
                    <h2>Login</h2>
                    <StyledFlexLeft>

                        <StyledLabel for="email-login">E-Mail: </StyledLabel>
                        <StyledInput type="text" id="email-login" name="email-login" placeholder="E-Mail *" required />

                        <StyledLabel for="password-login">Passwort: </StyledLabel>
                        <StyledInput type="text" id="password-login" name="password-login" placeholder="Passwort *" required />
                        
                        <Link href="#">Passwort vergessen?</Link>

                        <StyledBtn href="/formular" className="button">Anmelden</StyledBtn>

                        <h2>Neues Konto anlegen</h2>

                        <StyledLabel for="email-neuernutzer">E-Mail: </StyledLabel>
                        <StyledInput type="text" id="email-neuernutzer" name="email-neuernutzer" placeholder="E-Mail *" required />

                        <StyledLabel for="password-neuernutzer">Passwort: </StyledLabel>
                        <StyledInput type="text" id="password-neuernutzer" name="password-neuernutzer" placeholder="Passwort *" required />

                        <StyledBtn href="#" className="button">Jetzt Konto anlegen</StyledBtn>
                    </StyledFlexLeft>

                </StyledFieldet>
            </StyledLogin>

        </>
    )
}

const StyledLogin = styled.form`
    /* margin-top: 10%; */
`;

const StyledFieldet = styled.fieldset`
    /* background-color: blue; */
    /* display: flex; */
    /* border: 1px solid red; */
`;

const StyledFlexLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`;

const StyledLabel = styled.label`
    margin-top: 1rem;

`;

const StyledInput = styled.input`
    width: 100%;
`;

const StyledBtn = styled(Link)`
    width: 150px;
`;