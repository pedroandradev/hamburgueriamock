import styled from "styled-components";

const StyledProductCard = styled.li`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 300px;
    height: 346px;
    background-color: #FFFFFF;
    border: 2px solid #E0E0E0;
    border-radius: 5px;
    gap: 20px;


    .productImg{
        box-sizing: border-box;
        width: 300px;
        max-height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F5F5F5;
        margin: 0;

        img{
            max-width: 100%;
            max-height: 100%;
            height: auto;
        }
    }

    .productInformation{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        padding:0  21px;

        h3{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: #333333;

    }

    .category{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;   
        color: #828282;
    }

    .price{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;    
        color: #27AE60;

    }

    button{
        width: 106px;
        height: 40px;
        background: #27AE60;
        border: 2px solid #27AE60;
        border-radius: 8px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
        cursor: pointer;

    }
    }

@media (max-width: 900px){

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 100%;
    max-height: 100%;
    background-color: #FFFFFF;
    border: 2px solid #E0E0E0;
    border-radius: 5px;
    gap: 20px;

    .productImg{
        
        width: 300px;
        max-height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F5F5F5;
        margin: 0;

        img{
            max-width: 100%;
            max-height: 100%;
            height: auto;
        }
    }

    .productInformation{
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        h3{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: #333333;

    }

    .category{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;   
        color: #828282;
    }

    .price{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;    
        color: #27AE60;

    }

    button{
        width: 106px;
        height: 40px;
        background: #27AE60;
        border: 2px solid #27AE60;
        border-radius: 8px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;

    }
    }
}
`

export default StyledProductCard