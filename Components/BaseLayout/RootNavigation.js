import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  console.log('function run');
  console.log(navigationRef.current);
  navigationRef.current?.jumpTo(name, params);
}