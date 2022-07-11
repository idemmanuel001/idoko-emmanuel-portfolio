import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@400;600&family=Roboto+Condensed&display=swap');
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


    html{
    width: 100%;
    height: 100vh;
    }

    body{
    width: 100%;
    height: 100%;
    font-size: 1rem;
    font-family: 'Poppins','Roboto Condensed','Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: black;
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
        font-size:1.8rem;
    }

    h1,
    h2{
    font-weight: 700;
    }

    h2{
    font-size: 1.6rem;

     @media(min-width: 680px){
         font-size: 2rem;
         margin: 0.8rem 0;
     }
    }

    h3{
    font-size: 1.3rem;
    font-weight: 600;

     @media(min-width: 680px){
         font-size: 1.6rem;
     }
    }

    p{
    font-size: 1.2rem;
    font-weight: 400;

     @media(min-width: 680px){
         font-size: 1.3rem;
     }
    }

    img{
    width: 100%;
    }

`;

export default GlobalStyles;