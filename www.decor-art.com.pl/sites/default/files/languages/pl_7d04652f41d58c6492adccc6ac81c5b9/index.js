Drupal.locale = { 'pluralFormula': function($n) { return Number((($n==1)?(0):((((($n%10)>=2)&&(($n%10)<=4))&&((($n%100)<10)||(($n%100)>=20)))?(1):2))); }, 'strings': { "Unspecified error": "Nieokreślony błąd", "Testing clean URLs...": "Testowanie obsługi przyjaznych adresów...", "Your server has been successfully tested to support this feature.": "Serwer pomyślnie przeszedł test.", "Your system configuration does not currently support this feature. The \x3ca href=\"http://drupal.org/node/15365\"\x3ehandbook page on Clean URLs\x3c/a\x3e has additional troubleshooting information.": "System, w swej obecnej konfiguracji, nie obsługuje tej funkcji. Więcej informacji na temat sposób rozwiązania problemu znaleźć można na \x3ca href=\"http://drupal.org/node/15365\"\x3estronie podręcznika dotyczącej przyjaznych adresów\x3c/a\x3e.", "An HTTP error @status occurred. \n@uri": "Wystąpił błąd HTTP: @status. \n@uri", "An error occurred. \n@uri\n(no information available).": "Wystąpił błąd \n@uri\n(brak szerszych informacji).", "An error occurred. \n@uri\n@text": "Wystąpił błąd \n@uri\n@text", "Changes made in this table will not be saved until the form is submitted.": "Zmiany wprowadzone w tabeli zachowuje się przyciskiem u dołu formularza.", "Drag to re-order": "Chwyć, by zmienić kolejność", "Deselect all rows in this table": "Cofa zaznaczenie wszystkich wierszy tabeli", "Select all rows in this table": "Zaznacza wszystkie wiersze tabeli", "Join summary": "Połącz podsumowanie z resztą wpisu", "Split summary at cursor": "Oddziel podsumowanie w miejscu kursora", "The changes to these blocks will not be saved until the \x3cem\x3eSave blocks\x3c/em\x3e button is clicked.": "Zmiany wprowadzone w blokach zachowuje się przyciskiem u dołu formularza." } };