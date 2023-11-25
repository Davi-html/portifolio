import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    .about-me {
        padding: 40px;
        
        display: flex;
        flex-direction: column;
        align-items: center;

        background: #2C243B;
        
        
        img {
            width: 243px;
            height: 208px;
        }

        .div-button {
            width: 160px;
            margin-top: 32px;
        }

        .icons {
            display: flex;
            gap: 24px;
            margin-bottom: 32px ;
            margin-top: 20px;
        }

        #about-p{
            color: #7DFFAF;
            font-family: kalam;
            margin-bottom: 16px;
        }

        h2 {
            font-size: 21px;

            margin-bottom: 16px;
        }

        @media (min-width: 971px){

            display: flex;
            flex-direction: row;
            gap: 30px;
        
            img {
                width: 50%;
                height: 50%;
            }

        }
    }

    .projects {
        width: 100%;
        height: auto;
        padding: 48px 24px;

        display: flex;
        flex-direction: column;
        align-items: center;

        .div-button {
            width: 128px;
            height: 56px;
            margin: 0 auto;
        }

        #project-p{
            color: #7DFFAF;
            font-family: kalam;
            margin-bottom: 16px;
        }

        h2 {
            font-size: 24px;
            font-family: Heebo;
            font-weight: 500;
            line-height: 32px;
            word-wrap: break-word;
            margin-bottom: 40px;
            text-align: center;
            width: 312px;
        }

        .card-body {
            border-radius: 16px;
            padding: 16px;
            margin-bottom: 40px;

            width: 100%;
            height: auto;

            background: #2C243B;

            @media (min-width: 358px){
                width: 384px;
                height: auto;
            }
        }

        .card-content {

            .img {
                display: flex;
                justify-content: center;
            }

            .img img {
                width: 280px;
                height: 160px;
            }

            .section {
                display: flex;
                margin:  16px 0px;
            }

            .section svg {
                margin-left: 8px;
            }

            .section p {
                margin-right: auto;
                
                color: #CDD0D4;
            }

            #title {
                font-size: 20px;
                margin-bottom: 8px;
                font-weight: 500;
                line-height: 24px;

                font-family: Heebo;
                word-wrap: break-word
            }

            @media (min-width: 358px){
                .img img {
                    width: 336px;
                    height: 160px;
                }
                
                width: 336px;
                height: auto;
            }
        }

        @media (min-width: 358px){
            display: grid;
            justify-content: center;
            align-items: center;
            
            #project-p{
                margin: 8;
                text-align: center;
            }

            h2 {
                margin:  0 auto 40px;
            }
        }

        .all-cards{
            @media (min-width: 786px){
                display: grid;
                grid-template-rows: auto auto ;
                grid-template-columns: auto auto ;

                justify-content: center;
                align-items: center;
                gap: 32px;
                
                #project-p{
                    margin: 8;
                    text-align: center;
                }

                h2 {
                    margin:  0 auto 40px;
                }
            }

            @media (min-width: 1228px){
                display: grid;
                grid-template-rows: auto auto ;
                grid-template-columns: auto auto auto ;

                justify-content: center;
                align-items: center;
                gap: 32px;

                
                #project-p{
                    margin: 8;
                    text-align: center;
                }

                h2 {
                    margin:  0 auto 40px;
                }
            }
        }
        
    }

    .all-info {
        background: #2C243B;
        padding: 48px 24px;

        textarea {
            margin-bottom: 32px;
        }

        img {
            width: 160px;
            height: 160px;
            border-radius: 50%;
        }

        .form {
            margin-top: 48px;

            display: flex;
            flex-direction: column;
        }

        #contact-p {
            color: #7DFFAF;
            font-family: kalam;
            margin-bottom: 16px;
        }

        .img-info {
            margin-bottom: 40px;
        }

        h2 {
            margin-bottom: 16px;
        }
        
        span {
            color: #7DFFAF;
            text-decoration: underline;
        }

        a {
            color: white;
        }

        .social-icon {
            margin-top: 40px;

            display: flex;
            gap: 8px;
        }

        .social-icon svg {
            background-color: #413A4F;
            border-radius: 8px;
            padding: 12px;
        }

        .div-button{
            width: 225px;
        }

        @media (min-width: 760px){
            display: flex;  
            justify-content: center;
            align-items: center;

            gap: 136px;
            
            .info {
                flex: 1;
            }

            .form {
                flex:1;
            }
        }
    }
    

    footer {
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 30px;

        height: 100px;

        a {
            color: white;
        }
    }
`;


