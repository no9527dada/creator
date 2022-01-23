const items = require('wupin');
const lib = require('lib');
const {
    xi, zuanshikuang, zuanjing, hua1, hua2, hua3, tanban,
    zhiwumo, luzha, weijing1, weijing2, xiao, liziye, juhebaozhawu,
    weijing3, weijing4, weijing5, guijingti, molishi,
    monengjing, monengjing1, monengjing2, monengjing3,
    buding, chuangshilizi, chuangshishenhun, chuangshiweichen,
    chuangshizhixing, jin, jinfen, molizhi, shimoxi, shiying,
    yuanshencanpian, zhayao, zijing1, zzjinbi, invalid,
    molijinghuaye, moliye, qiangxiaolengqueye, zhiwujinghuaye,
    dabaoshui, dabaoleng, dabaoshiyou, dabaomoli, dabaozhiwu, dabaojingmoli, dabaoyedan
} = items;
const rainbowRegions = [];


const liziduizhuangji = extend(GenericCrafter, "z-1liziduizhuangji", {});
liziduizhuangji.buildType = prov(() => {
    return new JavaAdapter(GenericCrafter.GenericCrafterBuild, {
        draw() {
            this.super$draw();
            Draw.blend();
            Draw.color();
            Draw.rect(Core.atlas.find("creator-liziduizhuangji-d"), this.x, this.y);
            Draw.rect(Core.atlas.find("creator-liziduizhuangji-f1"), this.x, this.y, 90 + this.totalProgress * 9)
            Draw.rect(Core.atlas.find("creator-liziduizhuangji-f2"), this.x, this.y, 90 - this.totalProgress * 9);
            Draw.rect(Core.atlas.find("creator-liziduizhuangji-f7"), this.x, this.y, 90 - this.totalProgress * 3)
            Draw.rect(Core.atlas.find("creator-liziduizhuangji-top"), this.x, this.y);
            Draw.rect(Core.atlas.find("creator-liziduizhuangji-f3"), this.x, this.y, 45 + this.totalProgress * 4);
            Draw.rect(Core.atlas.find("creator-liziduizhuangji-f4"), this.x, this.y, 45 - this.totalProgress * 4);
            Draw.rect(Core.atlas.find("creator-liziduizhuangji-f5"), this.x, this.y, 90 + this.totalProgress * 4)
            Draw.rect(Core.atlas.find("creator-liziduizhuangji-f6"), this.x, this.y, 90 - this.totalProgress * 4);
        },

    }, liziduizhuangji);
});
liziduizhuangji.health = 2800;//粒子机
liziduizhuangji.size = 4;
liziduizhuangji.hasPower = true;
liziduizhuangji.hasItems = true;;
liziduizhuangji.buildCostMultiplier = 30;
liziduizhuangji.itemCapacity = 3000;
liziduizhuangji.craftTime = 10800;
liziduizhuangji.updateEffect = Fx.mineHuge;
liziduizhuangji.updateEffectChance = 0.1;
liziduizhuangji.consumes.power(13333.333333);
liziduizhuangji.consumes.items(new ItemStack.with(
    monengjing3, 3,
    weijing5, 2,
    weijing4, 50,
    weijing3, 90,
    weijing2, 320,
    weijing1, 750,
    guijingti, 3000
));
liziduizhuangji.outputItem = new ItemStack(
    chuangshilizi, 1,
);
liziduizhuangji.requirements = ItemStack.with(
    weijing5, 8,
    monengjing, 120,
    zijing1, 340,
    zuanjing, 650,
);
liziduizhuangji.buildVisibility = BuildVisibility.shown;
liziduizhuangji.category = Category.crafting;

exports.liziduizhuangji = liziduizhuangji;











