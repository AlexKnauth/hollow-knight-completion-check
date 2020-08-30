// ---------------- Constants ----------------- //

const DATA_UNKNOWN = "Data unknown";
const SYMBOL_FALSE = "<i class='icon-cancel'></i>"; // "❌ ";
const SYMBOL_TRUE = "<i class='icon-ok-squared'></i>"; // "✅ ";

// ---------------- Variables ----------------- //

var isCompleted = "";
var isNotCompleted = "";
var currentData = DATA_UNKNOWN;
var completionSymbol = SYMBOL_FALSE;

var divStart = [
    "<div>"
].join("\n");

var divEnd = [
    "</div>"
].join("\n");

var strongStart = "";
var strongEnd = "";

// ---------------- Hollow Knight Data Constant Objects ----------------- //

const DIV_ID = {
    intro: "hk-intro",
    bosses: "hk-bosses",
    charms: "hk-charms",
    colosseum: "hk-colosseum",
    dreamers: "hk-dreamers",
    dreamNail: "hk-dreamnail",
    equipment: "hk-equipment",
    maskShards: "hk-maskshards",
    nailArts: "hk-nailarts",
    nailUpgrades: "hk-nailupgrades",
    spells: "hk-spells",
    vesselFragments: "hk-vesselfragments",
    warriorDreams: "hk-warriordreams",
    grimmTroupe: "hk-grimmtroupe",
    lifeblood: "hk-lifeblood",
    godmaster: "hk-godmaster"
};

const HK_BOSSES = {
    falseKnightDefeated: ["False Knight", "Forgotten Crossroads"],
    killedMawlek: ["Brooding Mawlek", "Forgotten Crossroads"],
    hornet1Defeated: ["Hornet Protector", "Greenpath"],
    killedBurstingBouncer: ["Gruz Mother", "Forgotten Crossroads"],
    defeatedDungDefender: ["Dung Defender", "Royal Waterways"],
    mageLordDefeated: ["Soul Master", "City of Tears: Soul Sanctum"],
    killedBlackKnight: ["Watcher Knights", "City of Tears: Watcher's Spire"],
    collectorDefeated: ["The Collector", "City of Tears: Tower of Love"],
    defeatedMantisLords: ["Mantis Lords", "Mantis Village"],
    defeatedMegaJelly: ["Uumuu", "Fog Canyon: Teacher's Archives"],
    hornetOutskirtsDefeated: ["Hornet Sentinel", "Kingdom's Edge"],
    killedInfectedKnight: ["Broken Vessel", "Ancient Basin"],
    killedMimicSpider: ["Nosk", "Deepnest"],
    killedTraitorLord: ["Traitor Lord", "Queen's Gardens"]
};

// reference: https://radiance.host/apidocs/Charms.html
const HK_CHARMS = {
    gotCharm_1: ["Gathering Swarm", "Sly: 300 Geo"], // 1
    gotCharm_2: ["Wayward Compass", "Iselda: 220 Geo"], // 1
    gotCharm_3: ["Grubsong", "Grubfather: 10 Grubs"], // 1
    gotCharm_4: ["Stalwart Shell", "Sly: 200 Geo"], // 2
    gotCharm_5: ["Baldur Shell", "Howling Cliffs"], // 2
    gotCharm_6: ["Fury of the Fallen", "King's Pass"], // 2
    gotCharm_7: ["Quick Focus", "Salubra: 800 Geo"], // 3
    gotCharm_8: ["Lifeblood Heart", "Salubra: 250 Geo"], // 2
    gotCharm_9: ["Lifeblood Core", "The Abyss: 15 Lifeblood masks"], // 3
    gotCharm_10: ["Defender's Crest", "Royal Waterways"], // 1
    gotCharm_11: ["Flukenest", "Royal Waterways"], // 3
    gotCharm_12: ["Thorns of Agony", "Greenpath"], // 1
    gotCharm_13: ["Mark of Pride", "Mantis Village"], // 3
    gotCharm_14: ["Steady Body", "Salubra: 120 Geo"], // 1
    gotCharm_15: ["Heavy Blow", "Sly: 350 Geo + Shopkeeper's Key"], // 2
    gotCharm_16: ["Sharp Shadow", "Deepnest"], // 2
    gotCharm_17: ["Spore Shroom", "Fungal Wastes"], // 1
    gotCharm_18: ["Longnail", "Salubra: 300 Geo"], // 2
    gotCharm_19: ["Shaman Stone", "Salubra: 220 Geo"], // 3
    gotCharm_20: ["Soul Catcher", "Forgotten Crossroads: Ancestral Mound"], // 2
    gotCharm_21: ["Soul Eater", "Resting Grounds"], // 4
    gotCharm_22: ["Glowing Womb", "Forgotten Crossroads"], // 2
    gotCharm_23: ["Fragile / Unbreakable Heart", "Leg Eater: 350/280 Geo"], // 2
    gotCharm_24: ["Fragile / Unbreakable Greed", "Leg Eater: 250/200 Geo"], // 2
    gotCharm_25: ["Fragile / Unbreakable Strength", "Leg Eater: 600/480 Geo"], // 3
    gotCharm_26: ["Nailmaster’s Glory", "Sly: All Nail Arts"], // 1
    gotCharm_27: ["Joni’s Blessing", "Howling Cliffs: Joni's Repose"], // 4
    gotCharm_28: ["Shape of Unn", "Greenpath: Lake of Unn"], // 2
    gotCharm_29: ["Hiveblood", "The Hive"], // 4
    gotCharm_30: ["Dream Wielder", "Seer: 500 Essence"], // 1
    gotCharm_31: ["Dashmaster", "Fungal Wastes"], // 2
    gotCharm_32: ["Quick Slash", "Kingdom's Edge"], // 3
    gotCharm_33: ["Spell Twister", "City of Tears: Soul Sanctum"], // 2
    gotCharm_34: ["Deep Focus", "Crystal Peak"], // 4
    gotCharm_35: ["Grubberfly’s Elegy", "Grubfather: 46 Grubs"], // 3
    gotCharm_36: ["Kingsoul / Void Heart", "Queen's Gardens, Ancient Basin, Birthplace"], // 5
};

const HK_COLOSSEUM = {
    colosseumBronzeCompleted: ["Trial of the Warrior", "Little Fool: 100 Geo"],
    colosseumSilverCompleted: ["Trial of the Conqueror", "Little Fool: 450 Geo + Warrior completed"],
    colosseumGoldCompleted: ["Trial of the Fool", "Little Fool: 800 Geo + Conqueror completed"],
};

const HK_DREAMERS = {
    lurienDefeated: ["Lurien the Watcher", "City of Tears: Watcher's Spire"],
    monomonDefeated: ["Monomon the Teacher", "Fog Canyon: Teacher's Archives"],
    hegemolDefeated: ["Herrah the Beast", "Deepnest: Distant Village"]
};

const HK_DREAMNAIL = {
    hasDreamNail: ["Dream Nail acquired", "Resting Grounds"],
    dreamNailUpgraded: ["Awoken Dream Nail", "Seer: 1800 Essence"],
    mothDeparted: ["Hear the Seer's final words", "Seer: 2400 Essence"]
};

const HK_EQUIPMENT = {
    hasDash: ["Mothwing Cloak", "Greenpath; Dash ability"],
    hasWalljump: ["Mantis Claw", "Mantis Village; Wall Jump ability"],
    hasSuperDash: ["Crystal Heart", "Crystal Peak; Super Dash ability"],
    hasAcidArmour: ["Isma's Tear", "Royal Waterways; Acid Armour ability"],
    hasDoubleJump: ["Monarch Wings", "Ancient Basin; Double Jump ability"],
    hasKingsBrand: ["King's Brand", "Kingdom's Edge"],
    hasShadowDash: ["Shade Cloak", "The Abyss; Shadow Dash ability"]
};

const HK_MASKSHARDS = {
    slyShellFrag1: ["Mask Shard #1", "Sly: 150 Geo"],
    slyShellFrag2: ["Mask Shard #2", "Sly: 500 Geo"],
    slyShellFrag3: ["Mask Shard #3", "Sly: 800 Geo + Shopkeeper's Key"],
    slyShellFrag4: ["Mask Shard #4", "Sly: 1500 Geo + Shopkeeper's Key"],
    dreamReward7: ["Mask Shard #5", "Seer: 1500 Essence"]
};

// "Heart Piece" sceneData.persistentBoolItems.id
const HK_MASKSHARDS_WORLD = {
    Crossroads_13: ["Mask Shard #6", "Forgotten Crossroads: below Hot Springs"],
    Crossroads_09: ["Mask Shard #7", "Forgotten Crossroads: Brooding Mawlek"],
    Crossroads_38: ["Mask Shard #8", "Grubfather: 5 Grubs"],
    Room_Bretta: ["Mask Shard #9", "Dirtmouth: Bretta's Room"],
    Fungus2_01: ["Mask Shard #10", "Queen's Station"],
    Waterways_04b: ["Mask Shard #11", "Royal Waterways"],
    Fungus1_36: ["Mask Shard #12", "Greenpath: Stone Sanctuary"],
    Mines_32: ["Mask Shard #13", "Crystal Peak: Enraged Guardian"],
    Fungus2_25: ["Mask Shard #14", "Deepnest: entrance from Fungal Wastes"],
    Hive_04: ["Mask Shard #15", "The Hive"],
    Room_Mansion: ["Mask Shard #16", "Resting Grounds: Delicate Flower"]
};

const HK_VESSELFRAGMENTS = {
    slyVesselFrag1: ["Vessel Fragment #1", "Sly: 550 Geo"],
    slyVesselFrag2: ["Vessel Fragment #2", "Sly: 900 Geo"],
    dreamReward5: ["Vessel Fragment #3", "Seer: 700 Essence"],
    vesselFragStagNest: ["Vessel Fragment #4", "Stag Nest"]
};

// "Vessel Fragment" sceneData.persistentBoolItems.id
const HK_VESSELFRAGMENTS_WORLD = {
    Fungus1_13: ["Vessel Fragment #5", "Greenpath: near Queen's Gardens exit"],
    Crossroads_37: ["Vessel Fragment #6", "Forgotten Crossroads: unlock City of Tears lift"],
    Ruins2_09: ["Vessel Fragment #7", "Above King's Station"],
    Deepnest_38: ["Vessel Fragment #8", "Deepnest: Goam platforming challenge"],
    Abyss_04: ["Vessel Fragment #9", "Ancient Basin Fountain: 3000 Geo"]
};

const HK_NAILARTS = {
    hasUpwardSlash: ["Great Slash", "Nailmaster Sheo: Greenpath"],
    hasDashSlash: ["Dash Slash", "Nailmaster Oro: Kingdom's Edge, 800 Geo"],
    hasCyclone: ["Cyclone Slash", " Nailmaster Mato: Howling Cliffs"],
};

const HK_NAILUPGRADES = [
    ["#0 Old Nail", "Starting Weapon"],
    ["#1 Sharpened Nail", "Nailsmith: 250 Geo"],
    ["#2 Channeled Nail", "Nailsmith: 800 Geo + 1 Pale Ore"],
    ["#3 Coiled Nail", "Nailsmith: 2000 Geo + 2 Pale Ore"],
    ["#4 Pure Nail", "Nailsmith: 4000 Geo + 3 Pale Ore"]
];

const HK_SPELLS = {
    fireballLevel: {
        1: ["Vengeful Spirit", "Forgotten Crossroads"],
        2: ["Shade Soul", "City of Tears: Soul Sanctum + Elegant Key"],
    },
    quakeLevel: {
        1: ["Desolate Dive", "City of Tears: Soul Sanctum"],
        2: ["Descending Dark", "Crystal Peak: Crystallised Mound"],
    },
    screamLevel: {
        1: ["Howling Wraiths", "Fog Canyon: Overgrown Mound"],
        2: ["Abyss Shriek", "The Abyss"],
    }
};

const HK_WARRIORDREAMS = {
    xeroDefeated: ["Xero", "Resting Grounds"],
    noEyesDefeated: ["No Eyes", "Greenpath: Stone Sanctuary"],
    elderHuDefeated: ["Elder Hu", "Fungal Wastes"],
    aladarSlugDefeated: ["Gorb", "Howling Cliffs"],
    mumCaterpillarDefeated: ["Marmu", "Queen's Gardens"],
    galienDefeated: ["Galien", "Deepnest"],
    markothDefeated: ["Markoth", "Kingdom's Edge"],
};

const HK_GRIMMTROUPE = {
    gotCharm_37: ["Charm #37 Sprintmaster", "Sly: 400 Geo + Shopkeeper's Key"],
    gotCharm_38: ["Charm #38 Dreamshield", "Resting Grounds"],
    gotCharm_39: ["Charm #39 Weaversong", "Deepnest: Weaver's Den"],
    gotCharm_40: ["Charm #40 Grimmchild / Carefree Melody", "Dirtmouth"],
    killedGrimm: ["Troupe Leader Grimm", "Dirtmouth"]
};

const HK_LIFEBLOOD = {
    killedHiveKnight: ["Hive Knight", "The Hive"]
};

const HK_GODMASTER = {
    hasGodfinder: ["Godtuner", "Junk Pit"]
};

const HK_GODMASTER_DOORS = [
    ["#1 Pantheon of the Master", "Godhome"],
    ["#2 Pantheon of the Artist", "Godhome"],
    ["#3 Pantheon of the Sage", "Godhome"],
    ["#4 Pantheon of the Knight", "Godhome"]
];

function HKCheckCompletion(jsonObject) {

    // start benchmark
    let countBegin = new Date();

    // Pre-Cleaning all divs for safety
    CleanHTML(DIV_ID);

    // Shallow Clone const objects (used for destructive functions)
    let HK_BOSSES_temp = Object.assign({}, HK_BOSSES);
    let HK_CHARMS_temp = Object.assign({}, HK_CHARMS);
    let HK_COLOSSEUM_temp = Object.assign({}, HK_COLOSSEUM);
    let HK_DREAMERS_temp = Object.assign({}, HK_DREAMERS);
    let HK_DREAMNAIL_temp = Object.assign({}, HK_DREAMNAIL);
    let HK_EQUIPMENT_temp = Object.assign({}, HK_EQUIPMENT);
    let HK_MASKSHARDS_temp = Object.assign({}, HK_MASKSHARDS);
    let HK_MASKSHARDS_WORLD_temp = Object.assign({}, HK_MASKSHARDS_WORLD);
    let HK_NAILARTS_temp = Object.assign({}, HK_NAILARTS);
    let HK_VESSELFRAGMENTS_temp = Object.assign({}, HK_VESSELFRAGMENTS);
    let HK_VESSELFRAGMENTS_WORLD_temp = Object.assign({}, HK_VESSELFRAGMENTS_WORLD);
    let HK_WARRIORDREAMS_temp = Object.assign({}, HK_WARRIORDREAMS);
    let HK_GRIMMTROUPE_temp = Object.assign({}, HK_GRIMMTROUPE);
    let HK_LIFEBLOOD_temp = Object.assign({}, HK_LIFEBLOOD);
    let HK_GODMASTER_temp = Object.assign({}, HK_GODMASTER);

    // Shallow Clone const arrays (used for destructive functions)
    let HK_GODMASTER_DOORS_temp = Array.from(HK_GODMASTER_DOORS);
    let HK_NAILUPGRADES_temp = Array.from(HK_NAILUPGRADES);

    // Deep Clone const spells multi-layer object (used for destructive functions)
    let HK_SPELLS_temp = JSON.parse(JSON.stringify(HK_SPELLS));

    let HKPlayerData = jsonObject.playerData;
    let HKWorldItems = jsonObject.sceneData.persistentBoolItems;

    for (let i in HKPlayerData) {
        completionSymbol = SYMBOL_FALSE;
        currentData = DATA_UNKNOWN;

        // ---------------- Game Completion Status ----------------- //

        if (i === "completionPercentage") {
            if (HKPlayerData.completionPercentage >= 112) CurrentDataTrue();

            let textFill = "Game Completion: <b>" + HKPlayerData.completionPercentage + " %</b> (out of 112 %)";
            document.getElementById(DIV_ID.intro).innerHTML += divStart + completionSymbol + textFill + divEnd;

            CurrentDataFalse();
        }

        // ---------------- Time Played ----------------- //

        if (i === "playTime") {
            let icon = "<i class='icon-clock'></i>";
            let seconds = Math.floor(HKPlayerData.playTime);
            let minutes = Math.round((seconds / 60) % 60);
            let hours = Math.round(seconds / 3600);
            let sec = Math.round(seconds % 60);

            if (sec <= 10) sec = "0" + sec;
            if (minutes <= 10) minutes = "0" + minutes;
            let textFill = "Time Played: <b>" + hours + " h " + minutes + " min " + sec + " sec</b>";

            document.getElementById(DIV_ID.intro).innerHTML += divStart + icon + textFill + divEnd;
        }

        // ---------------- Bosses (Base Game) --------------------- //

        if (HK_BOSSES_temp) CheckIfDataTrue(DIV_ID.bosses, HK_BOSSES_temp, HKPlayerData);

        // ---------------- Charms --------------------- //

        if (HK_CHARMS_temp) CheckIfDataTrue(DIV_ID.charms, HK_CHARMS_temp, HKPlayerData);

        // ---------------- Colosseum of Fools --------------------- //

        if (HK_COLOSSEUM_temp) CheckIfDataTrue(DIV_ID.colosseum, HK_COLOSSEUM_temp, HKPlayerData);

        // ---------------- Dreamers --------------------- //

        if (HK_DREAMERS_temp) CheckIfDataTrue(DIV_ID.dreamers, HK_DREAMERS_temp, HKPlayerData);

        // ---------------- Dream Nail and Essence --------------------- //

        if (HK_DREAMNAIL_temp) CheckIfDataTrue(DIV_ID.dreamNail, HK_DREAMNAIL_temp, HKPlayerData);

        // ---------------- Equipment --------------------- //

        if (HK_EQUIPMENT_temp) CheckIfDataTrue(DIV_ID.equipment, HK_EQUIPMENT_temp, HKPlayerData);

        // ---------------- Mask Shards --------------------- //

        if (HK_MASKSHARDS_temp) CheckIfDataTrue(DIV_ID.maskShards, HK_MASKSHARDS_temp, HKPlayerData);

        // ---------------- Nail Arts --------------------- //

        if (HK_NAILARTS_temp) CheckIfDataTrue(DIV_ID.nailArts, HK_NAILARTS_temp, HKPlayerData);

        // ---------------- Nail Upgrades --------------------- //

        if (i === "nailSmithUpgrades") {
            for (let j = 0; j < HK_NAILUPGRADES_temp.length; j++) {
                CurrentDataFalse();
                if (HKPlayerData.nailSmithUpgrades >= j) CurrentDataTrue();
                FillHTML(DIV_ID.nailUpgrades, HK_NAILUPGRADES_temp[j][0], HK_NAILUPGRADES_temp[j][1]);
            }
        }

        // ---------------- Spells --------------------- //

        if (HK_SPELLS_temp) CheckSpellLevel(DIV_ID.spells, HK_SPELLS_temp, HKPlayerData);

        // ---------------- Vessel Fragments --------------------- //

        if (HK_VESSELFRAGMENTS_temp) CheckIfDataTrue(DIV_ID.vesselFragments, HK_VESSELFRAGMENTS_temp, HKPlayerData);

        // ---------------- Warrior Dreams --------------------- //

        if (HK_WARRIORDREAMS_temp) CheckWarriorDreams(DIV_ID.warriorDreams, HK_WARRIORDREAMS_temp, HKPlayerData);

        // ---------------- Grimm Troupe Content Pack --------------------- //

        if (HK_GRIMMTROUPE_temp) CheckIfDataTrue(DIV_ID.grimmTroupe, HK_GRIMMTROUPE_temp, HKPlayerData);

        if (i === "grimmChildLevel") {
            if (HKPlayerData.grimmChildLevel >= 4) CurrentDataTrue();
            else CurrentDataFalse();
            FillHTML(DIV_ID.grimmTroupe, "Nightmare King Grimm / Banishment", "Dirtmouth or Howling Cliffs");
        }

        // ---------------- Lifeblood Content Pack --------------------- //

        if (HK_LIFEBLOOD_temp) CheckIfDataTrue(DIV_ID.lifeblood, HK_LIFEBLOOD_temp, HKPlayerData);

        // ---------------- Godmaster Content Pack --------------------- //

        if (HK_GODMASTER_temp) CheckIfDataTrue(DIV_ID.godmaster, HK_GODMASTER_temp, HKPlayerData);

        if (HK_GODMASTER_DOORS_temp.length) {
            for (let j = 1; j <= 4; j++) {
                CurrentDataFalse();
                if (i === ("bossDoorStateTier" + j)) {
                    if (HKPlayerData["bossDoorStateTier" + j].completed === true) CurrentDataTrue();
                    FillHTML(DIV_ID.godmaster, HK_GODMASTER_DOORS_temp[0][0], HK_GODMASTER_DOORS_temp[0][1]);
                    HK_GODMASTER_DOORS_temp.shift()
                }
            }
        }

    }

    // ---------------- Mask Shards (World Map) --------------------- //

    CheckWorldDataTrue(DIV_ID.maskShards, "Heart Piece", HK_MASKSHARDS_WORLD_temp, HKWorldItems);

    // ---------------- Vessel Fragments (World Map) --------------------- //

    CheckWorldDataTrue(DIV_ID.vesselFragments, "Vessel Fragment", HK_VESSELFRAGMENTS_WORLD_temp, HKWorldItems);

    // finish and show benchmark
    let countEnd = new Date();
    console.info("HKCheckCompletion() time (ms) =", countEnd - countBegin);
}

function CleanHTML(jsObj) {
    for (let i in jsObj) {
        document.getElementById(jsObj[i]).innerHTML = "";
    }
}

function FillHTML(divId = "", textPrefix = "Unknown Completion Element: ", textSuffix = "") {
    let dash = "";
    if (textSuffix.length) dash = " — ";
    document.getElementById(divId).innerHTML += divStart + completionSymbol + "<b>" + textPrefix + "</b>" + dash + textSuffix + divEnd;
}

function CurrentDataTrue(textData = isCompleted) {
    completionSymbol = SYMBOL_TRUE;
    currentData = textData;
}

function CurrentDataFalse(textData = isNotCompleted) {
    completionSymbol = SYMBOL_FALSE;
    currentData = textData;
}

function CheckIfDataTrue(divId, dataObject, playerData) {
    for (let i in dataObject) {
        CurrentDataFalse();
        if (playerData[i] === true) CurrentDataTrue();
        FillHTML(divId, dataObject[i][0], dataObject[i][1]);
        delete dataObject[i];
    }
}

function CheckSpellLevel(divId, dataObject, playerData) {
    for (let i in dataObject) {
        for (let j = 1; j <= 2; j++) {
            CurrentDataFalse();
            if (playerData[i] >= j) CurrentDataTrue();
            FillHTML(divId, dataObject[i][j][0], dataObject[i][j][1]);
        }
        delete dataObject[i];
    }
}

function CheckWarriorDreams(divId, dataObject, playerData) {
    for (let i in dataObject) {
        if (playerData[i] > 0) CurrentDataTrue();
        else CurrentDataFalse();
        FillHTML(divId, dataObject[i][0], dataObject[i][1]);
        delete dataObject[i];
    }
}

function CheckWorldDataTrue(divId, idText, dataObject, worldData) {
    let orderedArray = [];
    let size = ObjectLength(dataObject);

    // Order the items before displaying them
    for (let i in dataObject) {
        orderedArray.push([i, dataObject[i][0], dataObject[i][1], false]);
    }

    // Search for completed items and mark them for display
    for (let i = 0; i < worldData.length; i++) {
        for (let j = 0; j < size; j++) {
            if (worldData[i].id === idText && worldData[i].sceneName === orderedArray[j][0] && worldData[i].activated === true) {
                orderedArray[j][3] = true;
            }
        }
    }

    // Display the items as they were initially ordered
    for (let i = 0; i < size; i++) {
        CurrentDataFalse();
        if (orderedArray[i][3] === true) CurrentDataTrue();
        FillHTML(divId, orderedArray[i][1], orderedArray[i][2]);
    }
}

function HKReadTextArea() {
    CleanHTML(DIV_ID);

    let textAreaId = "save-area";
    let contents = document.getElementById(textAreaId).value;

    if (contents.length) {
        let jsonObject = JSON.parse(contents);
        HKCheckCompletion(jsonObject);
        // console.log(jsonObject);
    }
}

function ObjectLength(object) {
    let length = 0;
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            ++length;
        }
    }
    return length;
}