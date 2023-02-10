    1  clear
    2  mkdir unix_tests_search
    3  cd unix_tests_search
    4  curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
    5  cat countries.txt
    6  less countries.txt
    7  grep Brazil countries.txt
    8  grep -i brazil countries.txt
    9  touch phrases.txt
   10  grep -v fox phrases.txt
   11  wc -w phrases.txt
   12  wc -l phrases.txt
   13  touch empty.tbt
   14  touch empty.pdf
   15  ls
   16  ls *txt
   17  ls *t?t
   18  man ls
