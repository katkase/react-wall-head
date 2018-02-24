import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import ProductList from 'components/ProductList';

class BasicLayout extends React.PureComponent {
  render() {
    return (
      <Layout.Content style={{ margin: "24px 24px 0", height: "100%" }}>
        <Switch>
          <Route path={"/"} component={ProductList} exact />
        </Switch>
      </Layout.Content>
    );
  }
}

export default BasicLayout;