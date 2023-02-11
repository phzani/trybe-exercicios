    1  clear
    2  branch
    3  git branch
    4  git branch -d atualizaREADME
    5  git checkout -b atualiza-readme
    6  touch infos.txt
    7  git add .
    8  git commit -m 'arquivo infos.txt criado'
    9  echo "Pedro Zani" > infos.txt
   10  git add .
   11  git commit -m 'atualização infos.txt'
   12  git branch -b 'adiciona-infos'
   13  git checkout -b 'adiciona-infos'
   16  echo "O versionamento consiste em estratégias para gerenciar as diferentes versões de um código, de um sistema ou de um modelo. É uma forma de administrar as mudanças que são feitas e de garantir mais segurança na transição de uma versão para outra." >> README.md
   19  cat README.md
   20  git add .
   21  git commit -m 'alteraçoes no README'
   23  git checkout atualiza-readme
   24  git merge adiciona-infos
   25  git checkout main
   26  git merge atualiza-readme
