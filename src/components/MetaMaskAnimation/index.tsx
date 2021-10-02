import ModelViewer from '@metamask/logo';
import React, { useEffect } from 'react';

export const MetaMaskAnimation = () => {
  const height = 100;
  const width = 120;

  useEffect(() => {
    const viewer = ModelViewer({
      pxNotRatio: true,
      width,
      height,
    });
    const container = document.getElementById('metamask-animation');
    container && container.appendChild(viewer.container);
    viewer.setFollowMouse(true);
  }, [height, width]);

  return <div id="metamask-animation" style={{ height, width }} />;
};
