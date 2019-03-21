import React, { Component } from 'react';
import { NoticeBar, Stepper, List, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { Route, withRouter, Switch } from 'react-router-dom';
import Demo1 from './demo1';
import Demo2 from './demo2';

// 绑定redux 在组件上
import { actions, connect } from 'src/utils/myRedux';
// const css = require('./index.scss');

const mapStateToProps = ({ enthusiasmLevel, describe }) => ({
    enthusiasmLevel,
    describe,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
        setEnthusiasm: (state) => dispatch(actions.setEnthusiasm(state)),
    };
};

class Page2 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <WingBlank>
                <WhiteSpace />
                <NoticeBar
                    mode="link"
                    action={<span onClick={this.goBlog}>去看看</span>}
                    marqueeProps={{
                        loop: true,
                        style: { padding: '0 7.5px' }
                    }}
                >
                    redux测试: {this.props.describe}
                </NoticeBar>
                <List>
                    <List.Item
                        wrap
                        extra={
                            <Stepper
                                style={{ width: '100%', minWidth: '100px' }}
                                showNumber
                                max={10}
                                min={1}
                                value={this.props.enthusiasmLevel}
                                onChange={this.onChange}
                            />
                        }
                    >
                        同步redux值
                    </List.Item>
                </List>
                <WhiteSpace />
                <Button onClick={() => this.changeRouter('/home/demo1')} type="primary" inline size="small" style={{ marginRight: '4px' }}>路由嵌套1</Button>
                <Button onClick={() => this.changeRouter('/home/demo2')} type="primary" inline size="small">路由嵌套2</Button>
                <div>
                    <Switch>
                        <Route extra path="/home/demo1" component={Demo1} />
                        <Route extra path="/home/demo2" component={Demo2} />
                    </Switch>
                </div>
            </WingBlank>
        );
    }
    /**
     * 子路由 跳转
     */
    changeRouter = (name) => {
        // 添加withRouter 生效
        this.props.history.push(name);
    }
    /**
     * 改变redux
     */
    onChange = (number) => {
        this.props.setEnthusiasm({ enthusiasmLevel: number });
    }
    /**
     * 看看
     */
    goBlog = () => {
        window.open('https://github.com/dingzuke/react-antd-mobile', '_blank');
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page2));
