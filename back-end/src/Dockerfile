
FROM python:3.8.2

WORKDIR /usr/src/app

ENV PYTHONDONTWRITEBYTECODE 1

RUN pip install --upgrade pip

COPY ./requirements.txt /usr/src/app/requirements.txt

RUN pip install -r requirements.txt

COPY . /usr/src/app
CMD exec gunicorn --workers=5 --threads=2 --bind 0.0.0.0:5050 --reload app:app --log-level debug
