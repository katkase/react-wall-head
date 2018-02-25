import React, { Component } from 'react';

import Identicon from 'identicon.js';
import reqwest from 'reqwest';
import InfiniteScroll from 'react-infinite-scroller';

import List from 'antd/lib/list';
import Avatar from 'antd/lib/avatar';
import Button from 'antd/lib/button';
import Spin from 'antd/lib/spin';
import 'antd/lib/list/style';
import 'antd/lib/avatar/style';
import 'antd/lib/button/style';
import 'antd/lib/spin/style';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

class ScrollLoad extends Component {
  state = {
    data: [],
    loading: false,
    hasMore: true,
  };

  componentWillMount() {
    this.getData((res) => {
      this.setState({
        data: res.results,
      });
    });
  }

  render() {

    return (
      <section className="example">
        <h3 className="ex-title">Scrolling loaded</h3>

        <div className="demo-infinite-container">
          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={this.handleInfiniteOnLoad}
            hasMore={!this.state.loading && this.state.hasMore}
            useWindow={false}
          >
            <List
              dataSource={this.state.data}
              renderItem={item => (
                <List.Item key={item.id}>
                  <List.Item.Meta
                    avatar={<Avatar src={'data:image/png;base64,' + new Identicon(Math.floor(Math.random()*18446744073709551615).toString(16), 1280).toString()} />}
                    title={<a href="https://ant.design">{item.name.last}</a>}
                    description={item.email}
                  />
                  <div>Content</div>
                </List.Item>
              )}
            >
              {this.state.loading && this.state.hasMore && <Spin className="demo-loading" />}
            </List>
          </InfiniteScroll>
        </div>

      </section>
    );
  }

  getData = (callback) => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: (res) => {
        callback(res);
      },
    });
  }

  handleInfiniteOnLoad = () => {
    let data = this.state.data;
    this.setState({
      loading: true,
    });
    if (data.length > 14) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    this.getData((res) => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false,
      });
    });
  }
}

export default ScrollLoad;