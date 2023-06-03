# MyShare

#### 介绍

1. [在线辞典切换器 / Online Dictionary Switcher](https://greasyfork.org/zh-CN/scripts/446974-%E5%9C%A8%E7%BA%BF%E8%BE%9E%E5%85%B8%E5%88%87%E6%8D%A2%E5%99%A8-online-dictionary-switcher) 的修改，具体的修改有两个，让获取到的单词小写，oxford 获取到的单词后面有时会有一个"_1, _2" 的后缀，删除掉。
2. (自制) Elsevier 中提取文章目录，并提供一个按钮，把提取到的内容复制到剪贴板。
3. [计算B站分P视频在自己所看P数的视频剩余时长](https://greasyfork.org/zh-CN/scripts/453414-%E8%AE%A1%E7%AE%97b%E7%AB%99%E5%88%86p%E8%A7%86%E9%A2%91%E5%9C%A8%E8%87%AA%E5%B7%B1%E6%89%80%E7%9C%8Bp%E6%95%B0%E7%9A%84%E8%A7%86%E9%A2%91%E5%89%A9%E4%BD%99%E6%97%B6%E9%95%BF) 的修改。第一，修改了match匹配规则，带有分p的视频才会加载，没用分p的视频不会加载。第二，可以指定 p 的范围，计算指定范围 p1-p2 之间视频的时长（包括p1, p2）。第三，细节优化，总的时长列表只算一次；click 点击触发后，只重新计算剩余的时长 lastTime。
4. (自制) 科学网 Blog 加宽阅读。