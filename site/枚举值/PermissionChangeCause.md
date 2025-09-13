---
title: "PermissionChangeCause"
source_url: "https://mc.163.com/dev/mcmanual/mc-dev/mcdocs/1-ModAPI-beta/%E6%9E%9A%E4%B8%BE%E5%80%BC/PermissionChangeCause.html?catalog=1"
scraped_at: "2025-09-13T10:34:03.634Z"
batch_id: "2025-09-13T10-33-25-510Z"
tree_path: ["枚举值","PermissionChangeCause"]
output_path: "枚举值/PermissionChangeCause.md"
---

#  PermissionChangeCause

class in mod.common.minecraftEnum

*   描述
    
    玩家权限变更原因枚举
    

```
class PermissionChangeCause(object):
	ProgrammingInterfaceCaused = 1 #  API变更
	CommandCaused = 2 #  指令变更（包含玩家输入/命令方块）
	UserInterfaceCaused = 3#  房主变更（也即房主在设置给他人变更）


```