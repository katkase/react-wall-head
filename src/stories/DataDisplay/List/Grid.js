import React from 'react';
import { List, Card } from 'antd';

import 'antd/lib/list/style';
import 'antd/lib/card/style';

const Grid = () => {

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

  return (
    <section className="example">
      <h3 className="ex-title">Grid</h3>
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card title={item.title}>Card content</Card>
          </List.Item>
        )}
      />
    </section>
  );
}

export default Grid;