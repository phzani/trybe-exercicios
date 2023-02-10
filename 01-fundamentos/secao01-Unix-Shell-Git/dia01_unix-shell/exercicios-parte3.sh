    1  clear
    2  mkdir unix_tests_skills
    3  cd unix_tests_s
    4  cd unix_tests_skills
    5  touch skills2.txt
    6  cat > skills2.txt
    7  clear
    8  history
    9  cat >> skills2.txt
   10  sort < skills2.txt
   11  cat skills2.txt | wc -l
   12  sort < skills2.txt | head -n 3 > top_skills.txt
   13  touch phrases2.txt
   14  echo "Houston, we have a problem" > phrases2.txt
   15  echo "just keep swimming" > phrases2.txt
   16  echo "Hasta la vista, baby" > phrases2.txt
   17  grep br phrases2.txt | wc -l
   18  grep -v br phrases2.txt | wc -l
   19  echo "Canadá" >> phrases2.txt
   20  echo "USA" >> phrases2.txt
   21  touch bunch_of_things.txt
   22  cat ../unix_tests_search/countries.txt > bunch_of_things.txt
   23  cat phrases2.txt >> bunch_of_things.txt
   24  sort bunch_of_things.txt -o bunch_of_things.txt
