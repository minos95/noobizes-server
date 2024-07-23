export const typeDefs = `#graphql
type Match {
  id: ID!
  
}

type MatchDto{
metadata:	MetadataDto	
info: InfoDto
}

type MetadataDto{
dataVersion: String	
matchId:	String
participants: [String]}

type InfoDto{

endOfGameResult: String
gameCreation: Float
gameDuration: Float
gameEndTimestamp: Float	
gameId: Float	
gameMode: String	
gameName: String	
gameStartTimestamp: Float
gameType: String	
gameVersion: String
mapId:	Int	
participants:	[ParticipantDto]	
platformId: String	
queueId:	Int	
teams: [TeamDto]	
tournamentCode: String}


type ParticipantDto{
allInPings: Int	
assistMePings: Int	
assists: Int	
baronKills: Int	
bountyLevel: Int	
champExperience: Int	
champLevel: Int	
championId: Int	
championName: String	
commandPings: Int	
championTransform: Int	
consumablesPurchased:  Int	
challenges:	ChallengesDto	
damageDealtToBuildings:  Int	
damageDealtToObjectives:  Int	
damageDealtToTurrets: Int	
damageSelfMitigated: Int	
deaths: Int	
detectorWardsPlaced: Int	
doubleKills: Int	
dragonKills: Int	
eligibleForProgression:  Boolean	
enemyMissingPings: Int	
enemyVisionPings: Int	
firstBloodAssist:  Boolean	
firstBloodKill:  Boolean	
firstTowerAssist:  Boolean	
firstTowerKill:  Boolean	
gameEndedInEarlySurrender:  Boolean	
gameEndedInSurrender:  Boolean	
holdPings: Int	
getBackPings: Int	
goldEarned: Int	
goldSpent: Int	
individualPosition: String 
inhibitorKills: Int	
inhibitorTakedowns: Int	
inhibitorsLost: Int	
item0: Int	
item1: Int	
item2: Int	
item3: Int	
item4: Int	
item5: Int	
item6: Int	
itemsPurchased: Int	
killingSprees: Int	
kills: Int	
lane: String	
largestCriticalStrike: Int	
largestKillingSpree: Int	
largestMultiKill: Int	
longestTimeSpentLiving: Int	
magicDamageDealt: Int	
magicDamageDealtToChampions: Int	
magicDamageTaken: Int	
missions:	MissionsDto	
neutralMinionsKilled: Int
needVisionPings: Int	
nexusKills: Int	
nexusTakedowns: Int	
nexusLost: Int	
objectivesStolen: Int	
objectivesStolenAssists: Int	
onMyWayPings: Int	
participantId: Int	
playerScore0: Int	
playerScore1: Int	
playerScore2: Int	
playerScore3: Int	
playerScore4: Int	
playerScore5: Int	
playerScore6: Int	
playerScore7: Int	
playerScore8: Int	
playerScore9: Int	
playerScore10: Int	
playerScore11: Int	
pentaKills: Int	
perks:	PerksDto	
physicalDamageDealt: Int	
physicalDamageDealtToChampions: Int	
physicalDamageTaken: Int	
placement: Int	
playerAugment1: Int	
playerAugment2: Int	
playerAugment3: Int	
playerAugment4: Int	
playerSubteamId: Int	
pushPings:	 Int	
profileIcon: Int	
puuid: String	
quadraKills: Int	
riotIdGameName: String	
riotIdName: String	
riotIdTagline: String	
role: String	
sightWardsBoughtInGame: Int	
spell1Casts: Int	
spell2Casts: Int	
spell3Casts: Int	
spell4Casts: Int	
subteamPlacement: Int	
summoner1Casts: Int	
summoner1Id: Int	
summoner2Casts: Int	
summoner2Id: Int	
summonerId: String	
summonerLevel: Int	
summonerName: String	
teamEarlySurrendered:  Boolean	
teamId: Int	
teamPosition: String	
timeCCingOthers: Int	
timePlayed: Int	
totalAllyJungleMinionsKilled: Int	
totalDamageDealt: Int	
totalDamageDealtToChampions: Int	
totalDamageShieldedOnTeammates: Int	
totalDamageTaken: Int	
totalEnemyJungleMinionsKilled: Int	
totalHeal: Int	
totalHealsOnTeammates: Int	
totalMinionsKilled: Int	
totalTimeCCDealt: Int	
totalTimeSpentDead: Int	
totalUnitsHealed: Int	
tripleKills: Int	
trueDamageDealt: Int	
trueDamageDealtToChampions: Int	
trueDamageTaken: Int	
turretKills: Int	
turretTakedowns: Int	
turretsLost: Int	
unrealKills: Int	
visionScore: Int	
visionClearedPings: Int	
visionWardsBoughtInGame: Int	
wardsKilled: Int	
wardsPlaced: Int	
win:  Boolean	
}
type ChallengesDto{ 
AssistStreakCount:	Int	
baronBuffGoldAdvantageOverThreshold:	Int	
controlWardTimeCoverageInRiverOrEnemyHalf: Float	
earliestBaron: Float	
earliestDragonTakedown: Float	
earliestElderDragon: Int	
earlyLaningPhaseGoldExpAdvantage: Int	
fasterSupportQuestCompletion: Int	
fastestLegendary: Float	
hadAfkTeammate: Int	
highestChampionDamage: Int	
highestCrowdControlScore: Int	
highestWardKills: Int	
junglerKillsEarlyJungle: Int	
killsOnLanersEarlyJungleAsJungler: Int	
laningPhaseGoldExpAdvantage: Int	
legendaryCount: Int	
maxCsAdvantageOnLaneOpponent: Float	
maxLevelLeadLaneOpponent: Int	
mostWardsDestroyedOneSweeper: Int	
mythicItemUsed: Int	
playedChampSelectPosition: Int	
soloTurretsLategame: Int	
takedownsFirst25Minutes: Int	
teleportTakedowns: Int	
thirdInhibitorDestroyedTime: Float	
threeWardsOneSweeperCount: Int	
visionScoreAdvantageLaneOpponent: Float	
InfernalScalePickup: Int	
fistBumpParticipation: Int	
voidMonsterKill: Int	
abilityUses: Int	
acesBefore15Minutes: Int	
alliedJungleMonsterKills: Float	
baronTakedowns: Int	
blastConeOppositeOpponentCount: Int	
bountyGold: Int	
buffsStolen: Int	
completeSupportQuestInTime: Int	
controlWardsPlaced: Int	
damagePerMinute: Float	
damageTakenOnTeamPercentage: Float	
dancedWithRiftHerald: Int	
deathsByEnemyChamps: Int	
dodgeSkillShotsSmallWindow: Int	
doubleAces: Int	
dragonTakedowns: Int	
legendaryItemUsed: [ Int]	
effectiveHealAndShielding: Float	
elderDragonKillsWithOpposingSoul: Int	
elderDragonMultikills: Int	
enemyChampionImmobilizations: Int	
enemyJungleMonsterKills: Float	
epicMonsterKillsNearEnemyJungler: Int	
epicMonsterKillsWithin30SecondsOfSpawn: Int	
epicMonsterSteals: Int	
epicMonsterStolenWithoutSmite: Int	
firstTurretKilled: Int	
firstTurretKilledTime: Float	
flawlessAces: Int	
fullTeamTakedown: Int	
gameLength: Float	
getTakedownsInAllLanesEarlyJungleAsLaner: Int	
goldPerMinute: Float	
hadOpenNexus: Int	
immobilizeAndKillWithAlly: Int	
initialBuffCount: Int	
initialCrabCount: Int	
jungleCsBefore10Minutes: Float	
junglerTakedownsNearDamagedEpicMonster: Int	
kda: Float	
killAfterHiddenWithAlly: Int	
killedChampTookFullTeamDamageSurvived: Int	
killingSprees: Int	
killParticipation: Float	
killsNearEnemyTurret: Int	
killsOnOtherLanesEarlyJungleAsLaner: Int	
killsOnRecentlyHealedByAramPack: Int	
killsUnderOwnTurret: Int	
killsWithHelpFromEpicMonster: Int	
knockEnemyIntoTeamAndKill: Int	
kTurretsDestroyedBeforePlatesFall: Int	
landSkillShotsEarlyGame: Int	
laneMinionsFirst10Minutes: Int	
lostAnInhibitor: Int	
maxKillDeficit: Int	
mejaisFullStackInTime: Int	
moreEnemyJungleThanOpponent: Float	
multiKillOneSpell: Int
multikills: Int	
multikillsAfterAggressiveFlash: Int	
multiTurretRiftHeraldCount: Int	
outerTurretExecutesBefore10Minutes: Int	
outnumberedKills: Int	
outnumberedNexusKill: Int	
perfectDragonSoulsTaken: Int	
perfectGame: Int	
pickKillWithAlly: Int	
poroExplosions: Int	
quickCleanse: Int	
quickFirstTurret: Int	
quickSoloKills: Int	
riftHeraldTakedowns: Int	
saveAllyFromDeath: Int	
scuttleCrabKills: Int	
shortestTimeToAceFromFirstTakedown: Float	
skillshotsDodged: Int	
skillshotsHit: Int	
snowballsHit: Int	
soloBaronKills: Int	
soloKills: Int	
stealthWardsPlaced: Int	
survivedSingleDigitHpCount: Int	
survivedThreeImmobilizesInFight: Int	
takedownOnFirstTurret: Int	
takedowns: Int	
takedownsAfterGainingLevelAdvantage: Int	
takedownsBeforeJungleMinionSpawn: Int	
takedownsFirstXMinutes: Int	
takedownsInAlcove: Int	
takedownsInEnemyFountain: Int	
teamBaronKills: Int	
teamDamagePercentage: Float	
teamElderDragonKills: Int	
teamRiftHeraldKills: Int	
tookLargeDamageSurvived: Int	
turretPlatesTaken: Int	
turretsTakenWithRiftHerald: Int	
turretTakedowns: Int	
twentyMinionsIn3SecondsCount: Int	
twoWardsOneSweeperCount: Int	
unseenRecalls: Int	
visionScorePerMinute: Float	
wardsGuarded: Int	
wardTakedowns: Int	
wardTakedownsBefore20M: Int}	

type MissionsDto{ 

playerScore0:	Int	
playerScore1:	Int	
playerScore2:	Int	
playerScore3:	Int	
playerScore4:	Int	
playerScore5:	Int	
playerScore6:	Int	
playerScore7: Int	
playerScore8:	Int	
playerScore9:	Int	
playerScore10:	Int	
playerScore11:	Int}

type PerksDto{
statPerks: PerkStatsDto	
styles: [PerkStyleDto]
}

type PerkStatsDto	{

defense:	Int	
flex:	Int	
offense:Int
}
type PerkStyleDto{
  description:	String	
selections:[PerkStyleSelectionDto]	
style:	Int
}
type PerkStyleSelectionDto{
perk:	Int	
var1:	 Int	
var2:	 Int	
var3:	 Int}

type TeamDto{

bans:	[BanDto]	
objectives:	ObjectivesDto	
teamId:	Int	
win:	Boolean	}

type BanDto{
championId:	Int	
pickTurn:	Int	}

type ObjectivesDto{
baron:	ObjectiveDto	
champion:	ObjectiveDto	
dragon:	ObjectiveDto	
horde:	ObjectiveDto	
inhibitor:	ObjectiveDto	
riftHerald:	ObjectiveDto	
tower:	ObjectiveDto	}

type ObjectiveDto{
first:	Boolean	
kills: Int	}
type Query {
    matchs: [Match]
    getMatchDetail: MatchDto
}
`;
