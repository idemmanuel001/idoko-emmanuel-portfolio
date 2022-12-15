import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    100%{transform: rotate(360deg)}
`;
const prixClipFix = keyframes`
    0%{clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
    25%{clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
    50%{clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
    75%{clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
    100%{clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
`;

const StyledLoader = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: #17202A;
    color: #00DAF4;
    font-size: 3rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;


    .loader {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        position: relative;
        animation: ${rotate} 1s linear infinite;
        margin-right: 0.5rem;

        &:before {
            content: "";
            box-sizing: border-box;
            position: absolute;
            inset: 0px;
            border-radius: 50%;
            border: 5px solid #00DAF4;
            animation: ${prixClipFix} 2s linear infinite;
        }
    }


 
`;

const Loader = () => {
    return (
        <StyledLoader>
            <span className='loader' ></span>  loading...
        </StyledLoader>
    );
};

export default Loader;