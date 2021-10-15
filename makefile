dkc := "docker-compose.yml"

up: 

	docker-compose -f ${dkc} build
	docker-compose -f ${dkc} up

build:
	docker-compose -f ${dkc} build


clean:
	docker-compose -f ${dkc} kill
	docker-compose -f ${dkc} stop
	docker-compose -f ${dkc} down --rmi local --volumes
	docker-compose -f ${dkc} rm -f
	@echo "Containers Docker foram parados e deletados."

unmigrate:
	docker exec api yarn sequelize db:migrate:undo:all

migrate:
	docker exec api yarn sequelize db:migrate

api-container:
	docker exec -it api sh

lint:
	docker exec api yarn run eslint src/* --fix