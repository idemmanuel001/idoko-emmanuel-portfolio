import styled from 'styled-components';
import { Container, Section, Button } from '../styles/sharedStyles';
import { useFormik } from 'formik';
import * as Yup from 'yup';


//STYLES
const StyledContact = styled(Section)`
    width: 100%;
    background: ${({ theme }) => theme.white};
    min-height: 100vh;
    overflow: auto;
    z-index: 11;

    #innerContainer{
        width: 100%;
        background: ${({ theme }) => theme.secondaryColor};
        color:  ${({ theme }) => theme.lightGray};
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
        border: 2px solid ${({ theme }) => theme.black};

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
            color: ${({ theme }) => theme.lightGray};
            display: block;
            margin-top: 0.5rem;
            text-decoration: underline;
            border-bottom: none;
            transition: all 0.3s ease;


            &:hover{
                color: ${({ theme }) => theme.primaryColor};
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
        background: ${({ theme }) => theme.white};
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
        color: ${({ theme }) => theme.secondaryColor};
        background: ${({ theme }) => theme.white};

        &::selection{
            background: ${({ theme }) => theme.white};
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
            color: ${({ theme }) => theme.secondaryColor};
            background: ${({ theme }) => theme.white};
            font-size: ${({ theme }) => theme.small};
            font-weight: 400;
            padding: 0.5rem 0;
            border: none;
            border-bottom: 2px solid ${({ theme }) => theme.darkGray};
            outline: none;
            transition: all 0.3s ease-in;

            &:focus{
                border-bottom: 3px solid ${({ theme }) => theme.secondaryColor};
            }
        }

        textarea{
            resize: none;
            height: 4rem;
        }

        .errorMessage{
            color: ${({ theme }) => theme.red};
            margin-bottom: 0.5rem;
            font-size: ${({ theme }) => theme.verySmall};
        }

        button{
            width: 40%;
            min-width: fit-content;
            height: 3rem;
            font-size: ${({ theme }) => theme.medium};
            font-weight: bold;

            &:hover{
                width: 100%;
                background: transparent;
            }
        }

        }

    }
`;

//heler function to encode the form value ina way netlify would understand it
const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
};

const ContactMe = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            messageSubject: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'must be between 3 and 30 characters long')
                .max(30, 'must be between 3 and 30 characters long')
                .required('required field'),

            email: Yup.string()
                .email('Invalid email address')
                .required('required field'),

            messageSubject: Yup.string()
                .min(3, 'must be between 3 and 60 characters long')
                .max(60, 'must be between 3 and 60 characters long')
                .required('required field'),

            message: Yup.string()
                .min(10, 'must be between 10 and 1000 characters long')
                .max(1000, 'must be between 10 and 1000 characters long')
                .required('required field'),

        }),
        onSubmit: (values, actions) => {
            //Sending the data to netlify for handling
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "Idoko Emmanuel Portfolio Contact Form", ...values })
            })
                .then(() => {
                    alert(`thanks ${values.name} for sending a message, i would get back  to you soon!`);
                    actions.resetForm();
                })
                .catch(() => {
                    alert('an error occured while submiting the form');
                })
                .finally(() => actions.setSubmitting(false));
        }
    });



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
                        name='Idoko Emmanuel Portfolio Contact Form'
                        data-netlify='true'
                        onSubmit={formik.handleSubmit}
                    >

                        <p className='formControl' >
                            <label htmlFor="name">Your Name</label>
                            <input
                                name='name'
                                type='text'
                                id='name'
                                placeholder='your name'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />

                            {formik.touched.name && formik.errors.name ? <span className='errorMessage'>{formik.errors.name}</span> : null}
                        </p>
                        <p className='formControl' >
                            <label htmlFor="email">Your Email</label>
                            <input
                                name='email'
                                type='email'
                                id='email'
                                placeholder='please enter your email address'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? <span className='errorMessage'>{formik.errors.email}</span> : null}
                        </p>

                        <p className='formControl' >
                            <label htmlFor="subject">Message Subject</label>
                            <input
                                name='messageSubject'
                                type='text'
                                id='subject'
                                placeholder='message subject'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.messageSubject}
                            />
                            {formik.touched.messageSubject && formik.errors.messageSubject ? <span className='errorMessage'>{formik.errors.messageSubject}</span> : null}

                        </p>
                        <p className='formControl' >
                            <label htmlFor="name">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                cols="30" rows="10"
                                placeholder='please type your message here'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                            >
                            </textarea>
                            {formik.touched.message && formik.errors.message ? <span className='errorMessage'>{formik.errors.message}</span> : null}

                        </p>
                        <p className="formControl"  >
                            <Button name='submit'
                                type="submit"
                                color={({ theme }) => theme.secondaryColor}
                                borderColor={({ theme }) => theme.secondaryColor}
                            >Submit</Button>
                        </p>
                    </form>
                </div>
            </Container>
        </StyledContact>
    );
};

export default ContactMe;