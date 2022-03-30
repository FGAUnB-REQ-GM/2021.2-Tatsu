from flask_sqlalchemy import SQLAlchemy
import datetime

db = SQLAlchemy()


class Strokes(db.Model):
    __tablename__= 'strokes'
    Id = db.Column(db.Integer,nullable=False,primary_key)
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
       
