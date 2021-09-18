(function() {

  window.perkTrees = [
    {
      name: 'Alchemy',
      cname: 'alchemy',
      perks: [
        {
          name: 'Alchemist',
          levels: 5,
          desc: ['Potions and poisons you make are 20% stronger.', 'Potions and poisons you make are 40% stronger.', 'Potions and poisons you make are 60% stronger.', 'Potions and poisons you make are 80% stronger.', 'Potions and poisons you make are 100% stronger.'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['000BE127', '000C07CA', '000C07CB', '000C07CC', '000C07CD']
        }, {
          name: 'Physician',
          desc: ['Potions you mix that restore Health, Magicka or Stamina are 25% more powerful.'],
          req: [20],
          pos: [110, -21],
          deps: [0],
          id: ['00058215']
        }, {
          name: 'Poisoner',
          desc: ['Poisons you mix are 25% more effective.'],
          req: [30],
          pos: [20, -70],
          deps: [1],
          id: ['00058217']
        }, {
          name: 'Benefactor',
          desc: ['Potions you mix with beneficial effects have an additional 25% greater magnitude.'],
          req: [30],
          pos: [87, -71],
          deps: [1],
          id: ['00058216']
        }, {
          name: 'Concentrated Poison',
          desc: ['Poisins applied to weapons last for twice as many hits.'],
          req: [60],
          pos: [24, -110],
          deps: [2],
          id: ['00105F2F']
        }, {
          name: 'Experimenter',
          levels: 3,
          desc: ['Eating an ingredient reveals first two effects.', 'Eating an ingredient reveals first three effects.', 'Eating an ingredient reveals first four effects.'],
          req: [50, 70, 90],
          pos: [77, -111],
          deps: [3],
          id: ['00058218', '00105F2A', '00105F2B']
        }, {
          name: 'Green Thumb',
          desc: ['Two ingredients are gathered from plants.'],
          req: [70],
          pos: [31, -163],
          deps: [4],
          id: ['00105F2E']
        }, {
          name: 'Snakeblood',
          desc: ['50% resistance to all poisons.'],
          req: [80],
          pos: [70, -178],
          deps: [4, 5],
          id: ['00105F2C']
        }, {
          name: 'Purity',
          desc: ['All negative effects are removed from created potions, and all positive effects are removed from created poisons.'],
          req: [100],
          pos: [58, -216],
          deps: [7],
          id: ['0005821D']
        }
      ]
    }, {
      name: 'Illusion',
      cname: 'illusion',
      perks: [
        {
          name: 'Illusion Mastery',
		  levels: 2,
          desc: ['Illusion spells cost 35% less Magicka, Illusion spells last 0.5% longer per level of Illusion, and mind affecting Illusion spells (Calm, Fear, Frenzy, Rally) are 0.1 points stronger per level of Illusion.', 'Illusion spells cost 50% less Magicka, Illusion spells last 1% longer per level of Illusion, and mind affecting Illusion spells (Calm, Fear, Frenzy, Rally) are 0.2 points stronger per level of Illusion.'],
		  req: [0, 20],
          pos: [0, 0],
        }, {
          name: 'Illusion Dual Casting',
          desc: ['Dual casting an Illusion spell empowers it, increasing effectiveness and cost.'],
          req: [20],
          pos: [-56, -9],
          deps: [0],
		}, {
          name: 'Silent Storm',
		  levels: 2,
          desc: ['All spells you cast from any school of magic are silent to others.', 'All spells you cast from any school of magic, as well as all shouts, are silent to others.'],
          req: [40, 70],
          pos: [59, -13],
          deps: [0],
		}, {
          name: 'Night Eye',
          desc: ['Grants the "Night Eye" power. At will, grants improved night vision for 120 seconds.'],
          req: [30],
          pos: [-68, -29],
          deps: [0],
		}, {
          name: 'Ghost of the Tenth Eye',
          desc: ['Sneaking while under the effect of the Vision of the Tenth Eye spell will summon a disembodied eye under your control. The eye has 1 point of Health, but is invisible and silent. You must know the Vision of the Tenth Eye spell to learn this perk.'],
          req: [90],
          pos: [-79, -65],
          deps: [3],
		}, {
          name: 'Beastial Minds',
          desc: ['Mind-altering spells are more effective against higher level animals and creatures.'],
          req: [20],
          pos: [-16, -26],
          deps: [0],
		}, {
          name: 'Calming Presence',
          desc: ['Giants, mammoths, ice wraiths, and trolls are friendly until attacked. Gain use of the Tranquility lesser power.'],
          req: [45],
          pos: [-43, -33],
          deps: [5],
		}, {
          name: 'Entice Barter',
          desc: ['Can Activate any target under the effect of a Calm spell to initiate trade.'],
          req: [30],
          pos: [-55, -48],
          deps: [0],
		}, {
          name: 'Nemesis',
          desc: ['Activate any hostile creature or humanoid in combat to summon an illusion of the target with 1% extra attack damage per Illusion level. The illusion relentlessly attacks the target for 30 seconds. This effect has a 180 second cooldown.'],
          req: [50],
          pos: [-82, -82],
          deps: [7, 9],
		}, {
          name: 'Imposing Presence',
          desc: ['You radiate an aura of mystical charisma that touches all within 40 feet. Any Illusion spell you cast on those affected is 25% more powerful and lasts 30% longer.'],
          req: [30],
          pos: [-10, -45],
          deps: [0],
		}, {
          name: 'Blind Guardian',
          desc: ['Activate any non-hostile creature or humanoid in combat to summon an illusion of the target. The illusion fights for the target for 60 seconds and the target won\'t flee for its duration. This effect has a 300 second cooldown.'],
          req: [90],
          pos: [-77, -164],
          deps: [8],
		}, {
          name: 'Iron Maiden',
          desc: ['Fury and Silence spells inflict 20 damage whenever the target attacks. Cannot take Lotus Charm or Paralyzing Fear.'],
          req: [35],
          pos: [-27, -40],
          deps: [9],
		}, {
          name: 'Paralyzing Fear',
          desc: ['Fear spells have 25% chance to compel their targets to remain motionless. Cannot take Lotus Charm or Iron Maiden.'],
          req: [60],
          pos: [5, -22],
          deps: [9],
		}, {
          name: 'Lotus Charm',
          desc: ['Calm and Paralysis spells have 50% chance to persist for 15 seconds when broken. Cannot take Iron Maiden or Paralyzing Fear.'],
          req: [80],
          pos: [-25, -66],
          deps: [9],
		}, {
          name: 'Shadow Weaver',
          desc: ['While undetected, activate a target to transform their shadow into a hostile phantom for 30 seconds. Foreign Minds allows you to create phantoms of undead, daedra, and automatons. '],
          req: [40],
          pos: [3, -61],
          deps: [9],
		}, {
          name: 'Wilting',
          desc: ['Those affected by a Calm or Paralysis spell or effect within the radius of Imposing Presence lose 200 points of armor and 50% magic resistance.'],
          req: [40],
          pos: [-14, -75],
          deps: [9],
		}, {
          name: 'Decoy',
          desc: ['After successfully creating a shadow phantom, you gain invisibility for 10 seconds.'],
          req: [80],
          pos: [20, -80],
          deps: [14],
		}, {
          name: 'Shadow Refuge',
          desc: ['While affected by an invisibility spell or effect, you take 35% less damage from attacks and sneaking is 15% better.'],
          req: [70],
          pos: [9, -101],
          deps: [14],
		}, {
          name: 'Wispwalk',
          desc: ['Invisibility effects last twice as long. While invisible, your movement is silent, and attacks and spells pass through you.'],
          req: [90],
          pos: [1, -157],
          deps: [17],
		}, {
          name: 'The Reaper Comes',
          desc: ['Activate any non-essential humanoid (only) under the effect of a Calm spell to send a wraith to slay the target within 15 seconds. This counts as an assault, if you get seen. This effect has a 180 second cooldown and can only affect one target at a time.'],
          req: [70],
          pos: [-5, -129],
          deps: [15],
		}, {
          name: 'Lamb to the Slaughter',
          desc: ['Activate any humanoid (only) under the effect of a Fear spell to compel the target to stand motionless for 30 seconds. Your attacks against this target ignore armor. This effect has a 180 second cooldown and can only affect one target at a time.'],
          req: [80],
          pos: [-22, -153],
          deps: [19],
		}, {
          name: 'Heavy Weighs the Tapestry',
          desc: ['Activate any humanoid (only) under the effect of a Frenzy spell to incapacitate the target with magical exhaustion for 30 seconds and drain 500 points of Magicka and Stamina. This effect has a 180 second cooldown and can only affect one target at a time.'],
          req: [90],
          pos: [-18, -183],
          deps: [20],
		}, {
          name: 'Wraithwalker',
          desc: ['After using an Activate perk (Blind Guardian, Heavy Weighs the Tapestry, Lamb to the Slaughter, Nemesis, The Reaper Comes), Illusion spells are 50% more powerful and last 50% longer for 10 seconds. The cooldown of Activate perks ends after 8 seconds out of combat.'],
          req: [100],
          pos: [-52, -198],
          deps: [10, 21],
		}, {
          name: 'Neverworld',
          desc: ['Those affected by a Calm spell or effect within the radius of Imposing Presence are enraptured by a lotus dream from which they may refuse to return to reality. When the Calm is broken due to an attack, they may become Calmed again for 30 seconds.'],
          req: [70],
          pos: [-51, -98],
          deps: [15],
		}, {
          name: 'Terror',
          desc: ['Those affected by a Fear spell or effect within the radius of Imposing Presence drop their weapon.'],
          req: [50],
          pos: [-23, -108],
          deps: [15],
		}, {
          name: 'Soulcrusher',
          desc: ['Feast upon the minds of those affected by a Fear spell or effect within the radius of Imposing Presence, absorbing 25 points of Magicka per second.'],
          req: [80],
          pos: [-53, -127],
          deps: [24],
		}, {
          name: 'Pandemonium',
          desc: ['Those affected by a Frenzy spell or effect within the radius of Imposing Presence gain 50% extra attack damage.'],
          req: [60],
          pos: [-36, -143],
          deps: [24],
		}, {
          name: 'Nightfall',
          desc: ['Those affected by a Frenzy spell or effect within the radius of Imposing Presence are consumed by battle hunger when there are no other enemies remaining, taking 40 points of damage per second.'],
          req: [90],
          pos: [-59, -159],
          deps: [26],
		}, {
          name: 'Commanding Presence',
          desc: ['In combat, you radiate an aura of mystical nobility that touches allied creatures and people within 40 feet. Those affected gain 20% extra attack damage and have 20% chance of a critical strike.'],
          req: [30],
          pos: [25, -41],
          deps: [0],
		}, {
          name: 'Second Wind',
          desc: ['Courage spells boost magicka and stamina regeneration by 100%. '],
          req: [30],
          pos: [57, -55],
          deps: [0],
		}, {
          name: 'Crown of the False King',
          desc: ['Commanding Presence also increases armor by 80 points and magic resistance by 20%.'],
          req: [30],
          pos: [42, -70],
          deps: [28],
		}, {
          name: 'Empire Builder',
          desc: ['Rally and Command spells last twice as long. Requires both Commanding Presence and Second Wind.'],
          req: [60],
          pos: [39, -112],
          deps: [28, 29],
		}, {
          name: 'Hold the Line',
          desc: ['Courage spells boost magic resistance by 50% and armor rating by 200. '],
          req: [50],
          pos: [52, -98],
          deps: [29],
		}, {
          name: 'Arise',
          desc: ['Courage spells double the amount of damage dealt with weapons and magic for 15 seconds. 60 second cooldown per target.'],
          req: [70],
          pos: [46, -129],
          deps: [32],
		}, {
          name: 'Imperious Splendor',
          desc: ['Commanding Presence and Crown of the False King are twice as powerful as long as you remain above 75% Health.'],
          req: [60],
          pos: [25, -122],
          deps: [30],
		}, {
          name: 'Spirit of War',
          desc: ['Rally and Command spells manifest spectral images of allied targets in combat. The illusions have 40% Health and fight for you until the spell wears off.'],
          req: [90],
          pos: [29, -182],
          deps: [33, 34],
		}, {
          name: 'Protect Your God',
          desc: ['When struck by a weapon, may compel a nearby ally affected by Commanding Presence to engage your attacker, dealing 250% extra attack damage for 5 seconds.'],
          req: [80],
          pos: [13, -172],
          deps: [34],
		}, {
          name: 'Dream Thief',
          desc: ['Activate sleeping victims to steal their dream, increasing the effectiveness of your Illusion spells by 50% for 3600 seconds. Chance to fail and alert the victim, based on Illusion skill.'],
          req: [20],
          pos: [68, -35],
          deps: [0],
		}, {
          name: 'Telepathy',
          desc: ['Grants the lesser power "Telepathy", which allows you to see through the eyes of another. Master of the Mind allows you to see through the eyes of undead, daedra, and automatons. '],
          req: [35],
          pos: [108, -52],
          deps: [37],
		}, {
          name: 'Puppeteer',
          desc: ['"Telepathy" allows you to take limited control over the actions of non-humanoid beings. With Master of the Mind, you can also take control of undead, daedra, and automatons. '],
          req: [80],
          pos: [135, -101],
          deps: [38],
		}, {
          name: 'Wraithbeast',
          desc: ['Phantom creatures fight at your side during combat, occasionally casting fear on their targets. If the beast dies, it will not return for 3 hours.'],
          req: [35],
          pos: [70, -66],
          deps: [37],
		}, {
          name: 'Eidolon',
          desc: ['5% chance to enter Spectral Form for 8 seconds when hit. In this form, you take no damage, deal 50% more damage, and illusion spells cost no magicka.'],
          req: [60],
          pos: [96, -98],
          deps: [40],
		}, {
          name: 'Spectral Warding',
          desc: ['For every 70 points of armor rating gained from worn armor, you also gain 5% magic resistance (max 40%).'],
          req: [70],
          pos: [129, -126],
          deps: [41],
		}, {
          name: 'Phantom Armory',
          desc: ['Invulnerable phantom weapons will aid you during combat.'],
          req: [100],
          pos: [130, -151],
          deps: [42],
		}, {
          name: 'Sea of Ghosts',
          desc: ['Your companions turn invisible whenever you do.'],
          req: [100],
          pos: [116, -165],
          deps: [42],
		}, {
          name: 'Kindred Mage',
          desc: ['Mind affecting spells and effects are 15 points stronger (or 30 points if you are the same race as the target).'],
          req: [40],
          pos: [92, -57],
          deps: [0],
		}, {
          name: 'Dream Charm',
          desc: ['Activate sleeping victims to project yourself into their dream, improving their disposition towards you. High disposition may earn you quests, discounts and gifts. Chance to fail and alert the victim, based on Illusion skill.'],
          req: [70],
          pos: [116, -90],
          deps: [45],
		}, {
          name: 'Dream Geas',
          desc: ['Activate sleeping victims to send a dream that compels them to fight at your side until released. You can only have one Dream Thrall at a time. Chance to fail and alert the victim, based on Illusion skill.'],
          req: [90],
          pos: [107, -137],
          deps: [46],
		}, {
          name: 'Fickle Fate',
          desc: ['Mind affecting spells and effects cast on others are between 1 and 40 points stronger, chosen at random.'],
          req: [50],
          pos: [69, -88],
          deps: [45],
		}, {
          name: 'Master of the Mind',
          desc: ['Mind affecting spells work on undead, daedra and automatons at half duration.'],
          req: [60],
          pos: [78, -107],
          deps: [48],
		}, {
          name: 'Waking Nightmare',
          desc: ['Fear spells manifest a Nightmare Hound that relentlessly pursues the fleeing target and have a chance to instantly kill opponents who are low on health. '],
          req: [75],
          pos: [57, -147],
          deps: [49],
		}, {
          name: 'Geas',
          desc: ['tivate a calmed target to enthrall them with a Geas for 5 minutes. Enthralled allies will follow you and fight for you; only 1 Geas can be active at a time.'],
          req: [75],
          pos: [103, -150],
          deps: [49],
		}, {
          name: 'Impotent Rage',
          desc: ['Fury spells cause targets to deal 50% more attack damage. Fury and Silence spells cause the target to deal 35% reduced attack damage to the caster.'],
          req: [75],
          pos: [79, -178],
          deps: [50, 51],
		}, {
          name: 'Psionic',
          desc: ['Choose an illusion magic mastery: Magnetic Presence, Aura of Doom, or Veil of Whispers.'],
          req: [1000],
          pos: [78, -150],
          deps: [50, 51, 52],
		}, {
          name: 'Enervating Terror',
          desc: ['Fear spells reduce armor by 200 and slow the target by 50%, with a small chance of causing paralysis. Cannot take this with either Hypnotic Gaze or Consuming Rage(Maelstrom).'],
          req: [100],
          pos: [70, -139],
          deps: [53],
		}, {
          name: 'Hypnotic Gaze',
          desc: ['Calmed opponents will ignore crimes and attacks against allies. Cannot take this with either Enervating Terror or Consuming Rage(Maelstrom).'],
          req: [100],
          pos: [87, -133],
          deps: [53],
		}, {
          name: 'Maelstrom',
          desc: ['Frenzy spells drain the target\'s health while they are not engaged in active combat. When an opponent affected by a Frenzy spell is slain, their killer also becomes enraged. Cannot take this with either Hypnotic Gaze or Enervating Terror.'],
          req: [100],
          pos: [75, -125],
          deps: [53],
        }
      ]
    }, {
      name: 'Conjuration',
      cname: 'conjuration',
      perks: [
        {
          name: 'Novice Conjuration',
          desc: ['Cast Novice level Conjuration spells for half magicka.'],
          pos: [0, 0],
          id: ['000F2CA7']
        }, {
          name: 'Summoner',
          levels: 2,
          desc: ['Can summon atronachs or raise undead twice as far away.', 'Can summon atronachs or raise undead three times as far away.'],
          req: [30, 70],
          pos: [-72, -70],
          deps: [0],
          id: ['00105F30', '00105F31']
        }, {
          name: 'Conjuration Dual Casting',
          desc: ['Dual casting a Conjuration spell overcharges the spell, allowing it to last longer.'],
          req: [20],
          pos: [-30, -54],
          deps: [0],
          id: ['000153CE']
        }, {
          name: 'Necromancy',
          desc: ['Greater duration for reanimated undead.'],
          req: [40],
          pos: [-44, -133],
          deps: [0],
          id: ['000581DD']
        }, {
          name: 'Mystic Binding',
          desc: ['Bound weapons do more damage.'],
          req: [20],
          pos: [9, -55],
          deps: [0],
          id: ['000640B3']
        }, {
          name: 'Apprentice Conjuration',
          desc: ['Cast Apprentice level Conjuration spells for half magicka.'],
          req: [25],
          pos: [45, -70],
          deps: [0],
          id: ['000C44BB']
        }, {
          name: 'Atromancy',
          desc: ['Double duration for conjured Atronachs.'],
          req: [40],
          pos: [-80, -134],
          deps: [1],
          id: ['000CB419']
        }, {
          name: 'Elemental Potency',
          desc: ['Conjured Atronachs are 50% more powerful.'],
          req: [80],
          pos: [-75, -161],
          deps: [6],
          id: ['000CB41A']
        }, {
          name: 'Dark Souls',
          desc: ['Reanimated undead have 100 points more health.'],
          req: [70],
          pos: [-45, -162],
          deps: [3],
          id: ['000581DE']
        }, {
          name: 'Twin Souls',
          desc: ['You can have two atronachs or reanimated zombies.'],
          req: [100],
          pos: [-39, -175],
          captionOffset: [0, -13],
          deps: [7, 8],
          id: ['000D5F1C']
        }, {
          name: 'Soul Stealer',
          desc: ['Bound weapons cast Soul Trap on targets.'],
          req: [30],
          pos: [15, -123],
          deps: [4],
          id: ['000D799E']
        }, {
          name: 'Oblivion Binding',
          desc: ['Bound weapons will banish summoned creatures and turn raised ones.'],
          req: [50],
          pos: [14, -143],
          captionOffset: [0, -13],
          deps: [10],
          id: ['000D799C']
        }, {
          name: 'Adept Conjuration',
          desc: ['Cast Adept level Conjuration spells for half magicka.'],
          req: [50],
          pos: [52, -109],
          deps: [5],
          id: ['000C44BC']
        }, {
          name: 'Expert Conjuration',
          desc: ['Cast Expert level Conjuration spells for half magicka.'],
          req: [75],
          pos: [45, -141],
          deps: [12],
          id: ['000C44BD']
        }, {
          name: 'Master Conjuration',
          desc: ['Cast Master level Conjuration spells for half magicka.'],
          req: [100],
          pos: [19, -175],
          captionOffset: [0, -13],
          deps: [13],
          id: ['000C44BE']
        }
      ]
    }, {
      name: 'Destruction',
      cname: 'destruction',
      perks: [
        {
          name: 'Novice Destruction',
          desc: ['Cast Novice level Destruction spells for half magicka.'],
          pos: [0, 0],
          id: ['000F2CA8']
        }, {
          name: 'Destruction Dual Casting',
          desc: ['Dual casting a Destruction spell overcharges the effects into an even more powerful version.'],
          req: [20],
          pos: [64, -21],
          deps: [0],
          id: ['000153CF']
        }, {
          name: 'Impact',
          desc: ['Most destruction spells will stagger an opponent when dual cast.'],
          req: [40],
          pos: [79, -56],
          deps: [1],
          id: ['000153D2']
        }, {
          name: 'Augmented Flames',
          levels: 2,
          desc: ['Fire spells do 25% more damage.', 'Fire spells do 50% more damage.'],
          req: [30, 60],
          pos: [-44, -72],
          deps: [0],
          id: ['000581E7', '0010FCF8']
        }, {
          name: 'Intense Flames',
          desc: ['Fire damage causes targets to flee if their health is low.'],
          req: [50],
          pos: [-50, -111],
          deps: [3],
          id: ['000F392E']
        }, {
          name: 'Augmented Frost',
          levels: 2,
          desc: ['Frost spells do 25% more damage.', 'Frost spells do 50% more damage.'],
          req: [30, 60],
          pos: [-12, -85],
          deps: [0],
          id: ['000581EA', '0010FCF9']
        }, {
          name: 'Deep Freeze',
          desc: ['Frost damage paralyzes targets if their health is low.'],
          req: [60],
          pos: [-16, -133],
          deps: [5],
          id: ['000F3933']
        }, {
          name: 'Augmented Shock',
          levels: 2,
          desc: ['Shock spells do 25% more damage.', 'Shock spells do 50% more damage.'],
          req: [30, 60],
          pos: [13, -86],
          captionOffset: [0, -13],
          deps: [0],
          id: ['00058200', '0010FCFA']
        }, {
          name: 'Disintegrate',
          desc: ['Shock damage disintegrates targets if their health is low.'],
          req: [70],
          pos: [13, -143],
          deps: [7],
          id: ['000F3F0E']
        }, {
          name: 'Apprentice Destruction',
          desc: ['Cast Apprentice level Destruction spells for half magicka.'],
          req: [25],
          pos: [42, -55],
          deps: [0],
          id: ['000C44BF']
        }, {
          name: 'Rune Master',
          desc: ['Can place runes five times farther away.'],
          req: [40],
          pos: [67, -87],
          deps: [9],
          id: ['00105F32']
		}, {
          name: 'Adept Destruction',
          desc: ['Cast Adept level Destruction spells for half magicka.'],
          req: [50],
          pos: [38, -110],
          deps: [9],
          id: ['000C44C0']
        }, {
          name: 'Expert Destruction',
          desc: ['Cast Expert level Destruction spells for half magicka.'],
          req: [75],
          pos: [52, -141],
          deps: [11],
          id: ['000C44C1']
        }, {
          name: 'Master Destruction',
          desc: ['Cast Master level Destruction spells for half magicka.'],
          req: [100],
          pos: [51, -186],
          deps: [12],
          id: ['000C44C2']
        }
      ]
    }, {
      name: 'Restoration',
      cname: 'restoration',
      perks: [
        {
          name: 'Novice Restoration',
          desc: ['Cast Novice level Restoration spells for half magicka.'],
          pos: [0, 0],
          id: ['000F2CAA']
        }, {
          name: 'Respite',
          desc: ['Healing spells also restore Stamina.'],
          req: [40],
          pos: [-117, -70],
          deps: [0],
          id: ['000581F9']
        }, {
          name: 'Regeneration',
          desc: ['Healing spells cure 50% more.'],
          req: [20],
          pos: [-53, -58],
          deps: [0],
          id: ['000581F8']
        }, {
          name: 'Necromage',
          desc: ['All spells are more effective against undead.'],
          req: [70],
          pos: [-103, -124],
          deps: [2],
          id: ['000581E4']
        }, {
          name: 'Ward Absorb',
          desc: ['Wards recharge your magicka when hit with spells.'],
          req: [60],
          pos: [-46, -123],
          deps: [0],
          id: ['00068BCC']
        }, {
          name: 'Apprentice Restoration',
          desc: ['Cast Apprentice level Restoration spells for half magicka.'],
          req: [25],
          pos: [10, -55],
          deps: [0],
          id: ['000C44C7']
        }, {
          name: 'Adept Restoration',
          desc: ['Cast Adept level Restoration spells for half magicka.'],
          req: [50],
          pos: [-7, -113],
          deps: [5],
          id: ['000C44C8']
        }, {
          name: 'Expert Restoration',
          desc: ['Cast Expert level Restoration spells for half magicka.'],
          req: [75],
          pos: [-3, -161],
          deps: [6],
          id: ['000C44C9']
        }, {
          name: 'Master Restoration',
          desc: ['Cast Master level Restoration spells for half magicka.'],
          req: [100],
          pos: [-29, -177],
          deps: [7],
          id: ['000C44CA']
        }, {
          name: 'Recovery',
          levels: 2,
          desc: ['Magicka regenerates 25% faster.', 'Magicka regenerates 50% faster.'],
          req: [30, 60],
          pos: [79, -71],
          deps: [0],
          id: ['000581F4', '000581F5']
        }, {
          name: 'Avoid Death',
          desc: ['Once a day, heals 250 points automatically if you fall below 10% health.'],
          req: [90],
          pos: [100, -110],
          deps: [9],
          id: ['000A3F64']
        }, {
          name: 'Restoration Dual Casting',
          desc: ['Dual casting a Restoration spell overcharges the effects into an even more powerful version.'],
          req: [20],
          pos: [57, -40],
          deps: [0],
          id: ['000153D1']
        }
      ]
    }, {
      name: 'Alteration',
      cname: 'alteration',
      perks: [
        {
          name: 'Novice Alteration',
          desc: ['Cast Novice level Alteration spells for half magicka.'],
          pos: [0, 0],
          id: ['000F2CA6']
        }, {
          name: 'Alteration Dual Casting',
          desc: ['Dual casting an Alteration spell overcharges the effects into an even more powerful version.'],
          req: [20],
          pos: [-32, -56],
          deps: [0],
          id: ['000153CD']
        }, {
          name: 'Apprentice Alteration',
          desc: ['Cast Apprentice level Alteration spells for half magicka.'],
          req: [25],
          pos: [8, -72],
          deps: [0],
          id: ['000C44B7']
        }, {
          name: 'Mage Armor',
          levels: 3,
          desc: ['Protection spells like Stoneflesh are twice as strong if not wearing armor.', 'Protection spells like Stoneflesh are three times as strong if not wearing armor.', 'Protection spells like Stoneflesh are four times as strong if not wearing armor.'],
          req: [30, 50, 70],
          pos: [-28, -124],
          deps: [2],
          id: ['000D7999', '000D799A', '000D799B']
        }, {
          name: 'Magic Resistance',
          levels: 3,
          desc: ["Blocks 10% of a spell's effects.", "Blocks 15% of a spell's effects.", "Blocks 20% of a spell's effects."],
          req: [30, 50, 70],
          pos: [50, -124],
          deps: [2],
          id: ['00053128', '00053129', '0005312A']
        }, {
          name: 'Adept Alteration',
          desc: ['Cast Adept level Alteration spells for half magicka.'],
          req: [50],
          pos: [8, -135],
          deps: [2],
          id: ['000C44B8']
        }, {
          name: 'Stability',
          desc: ['Alteration spells have greater duration.'],
          req: [70],
          pos: [-18, -162],
          deps: [5],
          id: ['000581FC']
        }, {
          name: 'Expert Alteration',
          desc: ['Cast Expert level Alteration spells for half magicka.'],
          req: [75],
          pos: [30, -162],
          deps: [5],
          id: ['000C44B9']
        }, {
          name: 'Atronach',
          desc: ['Absorb 30% of the magicka of any spells that hit you.'],
          req: [100],
          pos: [-41, -198],
          deps: [7],
          id: ['000581F7']
        }, {
          name: 'Master Alteration',
          desc: ['Cast Master level Alteration spells for half magicka.'],
          req: [100],
          pos: [70, -198],
          deps: [7],
          id: ['000C44BA']
        }
      ]
    }, {
      name: 'Enchanting',
      cname: 'enchanting',
      perks: [
        {
          name: 'Enchanter',
          levels: 5,
          desc: ['New enchantments are 20% stronger.', 'New enchantments are 40% stronger.', 'New enchantments are 60% stronger.', 'New enchantments are 80% stronger.', 'New enchantments are 100% stronger.'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['000BEE97', '000C367C', '000C367D', '000C367E', '000C367F']
        }, {
          name: 'Fire Enchanter',
          desc: ['Fire enchantments on weapons and armor are 25% stronger.'],
          req: [30],
          pos: [-24, -69],
          deps: [0],
          id: ['00058F80']
        }, {
          name: 'Insightful Enchanter',
          desc: ['Skill enchantments on armor are 25% stronger.'],
          req: [50],
          pos: [22, -69],
          deps: [0],
          id: ['00058F7E']
        }, {
          name: 'Soul Squeezer',
          desc: ['Soul gems provide extra magicka for recharging.'],
          req: [20],
          pos: [75, -69],
          deps: [0],
          id: ['00058F7C']
        }, {
          name: 'Soul Siphon',
          desc: ["Death blows to creatures, but not people, trap 5% of the victim's soul, recharging the weapon."],
          req: [40],
          pos: [64, -141],
          captionOffset: [0, -13],
          deps: [3],
          id: ['00108A44']
        }, {
          name: 'Frost Enchanter',
          desc: ['Frost enchantments on weapons and armor are 25% stronger.'],
          req: [40],
          pos: [-18, -108],
          deps: [1],
          id: ['00058F81']
        }, {
          name: 'Storm Enchanter',
          desc: ['Shock enchantments on weapons and armor are 25% stronger.'],
          req: [50],
          pos: [-1, -139],
          deps: [5],
          id: ['00058F82']
        }, {
          name: 'Corpus Enchanter',
          desc: ['Health, magicka, and stamina enchantments on armor are 25% stronger.'],
          req: [70],
          pos: [43, -108],
          deps: [2],
          id: ['00058F7D']
        }, {
          name: 'Extra Effect',
          desc: ['Can put two enchantments on the same item.'],
          req: [100],
          pos: [37, -166],
          captionOffset: [0, -13],
          deps: [6, 7],
          id: ['00058F7F']
        }
      ]
    }, {
      name: 'Smithing',
      cname: 'smithing',
      perks: [
        {
          name: 'Steel Smithing',
          desc: ['Can create Steel armor and weapons at forges, and improve them twice as much.'],
          pos: [0, 0],
          id: ['000CB40D']
        }, {
          name: 'Elven Smithing',
          desc: ['Can create Elven armor and weapons at forges, and improve them twice as much.'],
          req: [30],
          pos: [-55, -46],
          deps: [0],
          id: ['000CB40F']
        }, {
          name: 'Arcane Blacksmith',
          desc: ['You can improve magical weapons and armor.'],
          req: [60],
          pos: [4, -45],
          deps: [0],
          id: ['0005218E']
        }, {
          name: 'Dwarven Smithing',
          desc: ['Can create Dwarven armor and weapons at forges, and improve them twice as much.'],
          req: [30],
          pos: [42, -33],
          deps: [0],
          id: ['000CB40E']
        }, {
          name: 'Advanced Armors',
          desc: ['Can create Scaled and Plate armor at forges, and improve them twice as much.'],
          req: [50],
          pos: [-49, -57],
          captionOffset: [0, -13],
          deps: [1],
          id: ['000CB414']
        }, {
          name: 'Glass Smithing',
          desc: ['Can create Glass armor and weapons at forges, and improve them twice as much.'],
          req: [70],
          pos: [-10, -70],
          captionOffset: [0, -13],
          deps: [4],
          id: ['000CB411']
        }, {
          name: 'Orcish Smithing',
          desc: ['Can create Orcish armor and weapons at forges, and improve them twice as much.'],
          req: [50],
          pos: [81, -51],
          deps: [3],
          id: ['000CB410']
        }, {
          name: 'Ebony Smithing',
          desc: ['Can create Ebony armor and weapons at forges, and improve them twice as much.'],
          req: [80],
          pos: [114, -50],
          captionOffset: [0, -13],
          deps: [6],
          id: ['000CB412']
        }, {
          name: 'Daedric Smithing',
          desc: ['Can create Daedric armor and weapons at forges, and improve them twice as much.'],
          req: [90],
          pos: [59, -66],
          captionOffset: [0, -13],
          deps: [7],
          id: ['000CB413']
        }, {
          name: 'Dragon Armor',
          desc: ['Can create Dragon armor at forges, and improve them twice as much.'],
          req: [100],
          pos: [27, -71],
          deps: [5, 8],
          id: ['00052190']
        }
      ]
    }, {
      name: 'Heavy Armor',
      cname: 'heavyarmor',
      perks: [
        {
          name: 'Juggernaut',
          levels: 5,
          desc: ['Increases armor rating for Heavy Armor by 20%.', 'Increases armor rating for Heavy Armor by 40%.', 'Increases armor rating for Heavy Armor by 60%.', 'Increases armor rating for Heavy Armor by 80%.', 'Increases armor rating for Heavy Armor by 100%.'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['000BCD2A', '0007935E', '00079361', '00079362', '00079374']
        }, {
          name: 'Fists of Steel',
          desc: ['Unarmed attacks with Heavy Armor gauntlets do their armor rating in extra damage.'],
          req: [30],
          pos: [-55, -56],
          deps: [0],
          id: ['00058F6E']
        }, {
          name: 'Cushioned',
          desc: ['Half damage from falling if wearing all Heavy Armor: head, chest, hands, feet.'],
          req: [50],
          pos: [-85, -111],
          deps: [1],
          id: ['000BCD2B']
        }, {
          name: 'Conditioning',
          desc: ["Heavy Armor weighs nothing and doesn't slow you down when worn."],
          req: [70],
          pos: [-81, -170],
          deps: [2],
          id: ['00058F6D']
        }, {
          name: 'Well Fitted',
          desc: ['25% Armor bonus if wearing all Heavy Armor: head, chest, hands, feet.'],
          req: [30],
          pos: [51, -56],
          deps: [0],
          id: ['00058F6F']
        }, {
          name: 'Tower of Strength',
          desc: ['50% less stagger when wearing only Heavy Armor.'],
          req: [50],
          pos: [70, -111],
          deps: [4],
          id: ['00058F6C']
        }, {
          name: 'Matching Set',
          desc: ['Additional 25% Armor bonus if wearing a matched set of Heavy Armor.'],
          req: [70],
          pos: [82, -143],
          deps: [5],
          id: ['00107832']
        }, {
          name: 'Reflect Blows',
          desc: ['10% chance to reflect melee damage back to the enemy while wearing all Heavy Armor: head, chest, hands, feet.'],
          req: [100],
          pos: [72, -198],
          deps: [6],
          id: ['00105F33']
        }
      ]
    }, {
      name: 'Block',
      cname: 'block',
      perks: [
        {
          name: 'Shield Wall',
          levels: 5,
          desc: ['Blocking is 20% more effective.', 'Blocking is 25% more effective.', 'Blocking is 30% more effective.', 'Blocking is 35% more effective.', 'Blocking is 40% more effective.'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['000BCCAE', '00079355', '00079356', '00079357', '00079358']
        }, {
          name: 'Deflect Arrows',
          desc: ['Arrows that hit the shield do no damage.'],
          req: [30],
          pos: [-103, -53],
          deps: [0],
          id: ['00058F68']
        }, {
          name: 'Quick Reflexes',
          desc: ["Time slows down if you are blocking during an enemy's power attack."],
          req: [30],
          pos: [-24, -70],
          captionOffset: [0, -13],
          deps: [0],
          id: ['000D8C33']
        }, {
          name: 'Power Bash',
          desc: ['Able to do a power bash.'],
          req: [30],
          pos: [83, -54],
          deps: [0],
          id: ['00058F67']
        }, {
          name: 'Elemental Protection',
          desc: ['Blocking with a shield reduces incoming fire, frost, and shock damage by 50%.'],
          req: [50],
          pos: [-72, -131],
          deps: [1],
          id: ['00058F69']
        }, {
          name: 'Block Runner',
          desc: ['Able to move faster with a shield raised.'],
          req: [70],
          pos: [-43, -149],
          captionOffset: [0, -13],
          deps: [4],
          id: ['00106253']
        }, {
          name: 'Deadly Bash',
          desc: ['Bashing does five times more damage.'],
          req: [50],
          pos: [79, -109],
          deps: [3],
          id: ['0005F594']
        }, {
          name: 'Disarming Bash',
          desc: ['Chance to disarm when power bashing.'],
          req: [70],
          pos: [60, -151],
          deps: [6],
          id: ['00058F66']
        }, {
          name: 'Shield Charge',
          desc: ['Sprinting with a shield raised knocks down most targets.'],
          req: [100],
          pos: [1, -167],
          captionOffset: [0, -13],
          deps: [7, 5],
          id: ['00058F6A']
        }
      ]
    }, {
      name: 'Two-Handed',
      cname: 'twohanded',
      perks: [
        {
          name: 'Barbarian',
          levels: 5,
          desc: ['Two-Handed weapons do 20% more damage.', 'Two-Handed weapons do 40% more damage.', 'Two-Handed weapons do 60% more damage.', 'Two-Handed weapons do 80% more damage.', 'Two-Handed weapons do 100% more damage.'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['000BABE8', '00079346', '00079347', '00079348', '00079349']
        }, {
          name: 'Limbsplitter',
          levels: 3,
          desc: ['Attacks with battle axes cause extra bleeding damage.', 'Attacks with battle axes cause extra bleeding damage.', 'Attacks with battle axes cause extra bleeding damage.'],
          req: [30, 60, 90],
          pos: [-41, -90],
          deps: [0],
          id: ['000C5C05', '000C5C06', '000C5C07']
        }, {
          name: "Champion's Stance",
          desc: ['Power attacks with two-handed weapons cost 25% less stamina.'],
          req: [20],
          pos: [3, -60],
          deps: [0],
          id: ['00052D51']
        }, {
          name: 'Deep Wounds',
          levels: 3,
          desc: ['Attacks with greatsword have a 10% chance of doing critical damage.', 'Attacks with greatsword have a 15% chance of doing critical damage.', 'Attacks with greatsword have a 20% chance of doing critical damage.'],
          req: [30, 60, 90],
          pos: [43, -91],
          deps: [0],
          id: ['0003AF83', '000C1E94', '000C1E95']
        }, {
          name: 'Skullcrusher',
          levels: 3,
          desc: ['Attacks with warhammers ignore 25% of armor.', 'Attacks with warhammers ignore 50% of armor.', 'Attacks with warhammers ignore 75% of armor.'],
          req: [30, 60, 90],
          pos: [74, -91],
          captionOffset: [0, -13],
          deps: [0],
          id: ['0003AF84', '000C1E96', '000C1E97']
        }, {
          name: 'Great Critical Charge',
          desc: ['Can do a two-handed power attack while sprinting that does double critical damage.'],
          req: [50],
          pos: [-13, -126],
          deps: [2],
          id: ['000CB407']
        }, {
          name: 'Devastating Blow',
          desc: ['Standing power attacks do 25% bonus damage with a chance to decapitate your enemies.'],
          req: [50],
          pos: [17, -127],
          captionOffset: [0, -13],
          deps: [2],
          id: ['00052D52']
        }, {
          name: 'Sweep',
          desc: ['Sideways power attacks with two-handed weapons hit all targets in front of you.'],
          req: [70],
          pos: [7, -189],
          deps: [5, 6],
          id: ['0003AF9E']
        }, {
          name: 'Warmaster',
          desc: ['Backwards power attack has a 25% chance to paralyze the target.'],
          req: [100],
          pos: [8, -237],
          captionOffset: [0, -13],
          deps: [7],
          id: ['0003AFA7']
        }
      ]
    }, {
      name: 'One-Handed',
      cname: 'onehanded',
      perks: [
        {
          name: 'Armsman',
          levels: 5,
          desc: ['One-Handed weapons do 20% more damage.', 'One-Handed weapons do 40% more damage.', 'One-Handed weapons do 60% more damage.', 'One-Handed weapons do 80% more damage.', 'One-Handed weapons do 100% more damage.'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['000BABE4', '00079343', '00079342', '00079344', '00079345']
        }, {
          name: 'Hack and Slash',
          levels: 3,
          desc: ['Attacks with war axes cause extra bleeding damage.', 'Attacks with war axes cause extra bleeding damage.', 'Attacks with war axes cause extra bleeding damage.'],
          req: [30, 60, 90],
          pos: [-45, -86],
          deps: [0],
          id: ['0003FFFA', '000C3678', '000C3679']
        }, {
          name: 'Fighting Stance',
          desc: ['Power attacks with one-handed-weapons cost 25% less stamina.'],
          req: [20],
          pos: [0, -56],
          deps: [0],
          id: ['00052D50']
        }, {
          name: 'Bone Breaker',
          levels: 3,
          desc: ['Attacks with maces ignore 25% of armor.', 'Attacks with maces ignore 50% of armor.', 'Attacks with maces ignore 75% of armor.'],
          req: [30, 60, 90],
          pos: [23, -86],
          deps: [0],
          id: ['0005F592', '000C1E92', '000C1E93']
        }, {
          name: 'Bladesman',
          levels: 3,
          desc: ['Attacks with swords have a 10% chance of doing critical damage.', 'Attacks with swords have a 15% chance of doing critical damage.', 'Attacks with swords have a 20% chance of doing critical damage.'],
          req: [30, 60, 90],
          pos: [46, -86],
          captionOffset: [0, -13],
          deps: [0],
          id: ['0005F56F', '000C1E90', '000C1E91']
        }, {
          name: 'Dual Flurry',
          levels: 2,
          desc: ['Dual wielding attacks are 20% faster.', 'Dual wielding attacks are 35% faster.'],
          req: [30, 50],
          pos: [88, -40],
          deps: [0],
          id: ['00106256', '00106257']
        }, {
          name: 'Dual Savagery',
          desc: ['Dual wielding power attacks do 50% bonus damage.'],
          req: [70],
          pos: [62, -163],
          captionOffset: [0, -13],
          deps: [5],
          id: ['00106258']
        }, {
          name: 'Savage Strike',
          desc: ['Standing power attacks do 25% bonus damage with a chance to decapitate your enemies.'],
          req: [50],
          pos: [-20, -122],
          deps: [2],
          id: ['0003AF81']
        }, {
          name: 'Critical Charge',
          desc: ['Can do a one-handed power attack while sprinting that does double critical damage.'],
          req: [50],
          pos: [14, -122],
          captionOffset: [0, -13],
          deps: [2],
          id: ['000CB406']
        }, {
          name: 'Paralyzing Strike',
          desc: ['Backwards power attack has a 25% chance to paralyze the target.'],
          req: [100],
          pos: [2, -216],
          captionOffset: [0, -13],
          deps: [7, 8],
          id: ['0003AFA6']
        }
      ]
    }, {
      name: 'Archery',
      cname: 'marksman',
      perks: [
        {
          name: 'Overdraw',
          levels: 5,
          desc: ['Bows do 20% more damage.', 'Bows do 40% more damage.', 'Bows do 60% more damage.', 'Bows do 80% more damage.', 'Bows do 100% more damage.'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['000BABED', '0007934A', '0007934B', '0007934D', '00079354']
        }, {
          name: 'Eagle Eye',
          desc: ['Pressing Block while aiming will zoom in your view.'],
          req: [30],
          pos: [-74, -54],
          deps: [0],
          id: ['00058F61']
        }, {
          name: 'Critical Shot',
          levels: 3,
          desc: ['10% chance of a critical hit that does extra damage.', '15% chance of a critical hit that does extra damage.', '20% chance of a critical hit that does extra damage.'],
          req: [30, 60, 90],
          pos: [-15, -69],
          deps: [0],
          id: ['00105F1C', '00105F1E', '00105F1F']
        }, {
          name: 'Steady Hand',
          levels: 2,
          desc: ['Zooming in with a bow slows time by 25%.', 'Zooming in with a bow slows time by 50%.'],
          req: [40, 60],
          pos: [-49, -68],
          deps: [1],
          id: ['00103ADA', '00103ADB']
        }, {
          name: 'Power Shot',
          desc: ['Arrows stagger all but the largest opponents 50% of the time.'],
          req: [50],
          pos: [-92, -97],
          deps: [1],
          id: ['00058F62']
        }, {
          name: 'Quick Shot',
          desc: ['Can draw a bow 30% faster.'],
          req: [70],
          pos: [-91, -151],
          deps: [4],
          id: ['00105F19']
        }, {
          name: "Hunter's Discipline",
          desc: ['Recover twice as many arrows from dead bodies.'],
          req: [50],
          pos: [-39, -121],
          deps: [2],
          id: ['00051B12']
        }, {
          name: 'Ranger',
          desc: ['Able to move faster with a drawn bow.'],
          req: [60],
          pos: [-47, -141],
          deps: [6],
          id: ['00058F63']
        }, {
          name: 'Bullseye',
          desc: ['15% chance of paralyzing the target for a few seconds.'],
          req: [100],
          pos: [-65, -166],
          deps: [5, 7],
          id: ['00058F64']
        }
      ]
    }, {
      name: 'Light Armor',
      cname: 'lightarmor',
      perks: [
        {
          name: 'Agile Defender',
          levels: 5,
          desc: ['Increase armor rating for Light armor by 20%.', 'Increase armor rating for Light armor by 40%.', 'Increase armor rating for Light armor by 60%.', 'Increase armor rating for Light armor by 80%.', 'Increase armor rating for Light armor by 100%.'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['000BE123', '00079376', '00079389', '00079391', '00079392']
        }, {
          name: 'Custom Fit',
          desc: ['25% Armor bonus if wearing all Light Armor: head, chest, hands, feet.'],
          req: [30],
          pos: [-15, -62],
          deps: [0],
          id: ['00051B1B']
        }, {
          name: 'Unhindered',
          desc: ["Light Armor weighs nothing and doesn't slow you down when worn."],
          req: [50],
          pos: [-47, -110],
          deps: [1],
          id: ['00051B1C']
        }, {
          name: 'Matching Set',
          desc: ['Additional 25% Armor bonus if wearing a matched set of Light Armor.'],
          req: [70],
          pos: [8, -153],
          deps: [1],
          id: ['00051B17']
        }, {
          name: 'Wind Walker',
          desc: ['Stamina regenerates 50% faster in all Light Armor: head, chest, hands, feet.'],
          req: [60],
          pos: [-42, -143],
          deps: [2],
          id: ['00105F22']
        }, {
          name: 'Deft Movement',
          desc: ['10% chance of avoiding all damage from a melee attack while wearing all Light Armor: head, chest, hands, feet.'],
          req: [100],
          pos: [-15, -170],
          captionOffset: [0, -13],
          deps: [3, 4],
          id: ['00107831']
        }
      ]
    }, {
      name: 'Sneak',
      cname: 'sneak',
      perks: [
        {
          name: 'Stealth',
          levels: 5,
          desc: ['You are 20% harder to detect when sneaking.', 'You are 25% harder to detect when sneaking.', 'You are 30% harder to detect when sneaking.', 'You are 35% harder to detect when sneaking.', 'You are 40% harder to detect when sneaking.'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['000BE126', '000C07C6', '000C07C7', '000C07C8', '000C07C9']
        }, {
          name: 'Backstab',
          desc: ['Sneak attacks with one-handed weapons now do six times damage.'],
          req: [30],
          pos: [43, -55],
          deps: [0],
          id: ['00058210']
        }, {
          name: 'Deadly Aim',
          desc: ['Sneak attacks with bows now do three times damage.'],
          req: [40],
          pos: [48, -112],
          deps: [1],
          id: ['001036F0']
        }, {
          name: "Assassin's Blade",
          desc: ['Sneak attacks with daggers now do a total of fifteen times normal damage.'],
          req: [50],
          pos: [27, -121],
          deps: [2],
          id: ['00058211']
        }, {
          name: 'Muffled Movement',
          desc: ['Noise from armor is reduced 50%.'],
          req: [30],
          pos: [-54, -56],
          deps: [0],
          id: ['00058213']
        }, {
          name: 'Light Foot',
          desc: ["You won't trigger pressure plates."],
          req: [40],
          pos: [-32, -113],
          deps: [4],
          id: ['0005820C']
        }, {
          name: 'Silent Roll',
          desc: ['Sprinting while sneaking executes a silent forward roll.'],
          req: [50],
          pos: [-9, -134],
          deps: [5],
          id: ['00105F23']
        }, {
          name: 'Silence',
          desc: ['Walking and running does not affect detection.'],
          req: [70],
          pos: [21, -162],
          deps: [6],
          id: ['00105F24']
        }, {
          name: 'Shadow Warrior',
          desc: ['Crouching stops combat for a moment and forces distant opponents to search for a target.'],
          req: [100],
          pos: [68, -176],
          deps: [7],
          id: ['00058214']
        }
      ]
    }, {
      name: 'Lockpicking',
      cname: 'lockpicking',
      perks: [
        {
          name: 'Novice Locks',
          desc: ['Novice locks are much easier to pick.'],
          pos: [0, 0],
          id: ['000F392A']
        }, {
          name: 'Apprentice Locks',
          desc: ['Apprentice locks are much easier to pick.'],
          req: [25],
          pos: [31, -57],
          deps: [0],
          id: ['000BE125']
        }, {
          name: 'Quick Hands',
          desc: ['Able to pick locks without being noticed.'],
          req: [40],
          pos: [-7, -87],
          deps: [1],
          id: ['00106259']
        }, {
          name: 'Wax Key',
          desc: ["Automatically gives you a copy of a picked lock's key if it has one."],
          req: [50],
          pos: [-45, -106],
          deps: [2],
          id: ['00107830']
        }, {
          name: 'Adept Locks',
          desc: ['Adept locks are much easier to pick.'],
          req: [50],
          pos: [55, -111],
          deps: [1],
          id: ['000C3680']
        }, {
          name: 'Golden Touch',
          desc: ['Find more gold in chests.'],
          req: [60],
          pos: [13, -124],
          deps: [4],
          id: ['0005820A']
        }, {
          name: 'Treasure Hunter',
          desc: ['50% greater chance of finding special treasure.'],
          req: [70],
          pos: [-15, -145],
          deps: [5],
          id: ['00105F26']
        }, {
          name: 'Expert Locks',
          desc: ['Expert locks are much easier to pick.'],
          req: [75],
          pos: [59, -143],
          deps: [4],
          id: ['000C3681']
        }, {
          name: 'Locksmith',
          desc: ['Pick starts close to the lock opening position.'],
          req: [80],
          pos: [22, -162],
          deps: [7],
          id: ['00058208']
        }, {
          name: 'Unbreakable',
          desc: ['Lockpicks never break.'],
          req: [100],
          pos: [0, -177],
          deps: [8],
          id: ['00058209']
        }, {
          name: 'Master Locks',
          desc: ['Master locks are much easier to pick.'],
          req: [100],
          pos: [67, -193],
          deps: [7],
          id: ['000C3682']
        }
      ]
    }, {
      name: 'Pickpocket',
      cname: 'pickpocket',
      perks: [
        {
          name: 'Light Fingers',
          levels: 5,
          desc: ['Pickpocketing bonus of 20%. Item weight and value reduce pickpocketing odds.', 'Pickpocketing bonus of 40%. Item weight and value reduce pickpocketing odds.', 'Pickpocketing bonus of 60%. Item weight and value reduce pickpocketing odds.', 'Pickpocketing bonus of 80%. Item weight and value reduce pickpocketing odds.', 'Pickpocketing bonus of 100%. Item weight and value reduce pickpocketing odds.'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['000BE124', '00018E6A', '00018E6B', '00018E6C', '00018E6D']
        }, {
          name: 'Night Thief',
          desc: ['+25% chance to pickpocket if the target is asleep.'],
          req: [30],
          pos: [25, -50],
          deps: [0],
          id: ['00058202']
        }, {
          name: 'Poisoned',
          desc: ['Silently harm enemies by placing poisons in their pockets.'],
          req: [40],
          pos: [13, -106],
          deps: [1],
          id: ['00105F28']
        }, {
          name: 'Cutpurse',
          desc: ['Pickpocketing gold is 50% easier.'],
          req: [40],
          pos: [44, -107],
          deps: [1],
          id: ['00058204']
        }, {
          name: 'Extra Pockets',
          desc: ['Carrying capacity is increased by 100.'],
          req: [50],
          pos: [72, -105],
          deps: [1],
          id: ['00096590']
        }, {
          name: 'Keymaster',
          desc: ['Pickpocketing keys almost always works.'],
          req: [60],
          pos: [21, -128],
          deps: [3],
          id: ['000D79A0']
        }, {
          name: 'Misdirection',
          desc: ['Can pickpocket equipped weapons.'],
          req: [70],
          pos: [55, -157],
          deps: [3],
          id: ['00058201']
        }, {
          name: 'Perfect Touch',
          desc: ['Can pickpocket equipped items.'],
          req: [100],
          pos: [72, -162],
          deps: [6],
          id: ['00058205']
        }
      ]
    }, {
      name: 'Speech',
      cname: 'speechcraft',
      perks: [
        {
          name: 'Haggling',
          levels: 5,
          desc: ['Buying and selling prices are 10% better.', 'Buying and selling prices are 15% better.', 'Buying and selling prices are 20% better.', 'Buying and selling prices are 25% better.', 'Buying and selling prices are 30% better.'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['000BE128', '000C07CE', '000C07CF', '000C07D0', '000C07D1']
        }, {
          name: 'Allure',
          desc: ['10% better prices with the opposite sex.'],
          req: [30],
          pos: [14, -55],
          deps: [0],
          id: ['00058F75']
        }, {
          name: 'Bribery',
          desc: ['Can bribe guards to ignore crimes.'],
          req: [30],
          pos: [60, -56],
          deps: [0],
          id: ['00058F72']
        }, {
          name: 'Persuasion',
          desc: ['Persuasion attempts are 30% easier.'],
          req: [50],
          pos: [83, -111],
          deps: [2],
          id: ['001090A2']
        }, {
          name: 'Intimidation',
          desc: ['Intimidation is twice as successful.'],
          req: [70],
          pos: [95, -143],
          deps: [3],
          id: ['00105F29']
        }, {
          name: 'Merchant',
          desc: ['Can sell any type of item to any kind of merchant.'],
          req: [50],
          pos: [5, -111],
          deps: [1],
          id: ['00058F7A']
        }, {
          name: 'Investor',
          desc: ['Can invest 500 gold with a shopkeeper to increase his available gold permanently.'],
          req: [70],
          pos: [-4, -142],
          deps: [5],
          id: ['00058F7B']
        }, {
          name: 'Fence',
          desc: ['Can barter stolen goods with any merchant you have invested in.'],
          req: [90],
          pos: [-12, -169],
          deps: [6],
          id: ['00058F79']
        }, {
          name: 'Master Trader',
          desc: ['Every merchant in the world gains 1000 gold for bartering.'],
          req: [100],
          pos: [56, -177],
          deps: [7],
          id: ['001090A5']
        }
      ]
    }
  ];

}).call(this);
