import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import Container from 'b:Container m:center';
import 'e:Logo';
import logoImage from '../Logo/App-Logo.png';

export default decl({
  block: 'App',
  elem: 'Header',
  tag: 'header',
  content () {
    return (
      <Fragment>
        <Container mods={{ center: true }}>
          <Bem block="App" elem="Logo" tag="img" src={logoImage} alt="logo" />
        </Container>
      </Fragment>
    );
  }
});
