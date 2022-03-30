from flask_sqlalchemy import SQLAlchemy
import datetime

db = SQLAlchemy()


class CharacterSheet(db.Model):
    __tablename__= 'characterSheet'
    Id = db.Column(db.Integer,nullable=False,primary_key)
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
       
