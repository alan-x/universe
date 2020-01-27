### 一个简单的`web`服务器
> 一个基于`java socket`技术的简单静态`web`服务器,目前只能接受get请求,post请求也可以接受,但是不处理.也无法连接`cgi`.

---
- 开发语言 : java
- 开发人员 : followWinter
- 开发工具 : IDEA
- 开发系统 : MAC OS
- 文件结构
```
|-  web-server-java
    |-  resources 资源文件,html\css\js等文件都放这里,访问的也是这里的问题
    |-  src 代码文件
        |-  main    主要的代码文件
            |-  java
                |-  com.lyx.server
                    |-  config  项目配置文件
                    |-  http    http相关类文件
                    |-  utils   工具类文件
                    |-  MyWebServer.java    项目主文件,一个基于socket的多线程服务器
        |-  test    测试代码文件,该文件夹下的结构和src中的文件结构一致,保持1对1测试用例关系
```
- 功能简介
    - 接受`http`请求,打印`http`请求
    - 返回`http`
    - 可以接受的请求文件: `html`\\ `css`\\ `js`
    - 仅支持`200`\\`404`两种状态

- 运行方式
    1. 运行`MyWebServer.java`
    2. 浏览器访问:`localhost:8000`