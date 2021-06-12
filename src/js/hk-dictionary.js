/* Huge thanks to ManicJamie for his HKTranslator: https://github.com/ManicJamie/HKTranslator */

const MAP = {
    "Tutorial_01": "King's_Pass",
    "Town": "Dirtmouth",
    "Room_shop": "Sly",
    "Room_Sly_Storeroom": "Sly_Basement",
    "Room_Town_Stag_Station": "Dirtmouth_Stag",
    "Room_mapper": "Iselda",
    "Room_Bretta": "Bretta",
    "Room_Bretta_Basement": "Bretta_Basement",
    "Room_Ouiji": "Jiji",
    "Room_Jinn": "Jinn",
    "Room_Tram_RG": "Upper_Tram",
    "Room_Tram": "Lower_Tram",
    "Crossroads_01": "Crossroads_Well",
    "Crossroads_02": "Crossroads_Outside_Temple",
    "Crossroads_03": "Crossroads_Outside_Stag",
    "Crossroads_04": "Crossroads_Gruz_Mother",
    "Crossroads_05": "Crossroads_Central_Grub",
    "Crossroads_06": "Crossroads_Outside_Mound",
    "Crossroads_07": "Crossroads_Gruzzer",
    "Crossroads_08": "Crossroads_Aspid_Arena",
    "Crossroads_09": "Crossroads_Mawlek_Boss",
    "Crossroads_10": "Crossroads_False_Knight_Arena",
    "Crossroads_11_alt": "Crossroads_Greenpath_Entrance",
    "Crossroads_12": "Crossroads_Corridor_to_Acid_Grub",
    "Crossroads_13": "Crossroads_Goam_Mask_Shard",
    "Crossroads_14": "Crossroads_Outside_Myla",
    "Crossroads_15": "Crossroads_Corridor_to_Tram",
    "Crossroads_16": "Crossroads_Above_Lever",
    "Crossroads_18": "Crossroads_Fungal_Entrance",
    "Crossroads_19": "Crossroads_Before_Gruz_Mother",
    "Crossroads_21": "Crossroads_Outside_False_Knight",
    "Crossroads_22": "Crossroads_Glowing_Womb_Arena",
    "Crossroads_25": "Crossroads_Mawlek_Entrance",
    "Crossroads_27": "Crossroads_Outside_Tram",
    "Crossroads_30": "Crossroads_Hot_Spring",
    "Crossroads_31": "Crossroads_Spike_Grub",
    "Crossroads_33": "Crossroads_Cornifer",
    "Crossroads_35": "Crossroads_Acid_Grub",
    "Crossroads_36": "Crossroads_Mawlek_Middle",
    "Crossroads_37": "Crossroads_Vessel_Fragment",
    "Crossroads_38": "Crossroads_Grubfather",
    "Crossroads_39": "Crossroads_Corridor_Right_of_Temple",
    "Crossroads_40": "Crossroads_Corridor_Right_of_Central_Grub",
    "Crossroads_42": "Crossroads_Right_Of_Mask_Shard",
    "Crossroads_43": "Crossroads_Corridor_to_Elevator",
    "Crossroads_45": "Crossroads_Myla",
    "Crossroads_46": "Crossroads_Tram",
    "Crossroads_47": "Crossroads_Stag",
    "Crossroads_48": "Crossroads_Guarded_Grub",
    "Crossroads_49": "Crossroads_Elevator",
    "Crossroads_52": "Crossroads_Goam_Journal",
    "Crossroads_ShamanTemple": "Crossroads_Ancestral_Mound",
    "Room_Mender_House": "Crossroads_Menderbug",
    "Room_Charm_Shop": "Crossroads_Salubra",
    "Room_ruinhouse": "Crossroads_Rescue_Sly",
    "Room_temple": "Crossroads_Inside_Temple",
    "Fungus1_01": "Greenpath_Entrance",
    "Fungus1_01b": "Greenpath_Waterfall_Bench",
    "Fungus1_02": "Greenpath_First_Hornet_Sighting",
    "Fungus1_03": "Greenpath_Storerooms",
    "Fungus1_04": "Greenpath_Hornet",
    "Fungus1_05": "Greenpath_Outside_Thorns",
    "Fungus1_06": "Greenpath_Cornifer",
    "Fungus1_07": "Greenpath_Outside_Hunter",
    "Fungus1_08": "Greenpath_Hunter",
    "Fungus1_09": "Greenpath_Sheo_Gauntlet",
    "Fungus1_10": "Greenpath_Acid_Bridge",
    "Fungus1_11": "Greenpath_Above_Fog_Canyon",
    "Fungus1_12": "Greenpath_MMC_Corridor",
    "Fungus1_13": "Greenpath_Whispering_Root",
    "Fungus1_14": "Greenpath_Thorns_of_Agony",
    "Fungus1_15": "Greenpath_Outside_Sheo",
    "Fungus1_16_alt": "Greenpath_Stag",
    "Fungus1_17": "Greenpath_Charger_Corridor",
    "Fungus1_19": "Greenpath_Above_Sanctuary_Bench",
    "Fungus1_20_v02": "Greenpath_Vengefly_King",
    "Fungus1_21": "Greenpath_Outside_Hornet",
    "Fungus1_22": "Greenpath_Outside_Stag",
    "Fungus1_25": "Greenpath_Corridor_to_Unn",
    "Fungus1_26": "Greenpath_Lake_Of_Unn",
    "Fungus1_29": "Greenpath_Massive_Moss_Charger",
    "Fungus1_30": "Greenpath_Below_Toll_Bench",
    "Fungus1_31": "Greenpath_Toll",
    "Fungus1_32": "Greenpath_Moss_Knight_Arena",
    "Fungus1_34": "Greenpath_Stone_Sanctuary_Entrance",
    "Fungus1_35": "Greenpath_Stone_Sanctuary",
    "Fungus1_36": "Greenpath_Stone_Sanctuary_Mask_Shard",
    "Fungus1_37": "Greenpath_Sanctuary_Bench",
    "Fungus1_Slug": "Greenpath_Unn",
    "Room_nailmaster_02": "Greenpath_Sheo",
    "Room_Slug_Shrine": "Greenpath_Unn_Bench",
    "Deepnest_01": "Fungal_Deepnest_Fall",
    "Fungus2_01": "Fungal_Queen's_Station",
    "Fungus2_02": "Fungal_Queen's_Stag",
    "Fungus2_03": "Fungal_Outside_Queen's",
    "Fungus2_04": "Fungal_Below_Ogres",
    "Fungus2_05": "Fungal_Shrumal_Ogres",
    "Fungus2_06": "Fungal_Outside_Leg_Eater",
    "Fungus2_07": "Fungal_Shrumal_Warrior_Acid_Bridge",
    "Fungus2_08": "Fungal_Outside_Elder_Hu",
    "Fungus2_09": "Fungal_Cloth_Corridor",
    "Fungus2_10": "Fungal_Left_Of_Pilgrim's_Way",
    "Fungus2_11": "Fungal_Right_of_Bouncy_Grub",
    "Fungus2_12": "Fungal_Mantis_Corridor",
    "Fungus2_13": "Fungal_Bretta_Bench",
    "Fungus2_14": "Fungal_Mantis_Village",
    "Fungus2_15": "Fungal_Mantis_Lords",
    "Fungus2_17": "Fungal_Above_Mantis_Village",
    "Fungus2_18": "Fungal_Cornifer",
    "Fungus2_19": "Fungal_Right_Of_Spore_Shroom",
    "Fungus2_20": "Fungal_Spore_Shroom",
    "Fungus2_21": "Fungal_Pilgrim's_Way",
    "Fungus2_23": "Fungal_Dashmaster",
    "Fungus2_26": "Fungal_Leg_Eater",
    "Fungus2_28": "Fungal_Shrumal_Warrior_Loop",
    "Fungus2_29": "Fungal_Core_Upper",
    "Fungus2_30": "Fungal_Core_Lower",
    "Fungus2_31": "Fungal_Mantis_Rewards",
    "Fungus2_32": "Fungal_Elder_Hu",
    "Fungus2_33": "Fungal_Leg_Eater_Root",
    "Fungus2_34": "Fungal_Willoh",
    "Fungus3_01": "Fog_Upper_West_Tall",
    "Fungus3_02": "Fog_Lower_West_Tall",
    "Fungus3_03": "Fog_Queen's_Gardens_Acid_Entrance",
    "Fungus3_24": "Fog_Corridor_to_Overgrown_Mound",
    "Fungus3_25": "Fog_Cornifer",
    "Fungus3_25b": "Fog_Corridor_to_Cornifer",
    "Fungus3_26": "Fog_East_Tall",
    "Fungus3_27": "Fog_Corridor_to_Archives",
    "Fungus3_28": "Fog_Charm_Notch",
    "Fungus3_30": "Fog_Lifeblood",
    "Fungus3_35": "Fog_Millibelle",
    "Fungus3_44": "Fog_Overgrown_Mound_Entrance",
    "Fungus3_47": "Fog_Archives_Entrance",
    "Fungus3_archive": "Fog_Archives_Bench",
    "Fungus3_archive_02": "Fog_Uumuu_Arena",
    "Room_Fungus_Shaman": "Fog_Overgrown_Mound",
    "Cliffs_01": "Cliffs_Main",
    "Cliffs_02": "Cliffs_Gorb",
    "Cliffs_03": "Cliffs_Stag_Nest",
    "Cliffs_04": "Cliffs_Joni's_Dark",
    "Cliffs_05": "Cliffs_Joni's_Pickup",
    "Cliffs_06": "Cliffs_Grimm_Lantern",
    "Fungus1_28": "Cliffs_Baldur's_Shell",
    "Room_nailmaster": "Cliffs_Mato",
    "Mines_01": "Crystal_Dive_Entrance",
    "Mines_02": "Crystal_Dark_Entrance",
    "Mines_03": "Crystal_Spike_Grub",
    "Mines_04": "Crystal_Entrance_Conveyors",
    "Mines_05": "Crystal_Above_Spike_Grub",
    "Mines_06": "Crystal_Deep_Focus_Gauntlet",
    "Mines_07": "Crystal_Dark_Room",
    "Mines_10": "Crystal_Elevator_Entrance",
    "Mines_11": "Crystal_Left_Of_Guardian",
    "Mines_13": "Crystal_Top_Corridor",
    "Mines_16": "Crystal_Mimic",
    "Mines_17": "Crystal_Corridor_to_Spike_Grub",
    "Mines_18": "Crystal_Guardian_Bench",
    "Mines_19": "Crystal_Grub_Crushers",
    "Mines_20": "Crystal_East_Tall",
    "Mines_23": "Crystal_Crown_Whispering_Root",
    "Mines_24": "Crystal_Crown_Grub",
    "Mines_25": "Crystal_Crown_Climb",
    "Mines_28": "Crystal_Outside_Mound",
    "Mines_29": "Crystal_Dark_Bench",
    "Mines_30": "Crystal_Cornifer",
    "Mines_31": "Crystal_Crystal_Heart_Gauntlet",
    "Mines_32": "Crystal_Enraged_Guardian_Arena",
    "Mines_33": "Crossroads_Peak_Dark_Toll",
    "Mines_34": "Crystal_Crown_Peak",
    "Mines_35": "Crystal_Mound",
    "Mines_36": "Crystal_Deep_Focus",
    "Mines_37": "Crystal_Chest_Crushers",
    "Abyss_02": "Basin_Broken_Bridge",
    "Abyss_03": "Basin_Tram",
    "Abyss_04": "Basin_Fountain",
    "Abyss_05": "Basin_Palace_Grounds",
    "Abyss_17": "Basin_Cloth",
    "Abyss_18": "Basin_Corridor_to_Broken_Vessel",
    "Abyss_19": "Basin_Broken_Vessel_Grub",
    "Abyss_20": "Basin_Simple_Key",
    "Abyss_21": "Basin_Monarch_Wings",
    "Abyss_22": "Basin_Hidden_Station",
    "Abyss_06_Core": "Abyss_Core",
    "Abyss_08": "Abyss_Lifeblood_Core",
    "Abyss_09": "Abyss_Lighthouse_Climb",
    "Abyss_10": "Abyss_Shade_Cloak",
    "Abyss_12": "Abyss_Shriek",
    "Abyss_15": "Abyss_Birthplace",
    "Abyss_16": "Abyss_Corridor_to_Lighthouse",
    "Abyss_Lighthouse_room": "Abyss_Lighthouse",
    "Crossroads_46b": "Grounds_Tram",
    "Crossroads_50": "Grounds_Blue_Lake",
    "RestingGrounds_02": "Grounds_Xero",
    "RestingGrounds_04": "Grounds_Dream_Nail_Entrance",
    "RestingGrounds_05": "Grounds_Whispering_Root",
    "RestingGrounds_06": "Grounds_Corridor_Below_Xero",
    "RestingGrounds_07": "Grounds_Seer",
    "RestingGrounds_08": "Grounds_Spirit's_Glade",
    "RestingGrounds_09": "Grounds_Stag",
    "RestingGrounds_10": "Grounds_Crypts",
    "RestingGrounds_12": "Grounds_Outside_Grey_Mourner",
    "RestingGrounds_17": "Grounds_Dreamshield",
    "Room_Mansion": "Grounds_Grey_Mourner",
    "Ruins2_10": "Grounds_Elevator",
    "Abyss_03_c": "Edge_Tram",
    "Deepnest_East_01": "Edge_Left_Of_Hive",
    "Deepnest_East_02": "Edge_Above_Hive",
    "Deepnest_East_03": "Edge_Entrance",
    "Deepnest_East_04": "Edge_Bardoon",
    "Deepnest_East_06": "Edge_Outside_Oro",
    "Deepnest_East_07": "Edge_Whispering_Root",
    "Deepnest_East_08": "Edge_Great_Hopper_Idol",
    "Deepnest_East_09": "Edge_Corridor_Outside_Colosseum",
    "Deepnest_East_10": "Edge_Markoth_Arena",
    "Deepnest_East_11": "Edge_Below_Camp_Bench",
    "Deepnest_East_12": "Edge_Hornet_Sentinel_Corridor",
    "Deepnest_East_13": "Edge_Camp_Bench",
    "Deepnest_East_14": "Edge_Below_Oro",
    "Deepnest_East_14b": "Edge_Quick_Slash",
    "Deepnest_East_15": "Edge_Lifeblood",
    "Deepnest_East_16": "Edge_Oro_Scarecrow",
    "Deepnest_East_17": "Edge_420_Geo_Rock",
    "Deepnest_East_18": "Edge_Outside_Markoth",
    "Deepnest_East_Hornet": "Edge_Hornet_Sentinel_Arena",
    "GG_Lurker": "Edge_Pale_Lurker",
    "Room_Colosseum_01": "Edge_Colo_Entrance",
    "Room_Colosseum_02": "Edge_Colo_Bench",
    "Room_Colosseum_Bronze": "Edge_Colo_1_Arena",
    "Room_Colosseum_Gold": "Edge_Colo_3_Arena",
    "Room_Colosseum_Silver": "Edge_Colo_2_Arena",
    "Room_Colosseum_Spectate": "Edge_Colo_Spectate",
    "Room_nailmaster_03": "Edge_Oro",
    "Room_Wyrm": "Edge_Cast-Off_Shell",
    "Abyss_01": "City_Broken_Elevator",
    "Crossroads_49b": "City_Left_Elevator",
    "Room_nailsmith": "City_Nailsmith",
    "Ruins_Bathhouse": "City_Pleasure_House_Bench",
    "Ruins_Elevator": "City_Pleasure_House_Elevator",
    "Ruins_House_01": "City_Guarded_Grub",
    "Ruins_House_02": "City_Gorgeous_Husk",
    "Ruins_House_03": "City_Emilitia",
    "Ruins1_01": "City_Pilgrim's_Entrance",
    "Ruins1_02": "City_Quirrel_Bench",
    "Ruins1_03": "City_Rafters",
    "Ruins1_04": "City_Outside_Nailsmith",
    "Ruins1_05": "City_Grub_Above_Lemm",
    "Ruins1_05b": "City_Lemm",
    "Ruins1_05c": "City_Egg_Above_Lemm",
    "Ruins1_06": "City_Corridor_to_Storerooms",
    "Ruins1_09": "City_Soul_Twister_Arena",
    "Ruins1_17": "City_Whispering_Root",
    "Ruins1_18": "City_Corridor_to_Spire",
    "Ruins1_23": "City_Sanctum_Entrance",
    "Ruins1_24": "City_Soul_Master_Arena",
    "Ruins1_25": "City_Sanctum_East_Elevators",
    "Ruins1_27": "City_Hollow_Knight_Fountain",
    "Ruins1_28": "City_Storerooms",
    "Ruins1_29": "City_Storerooms_Stag",
    "Ruins1_30": "City_Sanctum_Spell_Twister",
    "Ruins1_31": "City_Toll_Bench",
    "Ruins1_31b": "City_Shade_Soul_Arena",
    "Ruins1_32": "City_Soul_Master_Rewards",
    "Ruins2_01": "City_Spire_Second_Floor",
    "Ruins2_01_b": "City_Spire_First_Floor",
    "Ruins2_03": "City_Spire_Fourth_Floor",
    "Ruins2_03b": "City_Spire_Third_Floor",
    "Ruins2_04": "City_Right_Hub",
    "Ruins2_05": "City_Above_King's",
    "Ruins2_06": "City_King's_Station",
    "Ruins2_07": "City_Grub_Below_King's",
    "Ruins2_08": "City_King's_Stag",
    "Ruins2_09": "City_King's_Vessel_Fragment",
    "Ruins2_10b": "City_Right_Elevator",
    "Ruins2_11": "City_Collector_Arena",
    "Ruins2_11_b": "City_Tower_of_Love",
    "Ruins2_Watcher_Room": "City_Lurien_Elevator",
    "Hive_01": "Hive_Entrance",
    "Hive_02": "Hive_Whispering_Root",
    "Hive_03": "Hive_Outside_Grub",
    "Hive_03_c": "Hive_Outside_Shortcut",
    "Hive_04": "Hive_Mask_Shard",
    "Hive_05": "Hive_Knight_Arena",
    "GG_Pipeway": "Waterways_Flukemunga_Corridor",
    "GG_Waterways": "Waterways_Junk_Pit",
    "Room_GG_Shortcut": "Waterways_Fluke_Hermit",
    "Waterways_01": "Waterways_Entrance",
    "Waterways_02": "Waterways_Main_Bench",
    "Waterways_03": "Waterways_Tuk",
    "Waterways_04": "Waterways_Hidden_Grub",
    "Waterways_04b": "Waterways_Mask_Shard",
    "Waterways_05": "Waterways_Dung_Defender_Arena",
    "Waterways_06": "Waterways_Corridor_to_Broken_Elevator",
    "Waterways_07": "Waterways_Left_Of_Isma's_Grove",
    "Waterways_08": "Waterways_Outside_Flukemarm",
    "Waterways_09": "Waterways_Cornifer",
    "Waterways_12": "Waterways_Flukemarm_Arena",
    "Waterways_13": "Waterways_Isma's_Grove",
    "Waterways_14": "Waterways_Edge_Acid_Corridor",
    "Waterways_15": "Waterways_Dung_Defender's_Cave",
    "Abyss_03_b": "Deepnest_Tram",
    "Deepnest_01b": "Deepnest_Upper_Cornifer",
    "Deepnest_02": "Deepnest_Outside_Mimics",
    "Deepnest_03": "Deepnest_Left_Of_Hot_Spring",
    "Deepnest_09": "Deepnest_Distant_Village_Stag",
    "Deepnest_10": "Deepnest_Distant_Village",
    "Deepnest_14": "Deepnest_Failed_Tramway_Bench",
    "Deepnest_16": "Deepnest_After_Lower_Cornifer",
    "Deepnest_17": "Deepnest_Garpede_Corridor_Below_Cornifer",
    "Deepnest_26": "Deepnest_Failed_Tramway_Lifeblood",
    "Deepnest_26b": "Deepnest_Tram_Pass",
    "Deepnest_30": "Deepnest_Hot_Spring",
    "Deepnest_31": "Deepnest_Nosk_Corridor",
    "Deepnest_32": "Deepnest_Nosk_Arena",
    "Deepnest_33": "Deepnest_Zote_Arena",
    "Deepnest_34": "Deepnest_First_Devout",
    "Deepnest_35": "Deepnest_Outside_Galien",
    "Deepnest_36": "Deepnest_Mimics",
    "Deepnest_37": "Deepnest_Corridor_to_Tram",
    "Deepnest_38": "Deepnest_Vessel_Fragment",
    "Deepnest_39": "Deepnest_Whispering_Root",
    "Deepnest_40": "Deepnest_Galien_Arena",
    "Deepnest_41": "Deepnest_Midwife",
    "Deepnest_42": "Deepnest_Outside_Mask_Maker",
    "Deepnest_44": "Deepnest_Sharp_Shadow",
    "Deepnest_45_v02": "Deepnest_Weaver's_Den",
    "Deepnest_Spider_Town": "Deepnest_Beast's_Den",
    "Fungus2_25": "Deepnest_Lower_Cornifer",
    "Room_Mask_Maker": "Deepnest_Mask_Maker",
    "Room_spider_small": "Deepnest_Brumm",
    "Deepnest_43": "Gardens_Corridor_To_Deepnest",
    "Fungus1_23": "Gardens_First_Loodle_Corridor",
    "Fungus1_24": "Gardens_Cornifer",
    "Fungus3_04": "Gardens_Before_Petra_Arena",
    "Fungus3_05": "Gardens_Petra_Arena",
    "Fungus3_08": "Gardens_Lower_Petra_Corridor",
    "Fungus3_10": "Gardens_Main_Arena",
    "Fungus3_11": "Gardens_Whispering_Root",
    "Fungus3_13": "Gardens_Outside_Stag",
    "Fungus3_21": "Gardens_Corridor_to_Traitor_Lord",
    "Fungus3_22": "Gardens_Upper_Grub",
    "Fungus3_23": "Gardens_Traitor_Lord_Arena",
    "Fungus3_34": "Gardens_Entrance",
    "Fungus3_39": "Gardens_Moss_Prophet",
    "Fungus3_49": "Gardens_Traitor's_Child's_Grave",
    "Fungus3_40": "Gardens_Gardens_Stag",
    "Fungus3_48": "Gardens_Outside_White_Lady",
    "Fungus3_50": "Gardens_Toll_Bench",
    "Room_Queen": "Gardens_White_Lady",
    "White_Palace_01": "Palace_Entrance",
    "White_Palace_02": "Palace_First_Mold",
    "White_Palace_03_hub": "Palace_Hub",
    "White_Palace_04": "Palace_Left_Of_Hub",
    "White_Palace_05": "Palace_Saw_Room",
    "White_Palace_06": "Palace_Balcony",
    "White_Palace_07": "Palace_Lamp_Pogo",
    "White_Palace_08": "Palace_Workshop",
    "White_Palace_09": "Palace_Throne",
    "White_Palace_11": "Palace_Outside",
    "White_Palace_12": "Palace_Spike_Drop",
    "White_Palace_13": "Palace_Thorn_Jump",
    "White_Palace_14": "Palace_Hell_Corridor",
    "White_Palace_15": "Palace_Caged_Lever",
    "White_Palace_16": "Palace_Saw_Climb",
    "White_Palace_17": "POP_Lever",
    "White_Palace_18": "POP_Entrance",
    "White_Palace_19": "POP_Vertical",
    "White_Palace_20": "POP_Final",
    "Dream_Final_Boss": "Egg_Radiance",
    "Room_Final_Boss_Atrium": "Egg_Bench",
    "Room_Final_Boss_Core": "Egg_Hollow_Knight",
    "Grimm_Divine": "Grimm_Divine",
    "Grimm_Main_Tent": "Grimm_Tent",
    "Grimm_Nightmare": "Grimm_NKG",
    "Dream_01_False_Knight": "Dream_Failed_Champion",
    "Dream_02_Mage_Lord": "Dream_Soul_Tyrant",
    "Dream_03_Infected_Knight": "Dream_Lost_Kin",
    "Dream_04_White_Defender": "Dream_White_Defender",
    "Dream_Abyss": "Dream_Abyss",
    "Dream_Backer_Shrine": "Dream_Outside_Shrine",
    "Dream_Guardian_Hegemol": "Dream_Herrah",
    "Dream_Guardian_Lurien": "Dream_Lurien",
    "Dream_Guardian_Monomon": "Dream_Monomon",
    "Dream_Mighty_Zote": "Dream_Grey_Prince_Zote",
    "Dream_Nailcollection": "Dream_Nail",
    "Dream_Room_Believer_Shrine": "Dream_Shrine_of_Believers",
    "GG_Atrium": "Godhome_Atrium",
    "GG_Atrium_Roof": "Godhome_Roof",
    "GG_Blue_Room": "Godhome_Lifeblood",
    "GG_Land_Of_Storms": "Godhome_Land_Of_Storms",
    "GG_Mighty_Zote": "GG_Enchanting_Vigorous_Diligent_Overwhelming_Gorgeous_Passionate_Terrifying_Beautiful_Zote",
    "GG_Unlock_Wastes": "Godhome_Godtuner",
    "GG_Workshop": "Godhome_Hall_Of_Gods"
};

export default MAP;