from flask_sqlalchemy import SQLAlchemy
import datetime

db = SQLAlchemy()


class Skills(db.Model):
    __tablename__= 'skills'
    Id = db.Column(db.Integer,nullable=False,primary_key)
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
       
