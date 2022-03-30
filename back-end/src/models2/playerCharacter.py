from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

import datetime

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
       
