//xvxshenhun@qq.com，使用请标来源，（禁止删除本注释）

module.exports = {
	name: null,
	techNode(parent2, block, requirements) {
		var parent = TechTree.all.find(node => node.content == parent2);
		var node = new TechTree.TechNode(parent, block, requirements);
	},

	tex(name) {
		return Core.atlas.find("creator-" + name);
	},

	blends(build, direction) {
		return PayloadAcceptor.blends(build, direction);
	},

	node(parent2, block, requirements, objectives) {
		var parent = TechTree.all.find(node => node.content == parent2);
		var node = new TechTree.TechNode(parent, block, requirements);

		node.objectives.add(objectives);
	},

	c(string) {
		return Color.valueOf(string);
	},

	fi(name) {
		return Vars.content.getByName(ContentType.item, "creator-" + name);
	},

	fs(index) {
		var spriteName = "creator-" + this.name + index;
		return spriteName;
	},

	fu(name) {
		return Vars.content.getByName(ContentType.unit, "creator-" + name);
	},

	fl(name) {
		return Vars.content.getByName(ContentType.liquid, "creator-" + name);
	},

	fb(name) {
		return Vars.content.getByName(ContentType.block, "creator-" + name);
	}
}
