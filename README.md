# 数据结构课程 (JavaScript and TypeScript) - 学生代码仓库

## 为什么创建此仓库?

首先,我是BOBO老师小迷弟,从线性课程开始有关数据结构课程我都是BOBO老师教的

平时工作都会用Gitee,很少用Github,所以借此机会装饰一下我的代码仓库

[慕课网](http://www.imooc.com/)上的体系课程[《算法与数据结构》](https://class.imooc.com/sale/datastructure)的学习用代码仓,原代码是JAVA版,经过我修改成了TS和JS版,如果有同行领域欢迎修正

🙏🙏🙏🙏🙏🙏🙏🙏🙏非常感谢🙏🙏🙏🙏🙏🙏🙏🙏🙏

## 启动前准备

首先,此代码由JavaScript和TypeScript组成(基于js结构关系,这类代码主力为TypeScript组成),但是API不能100%与JAVA相通,部分内容会有差异,比如BOBO老师大部分使用的泛型,本代码部分需要javaAPI都不适用,所以这类代码有待更新

本文章使用都leetcode编程都适用于线上提交

本代码需要使用 ts-node 和 babel-node (js全部需要使用es2015)使用
```
npm install
npm install -g ts-node 
npm install -g typescript
# babel 7.x 以前的写法 
npm install -g babel-cli
# babel 7.x 以后的写法
npm i -g @babel/core @babel/node


#使用方法
babel-node index.js
ts-node index.ts
```




## 代码目录

| **第一章 欢迎大家来到算法与数据结构的世界** | [无代码] |
| :---- | :----: |
| 1-1 欢迎大家来到算法与数据结构的世界 | [无代码] |
| 1-2 学习算法和数据结构到底有没有用？ | [无代码] |
| 1-3 更多课程学习注意事项 | [无代码] |
| 1-4 课程编程环境的搭建 | [无代码] |
| 1-5 【文字】JDK 的国内下载链接，和更多学习方法 | [无代码] |
| **第二章 线性查找法** | [章节源码](02-Linear-Search/) |
| 2-1 什么是算法 | [无代码] |
| 2-2 最简单的算法：线性查找法 | [无代码] |
| 2-3 实现线性查找法 | [JS](02-Linear-Search/03-Linaer-Search/js/) [TS](02-Linear-Search/03-Linaer-Search/ts/)|
| 2-4 使用泛型 | [TS](02-Linear-Search/04-Using-Generic/ts/) |
| 2-5 使用自定义类测试我们的算法 | [TS](02-Linear-Search/05-Using-Custom-Class/ts/) |
| 2-6 循环不变量 | [无代码] |
| 2-7 简单的复杂度分析 | [无代码] |
| 2-8 常见的时间复杂度 | [无代码] |
| 2-9 测试算法性能 | [TS](02-Linear-Search/09-Test-Performance/ts/) |
| 2-10 本章小结 | [无代码] |
| **第三章 选择排序法** | [章节源码](03-Selection-Sort/) |
| 3-1 最简单的排序算法：选择排序法 | [无代码] |
| 3-2 实现选择排序法 | [TS](03-Selection-Sort/02-Selection-Sort/ts/) [JS](03-Selection-Sort/02-Selection-Sort/js/) |
| 3-3 使用带约束的泛型 | [TS](03-Selection-Sort/03-Using-Generics/ts/) |
| 3-4 使用 Comparable 接口(TS不支持) | [TS](03-Selection-Sort/04-Using-Comparable/ts/) |
| 3-5 选择排序法的复杂度分析 | [TS](03-Selection-Sort/05-Performance-of-Selection-Sort/ts/) |
| 3-6 作业：换个角度实现选择排序法 | [无代码] |
| 3-7 [文字] 作业解析：换个角度实现选择排序法 | [TS](03-Selection-Sort/07-Another-Selection-Sort/ts/) |

## 持续更新中