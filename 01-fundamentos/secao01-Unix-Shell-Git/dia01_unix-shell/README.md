# Exercícios

## Parte I - Criação de arquivos e diretórios

**Dica :** Para criação de arquivos vazios você pode utilizar o comando `touch nome-do-arquivo.extensao`.

1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu: crie um diretório chamado `unix_tests` e navegue até ele.
2. Crie um arquivo de texto com o nome `trybe.txt`.
3. Crie uma cópia do arquivo `trybe.txt` com nome `trybe_backup.txt`.
4. Renomeie o arquivo `trybe.txt`.
5. Dentro de `unix_tests` , crie um novo diretório chamado `backup`.
6. Mova o arquivo `trybe_backup.txt` para o diretório `backup`.
7. Dentro de `unix_tests` , crie um novo diretório chamado `backup2`.
8. Mova o arquivo `trybe_backup.txt` da pasta `backup` para a pasta `backup2`.
9. Apague a pasta `backup`.
10. Renomeie a pasta `backup2` para `backup`.
11. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
12. Apague o diretório `backup`.
13. Limpe o terminal.

**Para os exercícios, 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional, um arquivo de texto com o conteúdo abaixo, chamado `skills.txt`:**

```
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
```

14. Mostre na tela as 5 primeiras skills do arquivo `skills.txt`.
15. Mostre na tela as 4 últimas skills do arquivo `skills.txt`.
16. Apague todos os arquivos que terminem em `.txt`.

## Parte II - Manipulação & Busca

## De olho na dica 👀: Crie um novo diretório chamado `unix_tests_search` e navegue até ele.

Na pasta `unix_tests_search`, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando `curl`. Conheça mais sobre esse comando nesse link.

```
mkdir `unix_tests_search`
cd `unix_tests_search`
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
```
1. Mostre todo o conteúdo do arquivo `countries.txt` na tela.
2. Mostre o conteúdo de `countries.txt`, página por página, até encontrar a Zambia.
3. Mostre novamente o conteúdo de `countries.txt` página por página, mas agora utilize um comando para buscar por `Zambia`.
4. Busque por `Brazil` no `countries.txt`.
5. Busque novamente por `brazil`, mas agora utilize o lower case e não considere letras maiúsculas ou minúsculas.

### De olho na dica 👀: Crie um novo arquivo chamado `phrases.txt` e adicione algumas frases à sua escolha. Não é necessário criar o arquivo pelo terminal.

6. Busque pelas frases que não contenham a palavra `fox`.
7. Conte o número de palavras do arquivo `phrases.txt`.
8. Conte o número de linhas do arquivo `phrases.txt`.

### De olho na dica 👀: Para contar o número de caracteres de um arquivo, não use `wc -c`, e sim `wc -m`.

9. Crie os arquivos `empty.tbt` e `empty.pdf`.
10. Liste todos os arquivos do diretório `unix_tests_search`.
11. Liste todos os arquivos que terminem com `txt`.
12. Liste todos os arquivos que terminem com `tbt` ou `txt`.
13. Acesse o manual do comando `ls`.

## Parte 3 - Comandos de input e output

1. Crie a pasta `unix_tests_skills` e navegue até ela.

2. Crie um arquivo de texto pelo terminal com o nome `skills2.txt` e adicione os valores `Internet, Unix e Bash`, cada um em sua linha.

3. Adicione mais 5 itens à sua lista de skills e, depois, imprima a lista ordenada no terminal.

4. Conte o número de linhas do arquivo `skills2.txt`.

5. Crie um arquivo chamado `top_skills.txt` usando o `skills2.txt`. Ele deve conter as 3 primeiras skills em ordem alfabética.

6. Crie um novo arquivo chamado `phrases2.txt` pelo terminal e adicione algumas frases de sua escolha.

7. Conte o número de linhas que contêm as letras `br`.

8. Conte o número de linhas que não contêm as letras `br`.

9. Adicione dois nomes de países ao final do arquivo `phrases2.txt`.

10. Crie um novo arquivo chamado `bunch_of_things.txt` com os conteúdos dos arquivos `phrases2.txt` e `countries.txt`.

11. Ordene o arquivo `bunch_of_things.txt`.