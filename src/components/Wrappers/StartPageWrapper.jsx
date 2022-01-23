import React from 'react';
import { Wrapper, Cabbage, CabbageBottom } from './styled/StartPageWrapper.styled'

export default function StartPageWrapper(props){
    return (
        <Wrapper>
          <Cabbage/>
          <CabbageBottom />
            {props.children}
        </Wrapper>
    )
}

