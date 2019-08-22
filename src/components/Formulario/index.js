import React, { Component } from 'react';
import Header from '../Header/index.js'

import Styled from 'styled-components';

class Formulario extends Component {
   render() {
      return (
      <Page>
         <Header />
      </Page>
   );
  }
}

const Page = Styled.div`
   margin-left: 30%;
   width: 560px;
   height: 794px;
   background: #F2F2F2;
   border-radius: 8px;
   box-shadow: 10px 22px 24px
`;

export default  Formulario;