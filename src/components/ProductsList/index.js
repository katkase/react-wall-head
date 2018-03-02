import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { List, Card } from 'antd';

class ProductsList extends Component {
  renderProducts() {
    return (
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 3 }}
        dataSource={this.props.data.products}
        renderItem={item => (
          <List.Item>
            <Card title={item.name}>
              {/* <p>SKU: {item.sku}</p>
              <p>Price: {new Intl.NumberFormat('en-IT', { style: 'currency', currency: 'EUR' })
                .format(item.price)}</p> */}
              <img
                width="100%"
                alt="logo"
                src={`/assets/magento${item.custom_attributes.filter(obj => obj.attribute_code === 'image')[0].value}`} />
            </Card>
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
      price
      custom_attributes {
        ... on Value {
          attribute_code
          value
        }
        ... on Values {
          attribute_code
          aliasval : value
        }
      }
    }      
  }
`;

export default graphql(query)(ProductsList);
