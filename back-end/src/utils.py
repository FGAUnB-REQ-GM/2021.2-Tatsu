import jwt
import datetime


def encode_auth_token(user_id):
    try:
        payload = {
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=0, seconds=3600),
            'iat': datetime.datetime.utcnow(),
            'sub': user_id
        }
        return jwt.encode(
            payload,
            '\x10\xcaqB\xa5\x88RfoH\xda2a\xd6\x8d\xcd\xf4\x1aZ\xaf?\x8a\x9fn',
            algorithm='HS256'
        )
    except Exception as e:
        return e


def decode_auth_token(auth_token):
    try:
        payload = jwt.decode(auth_token, '\x10\xcaqB\xa5\x88RfoH\xda2a\xd6\x8d\xcd\xf4\x1aZ\xaf?\x8a\x9fn')
        return payload['sub']
    except jwt.ExpiredSignatureError:
        return 'Signature expired. Please log in again.'
    except jwt.InvalidTokenError:
        return 'Invalid token. Please log in again.'