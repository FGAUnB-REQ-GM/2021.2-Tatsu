from flask_sqlalchemy import SQLAlchemy

from .user import *
from .attacksSpellcasting import *
from .attributes import *
from .bonus import *
from .characterSheet import *
from .equipment import *
from .game import *
from .gamePlayers import *
from .message import *
from .playerCharacter import *
from . skills import *
from .strokes import *

db = SQLAlchemy()