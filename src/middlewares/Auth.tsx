import React from 'react'

const WithAuth = (Component: any) => {
  const Auth = (props: any) => {

    return (
      <Component {...props} />
    );
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }
  return Auth;
};

export default WithAuth;
