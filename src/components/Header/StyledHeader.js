import styled from "styled-components";

const StyledHeader = styled.header`

    box-sizing: border-box;
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #F5F5F5;
    gap: 10px;

    @media (max-width: 900px){
    
        box-sizing: border-box;
        width: 100%;
        height: 139px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

`

export default StyledHeader