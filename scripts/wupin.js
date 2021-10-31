
const Status = require('floor');

exports.shiying = (() => {
    var myitem = extendContent(Item, 'shiying', {});
    return myitem;
})();
exports.guijingti = (() => {
    var myitem = extendContent(Item, 'guijingti', {});
    return myitem;
})();
exports.shimoxi = (() => {
    var myitem = extendContent(Item, 'shimoxi', {});
    return myitem;
})();
exports.xi = (() => {
    var myitem = extendContent(Item, 'xi', {});
    return myitem;
})();
exports.buding = (() => {
    var myitem = extendContent(Item, 'buding', {});
    return myitem;
})();
exports.hua1 = (() => {
    var myitem = extendContent(Item, '1hua', {});
    myitem.flammability = 0.2;
    return myitem;
})();
exports.hua2 = (() => {
    var myitem = extendContent(Item, '2hua', {});
    myitem.flammability = 0.2;
    return myitem;
})();
exports.hua3 = (() => {
    var myitem = extendContent(Item, '3hua', {});
    myitem.flammability = 0.2;
    return myitem;
})();
exports.zhiwumo = (() => {
    var myitem = extendContent(Item, 'zhiwusuimo', {});
    myitem.flammability = 0.5;
    return myitem;
})();
exports.luzha = (() => {
    var myitem = extendContent(Item, 'luzha', {});
    myitem.flammability = 0.4;
    return myitem;
})();
exports.tanban = (() => {
    var myitem = extendContent(Item, 'tanban', {});
    return myitem;
})();
exports.zuanshikuang = (() => {
    var myitem = extendContent(Item, 'zuankuang', {});
    return myitem;
})();
exports.zuanjing = (() => {
    var myitem = extendContent(Item, 'zuanjing', {});
    return myitem;
})();
exports.jinfen = (() => {
    var myitem = extendContent(Item, 'jinfen', {});
    return myitem;
})();
exports.jin = (() => {
    var myitem = extendContent(Item, 'jin', {});
    return myitem;
})();
exports.zijing1 = (() => {
    var myitem = extendContent(Item, 'zijing1', {});
    return myitem;
})();
exports.xiao = (() => {
    var myitem = extendContent(Item, 'xiao', {});
    myitem.flammability = 1;
    return myitem;
})();
exports.zhayao = (() => {
    var myitem = extendContent(Item, 'zhayao', {});
    myitem.flammability = 0.7;
    myitem.explosiveness = 5;
    return myitem;
})();
exports.juhebaozhawu = (() => {
    var myitem = extendContent(Item, 'juhebaozhawu', {});
    myitem.flammability = 1.5;
    myitem.explosiveness = 3;
    myitem.radioactivity = 0.3;
    return myitem;
})();
exports.weijing1 = (() => {
    var myitem = extendContent(Item, 'weijing1', {});
    return myitem;
})();
exports.weijing2 = (() => {
    var myitem = extendContent(Item, 'weijing2', {});
    return myitem;
})();
exports.weijing3 = (() => {
    var myitem = extendContent(Item, 'weijing3', {});
    return myitem;
})();
exports.weijing4 = (() => {
    var myitem = extendContent(Item, 'weijing4', {});
    return myitem;
})();
exports.weijing5 = (() => {
    var myitem = extendContent(Item, 'weijing5', {});
    return myitem;
})();
exports.molizhi = (() => {
    var myitem = extendContent(Item, 'molizhi', {});
    return myitem;
})();
exports.molishi = (() => {
    var myitem = extendContent(Item, 'molishi', {});
    return myitem;
})();
exports.monengjing = (() => {
    var myitem = extendContent(Item, 'monengjing', {});
    return myitem;
})()
exports.monengjing1 = (() => {
    var myitem = extendContent(Item, 'monengjing1', {});
    return myitem;
})();
exports.monengjing2 = (() => {
    var myitem = extendContent(Item, 'monengjing2', {});
    return myitem;
})();
exports.monengjing3 = (() => {
    var myitem = extendContent(Item, 'monengjing3', {});
    return myitem;
})();
exports.chuangshilizi = (() => {
    var myitem = extendContent(Item, 'chuangshilizi', {});
    return myitem;
})();
exports.chuangshiweichen = (() => {
    var myitem = extendContent(Item, 'chuangshiweichen', {});
    return myitem;
})();
exports.chuangshizhixing = (() => {
    var myitem = extendContent(Item, 'chuangshizhixing', {});
    return myitem;
})();
exports.yuanshencanpian = (() => {
    var myitem = extendContent(Item, 'yuanshencanpian', {});
    return myitem;
})();
exports.chuangshishenhun = (() => {
    var myitem = extendContent(Item, 'chuangshishenhun', {});
    return myitem;
})();
exports.zzjinbi = (() => {
    var myitem = extendContent(Item, 'zz-jinbi', {});
    return myitem;
})();
exports.zhiwujinghuaye = (() => {
    var myliquid = extendContent(Liquid, 'zhiwujinghuaye', {});
    return myliquid;
})();
exports.moliye = (() => {
    var myliquid = extendContent(Liquid, 'moliye', {});
    return myliquid;
})();
exports.molijinghuaye = (() => {
    var myliquid = extendContent(Liquid, 'molijinghuaye', {});
    return myliquid;
})();
exports.liziye = (() => {
    const v = new Liquid("liziye", Color.valueOf("ff0000"));
    v.heatCapacity = 0;
    v.temperature = 2;
    v.flammability = 2;
    v.explosiveness = 3;
    v.viscosity = 0.7;
    v.effect = Status.ionBurningEffect1;
    return v;
})();//

exports.qiangxiaolengqueye = (() => {
    var FxX = new Effect(40, e => {
        Draw.color(Color.valueOf("a775f6"));
        Angles.randLenVectors(e.id, 2, 1 + e.fin() * 2, (x, y) => {
            Fill.circle(e.x + x, e.y + y, e.fout() * 1.2);
        });
    });
    var effectX = new StatusEffect("ZT2");
    effectX.color = Color.valueOf("ffffff");
    effectX.speedMultiplier = 0;//移动速度
    effectX.damage = 0
    effectX.reloadMultiplier = 0.5;//射击速度
    effectX.effect = FxX;
    var myliquid = extendContent(Liquid, 'qiangxiaolengqueye', {});
    myliquid.effect = effectX;
    return myliquid;
})();


exports.dabaoshui = (() => {
    const v = new Item("dabaoshui", Color.valueOf("529eff"));
    return v;
})();//
exports.dabaoleng = (() => {
    const v = new Item("dabaoleng", Color.valueOf("1fc9ff"));
    return v;
})();//
exports.dabaoshiyou = (() => {
    const v = new Item("dabaoshiyou", Color.valueOf("000000"));
    return v;
})();//

exports.dabaomoli = (() => {
    const v = new Item("dabaomoli", Color.valueOf("881fff"));
    return v;
})();//

exports.dabaozhiwu = (() => {
    const v = new Item("dabaozhiwu", Color.valueOf("73f58a"));
    return v;
})();//
exports.dabaojingmoli = (() => {
    const v = new Item("dabaojingmoli", Color.valueOf("d296fb"));
    return v;
})();//
exports.dabaoyedan = (() => {
    const v = new Item("dabaoyedan", Color.valueOf("fefefe"));
    return v;
})();//




exports.invalid = (() => {
    var myitem = extendContent(Item, 'invalid', {});
    return myitem;
})();

/*
{
    "damageMultiplier":1
    //攻击力倍率（数值越大，攻击力越高）

    "healthMultiplier":1
    //血量倍率（数值越大，血量最大上限越高）

    "speedMultiplier":1
    //速度倍率（数值越大，移动越快）

    "reloadMultiplier":1
    //射速倍率（数值越大，射速越快）

    "damage":1
    //扣血速度（数值越大，扣血越快）

    "permanent":false
    //如果为ture
    //这个状态永远存在 在单位身上，除非单位死亡
    //如果为false 则没有永远存在的效果

    "reactive":
    //如果为true，则此效果将仅与其他效果反应，无法应用

    "color":"ffffff"
    //状态颜色

    "effect":"none"
    //效果

    "effectChance":1
    //效果数量（数值越大,效果越多越密集）
}

exports.机械提速液 = (() => {
    var FxX = new Effect(40, e => {
        Draw.color(Color.valueOf("FFFF00"));

        Angles.randLenVectors(e.id, 2, 1 + e.fin() * 2, (x, y) => {
            Fill.circle(e.x + x, e.y + y, e.fout() * 1.2);
        });
    });

    var effectA = new StatusEffect("提速液状态");
    effectA.color = Color.valueOf("FFFF00");
    effectA.speedMultiplier = 0.15;
    effectA.healthMultiplier = 0.25;
    effectA.effect = FxX;

    var myLiquid = new Liquid("机械提速液", Color.valueOf("FFFF00"))
    myLiquid.localizedName = "机械提速液";
    myLiquid.alwaysUnlocked = true;
    myLiquid.flammability = 0;
    myLiquid.temperature = 0;
    myLiquid.explosiveness = 0;
    myLiquid.temperature = 0;
    myLiquid.viscosity = 0;
    myLiquid.heatCapacity = 388;
    myLiquid.effect = effectA;
    myLiquid.lightColor = Color.valueOf("FFFF00");
    myLiquid.barColor = Color.valueOf("FFFF00");
    return myLiquid;
    })();
 */