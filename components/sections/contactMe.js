import Image from 'next/image';
import styled from 'styled-components';
import { Container, Section, Button } from '../../styles/sharedStyles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import spaceship from '../../public/images/spaceship.svg';


//STYLES
const StyledContact = styled(Section)`
    width: 100%;
    background: ${({ theme }) => theme.white};
    min-height: 100vh;
    overflow: auto;
    z-index: 11;

    .title{
        max-height: 4.2rem;
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: 1rem;
        margin-bottom: 2.5rem;

        h2{
            z-index: 10;

            @media(min-width: ${({ theme }) => theme.desktop}){
                 margin-bottom: 1.5rem;
            }

            span{
                color: ${({ theme }) => theme.primaryColor};
            }
        }

        hr{
            position: absolute;
            right: 0;
            bottom: 0.2rem;
            width: 90%;
            height: 3px;
            background: ${({ theme }) => theme.secondaryColor};

            @media(min-width: ${({ theme }) => theme.desktop}){
                     bottom: 0;
            }

        }
    }

    #innerContainer{
        width: 100%;
        min-height: 50vh;
        margin-left: auto;
        margin-right: auto;
        margin-top: 4rem;
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
   

        @media(min-width: ${({ theme }) => theme.tablet}){
             flex-direction: row;
             align-items: start;
             height: content;
             margin-top: 3.5rem;
             margin-bottom: 3rem;
        }
    }

    .form-container{
        h3{
            margin-bottom: 2rem;
        }
    }
    

    form{
        width: 100%;
        max-width: 28rem;
        background: ${({ theme }) => theme.white};
        padding: 1rem;
        display: flex;
        flex-direction: column;
        border-radius: 20px;
        border: 2px solid ${({ theme }) => theme.secondaryColor};


        @media(min-width: ${({ theme }) => theme.desktop}){
            padding-top: 2.5rem;
            padding-bottom: 1rem;
           
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
                font-weight: 600;
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
                    border-bottom: 2px solid ${({ theme }) => theme.secondaryColor};
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

    .spaceship-container{
        display: none;
        

        @media(min-width: ${({ theme }) => theme.tablet}){
            display: grid;
            align-items: center;
            justify-self: center;
            position: relative;
            margin-top: 20%;
            width: 100%;
            height: 100%;
        }
        
    }
`;

//helper function to encode the form value in a way netlify would understand it
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
                <div className="title">
                    <h2> Contact <span>Me</span></h2>
                    <hr />
                </div>
                <div id='innerContainer'>

                    <div className="form-container">
                        <h3>
                            Do you want to work with me?
                            Kindly drop a message and I would get back to you ASAP!
                        </h3>

                        <form
                            name='Idoko Emmanuel Portfolio Contact Form'
                            data-netlify='true'
                            onSubmit={formik.handleSubmit}
                        >

                            <p className='formControl' >
                                <input
                                    name='name'
                                    type='text'
                                    id='name'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                                <label htmlFor="name">Your Name</label>

                                {formik.touched.name && formik.errors.name ? <span className='errorMessage'>{formik.errors.name}</span> : null}
                            </p>
                            <p className='formControl' >
                                <input
                                    name='email'
                                    type='email'
                                    id='email'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                <label htmlFor="email">Your Email</label>
                                {formik.touched.email && formik.errors.email ? <span className='errorMessage'>{formik.errors.email}</span> : null}
                            </p>

                            <p className='formControl' >
                                <input
                                    name='messageSubject'
                                    type='text'
                                    id='subject'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.messageSubject}
                                />
                                <label htmlFor="subject">Message Subject</label>
                                {formik.touched.messageSubject && formik.errors.messageSubject ? <span className='errorMessage'>{formik.errors.messageSubject}</span> : null}

                            </p>
                            <p className='formControl' >
                                <textarea
                                    name="message"
                                    id="message"
                                    cols="30" rows="10"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.message}
                                >
                                </textarea>
                                <label htmlFor="name">Message</label>
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


                    <div className='spaceship-container'>
                        <Image
                            src={spaceship}
                            priority='true'
                            placeholder='blur'
                            blurDataURL={spaceship}
                            alt='blob'
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </Container>
        </StyledContact>
    );
};

export default ContactMe;