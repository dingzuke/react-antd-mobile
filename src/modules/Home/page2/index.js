import React, { Component } from 'react';
import { NavBar, Icon, Button } from 'antd-mobile';
import { history } from 'src/utils/router';
import urls from 'src/api';
import sendAjax from 'src/utils/sendAjax';
const css = require('./index.scss');

class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={css.page}>
        <NavBar
          mode="dark"
          leftContent="Back"
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >app</NavBar>
        <div>
          <i className="iconfont am-icon-kaixinguo" style={{ fontSize: '50px' }}></i>
          <p className={css.title}>题目</p>
          <h1 className="red">首页</h1>
          <Button type="primary" onClick={this.goLogin}>登录</Button>
        </div>
      </div>
    );
  }
  /** 异步请求及跳转测试 */
  goLogin = async () => {
    const reData = await sendAjax('post', urls.login, { name: 'ding' });
    console.log('sendAjax===>', reData);
    if (reData.err) {
      history.push('/login', { name: 'dingding' });
      return;
    }

  }
}

export default Page1;
