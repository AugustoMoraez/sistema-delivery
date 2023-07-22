import styled from "styled-components";
import bg from "../../assets/images/bg3.jpg"


export const Container = styled.div`
    width: 100%;
    height:500px;
    
    background-image: url(${bg});
    background-position: center;
    background-size:cover ;

    @media(max-width:600px){
        height:350px ;
    }

   
`;

// export const BackgroundImage = styled.div`

// `;

export const Content = styled.div`
    width: 100%;
    height:inherit;
    background-color: rgba(0,0,0,0.6);
    color:#fff;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    padding: 10px;
     
    span{
        font-weight: 700;
        letter-spacing: 5px;
    }
    h1{
        font-size: 80px;
        font-family: Fasthand;
        font-weight: 100;
        margin-top: -20px
    }
    p{
        font-size: 20px;
        font-weight: 300;  
        width:100%;
        max-width: 900px;
        text-align: center;
    }
    @media(max-width:600px){
        span{
            font-size: 15px;
        }
        h1{
            font-size: 60px;
        }
        p{
            font-size: 17px;
        }
    }
`;

