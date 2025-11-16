import React, { useState } from "react";
import * as S from "../styles/StyledSweetList";

const SweetList = () => {
    return(
        <S.Box>
            <S.Title>설치된 당</S.Title>
            <S.Line></S.Line>
            <S.List></S.List>
        </S.Box>
    );
};

export default SweetList;