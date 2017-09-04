![MagicMirror²: The open source modular smart mirror platform. ](.github/header.png)

<p align="center">
	<a href="https://david-dm.org/MichMich/MagicMirror"><img src="https://david-dm.org/MichMich/MagicMirror.svg" alt="Dependency Status"></a>
	<a href="https://david-dm.org/MichMich/MagicMirror#info=devDependencies"><img src="https://david-dm.org/MichMich/MagicMirror/dev-status.svg" alt="devDependency Status"></a>
	<a href="https://bestpractices.coreinfrastructure.org/projects/347"><img src="https://bestpractices.coreinfrastructure.org/projects/347/badge"></a>
	<a href="http://choosealicense.com/licenses/mit"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
	<a href="https://travis-ci.org/MichMich/MagicMirror"><img src="https://travis-ci.org/MichMich/MagicMirror.svg" alt="Travis"></a>
	<a href="https://snyk.io/test/github/MichMich/MagicMirror"><img src="https://snyk.io/test/github/MichMich/MagicMirror/badge.svg" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/MichMich/MagicMirror" style="max-width:100%;"></a>
</p>

![具体文档请查看源文档](https://github.com/MichMich/MagicMirror)

## 优化的不同地方
1. 由于 `momentjs` 在调用`moment.local()`本地化的方法的时候 ，给的值是`zh-cn`但是， 在 `translation.js`中给的却是 `*zh_cn*` 所以不能汉化钟表等显示。
1. `weatherforecast`模块在openweathermap获取天气 ** 16 days/daily forecast API ** 不是免费的(详情看![Current weather and forecasts collection](https://openweathermap.org/price)) 顾 修改为 获取 `5 days/3 hour forecast API` 这种类型的api
1. 关于newsfeed 源
	+ 知乎日报： `http://zhihudaily.dev.malash.net/`
1. 关于calendar 源
	+ 解析本地的ics，貌似没成功 只能使用`http`的方式
	+ 在解析过程中 如果时间中有1970年以前的事件。则会报错。因为`rrule-alt`组件解析的时候 会报错。故修改该组件下`rrule-alt/lib/rrule.js`中`ORDINAL_BASE: new Date(1970, 0, 1),`为`ORDINAL_BASE: new Date(1900, 0, 1),`


## 网页版-最终效果展示	
![img](./doc/demo.jpg)