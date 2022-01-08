import styled from "styled-components";

export const Container = styled.div`
    p{
        font-size: 13px;
        color: #D8D8D4;
    }
    h2{
        margin: 0;
        padding: 0;
        font-size: 24px;
    }
    hr{
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 15px 0;
    }
    label{
        font-size: 13px;

        input{
            display: block;
            margin-top: 7px;
            margin-bottom: 15px;
            box-sizing: border-box;
            width: 90%;
            padding: 15px 10px;
            border: 2px solid #25CD89;
            border-radius: 10px;
            color: #FFF;
            outline: 0;
            font-size: 15px;
            background: #02044A;
        }
    }
    button{
        background-color: #25CD89;
        color: #FFF;
        font-size: 14px;
        font-weight: bold;        
        padding: 15px 20px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 20px;
    }
    .backButton{
        font-size: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #B8B8D4;
    }

    @media (max-width: 600px){
        h2{
            font-size: 20px;
        }
    }
`;