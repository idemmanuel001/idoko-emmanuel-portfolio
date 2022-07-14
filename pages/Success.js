import Link from 'next/link';
import styled from 'styled-components';
import { Container, Section, Button } from '../Components/styles/sharedStyles';


const StyledSuccess = styled(Section)`
    min-height: 80vh;
    background: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.black};

    >div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center

        button{
            width: fit-content;
        }
    }

`

export default function Success() {


    return (
        <StyledSuccess>
            <Container>
                <h2>
                    Form successfully submitted!
                </h2>

                <Link
                    href='/'
                    passHref
                >
                    <Button
                        bg={({ theme }) => theme.accentColor}
                        color={({ theme }) => theme.black}
                        borderColor={({ theme }) => theme.accentColor}
                        hoverColor={({ theme }) => theme.accentColor}
                        hoverBorderColor={({ theme }) => theme.black}
                    >
                        Go back
                    </Button>

                </Link>
            </Container>
        </StyledSuccess>
    );
}
