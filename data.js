(function() {

  window.perkTrees = [
    {
      name: 'Alchemy',
      cname: 'alchemy',
      perks: [
		{
          name: 'Alchemy Mastery',
		  levels: 2,
          desc: ['Potions and poisons you make are 20% stronger.', 'Potions and poisons you make are 40% stronger.'],
          req: [0, 20],
          pos: [0, 0],
        }, {
          name: 'Physician',
          desc: ['You may choose a type of beneficial potion: Health, Magicka or Stamina. Potions you mix that restore or fortify the chosen attribute are 50% stronger.'],
          req: [20],
          pos: [81, -7],
          deps: [0],
		}, {
          name: 'Elemental Oil',
          desc: ['You may choose a power focused on one element. At will, create a pool of oil that lasts 20 seconds. It reacts violently when struck by a projectile or explosion, exploding and dealing damage equal to your Alchemy skill level.'],
          req: [40],
          pos: [-13, -63],
          deps: [0],
		}, {
          name: 'The Alchemist\'s Cookbook',
          desc: ['You may choose a second Elemental Oil power. In addition, you may also choose "Calming Oil", "Frenzy Oil", "Paralysis Oil" or "Hallowed Oil".'],
          req: [60],
          pos: [-8, -108],
          deps: [2],
		}, {
          name: 'Walking Disaster',
          desc: ['In combat, periodically spill a random oil puddle on the ground. Puddles last 60 seconds.'],
          req: [90],
          pos: [-11, -151],
          deps: [3],
		}, {
          name: 'Advanced Lab',
          desc: ['You may choose to upgrade one alchemy lab to an Advanced version for 2500 gold. Potions you mix are 25% stronger at an Advanced Lab. Can be "Disassembled" by sneaking, allowing you to upgrade another.'],
          req: [30],
          pos: [10, -49],
          deps: [0],
		}, {
          name: 'Lab Skeever',
          desc: ['For 20 seconds after using any alchemy lab, beneficial potions you drink last 15 times longer and are 25% stronger.'],
          req: [50],
          pos: [11, -72],
          deps: [5],
		}, {
          name: 'Double Toil and Trouble',
          desc: ['You mix twice as many potions at your Advanced Lab.'],
          req: [70],
          pos: [8, -125],
          deps: [6],
		}, {
          name: 'Experimenter',
          desc: ['Eating an ingredient reveals all effects.'],
          req: [30],
          pos: [33, -53],
          deps: [0],
		}, {
          name: 'Green Thumb',
          desc: ['Twice as many ingredients are gathered from plants.'],
          req: [60],
          pos: [36, -108],
          deps: [8, 6],
		}, {
          name: 'Pure Mixture',
          desc: ['All negative effects are removed from created potions, and all positive effects are removed from created poisons.'],
          req: [70],
          pos: [36, -129],
          deps: [9],
		}, {
          name: 'Surgeon',
          desc: ['Find unique stat-boosting ingredients, more food, and more rare ingredients when looting corpses.'],
          req: [80],
          pos: [14, -139],
          deps: [9],
		}, {
          name: 'Stimulants',
          desc: ['Regenerate an extra 2% of your total Magicka and Stamina per second under the effects of a beneficial potion or food.'],
          req: [40],
          pos: [52, -32],
          deps: [0],
		}, {
          name: 'Slow Metabolism',
          desc: ['All potions and food with beneficial effects last twice as long.'],
          req: [60],
          pos: [66, -56],
          deps: [12],
		}, {
          name: 'Adrenaline',
          desc: ['Move 10% faster under the effects of a beneficial potion or food.'],
          req: [50],
          pos: [53, -75],
          deps: [12],
		}, {
          name: 'Maenad',
          desc: ['Magicka and Stamina are increased by 50 points when you are under the effect of a beneficial potion or ingredient, but reduced by 25 points when you are not.'],
          req: [60],
          pos: [61, -121],
          deps: [14],
		}, {
          name: 'Witchmaster',
          desc: ['When you use a beneficial potion or ingredient, 50% chance to receive a powerful side effect, randomly chosen from a range of 40 side effects.'],
          req: [80],
          pos: [42, -134],
          deps: [14],
		}, {
          name: 'Chymical Wedding',
          desc: ['Witchmaster side effects have 50% chance to cause side effects themselves.'],
          req: [90],
          pos: [10, -155],
          deps: [16],
		}, {
          name: 'Poisoner',
          desc: ['Poisons you mix are 1% more powerful per level of Alchemy.'],
          req: [30],
          pos: [81, -30],
          deps: [0],
		}, {
          name: 'Troll Blood',
          desc: ['Health regenerates 50% faster. When your health is below 50%, you have a 20% chance to poison enemies in melee range every time you get hit.'],
          req: [40],
          pos: [85, -99],
          deps: [18],
		}, {
          name: 'Bottomless Cup',
          desc: ['Poisons applied to weapons last for one additional hit per 10 levels of Alchemy.'],
          req: [40],
          pos: [72, -79],
          deps: [18],
		}, {
          name: 'Alkahest',
          desc: ['Your poisons are highly corrosive, enabling you to ignore 40% of the armor rating of an affected target for their duration.'],
          req: [50],
          pos: [103, -93],
          deps: [18],
		}, {
          name: 'Gourmet',
          desc: ['Vendors of rare alchemical ingredients may sell Jarrin Root, used to make deadly poisons.'],
          req: [90],
          pos: [97, -137],
          deps: [21],
		}, {
          name: 'Amplify Lethality',
          desc: ['Grants the "Amplify Lethality" power. Once a day, point at a victim to silently reduce their poison resistance by 250% for 10 seconds.'],
          req: [80],
          pos: [68, -140],
          deps: [21, 20],
		}, {
          name: 'World Serpent',
          desc: ['When you shout, your blood turns poisonous for 15 seconds. The next time you get hit with a weapon, retaliate with a powerful poisonous strike that deals 50 points of poison damage per second for 10 seconds.'],
          req: [90],
          pos: [79, -172],
          deps: [16, 23],
		}, {
          name: 'That Which Does Not Kill You...',
          desc: ['Upon learning this perk, you imbibe a deadly toxin, taking 150 damage per second. If you survive for 60 seconds, you receive 3 perk points and a permanent 25% bonus to all potions and poisons you make.'],
          req: [100],
          pos: [50, -208],
          deps: [17, 24],
		  
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
          name: 'Conjuration Mastery',
		  levels: 2,
          desc: ['Cast Conjuration spells for 35% less Magicka, and Conjuration spells last 0.5% longer per level of Conjuration.', 'Cast Conjuration spells for 50% less Magicka, and Conjuration spells last 1% longer per level of Conjuration.'],
		  req: [0, 20],
          pos: [0, 0],
        }, {
          name: 'Conjuration Dual Casting',
          desc: ['Dual casting a Conjuration spell empowers it, increasing effectiveness and cost.'],
          req: [20],
          pos: [-40, -4],
          deps: [0],
		}, {
          name: 'Rift Summoner',
		  levels: 2,
          desc: ['Summon range increased by 25 feet.', 'Summon range increased by 50 feet.'],
          req: [30, 70],
          pos: [-62, -22],
          deps: [0],
		}, {
          name: 'Signed in Blood',
          desc: ['When a friendly conjured Daedra within 15 feet is below full Health, it absorbs your lifeforce to heal itself, preventing you from regenerating Health but regenerating 10 points per second (increased by 4% of its maximum Health when out of combat).'],
          req: [40],
          pos: [-98, -31],
          deps: [2],
		}, {
          name: 'Atromancy',
          desc: ['Summoned Daedra and other non-undead minions last three times as long (or five times at night).'],
          req: [40],
          pos: [-81, -49],
          deps: [2],
		}, {
          name: 'Gatekeeper',
          desc: ['Activate a friendly summoned daedra, atronach, or familiar to send it back to Oblivion, regaining 50 magicka.'],
          req: [35],
          pos: [-58, -45],
          deps: [2],
		}, {
          name: 'Witch\'s Familiar',
          desc: ['Grants the lesser power "Chose Familiar". Your chosen atronach, daedra, or familiar will have 2x duration, and while active it will boost the power of your spells by 15% and your magicka regeneration rate by 50%. '],
          req: [50],
          pos: [-115, -46],
          deps: [3, 4],
		}, {
          name: 'Gift Of The Master',
          desc: ['Can give 10% of your maximum health, magicka, and/or stamina to a friendly summoned daedra, atronach, or familiar, boosting its stat by 10x the amount sacrificed. The borrowed health, magicka, and/or stamina is returned when it dies. '],
          req: [70],
          pos: [-116, -71],
          deps: [6],
		}, {
          name: 'Pact Magic',
          desc: ['Destruction spells and effects are 10% more effective for each friendly conjured Daedra within 30 feet.'],
          req: [50],
          pos: [-98, -84],
          deps: [4],
		}, {
          name: 'Maelstrom',
          desc: ['While you charge or concentrate on a spell, friendly conjured Daedra within 30 feet gain 30% extra attack damage.'],
          req: [60],
          pos: [-115, -101],
          deps: [8],
		}, {
          name: 'Elemental Potency',
          desc: ['Atronach conjurations now call Potent Atronachs that are higher level and more powerful.'],
          req: [70],
          pos: [-88, -109],
          deps: [4],
		}, {
          name: 'Unleash Hell',
          desc: ['Conjured Daedra within 75 feet gain additional spells on a 30 second cooldown (Flame/Earth Atronach: Elemental Explosion. Frost/Water Atronach: Reduced Armor/Magic Resistance Curse. Storm/Wind Atronach: Magnetic Knockdown. Dremora: Increased Attack Damage and Movement Speed).'],
          req: [80],
          pos: [-102, -167],
          deps: [10],
		}, {
          name: 'Summon Resist',
          desc: ['Friendly conjured Daedra and other non-undead minions within 75 feet gain 50% magic resistance and 300 points of armor.'],
          req: [90],
          pos: [-84, -148],
          deps: [10],
		}, {
          name: 'Ravenous Dead',
          desc: ['Reanimated minions receive a brief burst of strength, dealing 200% extra attack damage for 15 seconds after being reanimated. The level cap of reanimation spells and effects is increased by 1% per level of Conjuration.'],
          req: [30],
          pos: [-38, -35],
          deps: [0],
		}, {
          name: 'The Relentless',
          desc: ['Reanimated undead deal 25% more damage in combat and move and attack 15% faster.'],
          req: [60],
          pos: [-29, -53],
          deps: [13],
		}, {
          name: 'Edge of Oblivion',
          desc: ['You can summon or reanimate 1 additional minion and they last 50% longer. When you do not command a summon or reanimated minion, you lose 250 points of armor and 50% magic resistance.'],
          req: [50],
          pos: [-69, -73],
          deps: [4, 13],
		}, {
          name: 'Preservation',
          desc: ['Summoned and reanimated undead last three times as long (or twenty times if you place Hagraven Feathers into their inventory or use the Dread Zombie or Dead Thrall spells). Reanimated undead also gain 500 armor for 60 seconds after being reanimated.'],
          req: [40],
          pos: [-46, -67],
          deps: [13],
		}, {
          name: 'Undead Crown',
          desc: ['Restores 10 points of Health and Magicka per second to summoned or reanimated undead within 15 feet.'],
          req: [50],
          pos: [-36, -87],
          deps: [16],
		}, {
          name: 'Grand Conjurer',
		  levels: 2,
          desc: ['Can reanimate, banish or command targets up to 15 levels higher. Banish spells deal 60 bonus damage per second to targets that resist.', 'Can reanimate, banish or command targets of any level. Banish spells deal 1000 bonus damage per second to targets that resist.'],
          req: [60, 90],
          pos: [-73, -124],
          deps: [4, 16],
		}, {
          name: 'Soul Reaper',
          desc: ['You can fill two soul gems with the same soul as long as the soul is the appropriate size.'],
          req: [100],
          pos: [-63, -152],
          deps: [18],
		}, {
          name: 'A Plague Upon Thee',
          desc: ['If a reanimated undead is destroyed within 20 seconds, the attacker is stricken with a Daedric disease that deals 40 damage per second for 20 seconds. Those who have this perk are immune.'],
          req: [60],
          pos: [-50, -100],
          deps: [16],
		}, {
          name: 'Corpse Gas',
          desc: ['If your reanimated undead is destroyed while on fire within 30 seconds, it explodes, dealing up to 300 points of fire damage to targets without this perk. You deal five times as much fire damage to your reanimated undead.'],
          req: [70],
          pos: [-35, -115],
          deps: [20],
		}, {
          name: 'Blood Zombie',
          desc: ['Summoned and raised undead absorb 10 points of Health per second from opponents in melee range.'],
          req: [70],
          pos: [-59, -119],
          deps: [20],
		}, {
          name: 'Thrall Lord',
          desc: ['Undead raised with Dead Thrall get bonus Health, Magicka and Stamina based on their level.'],
          req: [90],
          pos: [-52, -138],
          deps: [22],
		}, {
          name: 'Shocked to Life',
          desc: ['If your reanimated minion is struck by a shock spell within 30 seconds after reanimation completes, it attacks 250% faster and moves 50% faster for 10 seconds. You deal no damage to your reanimated minions with shock spells.'],
          req: [90],
          pos: [-32, -151],
          deps: [23],
		}, {
          name: 'March of Oblivion',
          desc: ['You can summon or reanimate 1 additional minion per 250 points of base Magicka, up to 3 additional minions.'],
          req: [100],
          pos: [-49, -175],
          deps: [12, 23],
		}, {
          name: 'Bone Collector',
          desc: ['Find 11 types of bones on humanoid corpses. 4 Bone Altars are marked on the map. At a Bone Altar, convert 1 of each bone into a Skeleton Warrior. Skeletons do not count against your summon limit. Enemies can only temporarily defeat them, not destroy them.'],
          req: [20],
          pos: [-16, -28],
          deps: [0],
		}, {
          name: 'Dead Tide',
		  levels: 2,
          desc: ['Maximum number of Skeletons increased by 1 for each 75 points of base Magicka.', 'Maximum number of Skeletons increased by 1 for each 50 points of base Magicka.'],
          req: [30, 60],
          pos: [-9, -46],
          deps: [26],
		}, {
          name: 'Reap and Sow',
		  levels: 2,
          desc: ['You loot 60% more bones from corpses and recover 50% more bones when you destroy a created Skeleton. Created Skeletons last 75% longer.', 'You loot 100% more bones from corpses and recover all bones when you destroy a created Skeleton. Created Skeletons last 200% longer.'],
          req: [40, 70],
          pos: [-22, -71],
          deps: [27],
		}, {
          name: 'Barrow Lord',
          desc: ['You may give commands to all Skeletons within 150 feet at once, instead of one at a time. Skeletons take 25% less damage from attacks. Grants the "Make Way for Your Lord!" power.'],
          req: [40],
          pos: [9, -79],
          deps: [27],
		}, {
          name: 'Skeleton Mages',
		  levels: 2,
          desc: ['Able to create Skeleton Mages (Fire, Earth, Frost, Water, Shock, Wind) at a Bone Altar.', 'Able to create Skeleton Mages (Fire, Earth, Frost, Water, Shock, Wind, Poison, Drain Armor, Stagger) at a Bone Altar. You may choose their element at the time of creation.'],
          req:[50, 80],
          pos: [-11, -103],
          deps: [28, 29],
		}, {
          name: 'Fire Ritual',
          desc: ['Able to ritually burn 1 of each bone at a Bone Altar, strengthening all Skeletons within 150 feet. Lasts until the Skeleton is destroyed and increases weapon damage by 15%, spell damage by 30% and Health by 50 points. This effect stacks.'],
          req: [60],
          pos: [-21, -136],
          deps: [30],
		}, {
          name: 'King of Bones',
          desc: ['Assume Control of a Skeleton while becoming invulnerable. The Skeleton does quadruple damage and takes half damage. Unless commanded to remain passive, it automatically attacks foes in range. Lasts up to 45 seconds.'],
          req: [100],
          pos: [-13, -172],
          deps: [31],
		}, {
          name: 'Conjure Altar',
          desc: ['Grants the "Conjure Altar" power. At will, summons a Bone Altar for 60 seconds.'],
          req: [60],
          pos: [15, -135],
          deps: [30],
		}, {
          name: 'Puppet Master',
          desc: ['Your created Skeletons take 25% less damage when you are blocking, deal 25% more attack damage when you are attacking, and their spells are 25% more powerful when you are casting a spell.'],
          req: [90],
          pos: [10, -164],
          deps: [33],
		}, {
          name: 'Acolyte',
          desc: ['Bones can be harvested from humanoid corpses; the dead can be reanimated 3 times before turning to ash. (Harvested corpses cannot be reanimated)'],
          req: [20],
          pos: [5, -31],
          deps: [0],
		}, {
          name: 'Bonecraft',
		  levels: 2,
          desc: ['Grants the spell "Assemble Skeleton", which allows you to create skeletal minions from harvested bones and filled soul gems.', 'More powerful skeletons and skeletal horses can be created from harvested bones and filled soul gems.'],
          req: [25, 45],
          pos: [19, -57],
          deps: [35],
		}, {
          name: 'Ossuary',
          desc: ['Harvesting bones from a corpse results in more usable bones. Deconstructing a skeleton returns more bones, with a chance to return a filled soul gem.'],
          req: [40],
          pos: [-2, -75],
          deps: [36],
		}, {
          name: 'Ancient Tongues',
          desc: ['Created skeletons can be given simple commands and called to your location.'],
          req: [50],
          pos: [48, -93],
          deps: [36],
		}, {
          name: 'Crypt Lore',
		  levels: 2,
          desc: ['Created skeletons can be given Fire Salts, Frost Salts, or Void Salts. Doing so increases their magicka pool by 100 and grants them access to a powerful spell of that type. (Bone Horses change appearance and gain elemental cloaks and resistance; Bone Dragons gain elemental shouts)', 'Created skeletons can be given Fire Salts, Frost Salts, or Void Salts for a second time. Doing so increases their magicka pool by a further 100 and grants them access to a devastating spell of that type. (Increases the Bone Horse\'s elemental resist and Bone Dragon\'s elemental shout).'],
          req: [55, 70],
          pos: [28, -108],
          deps: [38],
		}, {
          name: 'Chosen Disciple',
          desc: ['Can gift a created skeleton with your mark of power, boosting their health by 300. You can only have 1 disciple at a time; making another skeleton your disciple will remove the mark of power from your previous disciple. '],
          req: [70],
          pos: [29, -130],
          deps: [38],
		}, {
          name: 'Lord of Bones',
          desc: ['You can now have up to 5 skeletons. Powerful Bone Dragons can be created from collected bones that will guard the location where they are summoned. '],
          req: [90],
          pos: [9, -98],
          deps: [40],
		}, {
          name: 'Mystic Binding',
          desc: ['Bound Weapon spells now summon Mystic Weapons which deal more damage.'],
          req: [20],
          pos: [23, -25],
          deps: [0],
		}, {
          name: 'Soul Raider',
          desc: ['Bound weapons cast Soul Trap on targets for 5 seconds. After trapping 250 souls, all bound weapon perks last twice as long.'],
          req: [30],
          pos: [34, -41],
          deps: [42],
		}, {
          name: 'Rend From This World',
          desc: ['Bound weapons banish conjured Daedra, turn reanimated undead and deal 100 extra damage to non-conjured Daedra.'],
          req: [40],
          pos: [50, -64],
          deps: [43],
		}, {
          name: 'Void Burn',
          desc: ['Bound weapons brand victims with unholy energy for 5 seconds, halting Magicka and Stamina regeneration while draining 15 points per second. When both are depleted, the energy starts devouring their flesh, dealing 15 points of magic damage per second.'],
          req: [50],
          pos: [58, -73],
          deps: [44],
		}, {
          name: 'Ghost Dance',
		  levels: 2,
          desc: ['While you have a bound weapon equipped, you have a 30% chance to turn ethereal for 2 seconds while an opponent is power attacking.', 'While you have a bound weapon equipped, you have a 60% chance to turn ethereal for 3 seconds while an opponent is power attacking.'],
          req: [60, 80],
          pos: [72, -98],
          deps: [45],
		}, {
          name: 'Hollow Binding',
          desc: ['Bound weapons cut through flesh and spirit, reducing magic resistance by 30% for 5 seconds.'],
          req: [60],
          pos: [57, -112],
          deps: [45],
		}, {
          name: 'Covenant of Coldharbour',
          desc: ['Hollow Binding reduces magic resistance by an additional 30% if you control a summoned Daedra or other non-undead minion.'],
          req: [90],
          pos: [70, -157],
          deps: [47],
		}, {
          name: 'Dark Whispers',
          desc: ['Bound weapons induce a battle rage in their wielder, granting 20% extra attack damage and 100 points of armor rating for 5 seconds when a target is struck.'],
          req: [70],
          pos: [42, -137],
          deps: [47],
		}, {
          name: 'Arcane Strike',
          desc: ['Power attacks with bound weapons send out a wave of arcane energy that damages nearby foes and causes them to stagger.'],
          req: [80],
          pos: [46, -161],
          deps: [49],
		}, {
          name: 'Brand of the Necromancer',
          desc: ['Brand a corpse by striking it with a bound weapon or by delivering the killing blow with a bound weapon attack. The brand grants 25% attack damage and 100 points of Health when reanimated or resurrected. Undead and automatons cannot be branded.'],
          req: [80],
          pos: [22, -152],
          deps: [49],
		}, {
          name: 'Feed the Monster',
          desc: ['Able to feed Human Flesh to summoned or reanimated creatures, healing them and increasing Health, Magicka and Stamina by 200 points for 600 seconds. This effect stacks.'],
          req: [80],
          pos: [59, -31],
          deps: [0],
		}, {
          name: 'Rat King',
          desc: ['When entering combat, creates 3 undead Skeevers under your control. Their corpses can be raised, but they dissipate when combat ends. Use the "Merciful King" power to temporarily prevent this ability from activating.'],
          req: [40],
          pos: [58, -11],
          deps: [0],	
        }
      ]
    }, {
      name: 'Destruction',
      cname: 'destruction',
      perks: [
        {
          name: 'Destruction Mastery',
		  levels: 2,
          desc: ['Destruction spells cost 35% less Magicka, and Destruction spells are 0.25% more powerful per level of Destruction.', 'Destruction spells cost 50% less Magicka, and Destruction spells are 0.5% more powerful per level of Destruction.'],
		  req: [0, 20],
          pos: [0, 0],
        }, {
          name: 'Destruction Dual Casting',
          desc: ['Dual casting a Destruction spell empowers it, increasing effectiveness and cost.'],
          req: [20],
          pos: [-39, -4],
          deps: [0],
		}, {
          name: 'Spell Surge',
          desc: ['Dual casting a Destruction spell costs 25% less Magicka.'],
          req: [35],
          pos: [-53, -9],
          deps: [1],
		}, {
          name: 'Force of Nature',
          desc: ['Elemental spells and effects cost 30% less Magicka to cast in favorable weather: fire and earth spells in sunlight, frost and water spells during snowfall, shock and wind spells in the rain.'],
          req: [30],
          pos: [-58, -25],
          deps: [0],
		}, {
          name: 'Elemental Specialization',
          desc: ['You may choose one pair of elements (fire/earth, frost/water, shock/wind). Spells and effects of that element are 15% more powerful, while spells and effects of the other two elements are 15% weaker.'],
          req: [80],
          pos: [-76, -0],
          deps: [3],
		}, {
          name: 'Hethoth\'s Disjunction',
          desc: ['All opponents affected by a Destruction cloak get 25% weakness to that element.'],
          req: [60],
          pos: [-84, -21],
          deps: [3],
		}, {
          name: 'Elemental Barrier',
          desc: ['Destruction walls and cloaks deal 50% more damage, and the damage persists for 15 seconds.'],
          req: [80],
          pos: [-116, -4],
          deps: [5],
		}, {
          name: 'Elemental Shield',
          desc: ['Destruction cloaks grant 50% resistance to their element.'],
          req: [80],
          pos: [-111, -26],
          deps: [5],
		}, {
          name: 'Combustion',
		  levels: 2,
          desc: ['Fire and earth spells and effects cast on others are up to 20% more powerful, based on the target\'s missing Health percentage.', 'Fire and earth spells and effects cast on others are up to 30% more powerful, based on the target\'s missing Health percentage.'],
          req: [20, 50],
          pos: [-42, -33],
          deps: [0],
		}, {
          name: 'Augmented Flames',
		  levels: 2,
          desc: ['Fire spells do 15% more damage and you gain 15% fire resistance.', 'Fire spells do 25% more damage and you gain 25% fire resistance. Cannot be taken with the other elements\' equivalent.'],
          req: [25, 55],
          pos: [-73, -37],
          deps: [8],
		}, {
          name: 'Flame Affinity',
          desc: ['Weapon attacks have a 20% chance to make targets take triple damage from fire for 4 seconds. Smithing improvements are 20% more effective.'],
          req: [45],
          pos: [-30, -42],
          deps: [8],
		}, {
          name: 'Augmented Earth',
		  levels: 2,
          desc: ['Earth spells do 15% more damage and you gain 15% earth resistance.' ,'Earth spells do 25% more damage and you gain 25% earth resistance. Cannot be taken with the other elements\' equivalent.'],
          req: [50, 80],
          pos: [-37, -21],
          deps: [8],
		}, {
          name: 'Scarring Burns',
          desc: ['Fire spells reduce the fire resistance of their targets by 20% for 5 seconds. Earth damage makes targets much more vulnerable to physical damage if their health is low.'],
          req: [30],
          pos: [-68, -51],
          deps: [8],
		}, {
          name: 'Catch Fire',
          desc: ['Fire spells ignite the target for 3 seconds.'],
          req: [35],
          pos: [-107, -59],
          deps: [12],
		}, {
          name: 'Searing Pain',
          desc: ['Fire spells inflict grievous burns that prevent health, magicka and stamina from regenerating for 4 seconds.'],
          req: [50],
          pos: [-96, -84],
          deps: [13],
		}, {
          name: 'Immolate',
          desc: ['Killing a target with fire magic has a chance to unleash a fiery explosion at their location, dealing damage to any nearby.'],
          req: [70],
          pos: [-66, -111],
          deps: [14],
		}, {
          name: 'Crown of Inferno',
          desc: ['Align yourself with Inferno, shunning Winter and Storm. While a fire spell is equipped, your health regenerates faster; casting fire spells increases your fire damage for a short time. Grants the power "Summon Meteor Shower".  (Can only choose 1 elemental mastery)'],
          req: [100],
          pos: [-67, -138],
          deps: [15],
		}, {
          name: 'Pyromancer Ascension',
          desc: ['Dual casting 6 fire spells in combat unleashes your power for 20 seconds: fire spells and effects are 50% more powerful and cost half Magicka, and you leave burning ground in your wake that deals 30 damage per second. Using earth creates a damaging Ash explosion. This can only occur once per battle.'],
          req: [60],
          pos: [-92, -102],
          deps: [12],
		}, {
          name: 'Flash Fire',
          desc: ['Fire spells have 15% chance to ignite the target for 2 seconds. The next instance of fire damage that hits an ignited target (except burning ground) detonates, dealing 100% more damage and causing a living target to flee the flames for 4 seconds.'],
          req: [50],
          pos: [-111, -89],
          deps: [12],
		}, {
          name: 'Conflagration',
          desc: ['Fire spells ignite the ground underneath their targets for 30 seconds. The burning ground deals 8 points of damage per second for 3 seconds on contact.'],
          req: [40],
          pos: [-69, -81],
          deps: [12],
		}, {
          name: 'Scorched Earth',
          desc: ['Fire spells (except concentration spells) burn corpses to cinders, creating a pyre that burns for 30 seconds. The burning ground deals 50 points of damage per second for 5 seconds on contact. Earth spells slow the target.'],
          req: [70],
          pos: [-90, -127],
          deps: [18, 19],
		}, {
          name: 'World in Flames',
          desc: ['The burning ground created by Conflagration, Scorched Earth and Pyromancer Ascension deals 25% more damage. Additionally, other fire spells and effects are 25% more powerful against targets affected by burning ground.'],
          req: [80],
          pos: [-106, -143],
          deps: [20],
		}, {
          name: 'Outburst',
          desc: ['When you fall below 75 points of Health, the fiery energy within you explodes and ignites nearby enemies, dealing 30 points of fire damage per second for 4 seconds and applying fire spell perks. This effect has a 180 second cooldown.'],
          req: [90],
          pos: [-79, -152],
          deps: [20],
		}, {
          name: 'Cataclysm',
          desc: ['Fire spells that hit targets affected by burning ground explode for 20% of their current Health (max. 250 damage), blasting them into the air and reducing magic resistance by 25% for 6 seconds. This effect has a 45 second cooldown.'],
          req: [100],
          pos: [-82, -189],
          deps: [21, 22],
		}, {
          name: 'Merciless Cold',
		  levels: 2,
          desc: ['Frost and water spells and effects cast on others are up to 20% more powerful, based on the target\'s missing Stamina percentage.', 'Frost and water spells and effects cast on others are up to 30% more powerful, based on the target\'s missing Stamina percentage.'],
          req: [20, 50],
          pos: [-10, -37],
          deps: [0],
		}, {
          name: 'Augmented Water',
		  levels: 2,
          desc: ['Water spells do 15% more damage and you gain 15% water resistance.', 'Water spells do 25% more damage and you gain 25% water resistance. Cannot be taken with the other elements\' equivalent.'],
          req: [50, 80],
          pos: [-17, -25],
          deps: [24],
		}, {
          name: 'Augmented Frost',
		  levels: 2,
          desc: ['Frost spells do 15% more damage and you gain 15% frost resistance.', 'Frost spells do 25% more damage and you gain 25% frost resistance. Cannot be taken with the other elements\' equivalent.'],
          req: [25, 55],
          pos: [1, -55],
          deps: [24],
		}, {
          name: 'Frostfall',
          desc: ['Frost spells reduce the attack damage of their targets by 25% for 5 seconds. Water damage will cause targets to start drowning if their health is low.'],
          req: [30],
          pos: [-37, -58],
          deps: [24],
		}, {
          name: 'Piercing Cold',
          desc: ['Frost spells deal additional unresisted damage equal to 25% of their base magnitude.'],
          req: [35],
          pos: [-10, -68],
          deps: [27],
		}, {
          name: 'Chilled To The Bone',
          desc: ['Frost spells reduce the target\'s combat skills for 6 seconds.'],
          req: [50],
          pos: [-16, -104],
          deps: [28],
		}, {
          name: 'Frostborn',
          desc: ['Targets killed by your frost magic will have their spirits transformed into hungry ice wraiths that attack your enemies.'],
          req: [70],
          pos: [-18, -133],
          deps: [29],
		}, {
          name: 'Crown of Winter',
          desc: ['Align yourself with Winter, shunning Inferno and Storm. While a frost spell is equipped, your stamina regenerates faster; casting frost spells creates an ice shield to protect you. Grants the power "Summon Blizzard".  (Can only choose 1 elemental mastery)'],
          req: [100],
          pos: [-41, -153],
          deps: [30],
		}, {
          name: 'Iced Earth',
          desc: ['Dual casting frost spells freezes the earth under your feet. The frozen ground deals 40 points of damage per second to Health and Stamina for 4 seconds on contact. Using water creates flooded earth which cause damage and the possibity to slip.'],
          req: [60],
          pos: [-44, -100],
          deps: [27],
		}, {
          name: 'Shatter',
          desc: ['Frost spells that hit a frost resistant target fragment and explode in a 15 foot area, reducing frost resistance by 25% for 10 seconds. This effect stacks.'],
          req: [50],
          pos: [-59, -91],
          deps: [27],
		}, {
          name: 'Crystalize',
          desc: ['Frost spells freeze the blood of their targets, halting Stamina regeneration for 5 seconds. If the targets are not resistant to frost, frost spells also reduce armor by 125 points for 5 seconds.'],
          req: [40],
          pos: [-25, -80],
          deps: [27],
		}, {
          name: 'Hypothermia',
          desc: ['Frost spells paralyze living targets below one third Health if they are not frost resistant, or less than half health for targets suffering from water spells.'],
          req: [70],
          pos: [-42, -122],
          deps: [33, 34],
		}, {
          name: 'Winter\'s Majesty',
          desc: ['Increases armor rating and frost resistance by 20%. Nearby enemies suffer 50% weakness to frost and 20% reduced movement speed.'],
          req: [90],
          pos: [-59, -162],
          deps: [35],
		}, {
          name: 'Exhaust',
          desc: ['Frost spells and effects drain 50% more Stamina.'],
          req: [80],
          pos: [-22, -168],
          deps: [35],
		}, {
          name: 'Glacial Prison',
          desc: ['Frost spells immobilize (non-essential) targets in a block of ice for 6 seconds, reducing magic resistance by 25%. This effect has a 120 second cooldown, but killing a victim affected by Glacial Prison or Hypothermia immediately ends the cooldown.'],
          req: [100],
          pos: [-29, -198],
          deps: [36, 37],
		}, {
          name: 'Raw Power',
		  levels: 3,
          desc: ['Destruction spells that do not deal fire, frost or shock damage are 10% more powerful.', 'Destruction spells that do not deal fire, frost or shock damage are 20% more powerful.', 'Destruction spells that do not deal fire, frost or shock damage are 30% more powerful.'],
          req: [30, 60, 90],
          pos: [2, -29],
          deps: [0],
		}, {
          name: 'Ionized Path',
		  levels: 2,
          desc: ['Shock and wind spells and effects cast on others are up to 20% more powerful, based on the target\'s missing Magicka percentage.', 'Shock and wind spells and effects cast on others are up to 30% more powerful, based on the target\'s missing Magicka percentage.'],
          req: [20, 50],
          pos: [18, -41],
          deps: [0],
		}, {
          name: 'Augmented Wind',
		  levels:2,
          desc: ['Wind spells do 15% more damage and you gain 15% wind resistance.', 'Wind spells do 25% more damage and you gain 25% wind resistance. Cannot be taken with the other elements\' equivalent.'],
          req: [50, 80],
          pos: [31, -32],
          deps: [40],
		}, {
          name: 'Augmented Shock',
		  levels: 2,
          desc: ['Shock spells do 15% more damage and you gain 15% shock resistance.', 'Shock spells do 25% more damage and you gain 25% shock resistance. Cannot be taken with the other elements\' equivalent.'],
          req: [25, 55],
          pos: [37, -51],
          deps: [40],
		}, {
          name: 'Static Field',
          desc: ['Shock spells that would leave their target above 75% Health deal enough additional shock damage to make up the difference. Wind damage will always blow targets away if their health is low.'],
          req: [30],
          pos: [17, -61],
          deps: [40],
		}, {
          name: 'Conductivity',
          desc: ['Shock spells deal 5% more damage for each piece of iron, steel, or dwarven armor worn by the target. Shock spells deal 20% more damage to dwarven automatons.'],
          req: [35],
          pos: [34, -102],
          deps: [43],
		}, {
          name: 'Static Drain',
          desc: ['Shock spells absorb 2-12 magicka from the target on each hit.'],
          req: [50],
          pos: [9, -142],
          deps: [44],
		}, {
          name: 'Disintegrate',
          desc: ['Shock damage disintegrates targets below 10% health. 20% chance when casting a shock spell to instantly cast it a second time for no magicka.'],
          req: [100],
          pos: [-7, -178],
          deps: [45],
		}, {
          name: 'Seizure',
          desc: ['Targets that have run out of magicka are paralyzed for 3 seconds. Only applies once per target.'],
          req: [70],
          pos: [31, -169],
          deps: [45],
		}, {
          name: 'Crown of Storms',
          desc: ['Align yourself with Storm, shunning Winter and Inferno. While a shock spell is equipped, your magicka regenerates faster; casting shock spells increases your speed for a short time. Grants the power "Summon Lightning Storm".  (Can only choose 1 elemental mastery)'],
          req: [100],
          pos: [47, -139],
          deps: [47],
		}, {
          name: 'Nova Charge',
          desc: ['Dual casting 6 shock spells in combat triggers a shock nova that deals 200 points of shock damage to nearby enemies and staggers them. This can only occur once per battle. Using wind creates a Slow Time effect.'],
          req: [60],
          pos: [11, -94],
          deps: [43],
		}, {
          name: 'Magnetize',
          desc: ['Shock spells have 15% chance to lift the target into the air for 2 seconds, preventing movement.'],
          req: [50],
          pos: [-1, -87],
          deps: [43],
		}, {
          name: 'Arc Burn',
          desc: ['Shock spells hitting targets that are not fire resistant cause a plasma that deals 5 points of unresistable fire damage per second for 4 seconds.'],
          req: [40],
          pos: [37, -79],
          deps: [43],
		}, {
          name: 'Electroconvulsions',
          desc: ['Shock spells incapacitate living targets below one third Health if they are not shock resistant. Wind spells will disarm the target below one third.'],
          req: [70],
          pos: [8, -121],
          deps: [50, 51],
		}, {
          name: 'Stormblast',
          desc: ['You accumulate static energy from the ambient air. Every 6-12 seconds in combat, your next shock spell triggers a ground discharge that radiates outward from the target. All enemies in the area take 60 points of shock damage to Health and Magicka.'],
          req: [90],
          pos: [-6, -152],
          deps: [52],
		}, {
          name: 'Show Them All',
          desc: ['Shock spells and effects drain 50% more Magicka.'],
          req: [80],
          pos: [28, -147],
          deps: [52],
		}, {
          name: 'Absolute Power',
          desc: ['Aiming a Sparks, Lightning Bolt, Chain Lightning, Thunderbolt or Lightning Storm spell directly at a target will magnetically levitate them in front of you for 6 seconds, reducing magic resistance by 25%. This effect has a 45 second cooldown.'],
          req: [100],
          pos: [15, -195],
          deps: [53, 54],
		}, {
          name: 'Rune Master',
		  levels: 2,
          desc: ['Can place runes 75 feet farther away, and place three times as many runes at a time.', 'Can place runes at any distance, and runes are 20% more powerful.'],
          req: [40, 70],
          pos: [55, -41],
          deps: [0],
		}, {
          name: 'Ancient Seals',
          desc: ['Destruction runes no longer deal instant damage, but inflict a stacking 10 second elemental burn that deals 20% damage per second.'],
          req: [70],
          pos: [56, -71],
          deps: [56],
		}, {
          name: 'Elementalist',
          desc: ['Your elemental spells become 5% more powerful every time you use a destruction spell with a different element than the previous spell usd. Effect stacks if another elemental destruction spell is cast within 5 seconds. Boost caps at 30%. '],
          req: [40],
          pos: [39, -12],
          deps: [0],
		}, {
          name: 'Red Mage',
          desc: ['Unlocks spell chaining. Elemental spells cast in different combinations on the same target will cause various effects. Fire+Ice = Brittle (Reduced damage resist); Ice+Shock = Superconductive (Reduced magic resist); Shock+Fire = Flashpoint (Exposion). 20 sec. cooldown per effect.'],
          req: [60],
          pos: [69, -11],
          deps: [58],
		}, {
          name: 'War of the Elements',
          desc: ['You deal 40% more attack damage to targets that are taking damage from the burning ground created by Conflagration, Scorched Earth or Pyromancer Ascension or are being affected by Electroconvulsions or Hypothermia.'],
          req: [70],
          pos: [76, -31],
          deps: [59],
		}, {
          name: 'Feedback',
          desc: ['When you have a Destruction spell readied, enemies that strike you in melee take elemental damage.'],
          req: [100],
          pos: [55, -28],
          deps: [60],
		}, {
          name: 'Harsh Lesson',
          desc: ['Destruction projectile spells interrupt targets that are casting a spell. Does not work on massive targets.'],
          req: [40],
          pos: [26, -4],
          deps: [0],
		
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
