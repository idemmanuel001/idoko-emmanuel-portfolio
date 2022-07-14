import styled from 'styled-components';


const Container = styled.div`
    width: 100%;
    max-width: 1100px;  
    margin: 0 auto;
    padding: 2rem 1.2rem ;
    overflow: auto;
`;


const Section = styled.section`
    width: 100%;
    min-height: 50vh;
`;

const Button = styled.button` 
    border-radius: 10px;
    cursor: pointer;
    font-size: ${({ theme }) => theme.medium};
    font-weight: 600;
    padding: 0.5rem ;
    transition: all 0.3s ease-in;
    background: ${({ bg }) => bg || 'transparent'};
    color: ${({ color }) => color || 'inherit'};
    outline: none;
    border: 2px solid ${({ borderColor }) => borderColor || 'none'};
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

    &:hover{
        background: ${({ hoverBg }) => hoverBg || 'transparent'};
        color: ${({ hoverColor }) => hoverColor || 'inherit'};
     }

`;


export { Container, Section, Button }; 