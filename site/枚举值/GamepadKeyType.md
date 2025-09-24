---
title: "GamepadKeyType"
source_url: "https://mc.163.com/dev/mcmanual/mc-dev/mcdocs/1-ModAPI/%E6%9E%9A%E4%B8%BE%E5%80%BC/GamepadKeyType.html"
scraped_at: "2025-09-24T15:54:39.765Z"
batch_id: "2025-09-24T15-54-05-087Z"
tree_path: ["枚举值","GamepadKeyType"]
output_path: "枚举值/GamepadKeyType.md"
---

#  GamepadKeyType

class in mod.common.minecraftEnum

*   描述
    
    描述游戏手柄的按键枚举值
    

```
class GamepadKeyType:
	UNDEFINED = 0					# 未定义按键
	TRIGGER = 0x00000100			# 扳机
	STICK = 0x00001000				# 摇杆
	KEY_A = 1			    		# A键
	KEY_B = 2			    		# B键
	KEY_X = 3			    		# X键
	KEY_Y = 4			    		# Y键
	KEY_DPAD_UP = 5					# 向上方向键
	KEY_DPAD_DOWN = 6				# 向下方向键
	KEY_DPAD_LEFT = 7				# 向左方向键
	KEY_DPAD_RIGHT = 8				# 向右方向键
	KEY_LS = 9			    		# LS键
	KEY_RS = 10			    		# RS键
	KEY_LB = 11			    		# LB键
	KEY_RB = 12			    		# RB键
	KEY_VIEW = 13					# VIEW键
	KEY_MENU = 14					# MENU键

	STICK_LEFT = 0 | STICK  		# 左摇杆
	STICK_RIGHT = 1 | STICK 		# 右摇杆

	TRIGGER_LEFT = 0 | TRIGGER  	# 左扳机
	TRIGGER_RIGHT = 1 | TRIGGER 	# 右扳机


```