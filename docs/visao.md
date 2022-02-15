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

<span style="color:red">Utilizar o Sommerville como referência para fundamentar a escolha, abaixo. Fiz ajustes no texto, pois o tamanho da frase e a falta de pontuação estavam bem estranhos.</span>

Para a metodologia foi escolhido um modelo híbrido com <span style="color:red">???</span> principais ágeis que seja adaptável a nossa realidade para otimizar os processos de desenvolvimento. Para isso, se utilizou alguns elementos do Scrum como, as sprints que serão organizadas com duração de 2 semanas, com sprints reviews e sprint plannings definidos e alguns papéis como P.O e Scrum Master, além de uma reunião semanal de acompanhamento. Esses elementos irão facilitar o controle dos entregáveis e garantir o andamento do projeto. Para otimizar o aprendizado e as revisões será utilizado o pair programming do XP, de maneira que a cada sprint o pareamento dos membros sejam permutados de maneira a fazer com que todos interajam entre sí, melhorando o relacionamento dos desenvolvedores no projeto.

## 3 Abordagem de Engenharia de Requisitos

<span style="color:red">Me conta aí: na prática, como vocês vão encaixar as atividades da disciplina de Requisitos, do Processo Unificado, no Scrum?</span>

A abordagem de Engenharia de Requisitos seguirá o padrão proposto pelo Processo Unificado, onde primeiro iremos análisar o problema, entender a necessidade dos stakeholders, definir o sistema, gerenciar o escopo do sistema e por fim continuar refinando a definição do sistema, dessa forma serão seguidas essas etapas para construção de requisitos funcionais e também os não funcionais, para que no final todos os requisitos do sistema sejam atendidos.

É possível observar o fluxo da abordagem de Engenharia de Requisitos pelo fluxograma abaixo:

<span style="color:red">Alterem essa imagem para uma que esteja em português, adequado ao trabalho de vocês. Além disso, façam referência a versão do Processo Unificado que vocês estão utilizando como base.</span>

<img src="../Assets/Images/wf_req.gif" width="900px"/>

<span style="color:red">Revejam as atividades da Engenharia de Requisitos, de acordo com os comentários, abaixo.</span>

### 3.1 Elicitação de Requisitos
|Atividade|Método|Ferramenta|
|:-------:|:----:|:--------:|
| Analizar o Problema| Brainstorming | Plataforma "Miro"|
| Entender as Necesidades dos Stakeholders | Brainstorming | Plataforma "Miro"|

### 3.2	Análise de Requisitos
|Atividade|Método|Ferramenta|
|:-------:|:----:|:--------:|
|Definir o Sistema| Storyboarding | Plataforma "Miro" |

<span style="color:red">Definir o Sistema com Storyboard? Revejam, conceitualmente, o que é esse atividade. Não me faz sentido, utilizar Storyborad para isso.</span>

### 3.3	Documentação de Requisitos
|Atividade|Método|Ferramenta|
|:-------:|:----:|:--------:|
|Definição do backlog | Histórias de Usuário, Épicos e Features| Planilha do Google Sheets |

<span style="color:red">Essa não é uma atividade do fluxo de atividades de requisitos que vocês apresentam, acima. Além disso, vocês falam em utilizar o fluxo de atividades do Processo Unificado, que é dirigido a caso de uso, com histórias, épicos e features? Como é isso? Acho que vcs estão misturando banana com abacaxi. São coisas diferentes.</span>

### 3.4	Verificação e Validação de Requisitos
|Atividade|Método|Ferramenta|
|:-------:|:----:|:--------:|
|Refinar a Definição do Sistema| Utilizar MoSCoW para priorizar requisitos e criar um checklist para verificar se estão sendo atendidos | Planilha do Google Sheets |

<span style="color:red">Refinar o Sistema com Moscow? Revejam, conceitualmente, o que é esse atividade. Não me faz sentido, utilizar Moscow para isso.</span>

### 3.5	Gerenciamento de Requisitos
|Atividade|Método|Ferramenta|
|:-------:|:----:|:--------:|
| Gerenciar requisitos variáveis |Durante o desenvolvimento, nas sprints Reviews será feita a verificação dos requisitos e alterações caso necessário| Planilha do Google Sheets e reuniões virtuais |

<span style="color:red">Qual método? Inspeção? E a rastreabiliadde de requisitos, não será gerenciada?</span>

## 4 Lições Aprendidas

### 4.1 Unidade 1
Durante essa primeira etapa, podemos aprender mais sobre o Processo Unificado e sua forma de gerenciamento de requisitos, além de aprendermos sobre a configuração e disponibilização do mkdocs no github pages.

## 5 Referẽncias Bibliográficas

> [Ficha Épica](https://ficha.epicorpg.com.br/)

> [RUP Homepage](https://sceweb.uhcl.edu/helm/RationalUnifiedProcess/)
