# Casos de Uso

## Histórico de Versão
|    Data    | Versão |                Descrição                |                     Autor                     |
| :--------: | :----: | :-------------------------------------: | :-------------------------------------------: |
| 25/04/2022 |  1.0   | Criação do Documento Diagrama de Casos de Uso |[Leonardo Takehana](https://github.com/ltakehana), [João Paulo Lima](https://github.com/jpaulohe4rt), [Gabriel Freitas](https://github.com/gabrielfreitass1), [Luíz Gustavo](https://github.com/LuizGustavoFR) |
| 28/04/2022 |  2.0   | Ajustes finais do Documento de Casos de Uso |[Leonardo Takehana](https://github.com/ltakehana), [João Paulo Lima](https://github.com/jpaulohe4rt), [Gabriel Freitas](https://github.com/gabrielfreitass1), [Luíz Gustavo](https://github.com/LuizGustavoFR) |


## Breve descrição

O diagrama de caso de uso tem como objetivo resumir os detalhes dos usuários do sistema (também conhecidos como atores) e as interações deles com o sistema.


<img src="../Assets/Images/casosUso.png" alt="UserCases">
<br>
<a href="https://lucid.app/lucidchart/ae4233ad-e531-44be-b961-696152307382/edit?invitationId=inv_8ac4596d-9ca2-4c56-babc-58f933c1278a">Link para o nosso diagrama de casos de uso completo</a>

## Especificação dos casos de uso

### Criar conta

Na criação de conta o usuário terá a oportunidade de criar o acesso que possibilitará utilizar o serviço.

#### Atores
<ol>
    <li>Usuário novo</li>
</ol>

#### Fluxo principal

<ol>
    <li>Usuário acessa tela de cadastro.</li>
    <li>Preenche o formulário de cadastro.</li>
    <li>Envia formulário</li>
</ol>

#### Fluxo de exceção
##### &nbsp; Dados de cadastro inválidos
<ol>
    <li>Se o nome de usuário ou email já estiverem cadastrados, ele deve inserir novos dados no formulário de cadastro.</li>
</ol>

### Fazer Login

No login de usuário fica possibilitado que o mesmo entre efetivamente nas funcionalidades principais da plataforma.


#### Atores
<ol>
    <li>Jogador de RPG</li>
</ol>

#### Fluxo principal

<ol>
    <li>Usuário novo entra na tela de login da plataforma.</li>
    <li>Preenche os campos com seus dados pessoais.</li>
    <li>Acessa a conta</li>
</ol>

#### Fluxo de exceção
##### &nbsp; Dados de acesso inválidos
<ol>
    <li>Se os dados de acesso estiverem errados ele deve os inserir novamente.</li>
</ol>

#### Fluxo de extensão
##### &nbsp; Redefinir senha
<ol>
    <li>Redefinir a senha caso não consiga lembrar da senha.</li>
</ol>

### Manter perfil próprio

O jogador pode visualizar ou alterar seus dados pessoais.

#### Atores

<ol>
    <li>Jogador de RPG</li>
</ol>

#### Fluxo principal

<ol>
    <li>Jogador acessa seu perfil de usuário para ver seus dados pessoais.</li>
</ol>

#### Fluxo alternativo
##### &nbsp; Modificar dados

<ol>
    <li>Usuário modifica seus dados pessoais da conta.</li>
</ol>

### Manter ficheiros

Um ficheiro é onde as fichas serão armazenadas.

#### Atores

<ol>
    <li>Jogador de RPG</li>
</ol>

#### Fluxo principal

<ol>
    <li>Jogador acessa a aba de ficheiros.</li>
    <li>Visualiza todos os seus ficheiros criados.</li>
</ol>

#### Fluxos alternativos
Após a visualização de um ficheiro, é possível seguir qualquer um dos seguintes fluxos.
##### &nbsp; Adicionar ficheiro
<ol>
    <li>Jogador cria um novo ficheiro.</li>
</ol>

##### &nbsp; Modificar ficheiro
<ol>
    <li>Jogador pode modificar os dados de um ficheiro criado.</li>
</ol>

##### &nbsp; Excluir ficheiro
<ol>
    <li>Jogador pode apagar um ficheiro.</li>
</ol>

### Manter fichas

Uma ficha é onde as informações de um personagem serão mantidas.

#### Atores

<ol>
    <li>Jogador de RPG</li>
</ol>

#### Fluxo principal

<ol>
    <li>Jogador seleciona um ficheiro.</li>
    <li>Jogador seleciona uma ficha.</li>
    <li>Visualiza os dados do personagem.</li>
</ol>

#### Fluxos alternativos
Após a visualização de todas as fichas, é possível seguir qualquer um dos seguintes fluxos.
##### &nbsp; Criar ficha
<ol>
    <li>Jogador cria uma nova ficha.</li>
</ol>

##### &nbsp; Editar ficha
<ol>
    <li>Jogador pode modificar os dados de uma ficha criada.</li>
</ol>

##### &nbsp; Excluir ficha
<ol>
    <li>Jogador pode apagar uma ficha.</li>
</ol>

### Rolar dados

A rolagem de dados é fundamental para definir o resultado de teste de atributo de um personagem.

#### Atores

<ol>
    <li>Jogador de RPG</li>
</ol>

#### Fluxo principal

<ol>
    <li>Jogador seleciona os tipos de dados para rolagem.</li>
    <li>Jogador rola os dados.</li>
</ol>

