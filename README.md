# 2021.1_G6_Curumim-Back-end

Back-end da aplicação curumim

## Pré-requisitos para rodar aplicação

- [Docker Engine](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### `make build`

Construir Imagens dockers da aplicação.

### `make up`

Criar e subir todos os Containeres

### `make clean`

Limpa todo seu ambiente

# Rotas Disponíveis

Documentação temporária de rotas

## Sem autenticação:

### POST `/register-guardian`:
Registra um guardian e retorna informações, exemplo de body:
```json
{
    "name": "Nome da Pessoa", 
    "cpf": "12345678911", 
    "birthday": 31122021,
    "email": "example@email.com", 
    "password": "sua_senha",
    "adress": "um endereço qualquer"
}
```

### POST `/login`:
Faz login e retorna json com user e token, exemplo de body:
```json
{
    "email": "example@email.com", 
    "password": "sua_senha"
}
```

### POST `/dev/register-adm`:
*Rota temporária* Registra administrador.
```json
{
    "name": "Nome da Pessoa", 
    "cpf": "12345678911", 
    "birthday": 31122021,
    "email": "example@email.com", 
    "password": "sua_senha",
    "registration": 1
}
```

## Rotas autenticadas:
Para as rotas à seguir é necessário passar a token recebida no login pelos headers utilizando a key `Authorization`, as rotas `/adm` necessitam de uma token de adm, as `/teacher` de teacher e as `/guardian` de guardian.

### POST `/adm/register-teacher`:
Registra um professor.
```json
{
    "name": "Nome da Pessoa", 
    "cpf": "12345678911", 
    "birthday": 31122021,
    "email": "example@email.com", 
    "password": "sua_senha",
    "registration": 1
}
```

### POST `/adm/register-child`:
Registra uma criança
```json
{
    "name": "Nome da Pessoa", 
    "birthday": "2007-09-12",
    "registration": 1
}
```

### GET `/adm/list-guardians`:
Lista todos os guardians.

### GET `/adm/list-professionals`:
Lista todos os professionals.

### GET `/adm/list-activities`:
Lista todas as atividades.

### POST `/teacher/create-activity`:
Cria atividade.
```json
{
    "title": "eoq maluco, uma atividade", 
    "description": "atividade maluca", 
    "date": 31122021
}
```

### POST `/teacher/update-activity`:
Atualiza campos da atividade definidos no objeto updates.
```json
{
    "id": 15,
    "updates": {
        "title": "nome novo",
        "description": "faz"
    }
}
```

### POST `/teacher/delete-activity`: (talvez n devesse ser um post, sla)
Deleta atividade.
```json
{
    "id": 16
}
```

### GET `/teacher/list-activities`: 
Lista atividades do professor que fez a requisição.

### GET `/guardian/get-activity/:id`: 
Retorna informações da atividade pertencente ao id.
