import React from 'react';
import Identicon from 'identicon.js';
import Trianglify from 'trianglify';

import List from 'antd/lib/list';
import Avatar from 'antd/lib/avatar';
import Icon from 'antd/lib/icon';
import 'antd/lib/list/style';
import 'antd/lib/avatar/style';
import 'antd/lib/icon/style';

const listData = [];
for (let i = 0; i < 3; i += 1) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: `data:image/png;base64,${new Identicon(Math.floor(Math.random() * 18446744073709551615).toString(16), 1280).toString()}`,
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const pagination = {
  pageSize: 10,
  current: 1,
  total: listData.length,
  onChange: (() => {}),
};

const IconText = ({ type, text }) => (<span>
  <Icon type={type} style={{ marginRight: 8 }} />
  {text}
</span>);

const vertical = () => (
  <section className="example">
    <h3 className="ex-title">Vertical</h3>

    <List
      itemLayout="vertical"
      size="large"
      pagination={pagination}
      dataSource={listData}
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
          extra={<img width={272} alt="logo" src={new Trianglify({ width: 272, height: 272, cell_size: 30 }).canvas().toDataURL('image/png')} />}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  </section>
);

export default vertical;
