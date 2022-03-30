from flask_sqlalchemy import SQLAlchemy
import datetime

db = SQLAlchemy()


class Bonus(db.Model):
    __tablename__= 'Bonus'
    Id = db.Column(db.Integer,nullable=False,primary_key)
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
       
