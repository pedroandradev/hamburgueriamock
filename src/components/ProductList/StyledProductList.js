import styled from "styled-components";

const StyledProductList = styled.section`

box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 950px;
    
    .searchContainer{
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items:center;
        justify-content: space-between;
        margin: 0;
        
        .paragSearchResult{
            display: flex;
            flex-direction: row;
            font-family: 'Inter';
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 26px;
            line-height: 34px;
            color: #333333;
            text-align: start;

            span{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 26px;
                line-height: 34px;

                color: #828282;

            }
        }

        button{
            width: 137px;
            height: 40px;
            background: #27AE60;
            border: 2px solid #27AE60;
            border-radius: 8px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            text-align: center;
            color: #FFFFFF;
            cursor: pointer;
        }
    }

    ul{
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        width:950px;
        background: #FFFFFF;
        gap: 20px;
    }

@media (max-width: 900px){
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    .searchContainer{
        max-width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items:center;
        justify-content: flex-start;
        overflow-x: scroll;
        margin: 0;
        
        .paragSearchResult{
            display: flex;
            flex-direction: row;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            color: #333333;
            text-align: start;

            span{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 18px;

                color: #828282;

            }
        }

        button{
            background-color: transparent;
            border: none;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 10px;
            color: #828282;
        }
    }

    ul{
        display: flex;
        overflow-x: scroll;
        width: 100%;
        background: #FFFFFF;
        gap: 20px;
        justify-content: space-between;
    }
} 
`

export default StyledProductList