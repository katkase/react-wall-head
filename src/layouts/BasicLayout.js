import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import ProductsList from 'components/ProductsList';

const basicLayout = () => (
  <Layout.Content style={{ margin: '24px 24px 0', height: '100%' }}>
    <Switch>
      <Route path="/" component={ProductsList} exact />
    </Switch>
  </Layout.Content>
);

export default basicLayout;
