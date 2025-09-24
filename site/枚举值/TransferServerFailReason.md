---
title: "TransferServerFailReason"
source_url: "https://mc.163.com/dev/mcmanual/mc-dev/mcdocs/1-ModAPI/%E6%9E%9A%E4%B8%BE%E5%80%BC/TransferServerFailReason.html"
scraped_at: "2025-09-24T16:48:17.364Z"
batch_id: "2025-09-24T16-47-36-886Z"
tree_path: ["枚举值","TransferServerFailReason"]
output_path: "枚举值/TransferServerFailReason.md"
---

#  TransferServerFailReason

class in mod.common.minecraftEnum

*   描述
    
    转服判定失败的错误码
    

```
class TransferServerFailReason(object):
	TypeNotExist = 10		# 目标类型的服务器不存在
	VersionNotExist = 11	# 目标类型的服务器的版本与玩家客户端的版本不符
	ServerIsFull = 12		# 目标类型的服务器均已经满员了
	VersionNotFix = 13		# 目标ID的服务器的版本与玩家客户端版本不符
	TargetIsFull = 14		# 目标ID的服务器已经满员了
	TargetNotVaild = 15		# 目标ID的服务器不存在或者已经与控制服断开连接
	ApiInputFail = 16		# 目标玩家不在线


```