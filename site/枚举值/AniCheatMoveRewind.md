---
title: "AniCheatMoveRewind"
source_url: "https://mc.163.com/dev/mcmanual/mc-dev/mcdocs/1-ModAPI-beta/%E6%9E%9A%E4%B8%BE%E5%80%BC/AniCheatMoveRewind.html?catalog=1"
scraped_at: "2025-09-13T10:33:52.866Z"
batch_id: "2025-09-13T10-33-25-510Z"
tree_path: ["枚举值","AniCheatMoveRewind"]
output_path: "枚举值/AniCheatMoveRewind.md"
---

#  AniCheatMoveRewind

class in mod.common.minecraftEnum

*   描述
    
    反作弊配置枚举值，位移倒带模拟相关参数
    

```
class AniCheatMoveRewind(object):
	PositionThreshold = "player-rewind-position-threshold"		# 某一帧中，客户端位置与服务端位置的距离平方阈值，超过阈值会触发反作弊纠正(float)
	PositionAcceptance = "player-rewind-position-acceptance"	# 某一帧中，如果客户端位置和服务端位置的距离平方小于这个值，服务端会采用客户端的值(float)
	PositionPersuasion = "player-rewind-position-persuasion"	# 如果客户端和服务端位置不一致，服务端会每帧在客户端的计算方向上加上这个值(float)


```