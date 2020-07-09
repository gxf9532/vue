## vue-cli脚手架  
    用来创建项目的工具  
1. 安装:  
    npm install -g vue-cli  
    vue --version  查看版本 
2. 使用vue-cli创建项目
    vue init webpack vuedemo(自定义项目名称)

    cd vuedemo   
    npm install / yarn add / cnpm install  

3. 运行: 

4. 项目结构说明参考
    https://www.cnblogs.com/lchsirblog/p/9582759.html

    文件->首选项->用户代码片段->vue.json

    ```
        "vue component file": {
		"prefix": "vue",
		"body": [
			"<template>",
			"	<div>\n",
			"	</div>",
			"</template>\n",
			"<script type=\"text/ecmascript-6\">",
			"	export default {",

			"	}",
			"</script>\n",
			"<style  scoped>\n",
			" ",
			"</style>",
			"$2"
		],
		"description": "vue组件文件"
	}
    ``` 

## 自动修复esLint  
    https://jingyan.baidu.com/article/95c9d20d7634eaec4e7561de.html
    