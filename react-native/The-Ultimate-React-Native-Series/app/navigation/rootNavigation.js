import React, { createRef } from 'react';

// hack to get around the fact that we can't use hooks in the root of the app

export const navigationRef = createRef();

const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

export default {
  navigate,
};
