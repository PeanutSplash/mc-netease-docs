---
title: "RenderLayer"
source_url: "https://mc.163.com/dev/mcmanual/mc-dev/mcdocs/1-ModAPI-beta/%E6%9E%9A%E4%B8%BE%E5%80%BC/RenderLayer.html"
scraped_at: "2025-09-13T14:56:22.411Z"
batch_id: "2025-09-13T14-55-43-504Z"
tree_path: ["枚举值","RenderLayer"]
output_path: "枚举值/RenderLayer.md"
---

#  RenderLayer

class in mod.common.minecraftEnum

*   描述
    
    方块渲染时的材质类型
    
*   备注
    
    *   目前自定义方块只支持使用部分材质，具体见\[自定义方块json组件\]\[/mc-dev/mcguide/20-玩法开发/15-自定义游戏内容/2-自定义方块/1-JSON组件.md\] 由于联机大厅和apollo存在部分材质缺少定义，所以枚举值在联机大厅和apollo环境下，整体-2 如：Blend = 4 变成 Blend = 2 ; Opaque = 5 变成 Opaque = 3，依此类推

```
class RenderLayer(object):
	Blend = 4		# 半透明
	Opaque = 5		# 不透明
	Alpha = 7		# 全透明
	SeasonOpaque = 9	# 原版用于渲染不透明树叶
	SeasonAlpha = 10	# 原版用于渲染局部全透明方块


```