import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 
    *{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    } 

    *::after,
    *::before,
    *::content{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    }

    :root{
        font-size: 1rem;
        scroll-behavior: smooth;
    }

    html{
    width: 100%;
    height: 100vh;
    }

    body{
    width: 100%;
    height: 100%;
    font-family:  -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: ${({theme})=> theme.black};
    background-color: white;
    }

    #__next{
    width: 100%;
    height: 100%;
    }

    ul {
    list-style-type: none;
    }

    a {
    text-decoration: none;
    }

    h1{
        font-size: ${({theme}) => theme.largeX2};

        @media(min-width: ${({ theme }) => theme.tablet}){
            font-size: ${({theme}) => theme.largeX3};
            margin: 0.1 0;
        }

        @media(min-width: ${({ theme }) => theme.desktop}){
            font-size: ${({theme}) => theme.largeX4};
            margin: 0.3 0;
         }
    }

    h1,
    h2{
    font-weight: 700;
    }

    h2{
     font-size: ${(theme) => theme.large};

     @media(${(theme)=> theme.desktop}){
         font-size: ${(theme) => theme.large};
         margin: 0.2 0;
     }
    }

    h3{
        font-weight: 600;
        font-size: ${(theme) => theme.medium};

        @media(${(theme) => theme.desktop}){
            font-size: ${(theme) => theme.large};
            margin: 0.1 0;
        }
    }

    p{
        font-weight: 400;
        font-size: ${(theme) => theme.medium};

        @media(${(theme) => theme.tablet}){
            font-size: ${(theme) => theme.large};
        }
    }

    img{
        width: 100%;
    }

`;

export default GlobalStyles;