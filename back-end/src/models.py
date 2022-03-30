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
       



class Attributes(db.Model):
    __tablename__= 'attributes'
    Id = db.Column(db.Integer,nullable=False,primary_key=True)
    characterSheetId= db.Column(db.Integer,db.ForeignKey('characterSheet.Id'))
    strenght = db.Column(db.Integer)
    modStrenght = db.Column(db.Integer)
    dexterity = db.Column(db.Integer)
    modDexterity = db.Column(db.Integer)
    constitution = db.Column(db.Integer)
    modConstitution = db.Column(db.Integer)
    intelligence = db.Column(db.Integer)
    modIntelligence = db.Column(db.Integer)
    wisdom = db.Column(db.Integer)
    modWisdom = db.Column(db.Integer)
    charisma = db.Column(db.Integer)
    modCharisma = db.Column(db.Integer)
    passiveWisdom = db.Column(db.Integer)
    armorClass = db.Column(db.Integer)
    initiative = db.Column(db.Integer)
    speed = db.Column(db.Integer)
    maxLife = db.Column(db.Integer)
    currentLife = db.Column(db.Integer)
    lifeDice = db.Column(db.String)
    createdAt = db.Column(db.DateTime)
    updatedAt = db.Column(db.DateTime)

    def __init__ (self,characterSheetId,strength = 0,modStrenght = 0,dexterity = 0,modDexterity = 0,
    constituition = 0,modConstitution = 0,intelligence = 0,modIntelligence = 0,wisdom = 0,modWisdom = 0,
    charisma = 0,modCharisma = 0,passiveWisdom = 0,armorClass = 0,initiative = 0,speed = 0,
    maxLife = 0,currentLife = 0,lifeDice = ''):
        self.characterSheetId = characterSheetId
        self.strenght = strenght
        self.modStrenght = modStrenght
        self.dexterity = dexterity
        self.modDexterity = modDexterity
        self.constitution = constituition
        self.modConstitution = modConstitution
        self.intelligence = intelligence
        self.modIntelligence = modIntelligence
        self.wisdom = wisdom
        self.modWisdom = modWisdom
        self.charisma = charisma
        self.modCharisma = modCharisma
        self.passiveWisdom = passiveWisdom
        self.armorClass = armorClass
        self.initiative = initiative
        self.speed = speed
        self.maxLife = maxLife
        self.currentLife = currentLife
        self.lifeDice = lifeDice
        self.createdAt = datetime.datetime.utcnow()
        self.updatedAt = datetime.datetime.utcnow()
       


class Bonus(db.Model):
    __tablename__= 'Bonus'
    Id = db.Column(db.Integer,nullable=False,primary_key=True)
    characterSheetId = db.Column(db.Integer,db.ForeignKey('characterSheet.Id'))
    savingThrows = db.Column(db.String)
    proficiencyBonus = db.Column(db.Integer)
    inspiration = db.Column(db.Integer)
    strength: db.Column(db.Integer)
    dexterity: db.Column(db.Integer)
    constituition: db.Column(db.Integer)
    intelligence: db.Column(db.Integer)
    wisdom: db.Column(db.Integer)
    charisma: db.Column(db.Integer)
    createdAt = db.Column(db.DateTime)
    updatedAt = db.Column(db.DateTime)

    def __init__ (self,characterSheetId,savingThrows = '',proficiencyBonus = 0,inspiration = 0 ,strength = 0,dexterity = 0,
    constituition = 0,intelligence = 0,wisdom = 0,charisma = 0):
        self.game = game
        self.characterName = characterName
        self.vClass = vClass
        self.race = race
        self.level = level
        self.background = background
        self.playerName = playerName
        self.alignment = alignment
        self.experience = experience
        self.createdAt = datetime.datetime.utcnow()
        self.updatedAt = datetime.datetime.utcnow()
       

class CharacterSheet(db.Model):
    __tablename__= 'characterSheet'
    Id = db.Column(db.Integer,nullable=False,primary_key=True)
    game = db.Column(db.Integer,db.ForeignKey('game.Id'))
    characterName = db.Column(db.String)
    vClass = db.Column(db.String)
    race = (db.DateTime)
    level = db.Column(db.Integer)
    background = db.Column(db.String)
    playerName = db.Column(db.String)
    alignment = db.Column(db.String)
    experience = db.Column(db.Integer)
    createdAt = db.Column(db.DateTime)
    updatedAt = db.Column(db.DateTime)
    playerCharacter = db.relationship('PlayerCharacter',backref = 'characterSheet',lazy = True)
    bonus = db.relationship('Bonus',backref = 'characterSheet',lazy = True)
    skills = db.relationship('Skills',backref = 'characterSheet',lazy = True)
    attributes = db.relationship('Attributes',backref = 'characterSheet',lazy = True)
    strokes = db.relationship('Strokes',backref = 'characterSheet',lazy = True)
    attacksSpellcasting = db.relationship('AttackSpellcasting',backref = 'characterSheet',lazy = True)
    equipment = db.relationship('Equipment',backref = 'characterSheet',lazy = True)

    def __init__ (self,game,characterName,vClass,race,level,background,playerName,alignment,experience):
        self.game = game
        self.characterName = characterName
        self.vClass = vClass
        self.race = race
        self.level = level
        self.background = background
        self.playerName = playerName
        self.alignment = alignment
        self.experience = experience
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
    
    def __init__ (self,userName,gameId):
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
       


class Skills(db.Model):
    __tablename__= 'skills'
    Id = db.Column(db.Integer,nullable=False,primary_key=True)
    characterSheetId = db.Column(db.Integer,db.ForeignKey('characterSheet.Id'))
    skills = db.Column(db.String)
    acrobatics = db.Column(db.Integer)
    animal_Handling = db.Column(db.Integer)
    arcana = db.Column(db.Integer)
    athletics = db.Column(db.Integer)
    deception = db.Column(db.Integer)
    history = db.Column(db.Integer)
    insight = db.Column(db.Integer)
    intimidation = db.Column(db.Integer)
    investigation = db.Column(db.Integer)
    medicine = db.Column(db.Integer)
    nature = db.Column(db.Integer)
    perception = db.Column(db.Integer)
    performance = db.Column(db.Integer)
    persuasion = db.Column(db.Integer)
    religion = db.Column(db.Integer)
    sleight_of_hand = db.Column(db.Integer)
    stealth = db.Column(db.Integer)
    survival = db.Column(db.Integer)
    createdAt = db.Column(db.DateTime)
    updatedAt = db.Column(db.DateTime)

    def __init__ (self,characterSheetId,skills = 0,acrobatics = 0,animal_Handling = 0,arcana = 0,athletics = 0,deception = 0,
    history = 0,insight = 0,intimidation = 0,investigation = 0,medicine = 0,nature = 0,perception = 0,performance = 0,persuasion = 0,
    religion = 0,sleight_of_hand = 0,stealth = 0,survival = 0):
        self.characterSheetId = characterSheetId
        self.skills = skills
        self.acrobatics = acrobatics
        self.animal_Handling = animal_Handling
        self.arcana = arcana
        self.athletics = athletics
        self.deception = deception
        self.history = history
        self.insight = insight
        self.intimidation = intimidation
        self.investigation = investigation
        self.medicine = medicine
        self.nature = nature
        self.persuasion = persuasion
        self.religion = religion
        self.sleight_of_hand = sleight_of_hand
        self.stealth = stealth
        self.survival = survival
        self.createdAt = datetime.datetime.utcnow()
        self.updatedAt = datetime.datetime.utcnow()
       


class Strokes(db.Model):
    __tablename__= 'strokes'
    Id = db.Column(db.Integer,nullable=False,primary_key=True)
    characterSheetId= db.Column(db.Integer,db.ForeignKey('characterSheet.Id'))
    personalityTraits = db.Column(db.String)
    ideals = db.Column(db.String)
    bonds = db.Column(db.String)
    flaws = db.Column(db.String)
    otherProeficienciesLanguages = db.Column(db.String)
    featuresTraits = db.Column(db.String)
    createdAt = db.Column(db.DateTime)
    updatedAt = db.Column(db.DateTime)

    def __init__ (self,characterSheetId,personalityTraits = '',ideals = '',bonds = '',flaws = '',otherProeficienciesLanguages = '',featuresTraits = ''):
        self.characterSheetId = characterSheetId
        self.personalityTraits = personalityTraits
        self.ideals = ideals
        self.bonds = bonds
        self.flaws = flaws
        self.otherProeficienciesLanguages = otherProeficienciesLanguages
        self.featuresTraits = featuresTraits
        self.createdAt = datetime.datetime.utcnow()
        self.updatedAt = datetime.datetime.utcnow()
       



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


