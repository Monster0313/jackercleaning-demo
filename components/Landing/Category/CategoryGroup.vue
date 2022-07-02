<template>
  <div class="category-group">
    <div class="clip">
      <CategoryClip :category-data="categoryData.slice(0, 2)" />
    </div>
    <div class="clip">
      <CategoryClip :category-data="categoryData.slice(2, 4)" />
    </div>
    <div>
      <CategoryClip :category-data="categoryData.slice(4, 6)" />
    </div>
  </div>
</template>

<script>
import CategoryClip from './CategoryClip.vue'
import LivingRoom from '~/assets/image/category/livingroom.png'
import Toilet from '~/assets/image/category/toilet.png'
import Kitchen from '~/assets/image/category/kitchen.png'
import Bedroom from '~/assets/image/category/bedroom.png'
import Balcony from '~/assets/image/category/balcony.png'
import Others from '~/assets/image/category/others.png'

export default {
  components: {
    CategoryClip
  },
  computed: {
    livingroom: () => LivingRoom,
    toilet: () => Toilet,
    kitchen: () => Kitchen,
    bedroom: () => Bedroom,
    balcony: () => Balcony,
    others: () => Others,
    categoryData () {
      return [
        {
          image: this.livingroom,
          title: '客廳清潔',
          description: '',
          basic: ['沙發擦拭', '桌、櫃擦拭', '燈具表面擦拭', '垃圾打包', '地毯除塵', '地板清潔', '雜物整理'],
          decline: {
            item: ['沙發深層污漬', '天花板層板清潔', '地毯深層污漬', '吊燈清潔'],
            description: '建議您與潔客可採用安全之方式拆下後，交由潔客做清洗。'
          },
          time: {
            min: 0.5,
            max: 1.5,
            unit: '',
            minText: '普通清潔',
            maxText: '空間大、許久未整理'
          }
        },
        {
          image: this.toilet,
          title: '浴室清潔',
          description: '',
          basic: ['馬桶刷洗', '浴缸清潔', '洗手檯面清潔', '垃圾打包', '局部小範圍除霉', '鏡面光亮', '磁磚刷洗', '浴門清潔', '清理水垢、皂垢'],
          time: {
            min: 1,
            max: 1.5,
            unit: '間',
            minText: '普通清潔',
            maxText: '許久未整理',
            plus: {
              title: '全區除霉',
              time: '+ 4hr',
              description: '因需用漂白水敷於發霉處3~4小時，因此全區除霉將耗時至少4~8小時（若霉菌已深入內部，有可能無法完全清除乾淨）'
            }
          }
        },
        {
          image: this.kitchen,
          title: '廚房清潔',
          description: '',
          basic: ['牆面擦拭', '瓦斯爐台', '抽油煙機', '地板清潔', '洗碗、水槽清潔', '流理檯擦拭', '集油槽油污處理', '櫥櫃擦拭', '冰箱外觀'],
          decline: {
            item: ['廚餘清理'],
            description: ''
          },
          time: {
            min: 1,
            max: 2.5,
            unit: '',
            minText: '普通清潔',
            maxText: '油污嚴重、許久未清潔',
            plus: {
              title: '冰箱內部整理、清潔',
              time: '+ 1 ~ 1.5hr',
              description: ''
            }
          }
        },
        {
          image: this.bedroom,
          title: '臥室清潔',
          description: '',
          basic: ['衣櫃外觀擦拭', '棉被、衣物整理', '地板清潔', '床單換洗', '桌面清潔', '家電外觀擦拭', '雜物整理', '垃圾打包'],
          decline: {
            item: ['家電拆卸清洗', '移動、搬移床鋪', '整理衣櫃內部衣物'],
            description: ''
          },
          time: {
            min: 0.5,
            max: 1.5,
            unit: '間',
            minText: '普通清潔',
            maxText: '空間大、許久未整理'
          }
        },
        {
          image: this.balcony,
          title: '陽台清潔',
          description: '',
          basic: ['家電外觀擦拭', '地板刷洗', '雜物整理', '水管擦拭', '曬衣桿擦拭'],
          decline: {
            item: ['除蟲害', '園藝、花草照料'],
            description: ''
          },
          time: {
            min: 0.5,
            max: 1.5,
            unit: '',
            minText: '普通清潔',
            maxText: '空間大、許久未整理'
          }
        },
        {
          image: this.others,
          title: '其他清潔',
          description: '非主要清潔內容，但可增加時數請清潔人員執行',
          plus: [
            {
              title: '窗戶清潔',
              time: '+ 0.5hr/扇',
              basic: ['內側、底溝擦拭', '紗窗內部清潔', '玻璃窗內部清洗'],
              decline: {
                item: ['拆卸窗戶清洗', '拆窗簾、清洗'],
                description: '以安全為前提下，『兩位』服務人員以上才提供拆洗窗戶、紗窗的服務，或者您可以自行拆下，再由服務人員做清洗'
              }
            },
            {
              title: '衣物洗曬',
              time: '+ 1 ~ 2hr',
              basic: ['衣物清洗', '需備有洗衣機', '衣物晾曬'],
              decline: {
                item: ['特殊清洗衣物（乾洗）', '整燙衣物', '手洗衣物'],
                description: ''
              }
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.category-group {
  height: 946px;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: stretch;
}
.clip {
  margin: 0 24px 0 0;
}
</style>
