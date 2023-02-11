    1  cd ..
    2  mkdir GitLocal
    3  cd GitLocal
    4  git init
    5  code .
    6  touch README.md
    7  git add .
    8  git commit -m 'Criaçao de README'
    9  git checkout -b atualizaREADME
   10  eco "Colocando em Prática dia 02" > README.md
   11  echo "Colocando em Prática dia 02" > README.md
   12  git add .
   13  git commit -m 'atualizando README'
   14  git checkout main
   15  git merge atualizaREADME
