# Visão do Produto e Projeto

## Histórico de Versão
|    Data    | Versão |                Descrição                |                     Autor                     |
| :--------: | :----: | :-------------------------------------: | :-------------------------------------------: |
| 01/02/2022 |  1.0   | Criação do Documento de Visão do Produto e Projeto | [Natan Santana](https://github.com/Neitan2001), [Leonardo Takehana](https://github.com/ltakehana), [João Paulo Lima](https://github.com/jpaulohe4rt), [Gabriel Freitas](https://github.com/gabrielfreitass1), [Luíz Gustavo](https://github.com/LuizGustavoFR) |
| 10/02/2022 |  1.1   | Ajustes do tópico 1 | [Natan Santana](https://github.com/Neitan2001) |

## 1 Visão Geral do Produto

### 1.1 Declaração do Problema

|   O Problema     | Jogadores de RPG possuem uma dificuldade para organizar as fichas de uma campanha de RPG de mesa, dificultando e atrasando a jogatina. |    
| :--------: | :----: | 
| Afeta |  Jogadores de RPG de mesa  | 
| Cujo Impacto é | Os jogadores acabam utilizando várias plataformas para jogar um jogo, as vezes até dependendo de materiais físicos e isso gera muita desorganização |
| Uma Solução Seria | A criação de uma aplicação web que permitiria a criação de ficheiros e fichas de rpg, permitindo que os jogadores as editem e joguem o jogo dentro da plataforma por meio da rolagem de dados automática | 

### 1.2 Declaração de Posição do Produto

|   Para    | Mestres e Jogadores de RPG(Role-playing game) de mesa     |    
| :--------: | :----: | 
| Quem | Necessita de uma facilidade e praticidade de organização de fichas para personagens | 
| O Tatsu| É uma ferramenta web | 
| Que | Permite a criação e o gerenciamento de fichas de personagens de RPG|
| Ao contrário | do aplitcativo para celular "Ficha Épica" |
| Nosso Produto | permite a criação de um ficheiro onde seria criado fichas individuais que podem ser atualizadas por qualquer jogador utilizando um link. Além disso, a nossa plataforma irá permitir que os jogadores rolem os dados de acordo com os atributos da ficha |


### 1.3 Objetivos do Produto

O objetivo principal do site Tatsu é permitir a criação de ficheiros que podem organizar fichas de personagens de RPG, permitindo que o usuários as editem a qualquer instante. Além disso, o site possui o objetivo secundário de facilitar a jogatina de um RPG de mesa por meio da plataforma ao permitir rolagem automática de dados de acordo com os atributos das fichas e histórico  de rolagem de dados, danos sofridos por cada personagem e experiência obtida durante combates


## 2 Abordagem de Desenvolvimento de Software



Para a metodologia foi escolhido um modelo com base em princípios ágeis que seja adaptável a nossa realidade para otimizar os processos de desenvolvimento, utilizando elementos do SCRUM, XP e também do RUP.
Os elementos utilizados com base no SCRUM serão as sprints, organizadas com duração de 2 semanas, com sprints reviews e sprint plannings definidos e alguns papéis como P.O e Scrum Master, além de uma reunião semanal de acompanhamento. 
Para otimizar o aprendizado e as revisões será utilizado o pair programming do XP, de maneira que a cada sprint o pareamento dos membros sejam permutados de maneira a fazer com que todos interajam entre sí, melhorando o relacionamento dos desenvolvedores no projeto.
Por fim, o processo seguirá os conceitos do RUP, com algumas modificações, utilizando as etapas do fluxo de desenvolvimento especificado de acordo com essa metodologia, dividindo nas etapas: modelagem de negócio, requisitos, análise e design, implementação, teste e implantação.

## 3 Abordagem de Engenharia de Requisitos

A abordagem de Engenharia de Requisitos terá como base o padrão proposto pelo Processo Unificado, com leves modificações, onde primeiro iremos análisar o problema, entender a necessidade dos stakeholders, definir o sistema, gerenciar o escopo do sistema e por fim continuar refinando a definição do sistema, dessa forma serão seguidas essas etapas para construção de requisitos funcionais e também os não funcionais, para que no final todos os requisitos do sistema sejam atendidos.

É possível observar o fluxo da abordagem de Engenharia de Requisitos pelo fluxograma abaixo:

<img src="../Assets/Images/requisitosRUP.png" width="900px"/>

De acordo com essa imagem podemos separar a engenharia de requisitos em 6 etapas, onde cada uma corresponderia a uma etapa das atividades da disciplina.

Começando com a etapa de elicitação de requisitos, onde serão executadas as atuvudades de Analizar o Problema e Entender as Necesidades dos Stakeholders, onde serão feitos brainstormings com o objetivo de coletar todas as ideias de requisitos do grupo para o nosso projeto.

Na segunda etapa seria a de análise de requisitos, onde no RUP seria o equivalente a definir o sistema, nessa etapa seriam filtrados os requisitos levantados na elicitação e classificados como funcionais ou não funcionais.

Após isso na etapa de documentação dos requisitos, seguirá a etapa de gerenciar o escopo do sistema, com modificações de acordo com a proposta do RUP, pois no lugar de utilizar casos de uso, iremos trabalhar com historias de usuários, épicos e features, pois se adapta melhor a abordagem mesclada com as Sprints que iremos utilizar, pois isso torna mais fácil a divisão em issues bisemanais para a execução de atividades de desenvolvimento. 

Na etapa de verificação e validação de requisitos iremos refinar a definição do sistema durante as sprints, verificando o andamento do projeto de acordo com o cronograma definido pelo Scrum Master e verificar se tudo está de acordo, além de definir e específicar os requisitos cada vez mais

Por ultimo temos o gerenciamento de requisitos que no RUP irá corresponder a gerenciar os requisitos variaveis, onde consiste em rever os requisitos e se houve alguma alteração de acordo com a verificação da etapa anterior, para refazer prioridades ou possíveis alterações no escopo do sistema que podem ser causadas por algum elemento não previsto.

### 3.1 Elicitação de Requisitos
|Atividade|Método|Ferramenta|
|:-------:|:----:|:--------:|
| Analizar o Problema| Brainstorming | Plataforma "Miro"|
| Entender as Necesidades dos Stakeholders | Brainstorming | Plataforma "Miro"|

### 3.2	Análise de Requisitos
|Atividade|Método|Ferramenta|
|:-------:|:----:|:--------:|
|Definir o Sistema| Separação dos requisitos levantados no brainstorming das etapas anteriores, para classifica-los como funcionais ou não funcionais | Plataforma "Miro" |

### 3.3	Documentação de Requisitos
|Atividade|Método|Ferramenta|
|:-------:|:----:|:--------:|
|Gerenciar o escopo do sistema | Separar os requisitos análisados em Histórias de Usuário, Épicos e Features e definir prioridades de execução| Planilha do Google Sheets |


### 3.4	Verificação e Validação de Requisitos
|Atividade|Método|Ferramenta|
|:-------:|:----:|:--------:|
|Refinar a Definição do Sistema| Conferir se os requisitos foram atendidos através de testes de software e também a validação constante se esses requisitos ainda fazem sentidos, sendo realizadas ao final de cada Sprint durante a reunião de Sprint Review| Testes de software, reuniões online e planilha do Google Sheets |


### 3.5	Gerenciamento de Requisitos
|Atividade|Método|Ferramenta|
|:-------:|:----:|:--------:|
| Gerenciar requisitos variáveis |Durante o desenvolvimento, no sprint planning de cada Sprint serão revistos todos os Requisitos que não fizeram sentido de acordo com a validação e verificação da etapa anterior e será feita a alteração dos atributos de requisito e mudanãs nos relacionamentos de rastreabilidade caso necessários| Planilha do Google Sheets e reuniões virtuais |

## 4 Lições Aprendidas

### 4.1 Unidade 1
Durante essa primeira etapa, podemos aprender mais sobre o Processo Unificado e sua forma de gerenciamento de requisitos, além de aprendermos sobre a configuração e disponibilização do mkdocs no github pages.

## 5 Referẽncias Bibliográficas

> [Ficha Épica](https://ficha.epicorpg.com.br/)

> [RUP Homepage](https://sceweb.uhcl.edu/helm/RationalUnifiedProcess/)
