## 修改部分如下

原作者代码如下：

```js
// 从 url 中获取搜索关键词
function getKeywords() {
	let keywords = "";
	for (let item of urlMapping) {
		if (item.testUrl.test(window.location.href)) {
			keywords = getQueryVariable(item.keyName);
			break;
		}
	}
	console.log(keywords);
	return keywords;
}
```

修改为：

```js
// 从 url 中获取搜索关键词
function getKeywords() {
	let keywords = "";
	for (let item of urlMapping) {
		if (item.testUrl.test(window.location.href)) {
			keywords = getQueryVariable(item.keyName);
			break;
		}
	}
	console.log(keywords);
    // 让获取到的单词小写
    let newkeywords = "";
    newkeywords = keywords.toLowerCase();

    // oxford 获取到的单词后面有时会有一个"_1, _2" 的后缀，删除掉
    let idx = newkeywords.indexOf("_");
    if (idx != -1) {
        newkeywords = newkeywords.substr(0, idx);
    }
	return newkeywords;
}

```