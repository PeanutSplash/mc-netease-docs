---
title: "OriginGUIName"
source_url: "https://mc.163.com/dev/mcmanual/mc-dev/mcdocs/1-ModAPI-beta/%E6%9E%9A%E4%B8%BE%E5%80%BC/OriginGUIName.html?catalog=1"
scraped_at: "2025-09-13T09:59:03.210Z"
batch_id: "2025-09-13T09-58-27-375Z"
tree_path: ["枚举值","OriginGUIName"]
output_path: "枚举值/OriginGUIName.md"
---

#  OriginGUIName

class in mod.common.minecraftEnum

*   描述
    
    获取原生UI名字
    

```
class OriginGUIName(object):
	MoveUpBtn = "binding.area.move_up" 		# 上移键
	MoveDownBtn = "binding.area.move_down"  # 下移键
	MoveLeftBtn = "binding.area.move_left"  # 左移键
	MoveRightBtn = "binding.area.move_right" # 右移键
	SneakBtn = "binding.area.sneak"	# 潜行键
	NewSneakBtn = "binding.area.sneak_new_controls" # 新触控（摇杆模式）潜行键/空中&水底下潜键
	JumpBtn = "binding.area.jump"	# 跳跃键
	NewJumpBtn = "binding.area.jump_new_controls" # 新触控（摇杆模式）跳跃键/空中&水底上浮键
	SprintBtn = "binding.area.sprint" # 冲刺按钮（切换跑/走）
	AscendBtn = "binding.area.ascend" # 右侧双击跳跃键飞行后操作按键： 上移
	DescendBtn = "binding.area.descend" # 右侧双击跳跃键飞行后操作按键： 下移
	PauseBtn = "binding.area.pause" # 暂停键
	ChatBtn = "binding.area.chat"	# 聊天按钮
	MenuBtn = "binding.area.fold_menu"	# 菜单按钮(截图分享)
	ReportBtn = "binding.area.report_cheat" # 举报按钮（已废弃）
	CameraViewBtn = "binding.area.camera_view" # 摄像机视角按钮
	DestroyOrAttackBtn = "binding.area.destroy_or_attack" # 破坏/攻击按钮
	BuildOrInteractBtn = "binding.area.build_or_interact" # 建造/交互按钮
	MoveStickBtn = "binding.area.default_move_stick_area" # 新触控摇杆按钮


```