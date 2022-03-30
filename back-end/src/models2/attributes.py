from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

import datetime


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
       
