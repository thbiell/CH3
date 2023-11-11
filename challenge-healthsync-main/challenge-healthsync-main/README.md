# Aplicativo de HealthSync

## Introdução

Bem-vindo ao projeto do Aplicativo Health Sync! Este aplicativo foi desenvolvido para simplificar o processo de agendamento de exames médicos, tornando-o mais conveniente e acessível para os pacientes. Com esta ferramenta, os usuários podem marcar seus exames de maneira eficiente, acompanhar seus agendamentos e receber lembretes úteis para não perder nenhuma consulta.

### Objetivo do Projeto

O principal objetivo deste projeto é criar uma plataforma intuitiva e eficaz que atenda às necessidades dos pacientes, médicos e centros de saúde. Com este aplicativo, pretendemos:

1. Facilitar o agendamento de exames médicos para os pacientes, reduzindo a necessidade de ligações telefônicas demoradas ou visitas presenciais.
2. Melhorar a comunicação entre pacientes e médicos, garantindo que os pacientes estejam cientes de seus agendamentos e dos requisitos prévios para os exames.

### Funcionalidades Principais

O Aplicativo inclui várias funcionalidades essenciais, como:

- **Agendamento de Exames**: Os pacientes podem procurar exames disponíveis e marcar consultas com base em sua conveniência.

- **Gerenciamento de Agendamentos**: Os usuários podem visualizar, editar e cancelar seus agendamentos existentes.

- **Perfil do Paciente**: Os pacientes podem criar perfis personalizados, fornecendo informações médicas relevantes e histórico de exames.


### Tecnologias Utilizadas

Este aplicativo foi desenvolvido utilizando as seguintes tecnologias:

- **Framework**: [React Native, NestJS, Node]

- **Banco de Dados**: [PostgreSQL, Docker]

### Instalação

#### Pré-requisitos

Certifique-se de ter o Docker e o PgAdmin instalados em seu sistema antes de prosseguir.

#### Configurando o Banco de Dados

1. Baixe a imagem do PostgreSQL usando o Docker:
   docker pull postgres
2. Crie um contêiner PostgreSQL com um nome e senha personalizados:
   docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
3. Abra o PgAdmin e crie um servidor com as seguintes configurações:
- Nome do servidor: localhost
- Nome do banco de dados: healthsync

#### Configurando a API

1. Navegue até a pasta da API do projeto.
2. Instale as dependências da API usando o npm:
   npm install
3. Inicie a API em modo de desenvolvimento:
   npm run start:dev]

#### Configurando o APP

1. Navegue até a pasta da APP do projeto.
2. Instale as dependências do APP usando o npm:
   npm install
3. Inicie o APP
   npx react-native start



