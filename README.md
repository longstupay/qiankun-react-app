# 微前端qiankun个人网站应用

## 使用技术  

使用qiankun整合react,vue,angular构造个人网站。顺带学习figma和taiwindcss.
docker 已配置好成基础的nginx镜像，可运行在公有云容器，也可运行在网站托管如github pages和[腾讯云web应用托管](https://console.cloud.tencent.com/webify/index) (国内CDN加速)

### 更新状态  

2022.5.5 react 的portfolio 页。vue和Ng基础应用联通

## Docker部署命令  

### 打包本地镜像

```bash
docker build -t yourAppname:tag .
```

### 给本地镜像打tag  

```bash
docker tag local-image:tagname new-repo:tagname  
```

### 推送到远程仓库

```bahs
docker push image:tag
docekr run -dp --restart=always imageId [option]
```
