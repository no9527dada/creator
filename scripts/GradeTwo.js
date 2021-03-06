const lib = require("lib");
const GN = require("GradeNoe");
const DC = require("paota/DC");
//天蛇行星


//这个是有钍

const GTwo = new JavaAdapter(Planet, {
    load() {
        this.meshLoader = prov(() => new HexMesh(GTwo, 6));
        this.super$load();
    }
}, "GradeTwo", Planets.sun, 1);
const sS = require("sectorSize");
sS.planetGrid(GTwo, 3);
GTwo.generator = new SerpuloPlanetGenerator();
//GTwo.generator = TwinGenerator2;
GTwo.atmosphereColor = Color.valueOf("F75000");
GTwo.atmosphereRadIn = 0.02;//
GTwo.atmosphereRadOut = 0.1;//
GTwo.localizedName = Core.bundle.format("planet.creator.GTwo");;
GTwo.visible = true;//可见
GTwo.bloom = false;//花
GTwo.accessible = false
;//易接近的；可进入的
GTwo.startSector = 5;//
GTwo.orbitRadius = 20;//
GTwo.alwaysUnlocked = true;
lib.addToResearch(GTwo, { parent: SectorPresets.planetaryTerminal.name, });

const GTwoMaps1 = new SectorPreset("GTwoAM1", GTwo, 1);
GTwoMaps1.captureWave = 50;
GTwoMaps1.difficulty = 1;
GTwoMaps1.localizedName = Core.bundle.format("planet.creator.lvl");//绿林
exports.GTwoMaps1 = GTwoMaps1;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GTwoMaps1, {
        parent: GTwo.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(GN.GNoeMaps15)//占领希望
            
        )
    });
})); 
 const GTwoMaps22 = new SectorPreset("GTwoFSQ22", GTwo, 22);
GTwoMaps22.captureWave = 51;
GTwoMaps22.difficulty = 1;
GTwoMaps22.localizedName = Core.bundle.format("planet.creator.fsq");//辐射区
exports.GTwoMaps22 = GTwoMaps22;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GTwoMaps22, {
        parent: 'GTwoAM1',//绿林
        objectives: Seq.with(
            new Objectives.SectorComplete(GN.GNoeMaps15)//占领希望
        )
    });
}));  

const GTwoMaps35 = new SectorPreset("GTwoAnXue35", GTwo, 35);
GTwoMaps35.useAI = true
GTwoMaps35.difficulty = 1;
GTwoMaps35.localizedName = Core.bundle.format("planet.creator.anx");//暗穴
exports.GTwoMaps35 = GTwoMaps35;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GTwoMaps35, {
        parent: 'GTwoAM1',//绿林
        objectives: Seq.with(
            new Objectives.SectorComplete(GTwoMaps22)//占领绿林
           
        )
    });
})); 

const GTwoMaps14 = new SectorPreset("GTwoYL14", GTwo, 14);
GTwoMaps14.captureWave = 100;
GTwoMaps14.difficulty = 2;
GTwoMaps14.localizedName = Core.bundle.format("planet.creator.yl");//溢流
exports.GTwoMaps14 = GTwoMaps14;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GTwoMaps14, {
        parent: 'GTwoFSQ22',//辐射区
        objectives: Seq.with(
            new Objectives.SectorComplete(GTwoMaps22)//占领辐射区
        )
    });
})); 
const GTwoMaps15 = new SectorPreset("GTwoHAX15", GTwo, 15);
GTwoMaps15.captureWave = 130;
GTwoMaps15.difficulty = 1;
GTwoMaps15.localizedName = Core.bundle.format("planet.creator.hax");//海岸线
exports.GTwoMaps15 = GTwoMaps15;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GTwoMaps15, {
        parent: 'GTwoYL14',//溢流
        objectives: Seq.with(
            new Objectives.SectorComplete(GTwoMaps14),//占领溢流
            new Objectives.SectorComplete(GTwoMaps22)//占领绿林
            ,new Objectives.Research(DC.ZhengYi)
        )
    });
})); 
const GTwoMaps0 = new SectorPreset("GTwoDJQ0", GTwo, 0);
GTwoMaps0.captureWave = 81;
GTwoMaps0.difficulty = 3;
GTwoMaps0.localizedName = Core.bundle.format("planet.creator.djq");//度假期
exports.GTwoMaps0 = GTwoMaps0;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GTwoMaps0, {
        parent: 'GTwoHAX15',//海岸线
        objectives: Seq.with(
            new Objectives.SectorComplete(GTwoMaps15)//占领海岸线
        )
    });
})); 
const GTwoMaps16 = new SectorPreset("GTwoHD0116", GTwo, 16);
GTwoMaps16.captureWave = 83;
GTwoMaps16.difficulty = 3;
GTwoMaps16.localizedName = Core.bundle.format("planet.creator.hd01");//海岛01
exports.GTwoMaps16 = GTwoMaps16;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GTwoMaps16, {
        parent: 'GTwoHAX15',//海岸线
        objectives: Seq.with(
            new Objectives.SectorComplete(GTwoMaps15)//占领海岸线
        )
    });
})); //难度：1：低 3：中  6：高  8：极高  13：扫荡
const GTwoMaps6 = new SectorPreset("GTwoHD026", GTwo, 6);
GTwoMaps6.captureWave = 140;
GTwoMaps6.difficulty = 6;
GTwoMaps6.localizedName = Core.bundle.format("planet.creator.hd02");//海岛02
exports.GTwoMaps6 = GTwoMaps6;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GTwoMaps6, {
        parent: 'GTwoHAX15',//海岸线
        objectives: Seq.with(
            new Objectives.SectorComplete(GTwoMaps15),//占领海岸线
            new Objectives.SectorComplete(GTwoMaps22)//占领辐射区
        )
    });
}));
const GTwoMaps11 = new SectorPreset("GTwoCTu11", GTwo, 11);
GTwoMaps11.captureWave = 220;
GTwoMaps11.difficulty = 8;
GTwoMaps11.localizedName = Core.bundle.format("planet.creator.ctf");//冲突
exports.GTwoMaps11 = GTwoMaps11;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GTwoMaps11, {
        parent: 'GTwoHAX15',//海岛01
        objectives: Seq.with(
            new Objectives.SectorComplete(GTwoMaps15),//占领海岸线
            new Objectives.SectorComplete(GTwoMaps16),//占领海岛01
            new Objectives.SectorComplete(GTwoMaps6)//占领海岛02
        )
    });
})); 
const GTwoMaps23 = new SectorPreset("GTwoCT23", GTwo, 23);
GTwoMaps23.captureWave = 70;
GTwoMaps23.difficulty = 3;
GTwoMaps23.localizedName = Core.bundle.format("planet.creator.ct");//刺探
exports.GTwoMaps23 = GTwoMaps23;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GTwoMaps23, {
        parent: 'GTwoFSQ22',
        objectives: Seq.with(
            new Objectives.SectorComplete(GTwoMaps22)//占领辐射区
        )
    });
})); 

//难度：1：低 3：中  6：高  8：极高  13：扫荡
const GTwoMaps10 = new SectorPreset("GTwoP10", GTwo, 10);
GTwoMaps10.captureWave = 180;
GTwoMaps10.difficulty = 8;
GTwoMaps10.localizedName = Core.bundle.format("planet.creator.qyp");//区域P
exports.GTwoMaps10 = GTwoMaps10;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GTwoMaps10, {
        parent: 'GTwoCT23',//刺探
        objectives: Seq.with(
            new Objectives.SectorComplete(GTwoMaps23)//占领刺探
        )
    });
})); 

const GTwoMaps20 = new SectorPreset("GTwoTC20", GTwo, 20);
GTwoMaps20.captureWave = 91;
GTwoMaps20.difficulty = 13;
GTwoMaps20.localizedName = Core.bundle.format("planet.creator.yc");//岩池
exports.GTwoMaps20 = GTwoMaps20;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GTwoMaps20, {
        parent: 'GTwoP10',//区域P
        objectives: Seq.with(
            new Objectives.SectorComplete(GTwoMaps10)//占领区域P
        )
    });
})); 

const GTwoMaps9 = new SectorPreset("GTwoM9", GTwo, 9);
GTwoMaps9.captureWave = 160;
GTwoMaps9.difficulty = 13;
GTwoMaps9.localizedName = Core.bundle.format("planet.creator.qym");//区域M
exports.GTwoMaps9 = GTwoMaps9;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GTwoMaps9, {
        parent: 'GTwoTC20',//岩池
        objectives: Seq.with(
            new Objectives.SectorComplete(GTwoMaps20)//占领岩池
        )
    });
})); 

const GTwoMaps56 = new SectorPreset("GTwoPJ56", GTwo, 56);
GTwoMaps56.captureWave = 150;
GTwoMaps56.difficulty = 13;
GTwoMaps56.localizedName = Core.bundle.format("planet.creator.pj");//骗局
exports.GTwoMaps56 = GTwoMaps56;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GTwoMaps56, {
        parent: 'GTwoM9',//区域M
        objectives: Seq.with(
            new Objectives.SectorComplete(GTwoMaps9)//占领区域M
        )
    });
})); 


const GTwoMaps90 = new SectorPreset("GTwoFP90", GTwo, 90);

GTwoMaps90.useAI = false
GTwoMaps90.difficulty = 1;
GTwoMaps90.localizedName = Core.bundle.format("planet.creator.fp");//分频
exports.GTwoMaps90 = GTwoMaps90;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GTwoMaps90, {
        parent: 'GTwoAnXue35',//暗穴
        objectives: Seq.with(
            new Objectives.SectorComplete(GTwoMaps35)//暗穴
        )
    });
})); 

const GTwoMaps33 = new SectorPreset("GTwoShaoTan33", GTwo, 33);
GTwoMaps33.useAI = true
GTwoMaps33.difficulty = 6;
GTwoMaps33.localizedName = Core.bundle.format("planet.creator.sht");//哨探
exports.GTwoMaps33 = GTwoMaps33;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GTwoMaps33, {
        parent: 'GTwoFP90',//分频
        objectives: Seq.with(
            new Objectives.SectorComplete(GTwoMaps90)//分频
        )
    });
})); 

const GTwoMaps18 = new SectorPreset("GTwoOR18", GTwo, 18);
GTwoMaps18.useAI = true
GTwoMaps18.difficulty = 3;
GTwoMaps18.localizedName = Core.bundle.format("planet.creator.or");//O刃
exports.GTwoMaps18 = GTwoMaps18;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GTwoMaps18, {
        parent: 'GTwoFP90',//分频
        objectives: Seq.with(
            new Objectives.SectorComplete(GTwoMaps90)//分频
        )
    });
})); 

const GTwoMaps133 = new SectorPreset("GTwoSF133", GTwo, 133);
GTwoMaps133.useAI = true
GTwoMaps133.difficulty = 8;
GTwoMaps133.localizedName = Core.bundle.format("planet.creator.sf");//私法
exports.GTwoMaps133 = GTwoMaps133;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GTwoMaps133, {
        parent: 'GTwoFP90',//分频
        objectives: Seq.with(
            new Objectives.SectorComplete(GTwoMaps33)//哨探
        )
    });
})); 

const GTwoMaps224 = new SectorPreset("GTwoJueZhan224", GTwo, 224);
GTwoMaps224.useAI = true
GTwoMaps224.difficulty = 13;
GTwoMaps224.localizedName = Core.bundle.format("planet.creator.jz224");//决战224
exports.GTwoMaps224 = GTwoMaps224;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GTwoMaps224, {
        parent: 'GTwoSF133',//私法
        objectives: Seq.with(
            new Objectives.SectorComplete(GTwoMaps133),//私法
            new Objectives.SectorComplete(GTwoMaps56),//占领骗局
            new Objectives.SectorComplete(GTwoMaps11),//占领冲突
        )
    });
})); 
const core = require('core');
const GTwoMaps40 = new SectorPreset("GTwo60M40", GTwo, 40);
GTwoMaps40.alwaysUnlocked = false;//true
GTwoMaps40.captureWave = 2;
GTwoMaps40.difficulty = 8;
GTwoMaps40.localizedName = Core.bundle.format("planet.creator.hxzy");//核心转移
exports.GTwoMaps40 = GTwoMaps40;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GTwoMaps40, {
        parent: 'GNoeyiluo1',//降临
        objectives: Seq.with(
            new Objectives.Research(GTwoMaps22),//辐射区
            new Objectives.Research(GTwoMaps1),//绿林
            new Objectives.Research(core.coreConstructionPlatform)
        )
    });
})); 
