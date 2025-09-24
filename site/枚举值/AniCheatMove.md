---
title: "AniCheatMove"
source_url: "https://mc.163.com/dev/mcmanual/mc-dev/mcdocs/1-ModAPI/%E6%9E%9A%E4%B8%BE%E5%80%BC/AniCheatMove.html"
scraped_at: "2025-09-24T16:48:03.772Z"
batch_id: "2025-09-24T16-47-36-886Z"
tree_path: ["枚举值","AniCheatMove"]
output_path: "枚举值/AniCheatMove.md"
---

#  AniCheatMove

class in mod.common.minecraftEnum

*   描述
    
    反作弊配置枚举值，移动检查开关
    

```
class AniCheatMove(object):
	CheckStyle = "server-authoritative-movement"	# 位移检查的模式
	MinCorrectDelayTick = "player-rewind-min-correction-delay-ticks"	# 服务端从发现作弊到发送纠正指令的最小tick数，0表示发现作弊时每帧发送纠正指令(int)
	TickHistorySize = "player-rewind-history-size-ticks"		# 客户端保存历史帧数，用于倒带模拟。每秒20帧(int)


```