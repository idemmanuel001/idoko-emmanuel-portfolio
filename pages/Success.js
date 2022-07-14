import Link from 'next/link';
import styled from 'styled-component';
import { Container, Section, Button } from '../Components/styles/sharedStyles';

export default function Success() {


    return (
        <Section>
            <container>
                <h1>
                    Form successfully submitted!
                </h1>

                <Link
                    href='/'
                    passHref
                >
                    <Button>
                        Go back
                    </Button>

                </Link>
            </container>
        </Section>
    );
}
