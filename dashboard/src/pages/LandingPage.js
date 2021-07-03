import React from 'react';

// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});


// ----------------------------------------------------------------------

export default function LandingPage() {
  
  React.useEffect(() => {
    window.location.href = "/auth/login-unprotected";
  }, []);
  
  return (
    <RootStyle title="Tracker App" id="move_top">
      
    </RootStyle>
  );
}
