from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

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

db = SQLAlchemy()

db.init_app(app)


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 5050)))