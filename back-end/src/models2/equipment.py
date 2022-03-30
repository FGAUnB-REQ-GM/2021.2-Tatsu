from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

import datetime

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
       
