import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import Page2 from './page2';
import Page1 from './page1';
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
					className={css.tabBarPosition}
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
						<Page1 />
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
						<Page2 />
					</TabBar.Item>
				</TabBar>
			</div>
		);
	}

}

export default App;
