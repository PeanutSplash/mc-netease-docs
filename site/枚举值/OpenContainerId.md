---
title: "OpenContainerId"
source_url: "https://mc.163.com/dev/mcmanual/mc-dev/mcdocs/1-ModAPI-beta/%E6%9E%9A%E4%B8%BE%E5%80%BC/OpenContainerId.html"
scraped_at: "2025-09-13T14:56:20.110Z"
batch_id: "2025-09-13T14-55-43-504Z"
tree_path: ["枚举值","OpenContainerId"]
output_path: "枚举值/OpenContainerId.md"
---

#  OpenContainerId

class in mod.common.minecraftEnum

*   描述
    
    开放容器Id
    

```
class OpenContainerId(object):
	AnvilInputContainer = 0 # 铁砧输入位
	AnvilMaterialContainer = 1 # 铁砧材料位
	SmithingTableInputContainer = 3 # 锻造台输入位
	SmithingTableMaterialContainer = 4 # 锻造台材料位
	RecipeBookContainer = 22 # 配方位
	EnchantingInputContainer = 23 # 附魔台输入位
	EnchantingMaterialContainer = 24 # 附魔台材料位
	LoomInputContainer = 42 # 织布机输入位
	LoomDyeContainer = 43 # 织布机染料位
	LoomMaterialContainer = 44 # 织布图案位
	GrindstoneInputContainer = 51 # 砂轮输入位
	GrindstoneAdditionalContainer = 52 # 砂轮附加位
	StonecutterInputContainer = 54 # 切石机输入位
	CartographyInputContainer = 56 # 制图台输入位
	CartographyAdditionalContainer = 57 # 制图台附加位
	CursorContainer = 60 # 指针位置(目前无用)
	CreatedOutputContainer  = 61 # 创造输出位(目前无用)
	SmithingTableTemplateContainer = 62 # 锻造台模板位
	CrafterLevelEntityContainer = 63 # 合成器输入位
	NeteaseContainer = 64  # 自定义方块容器槽位 (关闭后放入物品数据存于方块实体中)
	NeteaseUIContainer = 65 # 网易UI槽位 (数据存于玩家中，关闭ui后放入物品返回背包)


```