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
          name: 'Restoration Mastery',
		  levels: 2,
          desc: ['Cast Restoration spells for 35% less Magicka, and Restoration spells are 0.25% more powerful per level of Restoration.', 'Cast Restoration spells for 50% less Magicka, and Restoration spells are 0.5% more powerful per level of Restoration.'],
		  req: [0, 20],
          pos: [0, 0],
        }, {
          name: 'Caressing Breeze',
          desc: ['Healing spells randomly restore between 0 and 15 additional health.'],
          req: [20],
          pos: [-44, -7],
          deps: [0],
		}, {
          name: 'Edgewalker',
          desc: ['Restoration spells are up to 30% more powerful if the recipient is below half Health. The bonus increases as Health decreases.'],
          req: [30],
          pos: [-79, -38],
          deps: [1],
		}, {
          name: 'Necromanticon',
          desc: ['Study the arts of disease, learning the "Putrefy" spell. When your Restoration skill reaches 50, you learn "Death Cloud". When your Restoration skill reaches 75, you learn "Carrion Wind". These spells deal disease damage to nonmechanical targets.'],
          req: [40],
          pos: [-98, -42],
          deps: [2],
		}, {
          name: 'Plague Doctor',
          desc: ['Nearby opponents get 25% weakness to poison and disease.'],
          req: [70],
          pos: [-110, -30],
          deps: [3],
		}, {
          name: 'Chalice of Tears',
          desc: ['If you are diseased or undead, your Restoration spells are 15% stronger and last 50% longer.'],
          req: [70],
          pos: [-119, -48],
          deps: [3],
		}, {
          name: 'Respite',
          desc: ['Healing spells also restore Stamina equal to their power.'],
          req: [40],
          pos: [-102, -57],
          deps: [2],
		}, {
          name: 'Enduring Flame',
          desc: ['Concentration based healing spells grant armor equal to 4 times their magnitude while concentrating.'],
          req: [90],
          pos: [-110, -78],
          deps: [6],
		}, {
          name: 'False Light',
          desc: ['While in combat, you may cast targeted healing spells and effects on enemies to inflict damage equal to 75% of the heal amount.'],
          req: [40],
          pos: [-97, -96],
          deps: [2],
		}, {
          name: 'Sun\'s Judgment',
		  levels: 2,
          desc: ['Sun spells deal 75% damage to the living, daedra, automatons and dragons.', 'Sun spells deal full damage to the living, daedra, automatons and dragons.'],
          req: [60, 90],
          pos: [-109, -110],
          deps: [8],
		}, {
          name: 'Lightwielder',
          desc: ['Increases False Light damage by 10% and allows the perks Sacred Guardian and Under my Wings to hit and damage enemies.'],
          req: [60],
          pos: [-91, -131],
          deps: [8],
		}, {
          name: 'In Thy Name',
          desc: ['Increases False Light damage by 15% when you are affected by a shrine blessing.'],
          req: [80],
          pos: [-112, -140],
          deps: [10],
		}, {
          name: 'Tome of Many Pages',
          desc: ['Teaches 18 different Restoration spells. Each fortifies a single skill by 15 levels for 120 seconds.'],
          req: [90],
          pos: [-36, -13],
          deps: [0],
		}, {
          name: 'Affliction',
          desc: ['Poison spells deal 25% more damage.'],
          req: [30],
          pos: [-38, -24],
          deps: [0],
		}, {
          name: 'Withering Poison',
          desc: ['Poison spells last 50% longer.'],
          req: [50],
          pos: [-61, -33],
          deps: [13],
		}, {
          name: 'Corrosive Poison',
          desc: ['Poison spells deal 25% of their strength as magic damage instead if the target is immune to poison.'],
          req: [90],
          pos: [-77, -72],
          deps: [14],
		}, {
          name: 'Plague',
		  levels: 2,
          desc: ['Poison spells reduce enemy Poison Resistance by 25%.', 'Poison spells reduce enemy Poison Resistance by 50%.'],
          req: [60, 80],
          pos: [-57, -44],
          deps: [13],
		}, {
          name: 'Nethertoxin',
          desc: ['Poison spells deal extra damage based on the target\'s missing Health.'],
          req: [90],
          pos: [-78, -54],
          deps: [16],
		}, {
          name: 'Aura Of Light',
		  levels: 3,
          desc: ['Friendly people and creatures within 20 feet heal 3 points of health per second.', 'Friendly people and creatures within 30 feet heal 3 points of health per second.', 'Friendly people and creatures within 40 feet heal 3 points of health per second.'],
          req: [30, 50, 70],
          pos: [-41, -40],
          deps: [0],
		}, {
          name: 'Merciful Light',
          desc: ['Aura of Light now also affects friendly undead, daedra, and automatons. This includes all secondary effects, except for Miracle. (Cannot have both Merciful Light and Pitiless Light)'],
          req: [50],
          pos: [-21, -36],
          deps: [18],
		}, {
          name: 'Pitiless Light',
          desc: ['Aura of Light is anathema to undead and its affect on them is inverted, dealing damage instead. (Cannot have both Pitiless Light and Merciful Light)'],
          req: [50],
          pos: [-40, -55],
          deps: [18],
		}, {
          name: 'Blessing',
		  levels: 2,
          desc: ['Aura of Light grants +15% magic resistance and +50% disease and poison resistance to affected allies.', 'Aura of Light grants +30% magic resistance and +100% disease and poison resistance to affected allies.'],
          req: [40, 60],
          pos: [-67, -59],
          deps: [18],
		}, {
          name: 'Bolster The Ranks',
          desc: ['Those affected by Aura of Light deal 25% more damage.'],
          req: [60],
          pos: [-79, -91],
          deps: [21],
		}, {
          name: 'Strength In Numbers',
          desc: ['Those affected by Aura of Light gain 50 armor for every person affected, up to 300 points.'],
          req: [75],
          pos: [-76, -121],
          deps: [22],
		}, {
          name: 'Watchful Presence',
          desc: ['Those affected by Aura of Light will be saved from a killing blow, healing 200 points. Only works once per battle per person. '],
          req: [100],
          pos: [-88, -153],
          deps: [23],
		}, {
          name: 'Descending Light',
          desc: ['When you enter combat, rapidly regenerate points of Magicka equal to half of your Restoration skill level per second. This effect gradually diminishes over the course of 15 seconds. The regeneration does not stop while casting.'],
          req: [20],
          pos: [-2, -40],
          deps: [0],
		}, {
          name: 'Vigilant',
          desc: ['The first ward you cast in combat costs no Magicka to maintain.'],
          req: [30],
          pos: [-38, -62],
          deps: [25],
		}, {
          name: 'Veiled Bulwark',
		  levels: 3,
          desc: ['Wards are 50% stronger and cost 30% less magicka to cast. If not wearing any chest armor, wards cost 50% less magicka to cast.', 'Wards are 75% stronger and cost 50% less magicka to cast. If not wearing any chest armor, wards cost 70% less magicka to cast.', 'Wards are 100% stronger and cost 70% less magicka to cast. If not wearing any chest armor, wards cost 90% less magicka to cast.'],
          req: [40, 60, 80],
          pos: [-57, -76],
          deps: [26],
		}, {
          name: 'Antimagic Field',
          desc: ['Staying within 8 feet of an enemy while maintaining a ward prevents them from casting spells. No effect on massive targets.'],
          req: [50],
          pos: [-69, -104],
          deps: [27],
		}, {
          name: 'Nimble Warden',
          desc: ['Wards charge instantly and have a much shorter cooldown time when broken. '],
          req: [60],
          pos: [-59, -149],
          deps: [28],
		}, {
          name: 'Warrior\'s Flame',
          desc: ['In combat, the Warrior\'s Flame periodically touches a random target within 100 feet (including you). Friendly targets are blessed, restoring 20 points of Magicka and Stamina for 5 seconds. Hostile targets are cursed, draining the same amount instead.'],
          req: [50],
          pos: [-12, -74],
          deps: [25],
		}, {
          name: 'Forbidden Sanctuary',
          desc: ['When your ward blocks a spell, you gain Magicka equal to 25% of that spell\'s cost (or 100% if you are blessed by Warrior\'s Flame).'],
          req: [60],
          pos: [-51, -86],
          deps: [26, 30],
		}, {
          name: 'Bastion Ward',
          desc: ['Wards reduce incoming attack damage by 40% (or 20% for wards generated by Spellbreaker and Mage Ward).'],
          req: [70],
          pos: [-53, -127],
          deps: [31],
		}, {
          name: 'Mage Ward',
          desc: ['Casting a spell also raises a ward that increases armor rating by 100 and negates up to 100 points of spell damage and effects.'],
          req: [80],
          pos: [-38, -158],
          deps: [32],
		}, {
          name: 'Sacred Flame',
          desc: ['Your Warrior\'s Flame carries the essence of life. Living allies blessed by Warrior\'s Flame are healed 20 points per second.'],
          req: [60],
          pos: [-33, -108],
          deps: [30],
		}, {
          name: 'Ashes to Ashes',
          desc: ['Your Warrior\'s Flame carries the essence of death. Hostile undead cursed by Warrior\'s Flame take 30 points of damage per second.'],
          req: [60],
          pos: [-7, -107],
          deps: [30],
		}, {
          name: 'Battle Cleric',
          desc: ['When Warrior\'s Flame blesses or curses a target, it also increases or reduces armor by 200 points and magic resistance by 25% for its duration.'],
          req: [80],
          pos: [-11, -148],
          deps: [34, 35],
		}, {
          name: 'Eternal Flame',
          desc: ['Warrior\'s Flame lasts twice as long.'],
          req: [90],
          pos: [-23, -175],
          deps: [36],
		}, {
          name: 'Apotheosis',
          desc: ['Grants the "Apotheosis" power. Once a day, casts Warrior\'s Flame on all nearby for 20 seconds. Costs 250 Magicka.'],
          req: [100],
          pos: [2, -186],
          deps: [36],
		}, {
          name: 'Hallowed Burial',
		  levels: 2,
          desc: ['Your attacks and Restoration spells and effects are 20% more powerful against undead enemies.', 'Your attacks and Restoration spells and effects are 30% more powerful against undead enemies.'],
          req: [30, 60],
          pos: [9, -63],
          deps: [25],
		}, {
          name: 'Power of the Light',
		  levels: 2,
          desc: ['Sun spells deal 25% more damage.', 'Sun spells deal 50% more damage.'],
          req: [60, 90],
          pos: [-1, -82],
          deps: [39],
		}, {
          name: 'Exorcist',
          desc: ['Study the arts of destroying the undead, learning the "Sunblast" spell. When your Restoration skill reaches 50, you learn "Holy Hands". When your Restoration skill reaches 75, you learn "Stellar Core". These spells deal damage to the undead.'],
          req: [40],
          pos: [21, -87],
          deps: [39],
		}, {
          name: 'Hallowed Culling',
          desc: ['Your turn undead spells instantly kill low level undead.'],
          req: [70],
          pos: [24, -118],
          deps: [41],
		}, {
          name: 'Crusader\'s Fire',
          desc: ['In combat, targets within 30 feet affected by a Turn Undead spell or effect burn with divine fire, taking 10 points of damage per second for 10 seconds. Your attacks and critical strikes deal 25% more damage to targets affected by Crusader\'s Fire.'],
          req: [60],
          pos: [7, -124],
          deps: [41],
		}, {
          name: 'Dust To Dust',
          desc: ['Undead below 35% health turn to ash when hit by a fire, sun, or turn spell.'],
          req: [80],
          pos: [27, -150],
          deps: [43],
		}, {
          name: 'Dawnbringer',
          desc: ['You take 30% less damage from undead and deal 30% more damage to them.'],
          req: [100],
          pos: [38, -126],
          deps: [44],
		}, {
          name: 'Overflowing Cup',
          desc: ['Receiving a healing spell or effect when you are already at full Health overheals you, fortifying Health by 1 point per level of Restoration for 20 seconds.'],
          req: [50],
          pos: [30, -72],
          deps: [25],
		}, {
          name: 'Under my Wings',
          desc: ['Dual casting a healing spell on yourself also casts it on nearby nonmechanical allies within 20 feet. Does not apply to concentration spells.'],
          req: [70],
          pos: [51, -130],
          deps: [46],
		}, {
          name: 'Inner Light',
		  levels: 2,
          desc: ['Regenerate an extra 1% of your total Magicka per second.', 'Regenerate an extra 2% of your total Magicka per second.'],
          req: [30, 60],
          pos: [19, -31],
          deps: [0],
		}, {
          name: 'Combat Clarity',
          desc: ['Magicka regenerates at its full rate even in combat.'],
          req: [75],
          pos: [48, -62],
          deps: [48],
		}, {
          name: 'Spirit Tutors',
          desc: ['Two spirit tutors roam Skyrim. Find them and speak with them to receive a permanent blessing that makes Restoration spells 1% stronger per 20 points of Magicka. Each spirit tutor grants one blessing.'],
          req: [30],
          pos: [48, -33],
          deps: [0],
		}, {
          name: 'Wheel of Life',
          desc: ['In combat, gradually accumulates ambient lifeforce from the environment and releases it in periodic bursts, healing you 100 points every 30 seconds. Becoming affected by a different healing spell or effect restarts the cycle from the beginning.'],
          req: [70],
          pos: [69, -92],
          deps: [46, 50],
		}, {
          name: 'Enduring Ideal',
          desc: ['Wheel of Life heals 25% more and each new cycle is 5 seconds faster than the last.'],
          req: [90],
          pos: [84, -107],
          deps: [51],
		}, {
          name: 'Pilgrim',
          desc: ['Shrine blessings you receive are 1% stronger per level of Restoration.'],
          req: [50],
          pos: [93, -67],
          deps: [50],
		}, {
          name: 'Gods and Mortals',
          desc: ['Shrine blessings last 50% longer, and the blessings of the Divines (Akatosh, Arkay, Dibella, Julianos, Kynareth, Mara, Stendarr, Talos, Zenithar) confer powerful additional effects.'],
          req: [90],
          pos: [117, -115],
          deps: [53],
		}, {
          name: 'Intervention',
          desc: ['Once every 20 minutes, a higher power brings you back with full Health upon death.'],
          req: [100],
          pos: [91, -136],
          deps: [52, 54],
		}, {
          name: 'Sacred Guardian',
          desc: ['Emanate a 20 foot aura of protection. Any living allies within range who fall below 30% Health are automatically healed 150 points. This effect has a 30 second cooldown per target.'],
          req: [80],
          pos: [101, -38],
          deps: [50],
		}, {
          name: 'Restoration Dual Casting',
          desc: ['Dual casting a Restoration spell empowers it, increasing effectiveness and cost.'],
          req: [20],
          pos: [34, -4],
          deps: [0],
		}, {
          name: 'Illumination',
          desc: ['Spells such as Regeneration, Restoring Light, and Attunement last twice as long when dual cast.'],
          req: [50],
          pos: [57, -19],
          deps: [57],
		
        }
      ]
    }, {
      name: 'Alteration',
      cname: 'alteration',
      perks: [
        {
          name: 'Alteration Mastery',
		  levels: 2,
          desc: ['Cast Alteration spells for 35% less Magicka, and Alteration spells last 0.5% longer per level of Alteration.', 'Cast Alteration spells for 50% less Magicka, and Alteration spells last 1% longer per level of Alteration.'],
		  req: [0, 20],
          pos: [0, 0],
        }, {
          name: 'Alteration Dual Casting',
          desc: ['Dual casting an Alteration spell empowers it, increasing effectiveness and cost.'],
          req: [20],
          pos: [-47, -13],
          deps: [0],
		}, {
          name: 'Charged Vestments',
          desc: ['Dual casting spells costs 25% less Magicka while wearing robes.'],
          req: [50],
          pos: [-59, -33],
          deps: [1],
		}, {
          name: 'Ritualist',
          desc: ['Two-handed spells can be cast while moving, at 25% reduced strength.'],
          req: [100],
          pos: [-87, -44],
          deps: [2],
		}, {
          name: 'Telekinetic Force',
		  levels: 2,
          desc: ['Objects thrown with Telekinesis deal an extra 250 points of damage.', 'Objects thrown with Telekinesis deal an extra 500 points of damage.'],
          req: [50, 80],
          pos: [-31, -22],
          deps: [0],
		}, {
          name: 'Telekinetic Crush',
          desc: ['Grand Telekinesis deals 20 magic damage per second to levitated targets.'],
          req: [90],
          pos: [-17, -45],
          deps: [4],
		}, {
          name: 'Spell Charge',
          desc: ['Single cast spells are 15% more effective for each second spent casting them (max 45% increase).'],
          req: [30],
          pos: [-33, -40],
          deps: [0],
		}, {
          name: 'Chain Casting',
          desc: ['Destruction spells charge with each spell cast. At max charge, dual casting a spell allows you to cast double damage spells at no magicka cost for 5 seconds, but afterwards the charge will reset.'],
          req: [90],
          pos: [-60, -52],
          deps: [6],
		}, {
          name: 'Theurgist',
          desc: ['Once every hour, you\'re able to cast a ritual spell near instantly for very little magicka.'],
          req: [100],
          pos: [-43, -89],
          deps: [7],
		}, {
          name: 'Throne of Nirn',
          desc: ['Standing still for 5 seconds while holding a spell summons a pillar of earth under your feet that carries you into the air and out of melee range. While standing on the pillar, your spells are 20% more powerful or last 40% longer. This effect is disabled when your hands are lowered.'],
          req: [80],
          pos: [-64, -94],
          deps: [6],
		}, {
          name: 'Blood Mage',
		  levels: 2,
          desc: ['Spells cost health to cast instead of magicka. Your maximum health is increased by 50% of your magicka pool. (Novice=8 HP, Appren.=12 HP, Adept=20 HP, Expert=30 HP, Master=42 HP) Has no effect in Vampire Lord form. Vancian Magic cannot be taken.', 'Halves the amount of health consumed by spell casting. (Novice=4 HP, Appren.=6 HP, Adept=10 HP, Expert=15 HP, Master=21 HP; Concentration spells, such as Flames, consume only a third as much health.)'],
          req: [35, 65],
          pos: [-27, -60],
          deps: [6],
		}, {
          name: 'Blood To Power',
          desc: ['Your spells are are 1% more powerful for each 10 points of health you have lost. Has no effect in Vampire Lord form.'],
          req: [70],
          pos: [-30, -80],
          deps: [10],
		}, {
          name: 'Blood Siphon',
          desc: ['Your health is restored by 70% of the max HP of creatures and people that are killed by your spells. (Up to 150 points).  Has no effect in Vampire Lord form.'],
          req: [50],
          pos: [-73, -73],
          deps: [10],
		}, {
          name: 'Eldritch Energies',
          desc: ['Blood Siphon now restores health from killing undead, daedra, dwarven automatons, and dragons with your spells. '],
          req: [80],
          pos: [-79, -109],
          deps: [12],
		}, {
          name: 'Philosopher\'s Stone',
          desc: ['Once a day, generates gold equal to four times your Alteration skill level.'],
          req: [30],
          pos: [-10, -68],
          deps: [0],
		}, {
          name: 'Command Lock',
          desc: ['Once every 6 ingame hours, you can weaken an Expert or lower lock, reducing its difficulty to zero.'],
          req: [40],
          pos: [-38, -106],
          deps: [14],
		}, {
          name: 'Aurification',
          desc: ['Once every 12 ingame hours, activate a paralyzed target below half Health to transmute its body into gold worth 100 times its level, killing the target. Has a 50% chance of creating gold ore. No effect on essential targets.'],
          req: [80],
          pos: [-78, -162],
          deps: [15],
		}, {
          name: 'Alter Self: Resistances',
          desc: ['You may choose two resistances to increase by 25%.'],
          req: [40],
          pos: [4, -80],
          deps: [0],
		}, {
          name: 'Home Mythal',
          desc: ['Summons a permanent magical field at the location where you learn this perk. Alteration spells gain x2 duration if cast within 5000 feet, and x20 duration if cast within 250 feet. Additionally, Vancian Magic can be recharged by sleeping within 250 feet.'],
          req: [60],
          pos: [-35, -133],
          deps: [15, 17],
		}, {
          name: 'Emergency Teleport',
          desc: ['When you fall below 15% Health due to combat damage, you briefly turn invulnerable and teleport back to the location where you entered combat.'],
          req: [90],
          pos: [-62, -180],
          deps: [18],
		}, {
          name: 'Dimension Door',
          desc: ['Grants the "Dimension Door" power. At will, creates a magical doorway that teleports you to the location of your Home Mythal.'],
          req: [80],
          pos: [-21, -169],
          deps: [18],
		}, {
          name: 'Alter Self: Attributes',
          desc: ['You may choose an attribute (Health, Magicka, Stamina) to increase by 50 points.'],
          req: [60],
          pos: [-8, -127],
          deps: [17],
		}, {
          name: 'Transmutate',
          desc: ['Transform your own flesh, gaining one permanent ability: Obsidian Skin, Dense Bones, Water Affinity, Keen Senses, or Enhanced Agility. '],
          req: [75],
          pos: [-19, -145],
          deps: [21],
		}, {
          name: 'Nullifier',
          desc: ['You radiate a dampening field, preventing enemies within 25 feet from regenerating Magicka and Stamina.'],
          req: [90],
          pos: [1, -184],
          deps: [21],
		}, {
          name: 'Greater Malison',
          desc: ['Weakness spells reduce resistances by an additional 25%.'],
          req: [70],
          pos: [17, -152],
          deps: [21],
		}, {
          name: 'Hethoth\'s Escape',
          desc: ['Once every 10 minutes, paralyzes a melee attacker that is about to deal lethal damage to you.'],
          req: [90],
          pos: [27, -187],
          deps: [24],
		}, {
          name: 'Atronach',
          desc: ['30% chance to absorb incoming spells, replenishing your Magicka.'],
          req: [80],
          pos: [11, -122],
          deps: [21],
		}, {
          name: 'Spell Eater',
          desc: ['When hit by a hostile spell, you regain health equal to half the spell\'s magicka cost.'],
          req: [90],
          pos: [24, -144],
          deps: [26],
		}, {
          name: 'Spellblade',
          desc: ['Whenever you cast a spell with one hand, you deal 20% more attack damage for 4 seconds.'],
          req: [40],
          pos: [21, -63],
          deps: [0],
		}, {
          name: 'Adaptability',
          desc: ['Whenever you are hit by a weapon, poison, or spell, you gain 20% resistance to that type of damage for 10 seconds. Resistance type switches the next time you are hit.'],
          req: [50],
          pos: [18, -108],
          deps: [17, 28],
		}, {
          name: 'Energy Roil',
          desc: ['Whenever you cast a spell with one hand, reduces the armor of nearby enemies within 10 feet by 150 points for 4 seconds.'],
          req: [70],
          pos: [39, -121],
          deps: [28],
		}, {
          name: 'Rend Resistances',
          desc: ['Whenever you attack with a weapon, reduces the magic resistance of nearby enemies within 10 feet by 15% for 4 seconds.'],
          req: [90],
          pos: [47, -189],
          deps: [30],
		}, {
          name: 'Vancian Magic',
          desc: ['Cast magic like the wizards of old. Your next 20 spells do not use Magicka and are twice as effective. When you run out of spells, you are unable to cast spells until you rest by sleeping at an inn or in your home. Cannot take Blood Mage.'],
          req: [30],
          pos: [25, -41],
          deps: [0],
		}, {
          name: 'Quadratic Wizard',
          desc: ['Whenever you recharge your Vancian Magic spells, you gain 1 additional Vancian Magic spell for each 10 points of base Magicka.'],
          req: [50],
          pos: [44, -98],
          deps: [32],
		}, {
          name: 'Dungeon Master',
          desc: ['Whenever you recharge your Vancian Magic spells, you may choose less or more spells in exchange for increased or decreased spell effectiveness, and/or choose one of three metamagic enhancements. Your choice remains in effect until your next rest.'],
          req: [70],
          pos: [57, -145],
          deps: [33],
		}, {
          name: 'Wild Shrines',
          desc: ['Five shrines dedicated to nature\'s mysteries can be found in Skyrim. Each shrine grants a permanent bonus to one school of magic, making all spells from that school 15% more powerful or last 30% longer.'],
          req: [30],
          pos: [68, -60],
          deps: [0],
		}, {
          name: 'Spirit Echo',
          desc: ['10% chance of summoning a Spirit Echo in combat, which drains health, magicka, and stamina from enemies and returns it to you.'],
          req: [80],
          pos: [49, -72],
          deps: [32, 35],
		}, {
          name: 'Welloc\'s Dormant Arcana',
          desc: ['Choose a spell type (Armor, Cloak, Conjure Daedra, Conjure Undead, Invisibility) and 3 magic effects (Fortify, Regenerate, Waterwalking, ...). The chosen magic effects will activate when you are affected by the chosen spell type.'],
          req: [60],
          pos: [83, -90],
          deps: [35],
		}, {
          name: 'Intuitive Magic',
		  levels: 2,
          desc: ['Novice spells of any school cost 100% less Magicka to cast.', 'Novice and apprentice spells of any school cost 100% less Magicka to cast.'],
          req: [50, 80],
          pos: [63, -110],
          deps: [35],
		}, {
          name: 'Spell Mastery',
          desc: ['The next spell you cast is infused into your very soul, transforming it into a lesser power that can be cast instantly for no magicka.'],
          req: [100],
          pos: [72, -178],
          deps: [38],
		}, {
          name: 'Arcane Thesis',
          desc: ['Grants the "Arcane Thesis" power: use it to master the spell you are dual casting. A mastered spell is 20% more powerful or lasts 40% longer. Only one spell can be mastered.'],
          req: [100],
          pos: [108, -192],
          deps: [34, 38],
		}, {
          name: 'The Monarch',
          desc: ['You cannot regenerate Magicka and lose 10 points of Magicka per second but absorb 25 points of Magicka per second from living creatures within 20 feet, whether friend or foe.'],
          req: [70],
          pos: [101, -147],
          deps: [38],
		}, {
          name: 'Initiate\'s Charm',
          desc: ['Spells and enchantments cost 10% less Magicka while wearing robes.'],
          req: [20],
          pos: [31, -16],
          deps: [0],
		}, {
          name: 'Fortification',
          desc: ['You gain 100 Armor Rating while wearing robes.'],
          req: [45],
          pos: [55, -34],
          deps: [42],
		}, {
          name: 'Mage Armor',
		  levels: 3,
          desc: ['If not wearing armor, gain 5% chance to take no damage from attacks and armor spells are twice as strong.', 'Flesh and Shield spells affect nearby allies. If not wearing armor, gain 10% chance to take no damage from attacks and armor spells are 2.5 times as strong.', 'If not wearing armor, gain 15% chance to take no damage from attacks and armor spells are three times as strong.'],
          req: [30, 50, 70],
          pos: [49, -9],
          deps: [42],
		}, {
          name: 'Backlash',
          desc: ['You reflect a portion of incoming weapon damage back at your attacker while under the effects of an armor spell. '],
          req: [55],
          pos: [52, -23],
          deps: [44],
		}, {
          name: 'Ocato\'s Preparation',
          desc: ['When entering combat, automatically activates the most effective magical armor spell you know.'],
          req: [40],
          pos: [70, -28],
          deps: [44],
		}, {
          name: 'Energy Shield',
          desc: ['If wearing robes and no light or heavy armor, reduces incoming attack and elemental damage by 35% but you lose Magicka equal to the amount of Health lost. The damage reduction gradually diminishes as Magicka falls below half. The energy shield is disabled when your hands are lowered.'],
          req: [60],
          pos: [88, -54],
          deps: [46],
		}, {
          name: 'Embroidered Sigils',
          desc: ['You gain 25% Spell Absorption and Magic Resistance while wearing a robe.'],
          req: [100],
          pos: [97, -38],
          deps: [43, 44],
		}, {
          name: 'Distorted Shape',
          desc: ['When you gain an armor spell in combat (or enter combat with an active armor spell), you become intangible and unable to be affected by spells or attacks for 10 seconds or until you perform an offensive or defensive action.'],
          req: [40],
          pos: [106, -9],
          deps: [44],
		}, {
          name: 'Sorcerer\'s Robes',
          desc: ['Spells from any school are 25% more effective if not wearing armor.'],
          req: [40],
          pos: [109, -25],
          deps: [44],
		}, {
          name: 'Geomancer',
          desc: ['If wearing robes and no light or heavy armor, you take 30% less damage from attacks while charging or concentrating on a spell.'],
          req: [50],
          pos: [118, -51],
          deps: [50],
		}, {
          name: 'Stability',
          desc: ['Alteration spells and effects last 25% longer.'],
          req: [60],
          pos: [94, -70],
          deps: [43, 50],
		}, {
          name: 'Synergy',
		  levels: 2,
          desc: ['While affected by a flesh spell, all spells you cast are 8% stronger.', 'While affected by a flesh spell, all spells you cast are 16% stronger.'],
          req: [75, 90],
          pos: [110, -102],
          deps: [52],
		
        
        }
      ]
    }, {
      name: 'Enchanting',
      cname: 'enchanting',
      perks: [
        {
          name: 'Enchanting Mastery',
          levels: 2,
          desc: ['New enchantments are 20% stronger. Soul gems provide 2 extra weapon charge points per level of Enchanting.', 'New enchantments are 40% stronger. Soul gems provide 4 extra weapon charge points per level of Enchanting.'],
          req: [0, 20],
          pos: [0, 0],
        }, {
          name: 'Last Word',
		  levels: 3,
          desc: ['Scrolls are 2% more powerful or last 4% longer per level of Enchanting.', 'Scrolls are 4% more powerful or last 8% longer per level of Enchanting.', 'Scrolls are 6% more powerful or last 12% longer per level of Enchanting.'],
          req: [20, 50, 80],
          pos: [-38, -16],
          deps: [0],
		}, {
          name: 'Staff Channeler',
          desc: ['When a staff is equipped, all weapon enchantments drain 25% less charge and you gain a small amount of Enchanting experience in combat.'],
          req: [30],
          pos: [-20, -22],
          deps: [0],
		}, {
          name: 'Power Stone',
		  levels: 3,
          desc: ['Staves are 25% stronger, and an equipped staff improves other weapon enchantments by 25%.', 'Staves are 50% stronger, and an equipped staff improves other weapon enchantments by 50%.', 'Staves are 100% stronger, and an equipped staff improves other weapon enchantments by 100%.'],
          req: [40, 60, 80],
          pos: [9, -41],
          deps: [2],
		}, {
          name: 'Mana Shield',
          desc: ['Take 25% less damage from attacks if you have a staff equipped and no shield.'],
          req: [70],
          pos: [7, -60],
          deps: [3],
		}, {
          name: 'Secretkeeper',
          desc: ['When a staff is equipped in your left hand, your attacks deal 25% more damage and critical damage. When a staff is equipped in your right hand, your spells and scrolls are 25% more effective.'],
          req: [40],
          pos: [-45, -53],
          deps: [1, 2],
		}, {
          name: 'Scroll Hunter',
          desc: ['10% chance to find a random scroll on the corpses of people you kill.'],
          req: [50],
          pos: [-73, -56],
          deps: [5],
		}, {
          name: 'Spider Hunter',
          desc: ['5% chance to find a random imbued spider on the corpses of people you kill.'],
          req: [90],
          pos: [-87, -93],
          deps: [6],
		}, {
          name: 'Flame of Magnus',
          desc: ['While casting or concentrating on a staff or spell in your left hand, you may attack with your right hand, dealing 50% more damage and critical damage.'],
          req: [50],
          pos: [-65, -82],
          deps: [5],
		}, {
          name: 'Staff Recharge',
          desc: ['Equipped staves regenerate 5 points of charge per second, up to their charge level when you last equipped them or recharged them with a soul gem.'],
          req: [60],
          pos: [-20, -93],
          deps: [5],
		}, {
          name: 'Charge Tap',
          desc: ['Grants the "Charge Tap" power. At will, drains a quarter of your current weapon charge to restore Health by 15% of the amount drained and Magicka and Stamina by 25% of the amount drained. (If you have two enchanted weapons equipped, the drain is split.)'],
          req: [70],
          pos: [-27, -126],
          deps: [9],
		}, {
          name: 'You Shall Not Pass',
          desc: ['Simultaneously (within 1 second) using an enchanted staff in your left hand and striking with an enchanted weapon in your right hand releases a flash of light that staggers enemies and deals damage equal to half your Enchanting skill level.'],
          req: [90],
          pos: [-55, -156],
          deps: [8, 10],
		}, {
          name: 'Resonance',
          desc: ['Elemental enchantments on armor are 30% more effective if you have an elemental spell of the same type equipped. '],
          req: [45],
          pos: [0, -27],
          deps: [0],
		}, {
          name: 'Exemplar',
          desc: ['Skill enchantments on armor increase your corresponding skill level by 30 if your health falls below 25%.'],
          req: [60],
          pos: [-10, -52],
          deps: [12],
		}, {
          name: 'Overflow',
          desc: ['Health, magicka, and stamina enchantments on armor restore 1-3% of your maximum health, magicka, or stamina every second during combat. Does not stack.'],
          req: [70],
          pos: [0, -71],
          deps: [13],
		}, {
          name: 'Gem Dust',
          desc: ['You may choose to destroy a Flawless Gem when you begin the enchanting process and sprinkle its dust on the Arcane Enchanter to Empower it. New enchantments are 25% stronger when placed upon an item of the type corresponding to the gem.'],
          req: [40],
          pos: [30, -46],
          deps: [0],
		}, {
          name: 'Preserver',
          desc: ['Learning an item\'s enchantment does not destroy it.'],
          req: [50],
          pos: [17, -90],
          deps: [15],
		}, {
          name: 'Regalia',
          desc: ['New enchantments placed upon robes, circlets, hoods and necklaces are 30% stronger.'],
          req: [60],
          pos: [41, -78],
          deps: [15],
		}, {
          name: 'Attunement',
          desc: ['All enchantments on equipped weapons and armor are 10% more powerful and last 10% longer.'],
          req: [70],
          pos: [13, -117],
          deps: [9, 17],
		}, {
          name: 'Heart of the Sun',
          desc: ['Use an equipped staff as an energy source, causing it to lose charge at a rate of 15 points per second but making your weapon enchantments 1% more effective per 50 points of charge remaining in the staff. (This effect stacks if more than one staff is equipped.) Sheathe to cancel.'],
          req: [80],
          pos: [-6, -153],
          deps: [10, 18],
		}, {
          name: 'Twin Enchantment',
          desc: ['Can place two enchantments upon the same item.'],
          req: [80],
          pos: [43, -121],
          deps: [17],
		}, {
          name: 'Arcane Nexus',
          desc: ['Further Empower enchantments by upgrading one arcane enchanter to an Arcane Nexus for 2500 gold. New enchantments created at an Arcane Nexus are 25% stronger. Can be "Disassembled" by sneaking, allowing you to upgrade another.'],
          req: [90],
          pos: [48, -150],
          deps: [20],
		}, {
          name: 'Draconic Infusion',
          desc: ['Dragon souls can be sacrificed at an Arcane Enchanter to enchant weapons and armor with Dragon\'s Wrath or Dragon\'s Immortality, respectively. Each item you wish to enchant requires spending a dragon soul.'],
          req: [100],
          pos: [15, -171],
          deps: [21],
		}, {
          name: 'Miracle',
          desc: ['You put your heart and soul into the next item you enchant at an Arcane Nexus, placing up to three enchantments upon it that are 25% stronger. Try as you might, you will never be able to repeat this feat.'],
          req: [100],
          pos: [40, -183],
          deps: [21],
		}, {
          name: 'Artificer',
          desc: ['Artifacts consume no charge, and all other weapons consume 50% less charge. You can learn the spells of unique staves by using them.'],
          req: [45],
          pos: [39, -32],
          deps: [0],
		}, {
          name: 'Reliquary of Myth',
          desc: ['Weapon enchantments deal 20% more damage. You can craft unique items and modify artifacts at an enchanter.'],
          req: [70],
          pos: [46, -56],
          deps: [24],
		}, {
          name: 'Soul Enchanter',
          desc: ['New enchantments placed on weapons have 1000 extra charge.'],
          req: [60],
          pos: [72, -35],
          deps: [24],
		}, {
          name: 'Soul Siphon',
          desc: ['Death blows with enchanted weapons to creatures, but not people, trap 5% of the victim\'s soul, recharging the weapon. Does not apply to staves.'],
          req: [20],
          pos: [47, -14],
          deps: [0],
		}, {
          name: 'Empowered Binding',
          desc: ['Souls you trap are one size larger than normal.'],
          req: [80],
          pos: [70, -10],
          deps: [27],
		}, {
          name: 'Tethered Anima',
          desc: ['Soul gems have a 50% chance to remain after use. Soul gems that remain have a 50% chance to retain the soul being used.'],
          req: [90],
          pos: [88, -23],
          deps: [26, 28],
		}, {
          name: 'Thunderstruck',
          desc: ['Weapon enchantments are 25% more effective when delivered by a power attack (or 50% for a two-handed power attack).'],
          req: [30],
          pos: [61, -65],
          deps: [27],
		}, {
          name: 'Elemental Might',
          desc: ['Elemental enchantments on weapons and staves deal twice as much damage to resistant targets.'],
          req: [70],
          pos: [58, -98],
          deps: [30],
		}, {
          name: 'Spellscribe',
          desc: ['Grants the "Spellscribe" power: use it to store the spell you are dual casting. Your power attacks and power bashes unleash the stored spell for free, with a cooldown based on Enchanting skill. Only works with spells that affect other targets.'],
          req: [40],
          pos: [80, -72],
          deps: [27],
		}, {
          name: 'Power Echoes',
          desc: ['Spellscribe activates twice before going on cooldown.'],
          req: [70],
          pos: [66, -115],
          deps: [32],
		}, {
          name: 'Might and Magic',
          desc: ['You are adept at weaving blade and magic. Spells cast with your left hand are 10% more effective if you are wielding a weapon in your right hand. Attacks with a weapon in your right hand deal 10% more damage if you are holding a spell in your left hand.'],
          req: [60],
          pos: [88, -93],
          deps: [32],
        }
      ]
    }, {
      name: 'Smithing',
      cname: 'smithing',
      perks: [
        {
          name: 'Smithing Mastery',
		  levels: 2,
          desc: ['You can create Novice (Steel/Bonemold) items at a forge or anvil, and improve them twice as much.', 'You can create Novice (Steel/Bonemold) items at a forge or anvil, and improve them twice as much. All items can be improved 10% more.'],
          req: [0, 20],
          pos: [0, 0],
        }, {
          name: 'Meric Smithing',
		  levels: 2,
          desc: ['Choose an item type: Contemporary Meric (Elven/Chitin), Dwarven. You can create items of the chosen type at a forge or anvil, and improve them twice as much. Investing a second perk point lets you choose both.', 'You can create both Contemporary Meric (Elven/Chitin) and Dwarven items at a forge or anvil, and improve them twice as much.'],
          req: [30, 40],
          pos: [-34, -11],
          deps: [0],
		}, {
          name: 'Expert Smithing',
		  levels: 2,
          desc: ['Choose an item type: Hard Steel (Scaled/Plate/Nordic), Orcish. You can create items of the chosen type at a forge or anvil, and improve them twice as much. Investing a second perk point lets you choose both.', 'You can create both Hard Steel (Scaled/Plate/Nordic) and Orcish items at a forge or anvil, and improve them twice as much.'],
          req: [50, 60],
          pos: [-65, -50],
          deps: [1],
		}, {
          name: 'Exotic Smithing',
		  levels: 2,
          desc: ['Choose an item type: Glass, Crystalline (Ebony/Stalhrim). You can create items of the chosen type at a forge or anvil, and improve them twice as much. Investing a second perk point lets you choose both.', 'You can create both Glass and Crystalline (Ebony/Stalhrim) items at a forge or anvil, and improve them twice as much.'],
          req: [70, 80],
          pos: [-84, -108],
          deps: [2],
		}, {
          name: 'Planar Smithing',
		  levels: 2,
          desc: ['Choose an item type: Daedric, Dragonbone. You can create items of the chosen type at a forge or anvil, and improve them twice as much. Investing a second perk point lets you choose both.', 'You can create both Daedric and Dragonbone items at a forge or anvil, and improve them twice as much.'],
          req: [90, 100],
          pos: [-56, -126],
          deps: [3],
		}, {
          name: 'Dwarven Autocannon',
          desc: ['You can create Dwemer Autocannons at a forge or anvil. Use the "Dwarven Autocannon" power to deploy them. Cannons fire parallel to your crosshair for 30 seconds, dealing damage equal to 30% of your Smithing skill, if you are within 12 feet.'],
          req: [20],
          pos: [-22, -34],
          deps: [0],
		}, {
          name: 'Remote Control',
          desc: ['Your Dwarven Autocannon now fires regardless of the distance between it and you.'],
          req: [50],
          pos: [-37, -43],
          deps: [5],
		}, {
          name: 'Electrobolt',
		  levels: 2,
          desc: ['Every fifth Dwarven Autocannon shot is an electromagnetic blast that moves slower than a regular shell but deals shock damage to Health and Magicka equal to 80% of your Smithing skill level.', 'Every fifth Dwarven Autocannon shot is an electromagnetic blast that moves slower than a regular shell but deals shock damage to Health and Magicka equal to 240% of your Smithing skill level.'],
          req: [40, 70],
          pos: [-34, -86],
          deps: [5],
		}, {
          name: 'Firing Line',
          desc: ['Your Dwarven Autocannon now deploys two cannons side by side.'],
          req: [70],
          pos: [-47, -104],
          deps: [7],
		}, {
          name: 'Spin Up',
          desc: ['Your Dwarven Autocannon gradually shoots faster over time, gaining 2% firing speed per shot, up to 200%.'],
          req: [80],
          pos: [0, -108],
          deps: [7],
		}, {
          name: 'Armor Padding',
          desc: ['Can create Linen and Leather padding at a tanning rack. They are clothing or Light Armor, function as body armor, and can be enchanted at 25% strength.'],
          req: [40],
          pos: [-10, -48],
          deps: [0],
		}, {
          name: 'Layered Plates',
          desc: ['Can create Steel, Dwarven and Orichalcum armor plates at forges. They are Heavy Armor, function as body armor and can be enchanted at 25% strength.'],
          req: [40],
          pos: [10, -55],
          deps: [0],
		}, {
          name: 'Hidden Enchantments',
          desc: ['Can now enchant padding and armor plates at 50% strength.'],
          req: [90],
          pos: [0, -70],
          deps: [10, 11],
		}, {
          name: 'Prospector',
          desc: ['Find twice the ore and gems when mining. Gain a 25% bonus to Iron and basic Steel armor.'],
          req: [80],
          pos: [0, -28],
          deps: [0],
		}, {
          name: 'Arcane Blacksmith',
          desc: ['You can improve enchanted weapons and armor.'],
          req: [40],
          pos: [21, -42],
          deps: [0],
		}, {
          name: 'Applied Knowledge',
          desc: ['Fortify Smithing effects also increase weapon damage and armor rating.'],
          req: [90],
          pos: [12, -78],
          deps: [14],
		}, {
          name: 'Advanced Workshop',
          desc: ['You may choose to upgrade one grindstone or workbench to an Advanced version for 2500 gold. It improves items one tier higher (items can be improved beyond Legendary). Can be "Disassembled" by sneaking, allowing you to upgrade another of the same type.'],
          req: [30],
          pos: [39, -32],
          deps: [0],
		}, {
          name: 'Recycle Materials',
          desc: ['50% chance to retain any materials you spend at an Advanced Grindstone or Advanced Workbench.'],
          req: [40],
          pos: [54, -70],
          deps: [16],
		}, {
          name: 'Sandstone Sheath',
          desc: ['When you draw a weapon, it is automatically sharpened, granting 25% extra attack damage for 10 seconds. This can only occur once every 30 seconds.'],
          req: [60],
          pos: [31, -110],
          deps: [17],
		}, {
          name: 'Smithing Specialization',
          desc: ['You may choose an item type: One-Handed, Two-Handed, Light Armor, Heavy Armor or Archery. Items of the chosen type can be improved 20% better at a grindstone or workbench.'],
          req: [60],
          pos: [92, -96],
          deps: [17],
		}, {
          name: 'Iron Lore',
          desc: ['If you Specialized in an armor type, your attacks ignore 15% of the armor rating of enemies wearing items of the chosen type. If you Specialized in a weapon type, you take 10% less damage from weapons of the chosen type.'],
          req: [80],
          pos: [104, -118],
          deps: [19],
		}, {
          name: 'Fuel the Inferno',
          desc: ['When activating an Advanced Grindstone or Advanced Workbench, you may choose to sacrifice a Dragon Soul to improve items by a further one tier during that session.'],
          req: [90],
          pos: [56, -130],
          deps: [17, 19],
		}, {
          name: 'Heart of Creation',
          desc: ['Pour your Dragonborn blood into the fire at one forge. Forging an item in this forge empowers you, increasing attack damage and critical strike damage by 15% and reducing attack damage taken by 15% for 1800 seconds.'],
          req: [100],
          pos: [13, -151],
          deps: [4, 21],
		
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
          name: 'Archery Mastery',
          levels: 2,
          desc: ['Bows and crossbows do 25% more damage.', 'Bows and crossbows do 50% more damage, and critical strikes with bows and crossbows do 2% more critical damage per level of Archery.'],
          req: [0, 20],
          pos: [0, 0],
        }, {
          name: 'Long Shot',
		  levels: 3,
          desc: ['Bows and crossbows deal up to 40% more damage to targets beyond 50 feet. The damage bonus increases as distance increases.', 'Bows and crossbows deal up to 60% more damage to targets beyond 50 feet. The damage bonus increases as distance increases.', 'Bows and crossbows deal up to 80% more damage to targets beyond 50 feet. The damage bonus increases as distance increases.'],
          req: [30, 60, 90],
          pos: [-66, -34],
          deps: [0],
		}, {
          name: 'Impaling Shot',
          desc: ['Ranged weapons wound the living for 15 seconds, causing them to bleed while running.'],
          req: [40],
          pos: [-98, -50],
          deps: [1],
		}, {
          name: 'Arrow to the Knee',
          desc: ['Ranged weapons knock targets down if they are sprinting, inflicting a critical strike for 2 times critical damage.'],
          req: [80],
          pos: [-118, -92],
          deps: [2],
		}, {
          name: 'Thread the Needle',
		  levels: 2,
          desc: ['Bows and crossbows ignore 25% armor if the target is not moving.', 'Bows and crossbows ignore 50% armor if the target is not moving.'],
          req: [40, 70],
          pos: [-95, -81],
          deps: [1],
		}, {
          name: 'Ambush Predator',
          desc: ['After standing still for 6 seconds with a bow or crossbow out, it does 25% more damage until you move.'],
          req: [70],
          pos: [-112, -139],
          deps: [4],
		}, {
          name: 'Three Crows',
          desc: ['Shooting a target beyond 25 feet three times in rapid succession, leaving less than 2.75 seconds between each hit, deals bonus damage equal to 15% of the target\'s current Health (max. 150 damage) and knocks the target to the ground.'],
          req: [90],
          pos: [-99, -190],
          deps: [5],
		}, {
          name: 'Point Blank Shot',
		  levels: 2,
          desc: ['Ranged weapons do up to 20% more damage to targets within 20 feet, based on proximity.', 'Ranged weapons do up to 40% more damage to targets within 20 feet, based on proximity.'],
          req: [25, 50],
          pos: [-38, -50],
          deps: [0],
		}, {
          name: 'Crippling Shot',
          desc: ['Arrows and bolts slow a target within 25 feet by 10% for 20 seconds. This effect stacks.'],
          req: [40],
          pos: [-63, -70],
          deps: [7],
		}, {
          name: 'Power Shot',
          desc: ['Arrows stagger all but the largest opponents 50% of the time. Critical hits with all weapons deal 50% more damage.'],
          req: [60],
          pos: [-61, -99],
          deps: [7],
		}, {
          name: 'Beak and Talon',
          desc: ['Your shots disrupt targets within 25 feet, disarming them if they are power attacking and knocking them down if they are staggered.'],
          req: [70],
          pos: [-73, -152],
          deps: [9],
		}, {
          name: 'Perfect Aim',
          desc: ['Bows deal 25% more damage if the shot strikes a target within 2 seconds after the bow is fully drawn. Crossbows deal triple damage to targets with 20% or less Health remaining.'],
          req: [100],
          pos: [-48, -220],
          deps: [6, 10],
		}, {
          name: 'Ethereal Arrows',
          desc: ['Firing a bow without any arrows equipped will fire an ethereal arrow from your magicka pool. Damage of these arrows improve slightly with some perks that affect bound weapons.'],
          req: [10],
          pos: [-6, -38],
          deps: [0],
		}, {
          name: 'Clean Kill',
          desc: ['Bows and crossbows deal 20% more damage to a target at full Health.'],
          req: [20],
          pos: [18, -38],
          deps: [0],
		}, {
          name: 'Snipe',
          desc: ['Shooting targets you haven\'t shot within the past 10 seconds inflicts a critical strike that deals three times critical damage, and any weapon enchantments applied by the shot are twice as effective.'],
          req: [60],
          pos: [-47, -117],
          deps: [13],
		}, {
          name: 'Shadowstick',
          desc: ['Bow attacks are guaranteed to critically hit when firing from out of combat.'],
          req: [80],
          pos: [-57, -140],
          deps: [9, 14],
		}, {
          name: 'Overdraw',
          desc: ['Critical hits with a bow have a 10% chance to deal lethal damage. All weapons are 5% more likely to critically hit.'],
          req: [90],
          pos: [-49, -175],
          deps: [15],
		}, {
          name: 'And They All Fall Down',
          desc: ['Bow attacks have a 15% chance to cripple the target for 12 seconds. Targets without vulnerable knees will be paralyzed instead.'],
          req: [100],
          pos: [-22, -211],
          deps: [16],
		}, {
          name: 'Quick Shot',
          desc: ['Can draw a bow or reload a crossbow 30% faster.'],
          req: [60],
          pos: [-9, -112],
          deps: [13],
		}, {
          name: 'Hawkeye',
          desc: ['Grants the "Hawkeye" power. Once a day, slow time and focus on your foes for 10 seconds, looking for opportunities for a killing shot. Finding their vulnerability takes 1 second per 125 Health. Once you do, you may shoot them for an instant kill.'],
          req: [80],
          pos: [-18, -183],
          deps: [14, 18],
		}, {
          name: 'Hailstorm',
          desc: ['Attack 8% faster with bows and crossbows for 10 seconds after shooting a fully drawn bow or crossbow in combat. This effect stacks.'],
          req: [80],
          pos: [11, -174],
          deps: [18],
		}, {
          name: 'Ranger',
          desc: ['Can move at full speed with a drawn bow. (Do not take this perk while sneaking.)'],
          req: [50],
          pos: [41, -99],
          deps: [13],
		}, {
          name: 'Focus on the Prey',
          desc: ['Cannot be staggered while holding a drawn bow or reloading a crossbow.'],
          req: [60],
          pos: [30, -149],
          deps: [21],
		}, {
          name: 'Lion\'s Arrow',
          desc: ['Grants the "Lion\'s Arrow" power: use it to store the spell you are dual casting. Shooting a fully drawn bow in combat also releases the stored spell in the direction of the crosshair. Only works with spells that affect other targets.'],
          req: [90],
          pos: [38, -212],
          deps: [22],
		}, {
          name: 'Steady Hand',
		  levels: 3,
          desc: ['Pressing Block while aiming will zoom in your view.', 'Pressing Block while aiming will zoom in your view and slow time by 25%.', 'Pressing Block while aiming will zoom in your view and slow time by 50%.'],
          req: [30, 60, 90],
          pos: [57, -41],
          deps: [0],
		}, {
          name: 'Breaching Shot',
          desc: ['Ranged weapons knock the shield out of an opponent\'s hands if they are blocking, inflicting a critical strike.'],
          req: [40],
          pos: [52, -70],
          deps: [24],
		}, {
          name: 'Hunter\'s Discipline',
          desc: ['Recover twice as many arrows and bolts from dead bodies.'],
          req: [40],
          pos: [82, -82],
          deps: [24],
		}, {
          name: 'Trick Arrows',
          desc: ['Able to upgrade many types of arrows at a forge or anvil, adding a bonus effect (Force, Immolation, Freezing, Grounding, Maze or Death) based on its material.'],
          req: [80],
          pos: [55, -174],
          deps: [26],
		}, {
          name: 'Hunt Together',
          desc: ['When fighting only one enemy, hitting the target with a bow or crossbow manifests a Spirit Wolf for 30 seconds. The wolf deals damage equal to 15% of your current Stamina. This effect has a 30 second cooldown per target.'],
          req: [90],
          pos: [84, -208],
          deps: [26],
		}, {
          name: 'Survivalist',
          desc: ['Most wild animals are friendly until attacked. Gain use of the Hunter\'s Sight lesser power.'],
          req: [55],
          pos: [99, -106],
          deps: [26],
		}, {
          name: 'Wingstrike',
		  levels: 2,
          desc: ['Bashing with a bow or crossbow staggers the target. Bows and crossbows deal 20% more damage to that target for 10 seconds.', 'Bashing with a bow or crossbow always staggers the target. Bows and crossbows deal 40% more damage to that target for 10 seconds.'],
          req: [20, 50],
          pos: [50, -3],
          deps: [0],
		}, {
          name: 'Knockout',
          desc: ['Bashing with a bow briefly knocks the target out. This ability can only be used once every 15 seconds.'],
          req: [40],
          pos: [73, -20],
          deps: [30],
		
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
          name: 'Speech Mastery',
          levels: 2,
          desc: ['Sell items for 10% more. Your intimidation attempts are twice as likely to succeed.', 'Sell items for 20% more. Your intimidation attempts are four times as likely to succeed.'],
          req: [0, 20],
          pos: [0, 0],
        }, {
          name: 'Kinship',
          desc: ['Buy items for 15% less when trading with the same race.'],
          req: [30],
          pos: [-32, -39],
          deps: [0],
		}, {
          name: 'Business Relation',
          desc: ['Create a permanent bond with the next merchant you speak with. Buy items for 30% less from that specific merchant.'],
          req: [40],
          pos: [-76, -69],
          deps: [1],
		}, {
          name: 'Hustler',
          desc: ['Selling prices are 25% better.'],
          req: [30],
          pos: [-59, -79],
          deps: [1],
		}, {
          name: 'Salesman',
          desc: ['Can sell any type of item to any kind of merchant.'],
          req: [50],
          pos: [-39, -70],
          deps: [1],
		}, {
          name: 'Foreign Markets',
          desc: ['Buying and selling prices are 25% better at Khajiit caravans.'],
          req: [60],
          pos: [-30, -95],
          deps: [4],
		}, {
          name: 'Investor',
          desc: ['Can invest with shopkeepers to increase their inventory and available gold.'],
          req: [70],
          pos: [-58, -111],
          deps: [2, 4],
		}, {
          name: 'Private Stock',
          desc: ['Shopkeepers you have invested in sell additional enchanted weapons, armor pieces, jewelry, spell tomes and alchemy ingredients.'],
          req: [80],
          pos: [-68, -139],
          deps: [6],
		}, {
          name: 'Fence',
          desc: ['Can barter stolen goods with any merchant.'],
          req: [70],
          pos: [-33, -147],
          deps: [6],
		}, {
          name: 'Master Trader',
          desc: ['Every merchant in the world gains additional gold for bartering.'],
          req: [100],
          pos: [-51, -188],
          deps: [8],
		}, {
          name: 'Performer',
          desc: ['Grants the "Perform" power. Once a day, play a song to entertain up to five people within 50 feet and collect a donation from each, based on your Speech skill and the amount of gold they are carrying.'],
          req: [20],
          pos: [-1, -30],
          deps: [0],
		}, {
          name: 'Serenade',
          desc: ['Performing to members of the opposite sex yields twice as much gold and potentially small items.'],
          req: [30],
          pos: [-15, -57],
          deps: [10],
		}, {
          name: 'Irresistible Dance',
          desc: ['Can Perform in combat to force the two nearest enemy people within 100 feet to dance spellbound, preventing them from acting and reducing their armor skills by 50 levels. Use again to stop.'],
          req: [30],
          pos: [9, -75],
          deps: [10],
		}, {
          name: 'Lord of the Dance',
          desc: ['Irresistible Dance can affect up to five enemies.'],
          req: [90],
          pos: [48, -163],
          deps: [12],
		}, {
          name: 'Golden Fiddle',
          desc: ['Irresistible Dance now also forces daedra, undead and animals to listen spellbound.'],
          req: [40],
          pos: [8, -109],
          deps: [12],
		}, {
          name: 'Encore',
          desc: ['Able to Perform multiple times per day.'],
          req: [50],
          pos: [-26, -121],
          deps: [12],
		}, {
          name: 'Earthquake Drum',
          desc: ['Can Perform in combat to unleash shockwaves. Each drumbeat deals 50 points of damage to nearby enemies within 30 feet. Use again to stop.'],
          req: [60],
          pos: [0, -129],
          deps: [14, 15],
		}, {
          name: 'Witching Rhythm',
          desc: ['Earthquake Drum deals 50% more damage. Each beat of Earthquake Drum also briefly reduces the magic resistance of affected enemies by 200% for 0.4 seconds.'],
          req: [80],
          pos: [8, -151],
          deps: [16],
		}, {
          name: 'War Drummer',
          desc: ['Each beat of Earthquake Drum also heals nearby allies by up to 20 points based on their missing Health percentage, and grants them 100% extra attack damage for 0.4 seconds.'],
          req: [90],
          pos: [-5, -180],
          deps: [17],
		}, {
          name: 'Speak With Animals',
          desc: ['Can Activate animals to tame them, forcing them to follow you anywhere you go and fight for you until released. You can only have one Wild Companion at a time. Use the "Release Companion" power to release your Wild Companion.'],
          req: [50],
          pos: [40, -69],
          deps: [0],
		}, {
          name: 'Horn of Sovngarde',
		  levels: 2,
          desc: ['Grants the "Horn of Sovngarde" power. Once a day, blow a horn to call the nearest three friendly people (except followers) within 200 feet to follow you for 600 seconds.', 'Grants the "Horn of Sovngarde" power. Once a day, blow a horn to call the nearest three friendly people (except followers) within 200 feet to follow you for one ingame day.'],
          req: [70, 100],
          pos: [80, -122],
          deps: [19],
		}, {
          name: 'Gift of Kynareth',
          desc: ['Improves your Wild Companion. Wolves gain 100% extra attack damage. Spiders gain magic immunity. Bears gain 150 points of Health. Chaurus gain 300 points of armor. Saber cats gain 40% movement speed and move silently.'],
          req: [80],
          pos: [57, -136],
          deps: [19],
		}, {
          name: 'Beastmaster',
          desc: ['Tamed animals get 50% increased attack damage, 150 points of Health, and move 25% faster.'],
          req: [95],
          pos: [87, -167],
          deps: [21],
		}, {
          name: 'And the Universe Listens',
          desc: ['Shouting restores points of Health, Magicka and Stamina equal to your shout cooldown in seconds. You gain Speech experience when shouting based on your shout cooldown.'],
          req: [20],
          pos: [41, -24],
          deps: [0],
		}, {
          name: 'Breath and Form',
          desc: ['Sprinting consumes very little stamina, and power attacks cost 10% less stamina.'],
          req: [30],
          pos: [35, -45],
          deps: [23],
		}, {
          name: 'Windborne',
          desc: ['Shouting summons up a divine wind, granting 30% extra attack damage and 15% increased movement speed for 15 seconds. This effect stacks.'],
          req: [40],
          pos: [68, -62],
          deps: [23],
		}, {
          name: 'Hurricane Force',
          desc: ['Shouts that affect others are 1% more powerful per level of Speech.'],
          req: [60],
          pos: [82, -102],
          deps: [25],
		}, {
          name: 'Force Redoubled',
		  levels: 2,
          desc: ['25% chance to reduce the cooldown of any shout to 3 seconds.', '50% chance to reduce the cooldown of any shout to 3 seconds.'],
          req: [50, 80],
          pos: [102, -75],
          deps: [25],
		}, {
          name: 'Thu\'um of War',
          desc: ['Your shouts stagger nearby enemies within 25 feet, reducing armor rating by 300 points for 10 seconds and knocking enemies below 25% Health to the ground.'],
          req: [70],
          pos: [123, -115],
          deps: [27],
		}, {
          name: 'Skald',
          desc: ['Power attacks reduce the remaining duration of your shout cooldown by 5 seconds.'],
          req: [60],
          pos: [129, -76],
          deps: [27],
		}, {
          name: 'Voice of the First World',
          desc: ['You gain 50 magicka, and your shouts prevent nearby enemies from shouting for a short time.'],
          req: [80],
          pos: [140, -143],
          deps: [26, 29],
		}, {
          name: 'Merciless Storm',
          desc: ['Grants the "Merciless Storm" power. Once a day, cancels an active shout cooldown, allowing you to shout again immediately afterwards.'],
          req: [80],
          pos: [101, -141],
          deps: [27],
		}, {
          name: 'Dovahzulaan',
          desc: ['For 120 seconds after using Merciless Storm, any shout you use also carries the previous shout.'],
          req: [100],
          pos: [124, -178],
          deps: [31],
		}, {
          name: 'Sly',
          desc: ['Can bribe guards to ignore crimes and persuasion attempts are 30% easier.'],
          req: [30],
          pos: [63, -14],
          deps: [0],
		
        }
      ]
    }
  ];

}).call(this);
