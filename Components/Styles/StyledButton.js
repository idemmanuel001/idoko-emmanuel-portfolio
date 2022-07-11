import styled from 'styled-components';

const StyledButton = styled.button`
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.15);
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 0.5rem ;
    transition: all 0.3s ease-in;

    background-color: ${({ bg }) => bg || 'transparent'};
    color: ${({ color }) => color || 'inherit'};
    outline: none;
    border: 2px solid ${({ borderColor }) => borderColor || 'none'};
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5)

   
`;

export default StyledButton;