import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '网易MC基岩版API文档',
  base: process.env.NODE_ENV === 'production' ? '/auto-mc-163-docs/' : '/',
  description: 'Scraped and auto-organized documentation',
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: [
  {
    "text": "接口",
    "items": [
      {
        "text": "API索引表",
        "link": "/接口/API索引表"
      },
      {
        "text": "通用",
        "items": [
          {
            "text": "索引",
            "link": "/接口/通用/索引"
          },
          {
            "text": "Component",
            "link": "/接口/通用/Component"
          },
          {
            "text": "System",
            "link": "/接口/通用/System"
          },
          {
            "text": "事件",
            "link": "/接口/通用/事件"
          },
          {
            "text": "本地设备",
            "link": "/接口/通用/本地设备"
          },
          {
            "text": "本地存储",
            "link": "/接口/通用/本地存储"
          },
          {
            "text": "数学",
            "link": "/接口/通用/数学"
          },
          {
            "text": "工具",
            "link": "/接口/通用/工具"
          },
          {
            "text": "调试",
            "link": "/接口/通用/调试"
          }
        ]
      },
      {
        "text": "世界",
        "items": [
          {
            "text": "索引",
            "link": "/接口/世界/索引"
          },
          {
            "text": "地图",
            "link": "/接口/世界/地图"
          },
          {
            "text": "实体管理",
            "link": "/接口/世界/实体管理"
          },
          {
            "text": "方块管理",
            "link": "/接口/世界/方块管理"
          },
          {
            "text": "生物生成",
            "link": "/接口/世界/生物生成"
          },
          {
            "text": "配方",
            "link": "/接口/世界/配方"
          },
          {
            "text": "方块组合",
            "link": "/接口/世界/方块组合"
          },
          {
            "text": "渲染",
            "link": "/接口/世界/渲染"
          },
          {
            "text": "时间",
            "link": "/接口/世界/时间"
          },
          {
            "text": "天气",
            "link": "/接口/世界/天气"
          },
          {
            "text": "游戏规则",
            "link": "/接口/世界/游戏规则"
          },
          {
            "text": "自定义数据",
            "link": "/接口/世界/自定义数据"
          },
          {
            "text": "指令",
            "link": "/接口/世界/指令"
          },
          {
            "text": "消息",
            "link": "/接口/世界/消息"
          },
          {
            "text": "记分板",
            "link": "/接口/世界/记分板"
          }
        ]
      },
      {
        "text": "实体",
        "items": [
          {
            "text": "索引",
            "link": "/接口/实体/索引"
          },
          {
            "text": "实体类型",
            "link": "/接口/实体/实体类型"
          },
          {
            "text": "附加值",
            "link": "/接口/实体/附加值"
          },
          {
            "text": "属性",
            "link": "/接口/实体/属性"
          },
          {
            "text": "行为",
            "link": "/接口/实体/行为"
          },
          {
            "text": "状态效果",
            "link": "/接口/实体/状态效果"
          },
          {
            "text": "渲染",
            "link": "/接口/实体/渲染"
          },
          {
            "text": "背包",
            "link": "/接口/实体/背包"
          },
          {
            "text": "自定义属性",
            "link": "/接口/实体/自定义属性"
          },
          {
            "text": "自定义数据",
            "link": "/接口/实体/自定义数据"
          },
          {
            "text": "molang",
            "link": "/接口/实体/molang"
          },
          {
            "text": "标签",
            "link": "/接口/实体/标签"
          },
          {
            "text": "抛射物",
            "link": "/接口/实体/抛射物"
          },
          {
            "text": "经验球",
            "link": "/接口/实体/经验球"
          },
          {
            "text": "官方伙伴",
            "link": "/接口/实体/官方伙伴"
          },
          {
            "text": "官方聊天扩展",
            "link": "/接口/实体/官方聊天扩展"
          },
          {
            "text": "魔法指令",
            "link": "/接口/实体/魔法指令"
          }
        ]
      },
      {
        "text": "玩家",
        "items": [
          {
            "text": "索引",
            "link": "/接口/玩家/索引"
          },
          {
            "text": "属性",
            "link": "/接口/玩家/属性"
          },
          {
            "text": "行为",
            "link": "/接口/玩家/行为"
          },
          {
            "text": "渲染",
            "link": "/接口/玩家/渲染"
          },
          {
            "text": "背包",
            "link": "/接口/玩家/背包"
          },
          {
            "text": "摄像机",
            "link": "/接口/玩家/摄像机"
          },
          {
            "text": "动画",
            "link": "/接口/玩家/动画"
          },
          {
            "text": "游戏模式",
            "link": "/接口/玩家/游戏模式"
          },
          {
            "text": "权限",
            "link": "/接口/玩家/权限"
          },
          {
            "text": "导航",
            "link": "/接口/玩家/导航"
          }
        ]
      },
      {
        "text": "方块",
        "items": [
          {
            "text": "索引",
            "link": "/接口/方块/索引"
          },
          {
            "text": "方块状态与附加值",
            "link": "/接口/方块/方块状态与附加值"
          },
          {
            "text": "属性",
            "link": "/接口/方块/属性"
          },
          {
            "text": "方块实体",
            "link": "/接口/方块/方块实体"
          },
          {
            "text": "方块几何体模型",
            "link": "/接口/方块/方块几何体模型"
          },
          {
            "text": "方块调色板",
            "link": "/接口/方块/方块调色板"
          },
          {
            "text": "渲染",
            "link": "/接口/方块/渲染"
          },
          {
            "text": "容器",
            "link": "/接口/方块/容器"
          },
          {
            "text": "红石",
            "link": "/接口/方块/红石"
          },
          {
            "text": "告示牌",
            "link": "/接口/方块/告示牌"
          },
          {
            "text": "床",
            "link": "/接口/方块/床"
          }
        ]
      },
      {
        "text": "物品",
        "link": "/接口/物品"
      },
      {
        "text": "特效",
        "items": [
          {
            "text": "索引",
            "link": "/接口/特效/索引"
          },
          {
            "text": "通用",
            "link": "/接口/特效/通用"
          },
          {
            "text": "文字面板",
            "link": "/接口/特效/文字面板"
          },
          {
            "text": "序列帧",
            "link": "/接口/特效/序列帧"
          },
          {
            "text": "粒子",
            "link": "/接口/特效/粒子"
          },
          {
            "text": "模型特效",
            "link": "/接口/特效/模型特效"
          },
          {
            "text": "微软粒子",
            "link": "/接口/特效/微软粒子"
          }
        ]
      },
      {
        "text": "模型",
        "link": "/接口/模型"
      },
      {
        "text": "原生UI",
        "link": "/接口/原生UI"
      },
      {
        "text": "自定义UI",
        "items": [
          {
            "text": "索引",
            "link": "/接口/自定义UI/索引"
          },
          {
            "text": "通用",
            "link": "/接口/自定义UI/通用"
          },
          {
            "text": "自定义书本",
            "link": "/接口/自定义UI/自定义书本"
          },
          {
            "text": "自定义成就系统",
            "link": "/接口/自定义UI/自定义成就系统"
          },
          {
            "text": "UI界面",
            "link": "/接口/自定义UI/UI界面"
          },
          {
            "text": "UI控件",
            "link": "/接口/自定义UI/UI控件"
          }
        ]
      },
      {
        "text": "音效",
        "link": "/接口/音效"
      },
      {
        "text": "控制",
        "link": "/接口/控制"
      },
      {
        "text": "游戏设置",
        "link": "/接口/游戏设置"
      },
      {
        "text": "虚拟世界",
        "items": [
          {
            "text": "索引",
            "link": "/接口/虚拟世界/索引"
          },
          {
            "text": "世界",
            "link": "/接口/虚拟世界/世界"
          },
          {
            "text": "相机",
            "link": "/接口/虚拟世界/相机"
          },
          {
            "text": "模型",
            "link": "/接口/虚拟世界/模型"
          },
          {
            "text": "其它对象",
            "link": "/接口/虚拟世界/其它对象"
          }
        ]
      },
      {
        "text": "后处理",
        "items": [
          {
            "text": "索引",
            "link": "/接口/后处理/索引"
          },
          {
            "text": "渐晕",
            "link": "/接口/后处理/渐晕"
          },
          {
            "text": "模糊",
            "link": "/接口/后处理/模糊"
          },
          {
            "text": "色彩",
            "link": "/接口/后处理/色彩"
          },
          {
            "text": "镜头效果",
            "link": "/接口/后处理/镜头效果"
          },
          {
            "text": "自定义",
            "link": "/接口/后处理/自定义"
          }
        ]
      },
      {
        "text": "联机大厅",
        "link": "/接口/联机大厅"
      },
      {
        "text": "成就",
        "link": "/接口/成就"
      },
      {
        "text": "商城",
        "link": "/接口/商城"
      },
      {
        "text": "渲染",
        "link": "/接口/渲染"
      }
    ]
  },
  {
    "text": "事件",
    "items": [
      {
        "text": "事件索引表",
        "link": "/事件/事件索引表"
      },
      {
        "text": "世界",
        "link": "/事件/世界"
      },
      {
        "text": "实体",
        "link": "/事件/实体"
      },
      {
        "text": "玩家",
        "link": "/事件/玩家"
      },
      {
        "text": "方块",
        "link": "/事件/方块"
      },
      {
        "text": "物品",
        "link": "/事件/物品"
      },
      {
        "text": "模型",
        "link": "/事件/模型"
      },
      {
        "text": "UI",
        "link": "/事件/UI"
      },
      {
        "text": "音效",
        "link": "/事件/音效"
      },
      {
        "text": "控制",
        "link": "/事件/控制"
      },
      {
        "text": "联机大厅",
        "link": "/事件/联机大厅"
      }
    ]
  },
  {
    "text": "枚举值",
    "items": [
      {
        "text": "索引",
        "link": "/枚举值/索引"
      },
      {
        "text": "ActorDamageCause",
        "link": "/枚举值/ActorDamageCause"
      },
      {
        "text": "AniCheatBlockBreak",
        "link": "/枚举值/AniCheatBlockBreak"
      },
      {
        "text": "AniCheatConsts",
        "link": "/枚举值/AniCheatConsts"
      },
      {
        "text": "AniCheatMove",
        "link": "/枚举值/AniCheatMove"
      },
      {
        "text": "AniCheatMoveRewind",
        "link": "/枚举值/AniCheatMoveRewind"
      },
      {
        "text": "AnimationModeType",
        "link": "/枚举值/AnimationModeType"
      },
      {
        "text": "ArmorSlotType",
        "link": "/枚举值/ArmorSlotType"
      },
      {
        "text": "AttrType",
        "link": "/枚举值/AttrType"
      },
      {
        "text": "AttributeBuffType",
        "link": "/枚举值/AttributeBuffType"
      },
      {
        "text": "BiomeType",
        "link": "/枚举值/BiomeType"
      },
      {
        "text": "BlockBreathability",
        "link": "/枚举值/BlockBreathability"
      },
      {
        "text": "BrewingStandSlotType",
        "link": "/枚举值/BrewingStandSlotType"
      },
      {
        "text": "ButtonEventType",
        "link": "/枚举值/ButtonEventType"
      },
      {
        "text": "ButtonState",
        "link": "/枚举值/ButtonState"
      },
      {
        "text": "CatVariantType",
        "link": "/枚举值/CatVariantType"
      },
      {
        "text": "Change",
        "link": "/枚举值/Change"
      },
      {
        "text": "ColorCode",
        "link": "/枚举值/ColorCode"
      },
      {
        "text": "CommandBlockType",
        "link": "/枚举值/CommandBlockType"
      },
      {
        "text": "ConditionType",
        "link": "/枚举值/ConditionType"
      },
      {
        "text": "ContainerType",
        "link": "/枚举值/ContainerType"
      },
      {
        "text": "EffectType",
        "link": "/枚举值/EffectType"
      },
      {
        "text": "EnchantSlotType",
        "link": "/枚举值/EnchantSlotType"
      },
      {
        "text": "EnchantType",
        "link": "/枚举值/EnchantType"
      },
      {
        "text": "EntityColorType",
        "link": "/枚举值/EntityColorType"
      },
      {
        "text": "EntityComponentType",
        "link": "/枚举值/EntityComponentType"
      },
      {
        "text": "EntityTeleportCause",
        "link": "/枚举值/EntityTeleportCause"
      },
      {
        "text": "EntityType",
        "link": "/枚举值/EntityType"
      },
      {
        "text": "Facing",
        "link": "/枚举值/Facing"
      },
      {
        "text": "FoxType",
        "link": "/枚举值/FoxType"
      },
      {
        "text": "GameDiffculty",
        "link": "/枚举值/GameDiffculty"
      },
      {
        "text": "GameType",
        "link": "/枚举值/GameType"
      },
      {
        "text": "GamepadKeyType",
        "link": "/枚举值/GamepadKeyType"
      },
      {
        "text": "HorseSpotType",
        "link": "/枚举值/HorseSpotType"
      },
      {
        "text": "HorseType",
        "link": "/枚举值/HorseType"
      },
      {
        "text": "InputMode",
        "link": "/枚举值/InputMode"
      },
      {
        "text": "InventoryType",
        "link": "/枚举值/InventoryType"
      },
      {
        "text": "ItemAcquisitionMethod",
        "link": "/枚举值/ItemAcquisitionMethod"
      },
      {
        "text": "ItemCategory",
        "link": "/枚举值/ItemCategory"
      },
      {
        "text": "ItemColor",
        "link": "/枚举值/ItemColor"
      },
      {
        "text": "ItemPosType",
        "link": "/枚举值/ItemPosType"
      },
      {
        "text": "ItemUseMethodEnum",
        "link": "/枚举值/ItemUseMethodEnum"
      },
      {
        "text": "KeyBoardType",
        "link": "/枚举值/KeyBoardType"
      },
      {
        "text": "MirrorModeType",
        "link": "/枚举值/MirrorModeType"
      },
      {
        "text": "OpenContainerId",
        "link": "/枚举值/OpenContainerId"
      },
      {
        "text": "OptionId",
        "link": "/枚举值/OptionId"
      },
      {
        "text": "OriginGUIName",
        "link": "/枚举值/OriginGUIName"
      },
      {
        "text": "PermissionChangeCause",
        "link": "/枚举值/PermissionChangeCause"
      },
      {
        "text": "PlayerActionType",
        "link": "/枚举值/PlayerActionType"
      },
      {
        "text": "PlayerExhauseRatioType",
        "link": "/枚举值/PlayerExhauseRatioType"
      },
      {
        "text": "PlayerUISlot",
        "link": "/枚举值/PlayerUISlot"
      },
      {
        "text": "RayFilterType",
        "link": "/枚举值/RayFilterType"
      },
      {
        "text": "RedstoneModeType",
        "link": "/枚举值/RedstoneModeType"
      },
      {
        "text": "RenderControllerArrayType",
        "link": "/枚举值/RenderControllerArrayType"
      },
      {
        "text": "RenderLayer",
        "link": "/枚举值/RenderLayer"
      },
      {
        "text": "SetBlockType",
        "link": "/枚举值/SetBlockType"
      },
      {
        "text": "ShapeType",
        "link": "/枚举值/ShapeType"
      },
      {
        "text": "SliderOptionId",
        "link": "/枚举值/SliderOptionId"
      },
      {
        "text": "StructureFeatureType",
        "link": "/枚举值/StructureFeatureType"
      },
      {
        "text": "TimeEaseType",
        "link": "/枚举值/TimeEaseType"
      },
      {
        "text": "TouchEvent",
        "link": "/枚举值/TouchEvent"
      },
      {
        "text": "TradeLevelType",
        "link": "/枚举值/TradeLevelType"
      },
      {
        "text": "TransferServerFailReason",
        "link": "/枚举值/TransferServerFailReason"
      },
      {
        "text": "UICategory",
        "link": "/枚举值/UICategory"
      },
      {
        "text": "UiBaseLayer",
        "link": "/枚举值/UiBaseLayer"
      },
      {
        "text": "UseAnimation",
        "link": "/枚举值/UseAnimation"
      },
      {
        "text": "VillagerClothingType",
        "link": "/枚举值/VillagerClothingType"
      },
      {
        "text": "VirtualWorldObjectType",
        "link": "/枚举值/VirtualWorldObjectType"
      },
      {
        "text": "WalkState",
        "link": "/枚举值/WalkState"
      }
    ]
  },
  {
    "text": "更新信息",
    "items": [
      {
        "text": "3.5",
        "link": "/更新信息/3.5"
      },
      {
        "text": "3.4",
        "link": "/更新信息/3.4"
      },
      {
        "text": "3.3",
        "link": "/更新信息/3.3"
      },
      {
        "text": "3.2",
        "link": "/更新信息/3.2"
      },
      {
        "text": "3.1",
        "link": "/更新信息/3.1"
      },
      {
        "text": "3.0",
        "link": "/更新信息/3.0"
      },
      {
        "text": "2.12",
        "link": "/更新信息/2.12"
      },
      {
        "text": "2.11",
        "link": "/更新信息/2.11"
      },
      {
        "text": "2.10",
        "link": "/更新信息/2.10"
      },
      {
        "text": "2.9",
        "link": "/更新信息/2.9"
      },
      {
        "text": "2.8",
        "link": "/更新信息/2.8"
      },
      {
        "text": "2.7",
        "link": "/更新信息/2.7"
      },
      {
        "text": "2.6",
        "link": "/更新信息/2.6"
      },
      {
        "text": "2.5",
        "link": "/更新信息/2.5"
      },
      {
        "text": "2.4",
        "link": "/更新信息/2.4"
      },
      {
        "text": "2.3",
        "link": "/更新信息/2.3"
      },
      {
        "text": "2.2",
        "link": "/更新信息/2.2"
      },
      {
        "text": "2.1",
        "link": "/更新信息/2.1"
      },
      {
        "text": "2.0",
        "link": "/更新信息/2.0"
      },
      {
        "text": "1.25",
        "link": "/更新信息/1.25"
      },
      {
        "text": "1.24",
        "link": "/更新信息/1.24"
      },
      {
        "text": "1.23",
        "link": "/更新信息/1.23"
      },
      {
        "text": "1.22",
        "link": "/更新信息/1.22"
      },
      {
        "text": "1.21",
        "link": "/更新信息/1.21"
      }
    ]
  }
]
  }
})
