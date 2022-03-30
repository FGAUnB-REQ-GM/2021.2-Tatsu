from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

import datetime


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
        

