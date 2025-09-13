---
title: "PermissionChangeCause"
source_url: "https://mc.163.com/dev/mcmanual/mc-dev/mcdocs/1-ModAPI-beta/%E6%9E%9A%E4%B8%BE%E5%80%BC/PermissionChangeCause.html"
scraped_at: "2025-09-13T14:56:21.264Z"
batch_id: "2025-09-13T14-55-43-504Z"
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