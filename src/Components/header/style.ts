import styled from "styled-components";


export const Container = styled.header`
    background-color: #CC0029;
`;

export const Content   = styled.div`
    //dimensions
    width:100%;
    max-width:1140px;
    height: 140px;
    margin: auto;
    //display
    display: flex;
    justify-content: space-between;
    align-items: center; 
    @media (max-width: 600px) {
        justify-content:center;
        height: 70px;
    }
`;

export const Logo = styled.p`
    margin-left: 20px;
    font-family: 'Fasthand';
    font-size: 40px;
    color:#fff;
    cursor: pointer;
    @media (max-width:600px) {
        margin-left: 0;
        margin-bottom:10px ;
    }
`;

export const Img = styled.div`
    cursor: pointer;
    width: 110px;
    height: 110px;
    margin-right: 20px;
    img{
        width:110px;
        height: 110px;
    }
    @media (max-width: 600px) {
        display:none; 
    }
`;

export const Menu = styled.div`
    width: 100%;
    min-height:70px;
    padding: 10px;
    background-color: #E50034;
`;

export const Navigate = styled.nav`
    //dimensions
    width:100%;
    max-width:1140px;
    
    margin:auto;
    //display
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width:600px) {
        justify-content: center;
        flex-direction: column-reverse;
    }

`;
export const OptionsMenu = styled.ul`
    width: 100%;
    max-width:200px;
    height:50px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
`;
export const Option = styled.li`
    width: 100px;
    border: 1px solid white;
    border-radius: 5px;
    padding: 5px;
    text-align: center;
    background-color: #CC0029;
    margin: auto 10px;
    transition: all 0.5s ease-in-out 0s;
     

    a{
        text-decoration: none;
        font-size: 18px;
        color: #fff;
    }
    &:hover {
        background-color:#fff;
        a{
            color:#CC0029;
        }
    }
    @media (max-width:600px) {
        padding: 3px;
        a{
            font-size: 15px;
        }
    }
`;
export const CartButton = styled.div`
    width: 110px;
    margin-right: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor:pointer;

`;