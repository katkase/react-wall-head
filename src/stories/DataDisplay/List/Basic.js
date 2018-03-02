import React from 'react';

import Identicon from 'identicon.js';

import List from 'antd/lib/list';
import Avatar from 'antd/lib/avatar';
import 'antd/lib/list/style';
import 'antd/lib/avatar/style';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const basic = () => (
  <section className="example">
    <h3 className="ex-title">Basic List</h3>

    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={`data:image/png;base64,${new Identicon(Math.floor(Math.random() * 18446744073709551615).toString(16), 1280).toString()}`} />}
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
  </section>
);

export default basic;
