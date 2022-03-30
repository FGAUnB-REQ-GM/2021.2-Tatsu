from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
import datetime


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
       
