import React, { Component } from 'react';
import { NoticeBar, Popover, NavBar, Icon, Carousel , Grid , Card , WingBlank , Badge , List } from 'antd-mobile';
import { Router, Route, Link } from 'react-router'
import './login.css';
const imgThumb=require('../../assets/03.png');
const Item = Popover.Item;
const iconData = [
    {
        icon: require('../../assets/icon/big-room.png'),
        text: `沙发`,
    },
    {
        icon: require('../../assets/icon/ditie.png'),
        text: `地铁`,
    }
    ,
    {
        icon: require('../../assets/icon/move.png'),
        text: `搬家`,
    }
    ,
    {
        icon: require('../../assets/icon/store.png'),
        text: `商店`,
    }
]

class App extends Component {
  state = {
    visible: false,
    selected: '',
    data: ['', '', ''],
    initialHeight: 200,
  };
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
         data: ['20170712172704', 
         '20170712172715', 
         '20170712172714'],
        // data: [require.context('../../assets/20170712172704.jpg', true, /^\.\/.*\.png$/), 
        // require.context('../../assets/20170712172715.jpg', true, /^\.\/.*\.png$/), 
        // require.context('../../assets/20170712172714.jpg', true, /^\.\/.*\.png$/)],
      });
    }, 100);
  };
  onSelect = (opt) => {
    // console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
  render() {
      const requireContext = require.context("../../assets", true, /^\.\/.*\.jpg$/);
      const images = requireContext.keys().map(requireContext);

      
      console.log(images);
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    let offsetX = -10; // just for pc demo
    if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
      offsetX = -26;
    }
    return (<div>
      <NavBar iconName={false}
        className="top-navbar"
        mode="light"
        rightContent={
          <Popover mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={this.state.visible}
            overlay={[
              (<Item key="4" value="scan" data-seed="logId">扫一扫</Item>),
              (<Item key="5" value="special" style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
              (<Item key="6" value="button ct">
                <span style={{ marginRight: 5 }}>帮助</span>
              </Item>),
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [offsetX, 15],
            }}
            onVisibleChange={this.handleVisibleChange}
            onSelect={this.onSelect}
          >
            <div style={{
              height: '100%',
              padding: '0 0.3rem',
              marginRight: '-0.3rem',
              display: 'flex',
              alignItems: 'center',
            }}
            >
              <Icon type="ellipsis" />
            </div>
          </Popover>
        }
      >
        首页
      </NavBar>
      <NoticeBar></NoticeBar>
      <NoticeBar className="top-navbar-bottom" marqueeProps={{ loop: true, style: { padding: '0 0.15rem' } }}>
     浙江温州江南皮革厂倒闭了，浙江温州最大皮革厂，王八蛋王八蛋黄鹤老板，吃喝嫖赌吃喝嫖赌，欠下了欠下了3.5个亿 带着他的小姨子跑了
，我们没有没有没有办法办法，拿着钱包抵工资工资，原价都是100多200多300多的钱包 统统20块 20块20块统统20块，统统统统统统20块！！！
     </NoticeBar>

     <Carousel
          className="my-carousel"
          autoplay={true}
          infinite={true}
          selectedIndex={1}
          swipeSpeed={35}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {images.map(ii => (
            <a href="http://www.baidu.com" key={ii} style={hProp}>
              <img
                src={ ii}
                alt="icon"
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({
                    initialHeight: null,
                  });
                }}
              />
            </a>
          ))}
        </Carousel>
        
        <Grid data={iconData} isCarousel  carouselMaxRow={1}/>
        <WingBlank><p>旅游景点</p></WingBlank>
        
        <Card full>
            <Card.Header
                title="悉尼戏剧院"
                thumb={imgThumb}
                extra={<span>聆听你的心灵之声</span>}
            />
            <Card.Body>
                <div><Badge text="减" hot style={{ marginLeft: 12 }} />单程仅需要10000</div>
                <div><Badge text="折" hot style={{ marginLeft: 12, backgroundColor: '#f19736' }} />折扣旅程0.1折起</div>
            </Card.Body>
        </Card>
        <Card full>
            <Card.Header
                title="悉尼戏剧院"
                thumb={require('../../assets/01.png')}
                extra={<span>聆听你的心灵之声</span>}
            />
            <Card.Body>
                <div><Badge text="减" hot style={{ marginLeft: 12 }} />单程仅需要10000</div>
                <div><Badge text="折" hot style={{ marginLeft: 12, backgroundColor: '#f19736' }} />折扣旅程0.1折起</div>
            </Card.Body>
        </Card>
        
    </div>);
  }
}

export default App;