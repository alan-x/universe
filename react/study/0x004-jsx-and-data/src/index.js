import React from 'react'
import ReactDom from 'react-dom'

// 渲染文本
ReactDom.render(
    <div>这是一个文本</div>,
    document.getElementById('app')
)

// 渲染数字
ReactDom.render(
    <div>{111}</div>,
    document.getElementById('app')
)

// 渲染字符串
ReactDom.render(
    <div>{"hello world"}</div>,
    document.getElementById('app')
)

// 表达式
ReactDom.render(
    <div>{1 + 1}</div>,
    document.getElementById('app')
)

// 变量
const name = 'world'
ReactDom.render(
    <div>{name}</div>,
    document.getElementById('app')
)

// 函数
const getName = () => 'world'
ReactDom.render(
    <div>{getName()}</div>,
    document.getElementById('app')
)

// 三元运算符
ReactDom.render(
    <div>{
        1 == 1 ? 1 : 0
    }</div>,
    document.getElementById('app')
)


// 渲染数组
ReactDom.render(
    <div>{
        [1, 2, 3].map((item, index) => {
            return <p key={index}>{item}</p>
        })
    }</div>,
    document.getElementById('app')
)
//
const arr = [1, 2, 3].map((item, index) => {
    return <p key={index}>{item}</p>
})
ReactDom.render(
    <div>{arr}</div>,
    document.getElementById('app')
)
