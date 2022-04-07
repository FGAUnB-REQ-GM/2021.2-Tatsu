services-up:
	docker-compose -p front-end -f front-end/docker-compose.yml up -d
	cd front-end && npm install
	docker-compose -p back-end -f back-end/docker-compose.yml up -d

backend-up:
	docker-compose -p back-end -f back-end/docker-compose.yml up -d

frontend-up:
	cd front-end && npm install
	docker-compose -p back-end -f back-end/docker-compose.yml up -d

services-down:
	docker-compose -p front-end -f front-end/docker-compose.yml down
	docker-compose -p back-end -f back-end/docker-compose.yml down
	