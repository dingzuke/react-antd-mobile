import React, { Component } from 'react';
import { NavBar, Icon, TabBar, Button } from 'antd-mobile';
import urls from 'src/api';
import sendAjax  from 'src/utils/sendAjax';
const css = require('./index.scss');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedTab: 'blueTab',
        hidden: false,
        fullScreen: false,
    };
  }
  
  render() {
    return (
      <div className={css.modle}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={false}
          tabBarPosition="bottom"
          className="css.tabBarPosition"
        >
          <TabBar.Item
            title="Life"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
            }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
            }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            <NavBar
              mode="dark"
              leftContent="Back"
              rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
              ]}
            >NavBar</NavBar>
            <div>
                <i className="iconfont am-icon-kaixinguo" style={{ fontSize: '50px' }}></i>
                <p className={css.title}>题目</p>
                <h1 className="red">首页</h1>
                <Button type="primary" onClick={this.goLogin}>登录</Button>
            </div>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            title="Koubei"
            key="Koubei"
            badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            <NavBar
              mode="dark"
              leftContent="Back"
              rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
              ]}
            >NavBar</NavBar>
                <i className="iconfont am-icon-fanqie" style={{ fontSize: '50px' }}></i>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
  /** 异步请求及跳转测试 */
  goLogin = async () => {
    const reData = await sendAjax('post', urls.login, {name:'ding'});
    console.log('sendAjax===>', reData);
    if(reData.err) {
      this.props.history.push('/login', { name: 'dingding' });
      return ;
    }
    
  }
}

export default App;
