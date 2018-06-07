---
title: <%= title %>
date: <%= create_on %>
tags:
categories: [Mac,<%= cat %>]
photos: ![](<%= img_url %>)
size: <%= size %>
hash: <%= hashcode %>
---


<!-- more -->
###简介
<%= introduce %>

### 下载地址 (解压密码：ipfsp2p.com)
> - [百度网盘]() --- 提取密码：``

### 截图
<% app_cap_img_url.forEach(function(v) { %>
  ![](<%= v %>)
<% }) %>