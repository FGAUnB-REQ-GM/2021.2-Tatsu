from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

import datetime


class User(db.Model):
    __tablename__= 'user'
    Id = db.Column(db.Integer,nullable=False,primary_key=True)
    userName = db.Column(db.String,unique=True,nullable=False)
    email = db.Column(db.String,unique=True,nullable=False)
    password = db.Column(db.String,nullable=False)
    biography = db.Column(db.String)
    birthDate = db.Column(db.Date)
    createdAt = db.Column(db.DateTime)
    updatedAt = db.Column(db.DateTime)
    games = db.relationship('Game',backref = 'user',lazy = True)
    gamePlayers = db.relationship('GamePlayers',backref = 'user',lazy = True)
    message = db.relationship('Message',backref = 'user',lazy = True)
    
    def __init__ (self,userName,email,password,biography = '',birthDate = None):
        self.userName = userName
        self.email = email
        self.password = password
        self.biography = biography
        self.birthDate = birthDate
        self.createdAt = datetime.datetime.utcnow()
        self.updatedAt = datetime.datetime.utcnow()


