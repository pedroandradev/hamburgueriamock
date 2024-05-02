import styled from "styled-components";

const StyledCartTotal = styled.div`

box-sizing: border-box;
    max-width: 100%;
    height: 104px;


    .containerTotalPrice{
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin: 0;
        padding-left: 21px;
        padding-right: 18px;
  

    }

    .paragTotalPrice{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: #333333;
    }

    .priceTotal{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: #828282;

    }

    button{
        width: 343px;
        height: 60px;
        background: #E0E0E0;
        border: 2px solid #E0E0E0;
        border-radius: 8px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #828282;
        cursor: pointer;


    }

@media (min-width: 900px){

    box-sizing: border-box;
    max-width: 100%;
    height: 104px;


    .containerTotalPrice{
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin: 0;
        padding-left: 21px;
        padding-right: 18px;
  

    }

    .paragTotalPrice{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: #333333;
    }

    .priceTotal{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: #828282;

    }

    button{
        width: 343px;
        height: 60px;
        background: #E0E0E0;
        border: 2px solid #E0E0E0;
        border-radius: 8px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #828282;


    }
}
`

export default StyledCartTotal