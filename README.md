# Live Video Demo

本项目是博文[web音频流转发之音视频直播](https://segmentfault.com/a/1190000011492525)的实践。作者贴的代码有点小瑕疵，不能即时跑起，比如`AudioContext`实例创建时机、https秘钥生成等，详细看git log。

* 视频直播：采集一帧一帧的视频，转换为base64转发，接收到base64后，设置为img的src，然后不停的修改img的src形成视频
* 音频直播：采集一帧一帧的音频二进制数据，转发2进制数据，在接收端对2进制原始音频数据进行播放

## Usage

1. 下载 & 运行项目

``` bash
git clone https://github.com/lq782655835/live-video-demo.git

yarn && yarn dev
```

2. 开启两个https://localhost:3001页面，一个作为直播端，一个作为展示端。