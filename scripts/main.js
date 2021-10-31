
require('danwei');
require('v6');
require('wupin');
require('core');
require('enemys-control');
require('enemys-control2');
require('fanjiasu1');
require('fanjiasu2');
require('next-wave');
require('next-wave2');
require('gongneng');
require('chongzhigongju');
require('GC');
require('3JiChuDai');require('3JiChuDai2');
require('GC2');
require('danwei2');
require('paota/DC');
require('zongjipao');
require('zongjipao2');
require('UI/feiji');
require('all/draw3');
require('FenNei');
require('KongJianQiao2');
require('KongJianQiao1');

//require('boom');
//星球
require('xingqiu');
require('GradeNoe');//等级1
require('GradeTwo');//等级2
 require('GradeThree');//等级3
 require('WormsNest');//虫巢穴
// require('alwaysUnlocked');
require('gengxing');//更新
Vars.mods.locateMod("creator").meta.version += "----" +  Core.bundle.format("planet.creator.MODname");













































































// m.tiexiu.xyz:30007 萌新服
// mindustrycn.top 中国服务器大厅
// "outputLiquid": {"liquid": "slag", "amount": 18},
// "outputItem": {"item": "sand", "amount": 4},

/* const laserColor1 = new Color.valueOf("080808");
const laserColor2 = new Color.valueOf("cfaff6");

var myBlock = extendContent(PowerNode, '1dianxiangan', {
    setupColor() {
        Draw.color(laserColor1, laserColor2, 2 + Mathf.absin(3, 0.1));
        Draw.alpha(Renderer.laserOpacity);
    }
});
var myBlock = extendContent(PowerNode, 'nengliangta', {
    setupColor() {
        Draw.color(laserColor1, laserColor2, 2 + Mathf.absin(3, 0.1));
        Draw.alpha(Renderer.laserOpacity);
    }
}); */
//-----------------------------------------------------------"solid": false,  JSON里的碰撞
//-------------------------------------------------------------------------------------------------
/* extendContent(ItemBridge, 'csdq', {
    updateTransport(tile, other) {
        for (var i = 0; i < 36; i++) {
            this.super$updateTransport(tile, other);
        }
    }
});//传送带桥 */
//------------------------------------------------------------------------------------------------------







/*
	Copyright (c) DeltaNedas 2020

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

const ui = require("UI/library");
require("UI/areas");
Events.on(ClientLoadEvent, ui.load);

var target = null;
var display = null;

const updateTarget = Q => {
	display.clear();
	if (!Q) return;
	
	const items = Vars.content.items();
	const core = Vars.player.team().core();
	var i = 0;
	items.each(item => {
        display.image(item.icon(Cicon.small)).size(15/*资源贴图大小 */);
        display.label(() => core == null ? "0" : UI.formatAmount(core.items.get(item))).padRight(3/*UI的间隔 */).left();
        i++;
			if (i % 6/*资源一排的数量 */ == 0) {
				display.row();
		    }
    });
};

ui.addTable("top", "creator", table => {
	display = table;
	table.table().center().bottom();
	table.background(Tex.buttonTrans);
	//table.visibility = () => !!target && target.health > 0;
	table.touchable = Touchable.disabled
});

Events.on(WorldLoadEvent, () => {
	target = null;
});


// Find targets
Events.run(Trigger.update, () => {
	const p = Vars.player;
		target = p;
		updateTarget(target);
});







































/* Events.on(EventType.ClientLoadEvent, cons(e => {
    Vars.ui.settings = new SettingsMenuDialog();
    var dialog = new JavaAdapter(BaseDialog, {}, "[yellow]creator");
    dialog.shown(run(() => {
        dialog.cont.table(Tex.button, cons(t => {
            t.defaults().size(280, 60).left();
            t.button(Core.bundle.format("planet.creator.BIAOYU"), Icon.trash, Styles.cleart, run(() => {
                dialog.hide();
            }));
            t.add(Core.bundle.format("planet.creator.XINXI"));
        }));
    }));
    dialog.show();
})); */
// damage(damage) { },//无敌
// handleDamage(tile, amount) { return 0; },
//-------------------------------------------------------------------------------------------------
// canBreak(tile) { return false; }//不可拆
//------------------------------------------------------------------------------
// extendContent(Wall, "qiang", {
//     group = BlockGroup.none
// }); 覆盖？暂时不可用
//---------------------------------------------------------------------------------------------


