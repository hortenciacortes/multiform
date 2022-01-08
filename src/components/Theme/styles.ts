import styled from "styled-components";

export const Container = styled.div`
    background-color: #02044A;
    color: #FFF;
    min-height: 100vh;
    padding: 0 40px;

    @media (max-width: 600px){
        padding: 0 20px;
    }
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Steps = styled.div`
    flex: 1;
    display: flex;
`;

export const Sidebar = styled.div`
    width: 200px;
    border-radius: 1px solid #16195C;

    @media (max-width: 520px){
        width: 110px;
    }
`;

export const Page = styled.div`
    flex: 1;
    padding: 20px 0 0 40px;
`;