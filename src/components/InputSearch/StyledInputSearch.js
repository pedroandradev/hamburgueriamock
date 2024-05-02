import styled from "styled-components";

const StyleInputSearch = styled.form`

box-sizing: border-box;
    padding: 10px;
    width: 365px;
    height: 60px;
    background: #FFFFFF;
    border: 2px solid #E0E0E0;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        width: 107px;
        height: 40px;     
        background: #27AE60;
        border: 2px solid #27AE60;
        border-radius: 8px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
        cursor: pointer;
    }

    input{
        border: none;
    }

    input::placeholder{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;    
        color: #E0E0E0;

    }


@media (max-width: 900px){

    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 60px;
    background: #FFFFFF;
    border: 2px solid #E0E0E0;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        width: 107px;
        height: 40px;     
        background: #27AE60;
        border: 2px solid #27AE60;
        border-radius: 8px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
        cursor: pointer;
    }

    input{
        border: none;
    }

    input::placeholder{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;    
        color: #E0E0E0;

    }
}
`

export default StyleInputSearch