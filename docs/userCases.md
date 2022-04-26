# Casos de Uso

## Histórico de Versão
|    Data    | Versão |                Descrição                |                     Autor                     |
| :--------: | :----: | :-------------------------------------: | :-------------------------------------------: |
| 25/04/2022 |  1.0   | Criação do Documento Diagrama de Casos de Uso |[Leonardo Takehana](https://github.com/ltakehana), [João Paulo Lima](https://github.com/jpaulohe4rt), [Gabriel Freitas](https://github.com/gabrielfreitass1), [Luíz Gustavo](https://github.com/LuizGustavoFR) |

O diagrama de caso de uso tem como objetivo resumir os detalhes dos usuários do sistema (também conhecidos como atores) e as interações deles com o sistema.


<img src="../Assets/Images/casosUso.png" alt="UserCases">
<br>
<a href="https://lucid.app/lucidchart/ae4233ad-e531-44be-b961-696152307382/edit?invitationId=inv_8ac4596d-9ca2-4c56-babc-58f933c1278a">Link para o nosso diagrama de casos de uso completo</a>

## Fluxos de Uso

### Fluxo Principal
    
<ol>
    <li>Usuário faz login na plataforma</li>
    <li>Sistema exibe uma mensagem de logado com sucesso</li>
    <li>Sistema exibe todos os ficheiros</li>
    <li>Usuário clica no botão de jogar do ficheiro</li>
    <li>Sistema exibe todas as suas fichas</li>
    <li>Usuário clica no botão de jogar</li>
    <li>Sistema exibe as informações da ficha</li>    
</ol>

### Fluxos Alternativos
 <ol>

 <li>Usúario Novo</li>
 O usuário por ser a primeira vez na plataforma necessita criar um cadastro antes de acessar o site.
    <ol>
        <li>Usuário clica em "Não possui uma conta?"</li>
        <li>Sistema exibi a tela de cadastro</li>
        <li>Usuário preenche as informações</li>
        <li>Sistema envia e-mail de confirmação</li>
        <li>Usuário valida e-mail</li>
        <li>Sistema valida informações</li>
        <li>Sistema exibe tela de ficheiros</li>
    </ol>

<li>Erro ao logar</li>
 O usuário informa login ou senha errados na tela de login.
    <ol>
        <li>Usuário preenche dados de acesso</li>
        <li>Sistema exibe mensagem de erro</li>
        <li>Usuário pode tentar novamente ou redefini senha</li>
    </ol>

<li>Criar ficheiros</li>
    Aqui o usuário depois de exibir os seus ficheiros ele cria um ficheiro.
    <ol>
        <li>Usuário clica no botão de "+"</li>
        <li>Sistema exibe tela de criação de fichiero</li>
        <li>Usuário informa o nome do ficheiro</li>
        <li>Sistema exibe tela de ficheiros</li>
    </ol>

<li>Deletar ficheiros</li>
    Aqui o usuário depois de exibir os seus ficheiros ele deleta um ficheiro.
    <ol>
        <li>Usuário clica no botão de lixeira</li>
        <li>Sistema exibe tela confirmação</li>
        <li>Usuário confirma a operação</li>
        <li>Sistema exibe que o ficheiro foi deletado</li>
    </ol>

 <li>Editar ficheiros</li>
    Aqui o usuário depois de exibir os seus ficheiros ele edita um ficheiro.
    <ol>
        <li>Usuário clica no botão de lápis</li>
        <li>Sistema exibe tela modificação de fichiero</li>
        <li>Usuário informa o nome do ficheiro</li>
        <li>Sistema exibe tela de ficheiros</li>
    </ol>  

<li>Criar ficha</li>
    Aqui o usuário depois de exibir as suas fichas ele cria uma ficha.
    <ol>
        <li>Usuário clica no botão de "+"</li>
        <li>Sistema exibe tela de criação de ficha</li>
        <li>Usuário preenche informações</li>
        <li>Sistema exibe tela de fichas</li>
    </ol>

<li>Deletar ficha</li>
    Aqui o usuário depois de exibir os suas fichas ele deleta uma ficha.
    <ol>
        <li>Usuário clica no botão de lixeira</li>
        <li>Sistema exibe tela confirmação</li>
        <li>Usuário confirma a operação</li>
        <li>Sistema exibe que a ficha foi deletada</li>
    </ol>
    
 <li>Editar ficha</li>
    Aqui o usuário depois de exibir as suas fichas ele altera as informações da ficha.
    <ol>
        <li>Usuário clica no botão de lápis</li>
        <li>Sistema exibe tela modificação de fichas</li>
        <li>Usuário altera as informações</li>
        <li>Usuário salva a operção</li>
        <li>Sistema exibe tela de fichas</li>
    </ol>       
    
</ol>