import React, { Component } from 'react';
import Styled from 'styled-components';

class Header extends Component {
   render() {
      return (
         <Head>
            <h1>Formulário para compras de Pacotes de stickers</h1>
         </Head>
      );
   }
}
const Head = Styled.header`
   background: #2F3676;
   width: 560px;
   height: 181px;
   border-radius: 8px 8px 0 0 ;

   h1{
      width: 219px;
      height: 99px;
      color: #FFF;
      font-family: Arial;
      font-size: 23px;
      line-height: 28px;
      margin-left: 31px;
   }
`;

export default Header;