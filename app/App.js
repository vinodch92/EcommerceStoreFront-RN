import React from 'react';
import { Provider } from 'react-redux';
import config from './config';
import StorybookUIRoot from '../storybook';
import { Songs } from './screens';

const App = () => {
  if (config.storybookEnabled) {
    return <StorybookUIRoot />;
  }
  return (
    <Provider store={config.store}>
      <Songs />
    </Provider>
  );
};

export default App;
