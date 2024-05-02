import styled from "styled-components";

export const StyledMain = styled.main`

position: absolute;
        box-sizing: border-box;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 0 115px;

        .divContainerProductCart{
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            width: 100%;
        }

        div{
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;

            h3{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
                line-height: 24px;
                text-align: center;
                color: #333333;

            }

            p{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 24px;
                text-align: center;
                color: #828282;
            }
        }

    @media (min-width: 900px){
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow-x: hidden;

        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 16px;
            gap: 20px;

            h3{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
                line-height: 24px;
                text-align: center;
                color: #333333;

            }

            p{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 24px;
                text-align: center;
                color: #828282;
            }
        }
    }
`