import React, { Component } from 'react';
// import { NavBar, Icon, TabBar } from 'antd-mobile';
import { Steps } from 'antd-mobile';

const Step = Steps.Step;
const css = require('./index.scss');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount () {
    console.log('路由传参',this.props.location.state)
  }
  render() {
    return (
      <div className={css.login}>
        <p className={css.title}>您的发票处理状态</p>
        <Steps size="lg" current={3}>
          <Step title={<span className='blue'>已收票</span>} description={<span className=''>2019-03-04</span>} />
          <Step title={<span className='blue'>已验真</span>} description={<span className=''>2019-03-05</span>} />
          <Step title={<span className='blue'>已入账,启动付款</span>} description={<span className=''>2019-03-06(今天)</span>} />
          <Step title={<span className='red'>待付款 <span href="#" style={{ color: '#1a15f4', textDecoration: 'underline'}}>我要融资</span></span>} description={<span className='red'>2019-06-06</span>} />
        </Steps>
        <p className={css.loginTo}><a href="www.baidu.com">登录/注册</a>云平台</p> 
        <p className={css.loginTo}>预览更多发票信息</p>
      </div>
    );
  }
}

export default Login;
