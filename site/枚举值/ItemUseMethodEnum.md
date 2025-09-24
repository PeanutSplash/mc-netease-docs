---
title: "ItemUseMethodEnum"
source_url: "https://mc.163.com/dev/mcmanual/mc-dev/mcdocs/1-ModAPI/%E6%9E%9A%E4%B8%BE%E5%80%BC/ItemUseMethodEnum.html"
scraped_at: "2025-09-24T16:48:11.698Z"
batch_id: "2025-09-24T16-47-36-886Z"
tree_path: ["枚举值","ItemUseMethodEnum"]
output_path: "枚举值/ItemUseMethodEnum.md"
---

#  ItemUseMethodEnum

class in mod.common.minecraftEnum

*   描述
    
    使用物品的方法枚举值
    

```
class ItemUseMethodEnum(object):
    Unknown = -1  	        # 未知
    EquipArmor = 0          # 穿戴装备
    Eat = 1  		        # 吃食物
    Attack = 2  	        # 攻击
    Consume = 3  	        # 消耗药水
    Throw = 4  		        # 投掷物品（雪球，药水）
    Shoot = 5  		        # 射击（拉弓射箭）
    Place = 6  		        # 放置物品（例如告示牌）
    FillBottle = 7          # 装满一个空瓶子
    FillBucket = 8          # 装满一个空桶
    PourBucket = 9          # 倒出已装满的桶里的东西
    UseTool = 10  	        # 使用工具（打火石，锄，锹等）的右键单击功能
    Interact = 11  	        # 交互
    Retrieved = 12          # 收竿，目前仅用于钓鱼竿
    Dyed = 13		        # 使用炼药锅对物品染色
    Traded = 14		        # 交易
    BrushingCompleted = 15	# 刷子清刷完毕
    OpenedVault = 16        # 打开宝库


```