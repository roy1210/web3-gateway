import React from 'react';
import PuffLoader from 'react-spinners/PuffLoader'; // eslint-disable-line
import styled from 'styled-components';

const Loader = (): JSX.Element => {
  return (
    <LoaderContainer>
      <div className="backdrop" />
      <div className="loader-wrapper">
        <PuffLoader size={80} color={'#50E3C2'} loading={true} />
      </div>
    </LoaderContainer>
  );
};

export default Loader;

const LoaderContainer = styled.div`
  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.98);
  }
  .loader-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }
`;
