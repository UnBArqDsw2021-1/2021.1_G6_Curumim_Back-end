dkc := "docker-compose.yml"

up: 
	docker-compose -f ${dkc} up

build:
	docker-compose -f ${dkc} build

down:
	docker-compose -f ${dkc} down