import styled from "styled-components";

const StyledCartProduct = styled.li`

box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 343px;
    height: 80px;
    padding-left: 21px;
    padding-right: 18px;

    .productImgCart{
        width: 80px;
        height: 80px;
        background: #E0E0E0;
        border-radius: 5px;
        margin: 0;

        img{
            max-width: 100%;
            max-height: 100%;
            height: 80px;
            margin: 0;
        }
    }

    .prodcutInformationCart{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin: 0;
        width: 130px;
        height: 90px;

        h4{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 24px;        
            color: #333333;
        }

        p{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            color: #828282;

        }
    }

    .productButtonRemove{
        margin: 0;
        button{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 15px;
            color: #BDBDBD;
            background-color: transparent;
            border: none;
            cursor: pointer;

        }
    }

@media (max-width: 900px){

    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 343px;
    height: 80px;
    padding-left: 21px;
    padding-right: 18px;

    .productImgCart{
        width: 80px;
        height: 80px;
        background: #E0E0E0;
        border-radius: 5px;
        margin: 0;

        img{
            max-width: 100%;
            max-height: 100%;
            height: 80px;
            margin: 0;
        }
    }

    .prodcutInformationCart{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin: 0;
        width: 130px;
        height: 90px;

        h4{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 24px;        
            color: #333333;
        }

        p{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            color: #828282;

        }
    }

    .productButtonRemove{
        margin: 0;
        button{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 15px;
            color: #BDBDBD;
            background-color: transparent;
            border: none;

        }
    }
}
`
export default StyledCartProduct