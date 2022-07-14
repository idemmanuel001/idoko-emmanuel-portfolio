import React from 'react';
import styled from 'styled-components';
import { Container, Section, Button } from '../styles/sharedStyles';


//STYLES
const StyledContact = styled(Section)`
    width: 100%;
    background: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.black};
    min-height: 100vh;
    overflow: auto;
    z-index: 11;

    #innerContainer{
        width: 100%;
        background: ${({ theme }) => theme.black};
        color:  ${({ theme }) => theme.primaryColor};
        min-height: 50vh;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
        margin-bottom: 1rem;
        z-index: 11;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        border: 2px solid black;

        @media(min-width: ${({ theme }) => theme.desktop}){
             flex-direction: row;
             align-items: start;
             height: content;
             margin-top: 3.5rem;
             margin-bottom: 3rem;
        }
    }

    .contactInfo{
        width: 100%;
        height: 100%;
        padding: 1rem;
        z-index: 11;
        border-radius: 20px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;


         @media(min-width: ${({ theme }) => theme.desktop}){
            height: 100%;
            width:100%;
            border-bottom-left-radius: 20px;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
         }

        h2{
            margin-bottom: 0.8rem;
            font-weight: bold;
        }
        p{
            width: 100%;
            letter-spacing: 1px;
            margin-bottom: 0.5rem ;
            font-weight: 500;

        }

        ul{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            margin-bottom: 0.3rem;
            word-wrap: break-word;
        }
        a{
            color: ${({ theme }) => theme.primaryColor};
            display: block;
            margin-top: 0.5rem;
            text-decoration: underline;
            border-bottom: none;
            transition: all 0.3s ease;


            &:hover{
                color: ${({ theme }) => theme.accentColor};
            }

             p{
                margin-bottom: 0;
                display: flex;
                align-self: baseline;
             }

        }


    }
    form{
        width: 100%;
        z-index: 11;
        color: #fff;
        background: ${({ theme }) => theme.primaryColor};
        padding: 1rem 1rem 1rem 1rem;
        display: flex;
        flex-direction: column;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;


        @media(min-width: ${({ theme }) => theme.desktop}){
            padding-top: 2.5rem;
            padding-bottom: 1rem;
            border-top-right-radius: 20px;
            border-top-left-radius: 0px;
            border-bottom-right-radius: 20px;
            border-bottom-left-radius: 0px;
        }

     p{
        width: 100%;
        min-height: 5rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        color: ${({ theme }) => theme.black};
        background-color: ${({ theme }) => theme.primaryColor};

        &::selection{
            background-color: ${({ theme }) => theme.primaryColor};
        }

        label{
            font-size: ${({ theme }) => theme.medium};
            font-weight: 700;
            margin-bottom: 0.2rem;

             @media(min-width: ${({ theme }) => theme.desktop}){
                margin-bottom: 0.5rem;
             }
        }
        input,
        textarea{
            width: 100%;
            height: 2.5rem;
            color: ${({ theme }) => theme.black};
            background: ${({ theme }) => theme.primaryColor};
            font-size: 1rem;
            font-weight: 400;
            padding: 0.5rem 0;
            border: none;
            border-bottom: 2px solid ${({ theme }) => theme.darkGray};
            outline: none;
            transition: all 0.3s ease-in;

            &:focus{
                border-bottom: 3px solid ${({ theme }) => theme.black};
            }
        }

        textarea{
            resize: none;
            height: 4rem;
        }
        button{
            width: 40%;
            min-width: fit-content;
            height: 3rem;
            font-size: 1.3rem;
            font-weight: bold;

            &:hover{
                width: 100%;
                color: ${({ theme }) => theme.accentColor};
                background: transparent;
                border: 2px solid ${({ theme }) => theme.black};

            }

        }


        }

    }
`;

const ContactMe = () => {


    return (
        <StyledContact
            id='contact' >
            <Container>
                <div id='innerContainer'>
                    <div className="contactInfo">
                        <h2>Contact Me</h2>
                        <p>
                            Do you want to work with me?
                            Kindly drop a message and I would get back to you ASAP!
                        </p>

                        <ul>
                            <a href='mailto:idoko.emmanuel.dev@gmail.com'>
                                <p>Email</p>
                            </a>
                            <a href='https://github.com/idemmanuel001'>
                                <p>Github</p>
                            </a>
                            <a href='https://www.linkedin.com/in/idoko-emmanuel-a3a007203/'>
                                <p>LinkedIn</p>
                            </a>

                        </ul>

                    </div>

                    <form
                        name='contact form'
                        method='POST'
                        data-netlify='true'
                        action='/successPage'
                    >

                        <input type="hidden" name="form-name" value="portfolio contact form" />
                        <p className='formControl' >
                            <label htmlFor="name">Your Name</label>
                            <input name='name' type='text' id='name' placeholder='your name' />
                        </p>
                        <p className='formControl' >
                            <label htmlFor="email">Your Email</label>
                            <input name='email' type='email' id='email' placeholder='please enter your email address' />
                        </p>
                        <p className='formControl' >
                            <label htmlFor="subject">Message Subject</label>
                            <input name='subject' type='text' id='subject' placeholder='message subject' />
                        </p>
                        <p className='formControl' >
                            <label htmlFor="name">Message</label>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder='please type your message here' >

                            </textarea>
                        </p>
                        <p className="formContrl"  >
                            <Button name='submit' 
                            type="submit"
                                bg={({ theme }) => theme.accentColor}
                                color={({ theme }) => theme.black}
                                borderColor={({ theme }) => theme.accentColor}
                                hoverColor={({ theme }) => theme.accentColor}
                                hoverBorderColor={({ theme }) => theme.black}
                            >Submit</Button>
                        </p>
                    </form>
                </div>
            </Container>
        </StyledContact>
    );
};

export default ContactMe;