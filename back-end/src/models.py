from flask_sqlalchemy import SQLAlchemy
import datetime


db = SQLAlchemy()


class AttacksSpellcasting(db.Model):
    __tablename__= 'attacksSpellcasting'
    Id = db.Column(db.Integer,nullable = False,primary_key=True)
    characterSheetId= db.Column(db.Integer,db.ForeignKey('characterSheet.Id'))
    name = db.Column(db.String,nullable = False)
    attackBonus = db.Column(db.Integer,nullable = False)
    damageType = db.Column(db.String)
    createdAt = db.Column(db.DateTime)
    updatedAt = db.Column(db.DateTime)

    def __init__ (self,characterSheetId,name = '',attackBonus = 0,damageType = ''):
        self.characterSheetId = characterSheetId
        self.name = name
        self.attackBonus = attackBonus
        self.damageType = damageType
        self.createdAt = datetime.datetime.utcnow()
        self.updatedAt = datetime.datetime.utcnow()

class CharacterSheet(db.Model):
    __tablename__= 'characterSheet'
    Id = db.Column(db.Integer,nullable=False,primary_key=True)
    gameId = db.Column(db.Integer,db.ForeignKey('game.Id'))
    characterName = db.Column(db.String)
    vClass = db.Column(db.String)
    race = (db.DateTime)
    level = db.Column(db.Integer)
    background = db.Column(db.String)
    playerName = db.Column(db.String)
    alignment = db.Column(db.String)
    experience = db.Column(db.Integer)
    bnSavingThrows = db.Column(db.String)
    bnProficiencyBonus = db.Column(db.Integer)
    bnInspiration = db.Column(db.Integer)
    bnStrength: db.Column(db.Integer)
    bnDexterity: db.Column(db.Integer)
    bnConstituition: db.Column(db.Integer)
    bnIntelligence: db.Column(db.Integer)
    bnWisdom: db.Column(db.Integer)
    bnCharisma: db.Column(db.Integer)
    skSkills = db.Column(db.String)
    skAcrobatics = db.Column(db.Integer)
    skAnimalHandling = db.Column(db.Integer)
    skArcana = db.Column(db.Integer)
    skAthletics = db.Column(db.Integer)
    skDeception = db.Column(db.Integer)
    skHistory = db.Column(db.Integer)
    skInsight = db.Column(db.Integer)
    skIntimidation = db.Column(db.Integer)
    skInvestigation = db.Column(db.Integer)
    skMedicine = db.Column(db.Integer)
    skNature = db.Column(db.Integer)
    skPerception = db.Column(db.Integer)
    skPerformance = db.Column(db.Integer)
    skPersuasion = db.Column(db.Integer)
    skReligion = db.Column(db.Integer)
    skSleightOfHand = db.Column(db.Integer)
    skStealth = db.Column(db.Integer)
    skSurvival = db.Column(db.Integer)
    attStrength = db.Column(db.Integer)
    attModStrength = db.Column(db.Integer)
    attDexterity = db.Column(db.Integer)
    attModDexterity = db.Column(db.Integer)
    attConstitution = db.Column(db.Integer)
    attModConstitution = db.Column(db.Integer)
    attIntelligence = db.Column(db.Integer)
    attModIntelligence = db.Column(db.Integer)
    attWisdom = db.Column(db.Integer)
    attModWisdom = db.Column(db.Integer)
    attCharisma = db.Column(db.Integer)
    attModCharisma = db.Column(db.Integer)
    attPassiveWisdom = db.Column(db.Integer)
    attArmorClass = db.Column(db.Integer)
    attInitiative = db.Column(db.Integer)
    attSpeed = db.Column(db.Integer)
    attMaxLife = db.Column(db.Integer)
    attCurrentLife = db.Column(db.Integer)
    attLifeDice = db.Column(db.String)
    stkPersonalityTraits = db.Column(db.String)
    stkIdeals = db.Column(db.String)
    stkBonds = db.Column(db.String)
    stkFlaws = db.Column(db.String)
    stkOtherProeficienciesLanguages = db.Column(db.String)
    stkFeaturesTraits = db.Column(db.String)
    createdAt = db.Column(db.DateTime)
    updatedAt = db.Column(db.DateTime)
    playerCharacter = db.relationship('PlayerCharacter',backref = 'characterSheet',lazy = True)
    equipments = db.relationship('Equipment',backref = 'characterSheet',lazy = True)
    attacksSpellcasting = db.relationship('AttacksSpellcasting',backref = 'characterSheet',lazy = True)

    def __init__ (self,game,characterName,vClass,race,background,playerName,alignment,level=0,experience=0,bnSavingThrows = '',bnProficiencyBonus = 0,bnInspiration = 0 ,bnStrength = 0,bnDexterity = 0,
    bnConstituition = 0,bnIntelligence = 0,bnWisdom = 0,bnCharisma = 0,skSkills = '',skAcrobatics = 0,skAnimalHandling = 0,skArcana = 0,skAthletics = 0,skDeception = 0,
    skHistory = 0,skInsight = 0,skIntimidation = 0,skInvestigation = 0,skMedicine = 0,skNature = 0,skPerception = 0,skPerformance = 0,skPersuasion = 0,
    skReligion = 0,skSleightOfHand = 0,skStealth = 0,skSurvival = 0,attStrength = 0,attModStrength = 0,attDexterity = 0,attModDexterity = 0,
    attConstitution = 0,attModConstitution = 0,attIntelligence = 0,modIntelligence = 0,attWisdom = 0,attModWisdom = 0,attCharisma = 0,attModCharisma = 0,attPassiveWisdom = 0,armorClass = 0,attInitiative = 0,attSpeed = 0,
    attMaxLife = 0,attCurrentLife = 0,attLifeDice = '',stkPersonalityTraits = '',stkIdeals = '',stkBonds = '',stkFlaws = '',stkOtherProeficienciesLanguages = '',stkFeaturesTraits = ''):
        self.game = game
        self.characterName = characterName
        self.vClass = vClass
        self.race = race
        self.level = level
        self.background = background
        self.playerName = playerName
        self.alignment = alignment
        self.experience = experience
        self.bnSavingThrows = bnSavingThrows
        self.bnProficiencyBonus = bnProficiencyBonus
        self.bnInspiration = bnInspiration
        self.bnStrength = bnStrength
        self.bnDexterity = bnDexterity
        self.bnConstituition = bnConstituition
        self.bnIntelligence = bnIntelligence
        self.bnWisdom = bnWisdom
        self.bnCharisma = bnCharisma
        self.skSkills = skSkills
        self.skAcrobatics = skAcrobatics
        self.skAnimalHandling = skAnimalHandling
        self.skArcana = skArcana
        self.skAthletics = skAthletics
        self.skDeception = skDeception
        self.skHistory = skHistory
        self.skInsight = skInsight
        self.skIntimidation = skIntimidation
        self.skInvestigation = skInvestigation
        self.skMedicine = skMedicine
        self.skNature = skNature
        self.skPersuasion = skPersuasion
        self.skReligion=skReligion
        self.skPerception = skPerception
        self.skPerformance = skPerformance
        self.skSleightOfHand = skSleightOfHand
        self.skStealth = skStealth
        self.skSurvival = skSurvival
        self.attStrength = attStrength
        self.attModStrength = attModStrength
        self.attDexterity = attDexterity
        self.attModDexterity = attModDexterity
        self.constitution = attConstitution
        self.attModConstitution = attModConstitution
        self.attIntelligence = attIntelligence
        self.modIntelligence = modIntelligence
        self.attWisdom = attWisdom
        self.attModWisdom = attModWisdom
        self.attCharisma = attCharisma
        self.attModCharisma = attModCharisma
        self.attPassiveWisdom = attPassiveWisdom
        self.armorClass = armorClass
        self.attInitiative = attInitiative
        self.attSpeed = attSpeed
        self.attMaxLife = attMaxLife
        self.attCurrentLife = attCurrentLife
        self.attLifeDice = attLifeDice
        self.stkPersonalityTraits = stkPersonalityTraits
        self.stkIdeals = stkIdeals
        self.stkBonds = stkBonds
        self.stkFlaws = stkFlaws
        self.stkOtherProeficienciesLanguages = stkOtherProeficienciesLanguages
        self.stkFeaturesTraits = stkFeaturesTraits
        self.createdAt = datetime.datetime.utcnow
        self.updatedAt = datetime.datetime.utcnow
       

class Equipment(db.Model):
    __tablename__= 'equipment'
    Id = db.Column(db.Integer,nullable = False,primary_key=True)
    characterSheetId = db.Column(db.Integer,db.ForeignKey('characterSheet.Id'))
    name = db.Column(db.String,nullable = False)
    description = db.Column(db.String)
    attunement = db.Column(db.String)
    cp = db.Column(db.Integer)
    sp = db.Column(db.Integer)
    ep = db.Column(db.Integer)
    gp = db.Column(db.Integer)
    pp = db.Column(db.Integer)
    createdAt = db.Column(db.DateTime)
    updatedAt = db.Column(db.DateTime)

    def __init__ (self,characterSheetId,name = '',description = '',attunement = '',cp = 0,
    sp = 0,ep = 0,gp = 0,pp = 0):
        self.characterSheetId = characterSheetId
        self.name = name
        self.description = description
        self.attunement = attunement
        self.cp = cp
        self.sp = sp
        self.ep = ep
        self.gp = gp 
        self.pp = pp
        self.createdAt = datetime.datetime.utcnow()
        self.updatedAt = datetime.datetime.utcnow()
       


class Game(db.Model):
    __tablename__= 'game'
    Id = db.Column(db.Integer,nullable=False,primary_key=True)
    name = db.Column(db.String,nullable=False)
    userId = db.Column(db.Integer,db.ForeignKey('user.Id'))
    gameMode = db.Column(db.String,nullable=False)
    timer = db.Column(db.Time)
    createdAt = db.Column(db.DateTime)
    updatedAt = db.Column(db.DateTime)
    gamePlayers = db.relationship('GamePlayers',backref = 'game',lazy = True)
    characterSheet = db.relationship('CharacterSheet',backref = 'game',lazy = True)

    def __init__ (self,name,userId,gameMode = '0000000000000000' ,timer = None):
        self.name = name
        self.userId = userId
        self.gameMode = gameMode
        self.timer = timer
        self.createdAt = datetime.datetime.utcnow()
        self.updatedAt = datetime.datetime.utcnow()
        


class GamePlayers(db.Model):
    __tablename__= 'gamePlayers'
    Id = db.Column(db.Integer,nullable=False,primary_key=True)
    userId = db.Column(db.Integer,db.ForeignKey('user.Id'))
    gameId = db.Column(db.Integer,db.ForeignKey('game.Id'))
    createdAt = db.Column(db.DateTime)
    updatedAt = db.Column(db.DateTime)
    
    def __init__ (self,userId,gameId):
        self.userId = userId
        self.gameId= gameId
        self.createdAt = datetime.datetime.utcnow()
        self.updatedAt = datetime.datetime.utcnow()





class Message(db.Model):
    __tablename__= 'message'
    Id = db.Column(db.Integer,nullable=False,primary_key=True)
    userId= db.Column(db.Integer,db.ForeignKey('user.Id'))
    gameId= db.Column(db.Integer,db.ForeignKey('game.Id'))
    content = db.Column(db.String)
    sendedAt = (db.DateTime)
   
    def __init__ (self,userId,gameId,content):
        self.userId= userId
        self.gameId = gameId
        self.content = content
        self.sendedAt = datetime.datetime.utcnow()
       

class PlayerCharacter(db.Model):
    __tablename__= 'playerCharacter'
    Id = db.Column(db.Integer,nullable=False,primary_key=True)
    playerId= db.Column(db.Integer,db.ForeignKey('gamePlayers.Id'))
    characterSheetId= db.Column(db.Integer,db.ForeignKey('characterSheet.Id'))
    createdAt = (db.DateTime)
    updatedAt = (db.DateTime)
   
    def __init__ (self,userId,gameId,content):
        self.userId= userId
        self.gameId = gameId
        self.content = content
        self.sendedAt = datetime.datetime.utcnow()



class User(db.Model):
    __tablename__= 'user'
    Id = db.Column(db.Integer,nullable=False,primary_key=True)
    userName = db.Column(db.String,unique=True,nullable=False)
    email = db.Column(db.String,unique=True,nullable=False)
    password = db.Column(db.String,nullable=False)
    biography = db.Column(db.String)
    birthDate = db.Column(db.Date)
    createdAt = db.Column(db.DateTime)
    updatedAt = db.Column(db.DateTime)
    games = db.relationship('Game',backref = 'user',lazy = True)
    gamePlayers = db.relationship('GamePlayers',backref = 'user',lazy = True)
    message = db.relationship('Message',backref = 'user',lazy = True)
    
    def __init__ (self,userName,email,password,biography = '',birthDate = None):
        self.userName = userName
        self.email = email
        self.password = password
        self.biography = biography
        self.birthDate = birthDate
        self.createdAt = datetime.datetime.utcnow()
        self.updatedAt = datetime.datetime.utcnow()


