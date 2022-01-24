import React from 'react';
import { Wrapper, Cabbage, CabbageBottom } from '../Wrappers/styled/PageWrapper.styled';

export default function PageWrapper(props){
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}
