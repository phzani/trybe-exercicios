    1  mkdir unix_tests
    2  cd unix_tests
    3  touch trybe.txt
    4  cp trybe.txt trybe_backup.txt
    5  mv trybe.txt trybe1.txt
    6  mkdir backup
    7  mv trybe_backup.txt backup
    8  mkdir backup2
    9  mv backup/trybe_backup.txt backup2
   10  rmdir backup
   11  mv backup2 backup
   12  pwd
   13  ls
   14  rm -rd backup
   15  clear
   16  touch skills.txt
   17  cat skills.txt
   18  cat > skills.txt
   19  head -n 5 skills.txt
   20  tail -n 4 skills.txt
   21  rm *.txt