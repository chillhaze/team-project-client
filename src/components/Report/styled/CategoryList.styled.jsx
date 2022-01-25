import styled from '@emotion/styled';

export const Wrapper = styled.div`
margin-bottom:30px;
`;

export const CategoriesWrapper = styled.div`
padding:0;
@media screen and (min-width:768px){
    height:358px;
    background-color:white;
    padding:20px 40px;
    border-radius:30px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
}

@media screen and (min-width:1280px){
padding:20px 238px;

};
`;

export const List = styled.ul`
display:flex;
flex-wrap:wrap;
margin-left:-32px;


`;

export const Item = styled.li`
flex-basis:calc(100%/3 - 30px);
margin-left:30px;
margin-bottom:20px;
height:70px;


@media screen and (min-width:768px){
flex-basis:calc(100%/6 - 40px);
}
`;

// export const ItemWrapper = styled.div`
// display:flex;
// justify-content:center;
// align-items:center;
// width:30px;
// height:30px;
// `;

