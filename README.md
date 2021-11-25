# Sequelize
O objetivo desse repositório é servir de referência para próximos projetos.

<br>

## Como usar o projeto

<br>

### Clone o repositório

```bash
$ https://github.com/yansntss/Sequelize.git

```

### Entre na pasta e instale as dependências

```bash
  $ npm i || yarn
```

### Configure o arquivo .env

Crie um arquivo .env e configure as variaveis de ambiente

- DB_NAME= nome do DB
- DB_USER= nome do usuario
- DB_PWD= senha do usuario
- DB_HOST= local onde está rodando
- DB_PORT= porta 
- DB_DIALECT= dialeto do seu banco, nesse caso é o mysql
- NODE_ENV=development

<br>

Com o .env devidamente configurado, vamos criar o db e rodar as migrations.

### Criar o db
``` bash
npx sequelize-cli db:create

```
### Rodando as migrations
``` bash
npx sequelize-cli db:migrate

```
Pronto, agora você tem exatamente o mesmo banco. Esse é o Up de usar migration.

<br>
Apesar de eu não saber muito sobre banco de dados, a curva de aprendizagem do sequelize ta sendo bem rápido, gostei muito e pretendo usar nos projetênhooos.
