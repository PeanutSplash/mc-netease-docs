---
title: "SliderOptionId"
source_url: "https://mc.163.com/dev/mcmanual/mc-dev/mcdocs/1-ModAPI-beta/%E6%9E%9A%E4%B8%BE%E5%80%BC/SliderOptionId.html"
scraped_at: "2025-09-13T14:56:23.540Z"
batch_id: "2025-09-13T14-55-43-504Z"
tree_path: ["枚举值","SliderOptionId"]
output_path: "枚举值/SliderOptionId.md"
---

#  SliderOptionId

class in mod.common.minecraftEnum

*   描述
    
    滑动条设置选项枚举值
    

```
class SliderOptionId(object):
	Undefined = ""
	MOUSE_SENSITIVITY = "MOUSE_SENSITIVITY"						#键盘和鼠标->鼠标灵敏度 范围:0-1
	MOUSE_SPYGLASS_DAMPING = "MOUSE_SPYGLASS_DAMPING"			#键盘和鼠标->望远镜移动速度 范围:0-1
	GAMEPAD_SENSITIVITY = "GAMEPAD_SENSITIVITY"					#控制器->鼠标灵敏度 范围:0-1
	GAMEPAD_SPYGLASS_DAMPING = "GAMEPAD_SPYGLASS_DAMPING"		#控制器->望远镜移动速度 范围:0-1
	GAMEPAD_CURSOR_SENSITIVITY = "GAMEPAD_CURSOR_SENSITIVITY"	#控制器->控制器光标灵敏度 范围:0-2
	TOUCH_SENSITIVITY = "TOUCH_SENSITIVITY"						#触摸屏->鼠标灵敏度 范围:0-1
	TOUCH_SPYGLASS_DAMPING = "TOUCH_SPYGLASS_DAMPING"			#触摸屏->望远镜移动速度 范围:0-1
	DPAD_SCALE = "DPAD_SCALE"									#触摸屏->按钮尺寸 范围:0-1
	GAMMA = "GAMMA"												#视频->亮度 范围:0-1
	INTERFACE_OPACITY = "INTERFACE_OPACITY"						#视频->HUD 不透明度 范围:0-1
	FIELD_OF_VIEW = "FIELD_OF_VIEW"								#视频->视野 范围:30-110


```