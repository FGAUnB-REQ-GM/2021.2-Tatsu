from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

import datetime


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


