import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { List, Card } from 'antd';

class ProductList extends Component {

  renderProducts() {
    return (
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
        dataSource={this.props.data.products}
        renderItem={item => (
          <List.Item>
            <Card title={item.name}>{item.sku}</Card>
          </List.Item>
        )}
      />
    );
  }

  render() {
    return (
      <div>
        {this.props.data.loading ? 'Loading...' : this.renderProducts()}
      </div>
    );
  }
}

const query = gql`
  {
    products {
      id
      name
      sku
    }
  }
`;

export default graphql(query)(ProductList);