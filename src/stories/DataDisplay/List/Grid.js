import React from 'react';

import List from 'antd/lib/list';
import Card from 'antd/lib/card';
import 'antd/lib/list/style';
import 'antd/lib/card/style';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];

const grid = () => (
  <section className="example">
    <h3 className="ex-title">Grid</h3>
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Card title={item.title}>Card content</Card>
        </List.Item>
      )}
    />
  </section>
);

export default grid;
