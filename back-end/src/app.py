from hashlib import new
from flask import Flask, request, jsonify, redirect, url_for
import jwt
from utils import *
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import json
from werkzeug.security import generate_password_hash, check_password_hash
import datetime

import models

POSTGRES = {
    'user': 'tatsu_user',
    'pw': 'tatsu_pass',
    'db': 'Tatsu',
    'host': 'db',
    'port': '5432'
}

app = Flask(__name__)

CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://%(user)s:\
%(pw)s@%(host)s:%(port)s/%(db)s' % POSTGRES

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = models.db 

db.init_app(app)


@app.route("/register", methods=["POST"])
def createUser():
    if request.is_json:
        # try:
        data = request.get_json()
        newUser = models.User(userName=data['username'],email=data["email"], password=generate_password_hash(data['password']))
        if('biography' in data):
            newUser.biography= data['biography']
        if('birthDate' in data):
            newUser.birthDate= data['birthDate']
        db.session.add(newUser)
        db.session.commit()
        token = encode_auth_token(newUser.Id)
        token=token.decode('utf-8')
        return jsonify({"message": f"O usuário {newUser.userName} foi criado com sucesso.","token": f"{token}",'expiration': f"{datetime.datetime.utcnow() + datetime.timedelta(seconds=3600)}"}), 200
        #except Exception:
        #    return jsonify({"error": "Não foi possível criar um usuário"}),400
    else:
        return jsonify({"error": "A requisição precisa está no formato JSON"}),400


@app.route("/login", methods=["GET"])
def logIn():
    try:
        auth = request.authorization
        if not auth or not auth.username or not auth.password:
            return jsonify({'message': 'Não foi possível verificar o usuário'}), 401
        user = models.User.query.filter(db.or_(models.User.userName == auth.username, models.User.email == auth.username)).one()
        if not user:
            return jsonify({'message': 'Usuário não encontrado'}), 401

        if user and check_password_hash(user.password, auth.password):
            token = encode_auth_token(user.Id)
            return jsonify({'message': 'Usuário validado com sucesso!', 'token': token.decode('UTF-8'),
                            'expiration': datetime.datetime.utcnow() + datetime.timedelta(seconds=3600)})

        return jsonify({'message': 'Não foi possível verificar o usuário'}), 401
    except Exception:
        return jsonify({'message': 'Não foi possível verificar o usuário'}), 401


@app.route("/user", methods=["PUT"])
def updateUser():
    if request.is_json:
        try:
            token = request.headers["authorization"]
            if(token):
                token= token.replace("Bearer ","")
                userId = decode_auth_token(token)
                data = request.get_json()
                user = models.User.query.filter(models.User.Id==userId).one()
                if('biography' in data):
                    user.biography= data['biography']
                if('birthDate' in data):
                    user.birthDate= datetime.datetime.strptime(data['birthDate'], '%d-%m-%Y')
                user.updatedAt=datetime.datetime.utcnow()
                db.session.add(user)
                db.session.commit()
                return jsonify({"message": f"O usuário {user.userName} foi atualizado com sucesso."}), 200
            return jsonify({"error": "Não foi possível atualizar um usuário"}),400
        except Exception:
            return jsonify({"error": "Não foi possível atualizar um usuário"}),400
    else:
        return jsonify({"error": "A requisição precisa está no formato JSON"}),400

@app.route("/user", methods=["GET"])
def readUser():
    try:
        token = request.headers["authorization"]
        if(token):
            token= token.replace("Bearer ","")
            userId = decode_auth_token(token)
            user = models.User.query.filter(models.User.Id==userId).one()
            results={
                "id":user.Id,
                "username":user.userName,
                "email":user.email,
                "biography":user.biography,
                "birthDate":user.birthDate
            }
            return jsonify(results), 200
        return jsonify({"error": "Não foi possível atualizar um usuário"}),400
    except Exception:
        return jsonify({"error": "Não foi possível atualizar um usuário"}),400

@app.route("/game", methods=["POST"])
def createGame():
    if request.is_json:
        try:
            token = request.headers["authorization"]
            if(token):
                token= token.replace("Bearer ","")
                userId = decode_auth_token(token)
                data = request.get_json()
                newGame = models.Game(data["name"],userId)
                if('gameMode' in data):
                    newGame.gameMode= data['gameMode']
                if('timer' in data):
                    newGame.timer= data['timer']
                db.session.add(newGame)
                db.session.commit()
                return jsonify({"message": f"O ficheiro {newGame.name} foi criado com sucesso."}), 200
            return jsonify({"error": "Não foi possível atualizar o ficheiro"}),400
        except Exception:
            return jsonify({"error": "Não foi possível atualizar o ficheiro"}),400
    else:
        return jsonify({"error": "A requisição precisa está no formato JSON"}),400

@app.route("/games", methods=["GET"])
def readGames():
    try:
        token = request.headers["authorization"]
        if(token):
            token= token.replace("Bearer ","")
            userId = decode_auth_token(token)

            games = models.Game.query.filter(models.Game.userId==userId).all()

            user = models.User.query.filter(models.User.Id==userId).one()

            results=[]
            for game in games:
                results.append({
                    "id":game.Id,
                    "name":game.name,
                    "gameMode":game.gameMode,
                    "createdAt":game.createdAt.strftime("%d/%m/%Y %H:%M:%S"),
                    "author":user.userName,
                })

            return jsonify(results), 200
        return jsonify({"error": "Não foi possível ler o ficheiro"}),400
    except Exception:
        return jsonify({"error": "Não foi possível ler o ficheiro"}),400

@app.route("/game/<gameId>", methods=["GET"])
def readGame(gameId):
    #try:
    token = request.headers["authorization"]
    if(token):
        token= token.replace("Bearer ","")
        userId = decode_auth_token(token)
        game = models.Game.query.filter(models.Game.Id==gameId).one()
        if(game.userId!=userId):
            return jsonify({"error": "O usuário não tem permissão para acessar este ficheiro"}),400
        characterSheets = models.CharacterSheet.query.filter(models.CharacterSheet.gameId==game.Id).all()
        if not characterSheets:
            characterSheets=[]
        characterSheetsResults=[]
        for characterSheet in characterSheets:
            characterSheetsResults.append({
                "id":characterSheet.Id,
                "characterName":characterSheet.characterName,
                "class":characterSheet.vClass,
                "level":characterSheet.level,
                "background":characterSheet.background,
                "playerName":characterSheet.playerName,
                "alignment":characterSheet.alignment,
                "experience":characterSheet.experience,
                "life":characterSheet.attCurrentLife,
            })
        results={
            "id":game.Id,
            "name":game.name,
            "gameMode":game.gameMode,
            "charactersSheet":characterSheetsResults
        }

        return jsonify(results), 200
    return jsonify({"error": "Não foi possível ler o ficheiro"}),400
    #except Exception:
    #    return jsonify({"error": "Não foi possível ler o ficheiro"}),400


@app.route("/game/<gameId>", methods=["PUT"])
def updateGame(gameId):
    if request.is_json:
        try:
            token = request.headers["authorization"]
            if(token):
                token= token.replace("Bearer ","")
                userId = decode_auth_token(token)
                game = models.Game.query.filter(models.Game.Id==gameId).one()
                data = request.get_json()
                if(game.userId!=userId):
                    return jsonify({"error": "O usuário não tem permissão para editar este ficheiro"}),400
                if('name' in data):
                    game.name= data['name']
                if('gameMode' in data):
                    game.gameMode= data['gameMode']
                if('timer' in data):
                    game.timer= data['timer']
                db.session.add(game)
                db.session.commit()
                return jsonify({"message": f"O ficheiro {game.name} foi atualizado com sucesso."}), 200
            return jsonify({"error": "Não foi possível atualizar o ficheiro"}),400
        except Exception:
            return jsonify({"error": "Não foi possível atualizar o ficheiro"}),400
    else:
        return jsonify({"error": "A requisição precisa está no formato JSON"}),400

@app.route("/game/<gameId>", methods=["DELETE"])
def deleteGame(gameId):
    try:
        token = request.headers["authorization"]
        if(token):
            token= token.replace("Bearer ","")
            userId = decode_auth_token(token)
            game = models.Game.query.filter(models.Game.Id==gameId).one()
            if(game.userId!=userId):
                return jsonify({"error": "O usuário não tem permissão para editar este ficheiro"}),400
            db.session.delete(game)
            db.session.commit()
            return jsonify({"message": f"O ficheiro {game.name} foi deletado com sucesso."}), 200
        return jsonify({"error": "Não foi possível atualizar o ficheiro"}),400
    except Exception:
        return jsonify({"error": "Não foi possível atualizar o ficheiro"}),400


@app.route("/characterSheet", methods=["POST"])
def createCharacterSheet():
    if request.is_json:
        try:
            token = request.headers["authorization"]
            if(token):
                token= token.replace("Bearer ","")
                userId = decode_auth_token(token)
                data = request.get_json()
                game = models.Game.query.filter(models.Game.Id==int(data["gameId"])).one()
                if(game.userId!=userId):
                    return jsonify({"error": "O usuário não tem permissão para criar esta ficha"}),400
                newCharacterSheet = models.CharacterSheet(game.Id,data["characterName"],data["class"],data["race"],data["background"],data["playerName"],data["alignment"])
                if('level' in data):
                    newCharacterSheet.level= data['level']
                if('experience' in data):
                    newCharacterSheet.experience= data['experience']
                if('bnSavingThrows' in data):
                    newCharacterSheet.bnSavingThrows= data['bnSavingThrows']
                if('bnProficiencyBonus' in data):
                    newCharacterSheet.bnProficiencyBonus= data['bnProficiencyBonus']
                if('bnInspiration' in data):
                    newCharacterSheet.bnInspiration= data['bnInspiration']
                if('bnStrength' in data):
                    newCharacterSheet.bnStrength= data['bnStrength']
                if('bnDexterity' in data):
                    newCharacterSheet.bnDexterity= data['bnDexterity']
                if('bnConstituition' in data):
                    newCharacterSheet.bnConstituition= data['bnConstituition']
                if('bnIntelligence' in data):
                    newCharacterSheet.bnIntelligence= data['bnIntelligence']
                if('bnWisdom' in data):
                    newCharacterSheet.bnWisdom= data['bnWisdom']
                if('bnCharisma' in data):
                    newCharacterSheet.bnCharisma= data['bnCharisma']
                if('skSkills' in data):
                    newCharacterSheet.skSkills= data['skSkills']
                if('skAcrobatics' in data):
                    newCharacterSheet.skAcrobatics= data['skAcrobatics']
                if('skAnimalHandling' in data):
                    newCharacterSheet.skAnimalHandling= data['skAnimalHandling']
                if('skArcana' in data):
                    newCharacterSheet.skArcana= data['skArcana']
                if('skAthletics' in data):
                    newCharacterSheet.skAthletics= data['skAthletics']
                if('skDeception' in data):
                    newCharacterSheet.skDeception= data['skDeception']
                if('skHistory' in data):
                    newCharacterSheet.skHistory= data['skHistory']
                if('skInsight' in data):
                    newCharacterSheet.skInsight= data['skInsight']
                if('skIntimidation' in data):
                    newCharacterSheet.skIntimidation= data['skIntimidation']
                if('skInvestigation' in data):
                    newCharacterSheet.skInvestigation= data['skInvestigation']
                if('skMedicine' in data):
                    newCharacterSheet.skMedicine= data['skMedicine']
                if('skNature' in data):
                    newCharacterSheet.skNature= data['skNature']
                if('skPersuasion' in data):
                    newCharacterSheet.skPersuasion= data['skPersuasion']
                if('skReligion' in data):
                    newCharacterSheet.skReligion= data['skReligion']
                if('skPerception' in data):
                    newCharacterSheet.skPerception= data['skPerception']
                if('skPerformance' in data):
                    newCharacterSheet.skPerformance= data['skPerformance']
                if('skSleightOfHand' in data):
                    newCharacterSheet.skSleightOfHand= data['skSleightOfHand']
                if('skStealth' in data):
                    newCharacterSheet.skStealth= data['skStealth']
                if('skSurvival' in data):
                    newCharacterSheet.skSurvival= data['skSurvival']
                if('attStrength' in data):
                    newCharacterSheet.attStrength= data['attStrength']
                if('attModStrength' in data):
                    newCharacterSheet.attModStrength= data['attModStrength']
                if('attDexterity' in data):
                    newCharacterSheet.attDexterity= data['attDexterity']
                if('attModDexterity' in data):
                    newCharacterSheet.attModDexterity= data['attModDexterity']
                if('attConstitution' in data):
                    newCharacterSheet.attConstitution= data['attConstitution']
                if('attModConstitution' in data):
                    newCharacterSheet.attModConstitution= data['attModConstitution']
                if('attIntelligence' in data):
                    newCharacterSheet.attIntelligence= data['attIntelligence']
                if('modIntelligence' in data):
                    newCharacterSheet.modIntelligence= data['modIntelligence']
                if('attWisdom' in data):
                    newCharacterSheet.attWisdom= data['attWisdom']
                if('attModWisdom' in data):
                    newCharacterSheet.attModWisdom= data['attModWisdom']
                if('attCharisma' in data):
                    newCharacterSheet.attCharisma= data['attCharisma']
                if('attModCharisma' in data):
                    newCharacterSheet.attModCharisma= data['attModCharisma']
                if('attPassiveWisdom' in data):
                    newCharacterSheet.attPassiveWisdom= data['attPassiveWisdom']
                if('armorClass' in data):
                    newCharacterSheet.armorClass= data['armorClass']
                if('attInitiative' in data):
                    newCharacterSheet.attInitiative= data['attInitiative']
                if('attSpeed' in data):
                    newCharacterSheet.attSpeed= data['attSpeed']
                if('attCurrentLife' in data):
                    newCharacterSheet.attCurrentLife= data['attCurrentLife']
                if('attLifeDice' in data):
                    newCharacterSheet.attLifeDice= data['attLifeDice']
                if('stkPersonalityTraits' in data):
                    newCharacterSheet.stkPersonalityTraits= data['stkPersonalityTraits']
                if('stkIdeals' in data):
                    newCharacterSheet.stkIdeals= data['stkIdeals']
                if('stkBonds' in data):
                    newCharacterSheet.stkBonds= data['stkBonds']
                if('stkFlaws' in data):
                    newCharacterSheet.stkFlaws= data['stkFlaws']
                if('stkOtherProeficienciesLanguages' in data):
                    newCharacterSheet.stkOtherProeficienciesLanguages= data['stkOtherProeficienciesLanguages']
                if('stkFeaturesTraits' in data):
                    newCharacterSheet.stkFeaturesTraits= data['stkFeaturesTraits']

                db.session.add(newCharacterSheet)
                db.session.commit()

                return jsonify({"message": f"A ficha {newCharacterSheet.characterName} foi criada com sucesso.","id":newCharacterSheet.Id}), 200
            return jsonify({"error": "Não foi possível criar a ficha"}),400
        except Exception:
            return jsonify({"error": "Não foi possível criar a ficha"}),400
    else:
        return jsonify({"error": "A requisição precisa está no formato JSON"}),400

@app.route("/characterSheet/<characterSheetId>", methods=["GET"])
def readCharacterSheet(characterSheetId):
    try:
        token = request.headers["authorization"]
        if(token):
            token= token.replace("Bearer ","")
            userId = decode_auth_token(token)
            characterSheet = models.CharacterSheet.query.filter(models.CharacterSheet.Id==characterSheetId).one()

            game = models.Game.query.filter(models.Game.Id==characterSheet.gameId).one()
            if(game.userId!=userId):
                return jsonify({"error": "O usuário não tem permissão para acessar este ficheiro"}),400

            attacksSpellcastings=models.AttacksSpellcasting.query.filter(models.AttacksSpellcasting.characterSheetId==characterSheet.Id).all()

            equipments=models.Equipment.query.filter(models.Equipment.characterSheetId==characterSheet.Id).all()
            
            attacksSpellcastingResults=[]
            equipmentResults=[]

            for attackSpellcasting in attacksSpellcastings:
                attacksSpellcastingResults.append({
                    "id":attackSpellcasting.Id,
                    "name":attackSpellcasting.name,
                    "attackBonus":attackSpellcasting.attackBonus,
                    "damageType":attackSpellcasting.damageType
                })


            for equipment in equipments:
                equipmentResults.append({
                    "id":equipment.Id,
                    "name":equipment.name,
                    "description":equipment.description,
                    "attunement":equipment.attunement,
                    "cp":equipment.cp,
                    "sp":equipment.sp,
                    "ep":equipment.ep,
                    "gp":equipment.gp,
                    "pp":equipment.pp
                })

            results={
                    "id":characterSheet.Id,
                    "characterName":characterSheet.characterName,
                    "class":characterSheet.vClass,
                    "level":characterSheet.level,
                    "background":characterSheet.background,
                    "playerName":characterSheet.playerName,
                    "alignment":characterSheet.alignment,
                    "experience":characterSheet.experience,
                    "bnSavingThrows":characterSheet.bnSavingThrows,
                    "bnProficiencyBonus":characterSheet.bnProficiencyBonus,
                    "bnInspiration":characterSheet.bnInspiration,
                    "bnStrength":characterSheet.bnStrength,
                    "bnDexterity":characterSheet.bnDexterity,
                    "bnConstituition":characterSheet.bnConstituition,
                    "bnIntelligence":characterSheet.bnIntelligence,
                    "bnWisdom":characterSheet.bnWisdom,
                    "bnCharisma":characterSheet.bnCharisma,
                    "skSkills":characterSheet.skSkills,
                    "skAcrobatics":characterSheet.skAcrobatics,
                    "skAnimalHandling":characterSheet.skAnimalHandling,
                    "skArcana":characterSheet.skArcana,
                    "skAthletics":characterSheet.skAthletics,
                    "skDeception":characterSheet.skDeception,
                    "skHistory":characterSheet.skHistory,
                    "skInsight":characterSheet.skInsight,
                    "skIntimidation":characterSheet.skIntimidation,
                    "skInvestigation":characterSheet.skInvestigation,
                    "skMedicine":characterSheet.skMedicine,
                    "skNature":characterSheet.skNature,
                    "skPersuasion":characterSheet.skPersuasion,
                    "skReligion":characterSheet.skReligion,
                    "skPerception":characterSheet.skPerception,
                    "skPerformance":characterSheet.skPerformance,
                    "skSleightOfHand":characterSheet.skSleightOfHand,
                    "skStealth":characterSheet.skStealth,
                    "skSurvival":characterSheet.skSurvival,
                    "attStrength":characterSheet.attStrength,
                    "attModStrength":characterSheet.attModStrength,
                    "attDexterity":characterSheet.attDexterity,
                    "attModDexterity":characterSheet.attModDexterity,
                    "constitution":characterSheet.attConstitution,
                    "attModConstitution":characterSheet.attModConstitution,
                    "attIntelligence":characterSheet.attIntelligence,
                    "attModIntelligence":characterSheet.attModIntelligence,
                    "attWisdom":characterSheet.attWisdom,
                    "attModWisdom":characterSheet.attModWisdom,
                    "attCharisma":characterSheet.attCharisma,
                    "attModCharisma":characterSheet.attModCharisma,
                    "attPassiveWisdom":characterSheet.attPassiveWisdom,
                    "attArmorClass":characterSheet.attArmorClass,
                    "attInitiative":characterSheet.attInitiative,
                    "attSpeed":characterSheet.attSpeed,
                    "attMaxLife":characterSheet.attMaxLife,
                    "attCurrentLife":characterSheet.attCurrentLife,
                    "attLifeDice":characterSheet.attLifeDice,
                    "stkPersonalityTraits":characterSheet.stkPersonalityTraits,
                    "stkIdeals":characterSheet.stkIdeals,
                    "stkBonds":characterSheet.stkBonds,
                    "stkFlaws":characterSheet.stkFlaws,
                    "stkOtherProeficienciesLanguages":characterSheet.stkOtherProeficienciesLanguages,
                    "stkFeaturesTraits":characterSheet.stkFeaturesTraits,
                    "attacksAndSpellcasting":attacksSpellcastingResults,
                    "equipments":equipmentResults
            }


            return jsonify(results), 200
        return jsonify({"error": "Não foi possível ler o ficheiro"}),400
    except Exception:
        return jsonify({"error": "Não foi possível ler o usuário"}),400


@app.route("/characterSheet/<characterSheetId>", methods=["PUT"])
def updateCharacterSheet(characterSheetId):
    if request.is_json:
        try:
            token = request.headers["authorization"]
            if(token):
                token= token.replace("Bearer ","")
                userId = decode_auth_token(token)
                characterSheet = models.CharacterSheet.query.filter(models.CharacterSheet.Id==characterSheetId).one()

                game = models.Game.query.filter(models.Game.Id==characterSheet.gameId).one()
                if(game.userId!=userId):
                    return jsonify({"error": "O usuário não tem permissão para acessar este ficheiro"}),400
                data = request.get_json()
                

                if('characterName' in data):
                    characterSheet.characterName= data['characterName']
                if('class' in data):
                    characterSheet.vClass= data['class']
                if('race' in data):
                    characterSheet.race= data['race']
                if('background' in data):
                    characterSheet.background= data['background']
                if('playerName' in data):
                    characterSheet.playerName= data['playerName']
                if('alignment' in data):
                    characterSheet.alignment= data['alignment']
                if('level' in data):
                    characterSheet.level= data['level']
                if('experience' in data):
                    characterSheet.experience= data['experience']
                if('bnSavingThrows' in data):
                    characterSheet.bnSavingThrows= data['bnSavingThrows']
                if('bnProficiencyBonus' in data):
                    characterSheet.bnProficiencyBonus= data['bnProficiencyBonus']
                if('bnInspiration' in data):
                    characterSheet.bnInspiration= data['bnInspiration']
                if('bnStrength' in data):
                    characterSheet.bnStrength= data['bnStrength']
                if('bnDexterity' in data):
                    characterSheet.bnDexterity= data['bnDexterity']
                if('bnConstituition' in data):
                    characterSheet.bnConstituition= data['bnConstituition']
                if('bnIntelligence' in data):
                    characterSheet.bnIntelligence= data['bnIntelligence']
                if('bnWisdom' in data):
                    characterSheet.bnWisdom= data['bnWisdom']
                if('bnCharisma' in data):
                    characterSheet.bnCharisma= data['bnCharisma']
                if('skSkills' in data):
                    characterSheet.skSkills= data['skSkills']
                if('skAcrobatics' in data):
                    characterSheet.skAcrobatics= data['skAcrobatics']
                if('skAnimalHandling' in data):
                    characterSheet.skAnimalHandling= data['skAnimalHandling']
                if('skArcana' in data):
                    characterSheet.skArcana= data['skArcana']
                if('skAthletics' in data):
                    characterSheet.skAthletics= data['skAthletics']
                if('skDeception' in data):
                    characterSheet.skDeception= data['skDeception']
                if('skHistory' in data):
                    characterSheet.skHistory= data['skHistory']
                if('skInsight' in data):
                    characterSheet.skInsight= data['skInsight']
                if('skIntimidation' in data):
                    characterSheet.skIntimidation= data['skIntimidation']
                if('skInvestigation' in data):
                    characterSheet.skInvestigation= data['skInvestigation']
                if('skMedicine' in data):
                    characterSheet.skMedicine= data['skMedicine']
                if('skNature' in data):
                    characterSheet.skNature= data['skNature']
                if('skPersuasion' in data):
                    characterSheet.skPersuasion= data['skPersuasion']
                if('skReligion' in data):
                    characterSheet.skReligion= data['skReligion']
                if('skPerception' in data):
                    characterSheet.skPerception= data['skPerception']
                if('skPerformance' in data):
                    characterSheet.skPerformance= data['skPerformance']
                if('skSleightOfHand' in data):
                    characterSheet.skSleightOfHand= data['skSleightOfHand']
                if('skStealth' in data):
                    characterSheet.skStealth= data['skStealth']
                if('skSurvival' in data):
                    characterSheet.skSurvival= data['skSurvival']
                if('attStrength' in data):
                    characterSheet.attStrength= data['attStrength']
                if('attModStrength' in data):
                    characterSheet.attModStrength= data['attModStrength']
                if('attDexterity' in data):
                    characterSheet.attDexterity= data['attDexterity']
                if('attModDexterity' in data):
                    characterSheet.attModDexterity= data['attModDexterity']
                if('attConstitution' in data):
                    characterSheet.attConstitution= data['attConstitution']
                if('attModConstitution' in data):
                    characterSheet.attModConstitution= data['attModConstitution']
                if('attIntelligence' in data):
                    characterSheet.attIntelligence= data['attIntelligence']
                if('modIntelligence' in data):
                    characterSheet.modIntelligence= data['modIntelligence']
                if('attWisdom' in data):
                    characterSheet.attWisdom= data['attWisdom']
                if('attModWisdom' in data):
                    characterSheet.attModWisdom= data['attModWisdom']
                if('attCharisma' in data):
                    characterSheet.attCharisma= data['attCharisma']
                if('attModCharisma' in data):
                    characterSheet.attModCharisma= data['attModCharisma']
                if('attPassiveWisdom' in data):
                    characterSheet.attPassiveWisdom= data['attPassiveWisdom']
                if('armorClass' in data):
                    characterSheet.armorClass= data['armorClass']
                if('attInitiative' in data):
                    characterSheet.attInitiative= data['attInitiative']
                if('attSpeed' in data):
                    characterSheet.attSpeed= data['attSpeed']
                if('attCurrentLife' in data):
                    characterSheet.attCurrentLife= data['attCurrentLife']
                if('attLifeDice' in data):
                    characterSheet.attLifeDice= data['attLifeDice']
                if('stkPersonalityTraits' in data):
                    characterSheet.stkPersonalityTraits= data['stkPersonalityTraits']
                if('stkIdeals' in data):
                    characterSheet.stkIdeals= data['stkIdeals']
                if('stkBonds' in data):
                    characterSheet.stkBonds= data['stkBonds']
                if('stkFlaws' in data):
                    characterSheet.stkFlaws= data['stkFlaws']
                if('stkOtherProeficienciesLanguages' in data):
                    characterSheet.stkOtherProeficienciesLanguages= data['stkOtherProeficienciesLanguages']
                if('stkFeaturesTraits' in data):
                    characterSheet.stkFeaturesTraits= data['stkFeaturesTraits']

                db.session.add(characterSheet)
                db.session.commit()

                return jsonify({"message": f"A ficha {characterSheet.characterName} foi atualizada com sucesso."}), 200
            return jsonify({"error": "Não foi possível atualizar a ficha"}),400
        except Exception:
            return jsonify({"error": "Não foi possível atualizar a ficha"}),400
    else:
        return jsonify({"error": "A requisição precisa está no formato JSON"}),400

@app.route("/characterSheet/<characterSheetId>", methods=["DELETE"])
def deleteCharacterSheet(characterSheetId):
    try:
        token = request.headers["authorization"]
        if(token):
            token= token.replace("Bearer ","")
            userId = decode_auth_token(token)
            characterSheet = models.CharacterSheet.query.filter(models.CharacterSheet.Id==characterSheetId).one()

            game = models.Game.query.filter(models.Game.Id==characterSheet.gameId).one()
            if(game.userId!=userId):
                return jsonify({"error": "O usuário não tem permissão para acessar esta ficha"}),400

            attacksSpellcastings = models.AttacksSpellcasting.query.filter(models.AttacksSpellcasting.characterSheetId==characterSheetId).all()
            equipments =  models.Equipment.query.filter(models.Equipment.characterSheetId==characterSheetId).all()
            
            for attacksSpellcasting in attacksSpellcastings:
                db.session.delete(attacksSpellcasting)

            for equipment in equipments:
                db.session.delete(equipment)

            db.session.delete(characterSheet)
            db.session.commit()
            return jsonify({"message": f"O ficheiro {characterSheet.characterName} foi deletado com sucesso."}), 200
        return jsonify({"error": "Não foi possível deletar a ficha"}),400
    except Exception:
        return jsonify({"error": "Não foi possível deletar a ficha"}),400


@app.route("/attacksAndSpellcasting", methods=["POST"])
def createAttack():
    if request.is_json:
        try:
            token = request.headers["authorization"]
            if(token):
                token= token.replace("Bearer ","")
                data = request.get_json()
                userId = decode_auth_token(token)
                characterSheet = models.CharacterSheet.query.filter(models.CharacterSheet.Id==data["characterSheetId"]).one()

                game = models.Game.query.filter(models.Game.Id==characterSheet.gameId).one()
                if(game.userId!=userId):
                    return jsonify({"error": "O usuário não tem permissão para acessar esta ficha"}),400
                newAttack = models.AttacksSpellcasting(characterSheet.Id)
                if('name' in data):
                    newAttack.name= data['name']
                if('attackBonus' in data):
                    newAttack.attackBonus= data['attackBonus']
                if('damageType' in data):
                    newAttack.damageType= data['damageType']
                db.session.add(newAttack)
                db.session.commit()
                return jsonify({"message": f"O ficheiro {newAttack.name} foi criado com sucesso."}), 200
            return jsonify({"error": "Não foi possível atualizar o ficheiro"}),400
        except Exception:
            return jsonify({"error": "Não foi possível atualizar o ficheiro"}),400
    else:
        return jsonify({"error": "A requisição precisa está no formato JSON"}),400


@app.route("/attacksAndSpellcasting/<attackAndSpellcastingId>", methods=["PUT"])
def updateAttack(attackAndSpellcastingId):
    if request.is_json:
        try:
            token = request.headers["authorization"]
            if(token):
                token= token.replace("Bearer ","")
                data = request.get_json()
                userId = decode_auth_token(token)

                attack = models.AttacksSpellcasting.query.filter(models.AttacksSpellcasting.Id==attackAndSpellcastingId).one()

                characterSheet = models.CharacterSheet.query.filter(models.CharacterSheet.Id==attack.characterSheetId).one()

                game = models.Game.query.filter(models.Game.Id==characterSheet.gameId).one()
                if(game.userId!=userId):
                    return jsonify({"error": "O usuário não tem permissão para acessar esta ficha"}),400

                if('name' in data):
                    attack.name= data['name']
                if('attackBonus' in data):
                    attack.attackBonus= data['attackBonus']
                if('damageType' in data):
                    attack.damageType= data['damageType']
                db.session.add(attack)
                db.session.commit()
                return jsonify({"message": f"O ficheiro {attack.name} foi atualizado com sucesso."}), 200
            return jsonify({"error": "Não foi possível atualizar o ficheiro"}),400
        except Exception:
            return jsonify({"error": "Não foi possível atualizar o ficheiro"}),400
    else:
        return jsonify({"error": "A requisição precisa está no formato JSON"}),400

@app.route("/attacksAndSpellcasting/<attackAndSpellcastingId>", methods=["DELETE"])
def deleteAttack(attackAndSpellcastingId):
    try:
        token = request.headers["authorization"]
        if(token):
            token= token.replace("Bearer ","")
            data = request.get_json()
            userId = decode_auth_token(token)

            attack = models.AttacksSpellcasting.query.filter(models.AttacksSpellcasting.Id==attackAndSpellcastingId).one()

            characterSheet = models.CharacterSheet.query.filter(models.CharacterSheet.Id==attack.characterSheetId).one()

            game = models.Game.query.filter(models.Game.Id==characterSheet.gameId).one()
            if(game.userId!=userId):
                return jsonify({"error": "O usuário não tem permissão para acessar esta ficha"}),400
            db.session.delete(attack)
            db.session.commit()
            return jsonify({"message": f"O ficheiro {attack.name} foi deletado com sucesso."}), 200
        return jsonify({"error": "Não foi possível atualizar o ficheiro"}),400
    except Exception:
        return jsonify({"error": "Não foi possível atualizar o ficheiro"}),400


@app.route("/equipment", methods=["POST"])
def createEquipment():
    if request.is_json:
        try:
            token = request.headers["authorization"]
            if(token):
                token= token.replace("Bearer ","")
                data = request.get_json()
                userId = decode_auth_token(token)
                characterSheet = models.CharacterSheet.query.filter(models.CharacterSheet.Id==data["characterSheetId"]).one()

                game = models.Game.query.filter(models.Game.Id==characterSheet.gameId).one()
                if(game.userId!=userId):
                    return jsonify({"error": "O usuário não tem permissão para acessar esta ficha"}),400
                newEquipment = models.Equipment(characterSheet.Id)
                if('name' in data):
                    newEquipment.name= data['name']
                if('description' in data):
                    newEquipment.description= data['description']
                if('cp' in data):
                    newEquipment.cp= data['cp']
                if('sp' in data):
                    newEquipment.sp= data['sp']
                if('ep' in data):
                    newEquipment.ep= data['ep']
                if('gp' in data):
                    newEquipment.gp= data['gp']
                if('pp' in data):
                    newEquipment.pp= data['pp']
                if('attunement' in data):
                    newEquipment.attunement= data['attunement']
                db.session.add(newEquipment)
                db.session.commit()
                return jsonify({"message": f"O ficheiro {newEquipment.name} foi criado com sucesso."}), 200
            return jsonify({"error": "Não foi possível atualizar o ficheiro"}),400
        except Exception:
            return jsonify({"error": "Não foi possível atualizar o ficheiro"}),400
    else:
        return jsonify({"error": "A requisição precisa está no formato JSON"}),400


@app.route("/equipment/<equipmentId>", methods=["PUT"])
def updateEquipment(equipmentId):
    if request.is_json:
        try:
            token = request.headers["authorization"]
            if(token):
                token= token.replace("Bearer ","")
                data = request.get_json()
                userId = decode_auth_token(token)

                equipment = models.Equipment.query.filter(models.Equipment.Id==equipmentId).one()

                characterSheet = models.CharacterSheet.query.filter(models.CharacterSheet.Id==equipment.characterSheetId).one()

                game = models.Game.query.filter(models.Game.Id==characterSheet.gameId).one()
                if(game.userId!=userId):
                    return jsonify({"error": "O usuário não tem permissão para acessar esta ficha"}),400

                if('name' in data):
                    equipment.name= data['name']
                if('description' in data):
                    equipment.description= data['description']
                if('cp' in data):
                    equipment.cp= data['cp']
                if('sp' in data):
                    equipment.sp= data['sp']
                if('ep' in data):
                    equipment.ep= data['ep']
                if('gp' in data):
                    equipment.gp= data['gp']
                if('pp' in data):
                    equipment.pp= data['pp']
                if('attunement' in data):
                    equipment.attunement= data['attunement']

                db.session.add(equipment)
                db.session.commit()
                return jsonify({"message": f"O ficheiro {equipment.name} foi atualizado com sucesso."}), 200
            return jsonify({"error": "Não foi possível atualizar o ficheiro"}),400
        except Exception:
            return jsonify({"error": "Não foi possível atualizar o ficheiro"}),400
    else:
        return jsonify({"error": "A requisição precisa está no formato JSON"}),400

@app.route("/equipment/<equipmentId>", methods=["DELETE"])
def deleteEquipment(equipmentId):
    try:
        token = request.headers["authorization"]
        if(token):
            token= token.replace("Bearer ","")
            userId = decode_auth_token(token)

            equipment = models.Equipment.query.filter(models.Equipment.Id==equipmentId).one()

            characterSheet = models.CharacterSheet.query.filter(models.CharacterSheet.Id==equipment.characterSheetId).one()

            game = models.Game.query.filter(models.Game.Id==characterSheet.gameId).one()
            if(game.userId!=userId):
                return jsonify({"error": "O usuário não tem permissão para acessar esta ficha"}),400
            db.session.delete(equipment)
            db.session.commit()
            return jsonify({"message": f"O ficheiro {equipment.name} foi deletado com sucesso."}), 200
        return jsonify({"error": "Não foi possível atualizar o ficheiro"}),400
    except Exception:
        return jsonify({"error": "Não foi possível atualizar o ficheiro"}),400

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 5050)))
