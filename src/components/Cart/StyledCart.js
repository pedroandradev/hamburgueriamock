import styled from "styled-components";

const StyledCart = styled.section`

box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;

    .containerDivShopCart{
        box-sizing: border-box;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        margin: 0px;
        width: 100%;
        height: 65px;
        background: #27AE60;
        border-radius: 5px 5px 0px 0px;
    
        h1{
            padding-left: 21px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 24px;
            color: #FFFFFF;
        }
    
        .emptyList{
            width: 100%;
            height: 158px;
            background: #F5F5F5;
            border-radius: 0px 0px 5px 5px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .cartProductContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 13px 0;
        gap: 20px;
        width: 100%;
        max-height: 270px;
        background: #F5F5F5;
        border-radius: 0px 0px 5px 5px;
        overflow-y: scroll;
    }


@media (max-width: 900px){

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .containerDivShopCart{
        box-sizing: border-box;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        margin: 0px;
        width: 100%;
        height: 65px;
        background: #27AE60;
        border-radius: 5px 5px 0px 0px;
    
        h1{
            padding-left: 21px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 24px;
            color: #FFFFFF;
        }
    
        .emptyList{
            width: 100%;
            height: 158px;
            background: #F5F5F5;
            border-radius: 0px 0px 5px 5px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .cartProductContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 13px 0;
        gap: 20px;
        width: 100%;
        max-height: 270px;
        background: #F5F5F5;
        border-radius: 0px 0px 5px 5px;
        overflow-y: scroll;
    }
}


`

export default StyledCart