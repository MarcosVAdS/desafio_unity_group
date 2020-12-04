# desafio_unity_group
## 1. Objetivo
Criar um sistema de front-end que contemple duas características principais: cadastro e exibição de usuários.

## 2. Descrição do projeto
O projeto foi dividido em duas pastas principais. "Api/", o backend que serve os dados que serão consumidos e "Frontend/" desenvolvido em angular.
O projeto conta com um banco próprio, desenvolvido em SQL.

## 3. Para executar e observar o projeto
Para executar o projeto podemos executar o passo a passo numerado a sequir:

1. Importe o banco. Com o MySQL instalado, importe o arquivo "project.sql"
    1.1 Para importá-lo, você pode usar o comando: 
    `mysql -u {user} -p < project.sql`

2. Inicie o servidor PHP no diretório anterior a Api/
    2.1 Com o PHP instalado utilize o comando:
    `php -S localhost:8080`

    2.2 Certifique-se de usar a porta 8080, esla está confgurada também no front.

3. Inicie o servidor front-end:
    3.1 Dentro da pasta Frontend/ execute:
    `npm install`

    3.2 Após todas as dependencias instaladas, execute:
    `npm start`
    
    3.3 Para buildar seu projeto:
    `npm build`

## 4. Utilizando o container do docker:


## 5. Imagens do projeto
1. Tela de Cadastro:
![](/img/cadastro.png)

2. Tela de candidatos
![](/img/candidatos.png)

3. Aplicação de filtros
![](/img/filtro.png)
        
