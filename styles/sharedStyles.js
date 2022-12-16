import styled from 'styled-components';


const Container = styled.div`
    width: 100%;
    max-width: 1100px;  
    margin: 0 auto;
    padding: 4rem 1.2rem ;
    overflow: hidden;

    @media(min-width: ${({ theme }) => theme.desktop}){
        padding: 5em 1.2rem ;
               
    }
`;


const Section = styled.section`
    width: 100%;
    min-height: 50vh;
`;
 
const Button = styled.button` 
    border-radius: 10px;
    cursor: pointer;
    font-size: ${({ theme }) => theme.medium};
    font-weight: 400;
    padding: 0.5rem;
    transition: all 0.3s ease-in;
    background: ${({ bg }) => bg || 'transparent'};
    color: ${({ color, theme }) => color || theme.primaryColor};
    outline: none;
    border: 1px solid ${({ borderColor, theme }) => borderColor || theme.primaryColor};
   

    &:hover{
        color: ${({ borderColor, theme }) => borderColor || theme.lightGray};
     }
    &:active{
        color: ${({ borderColor, theme }) => borderColor || theme.lightGray};
     }

`;


export { Container, Section, Button }; 