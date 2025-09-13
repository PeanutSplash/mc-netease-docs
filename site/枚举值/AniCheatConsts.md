---
title: "AniCheatConsts"
source_url: "https://mc.163.com/dev/mcmanual/mc-dev/mcdocs/1-ModAPI-beta/%E6%9E%9A%E4%B8%BE%E5%80%BC/AniCheatConsts.html"
scraped_at: "2025-09-13T14:56:10.942Z"
batch_id: "2025-09-13T14-55-43-504Z"
tree_path: ["枚举值","AniCheatConsts"]
output_path: "枚举值/AniCheatConsts.md"
---

#  AniCheatConsts

class in mod.common.minecraftEnum

*   描述
    
    反作弊配置开关宏定义
    

```
class AniCheatConsts(object):
	Open = "on"		# 反作弊开关：开
	Close = "off"	# 反作弊开关：关闭
	MoveOff = "client-auth"					# 没有位移检查，完全信任客户端
	MoveOn = "server-auth"					# 服务端有位移检查，没有倒带模拟
	MoveRewind = "server-auth-with-rewind"	# 服务端有位移检查，有倒带模拟


```