import React from 'react';
import { Provider } from 'react-redux';
import config from './config';
import StorybookUIRoot from '../storybook';
import { StoreFront } from './screens';

const App = () => {
  if (config.storybookEnabled) {
    return <StorybookUIRoot />;
  }
  return (
    <Provider store={config.store}>
      <StoreFront />
    </Provider>
  );
};

export default App;
