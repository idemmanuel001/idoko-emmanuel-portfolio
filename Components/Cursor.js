import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';


const StyledCursor = styled.div`
    background: ${({ theme }) => theme.secondaryColor};
    display: none; 

    @media(min-width: ${({ theme }) => theme.desktop}){
        display: block; 
                
    }

    .cursor{
        position: fixed;
        background-color: ${({ theme }) => theme.accentColor};
        width: 10px;
        height: 10px;
        border-radius: 100%;
        z-index: 1;
        transition: 0.3s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
            0.2s cubic-bezier(0.75, -0.27, 0.3, 1.33) opacity;
        user-select: none;
        pointer-events: none;
        z-index: 10000;
        transform: translate(-50%, -50%);
        transition: all 0.015s linear;
    }

    .cursorFollower{
        position: fixed;
        border:2px solid ${({ theme }) => theme.secondaryColor};
        width: 30px;
        height: 30px;
        border-radius: 100%;
        z-index: 1;
        transition: 0.6s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
            0.2s cubic-bezier(0.75, -0.27, 0.3, 1.33) opacity, 0.2s cubic-bezier(0.75, -0.27, 0.3, 1.33) background;
        user-select: none;
        pointer-events: none;
        z-index: 10000;
        transform: translate(-50%, -50%);
        overflow: hidden;
        transition: all 0.1s linear;
        }

`;

const Cursor = props => {
    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);
    const cursorRef = useRef(null);
    const cursorFollowerRef = useRef(null);



    const updateCursor = (e) => {
        setPosX(e.clientX + 'px');
        setPosY(e.clientY + 'px');

        cursorRef.current.style.left = posX;
        cursorRef.current.style.top = posY;
        cursorFollowerRef.current.style.left = posX;
        cursorFollowerRef.current.style.top = posY;
    };


    const showCursor = ()=>{
        cursorRef.current.style.display = '';
        cursorFollowerRef.current.style.display = '';
    }

    const hideCursor = ()=>{
        cursorRef.current.style.display = 'none';
        cursorFollowerRef.current.style.display = 'none';
    }

    useEffect(() => {
        document.addEventListener('mouseenter', showCursor);
        document.addEventListener('mousemove', updateCursor);
        document.addEventListener('mouseleave', hideCursor);

        return () => {
            document.removeEventListener('mouseenter', showCursor);
            document.removeEventListener('mousemove', updateCursor);
            document.removeEventListener('mouseleave', hideCursor);
        };
    });


    return (
        <StyledCursor>
            <div
                ref={cursorRef}
                className="cursor"></div>
            <div
                ref={cursorFollowerRef}
                className="cursorFollower"></div>

        </StyledCursor>
    );
};
export default Cursor;