# i18n

1. Stwórz stronę portalu z nieruchomościami w dwu językach
2. Skonfiguruj lokale w pliku `next.config.js`
3. Strona powinna zawierać dwie wersje jezykowe angielską i vietnamską – dane znajdziesz w katalogu snapshot
4. Strona powinna składać się z widoków – strony głównej z listą wszystkich dostępnych nieruchomości oraz stronami pojedynczych nieruchomości. Możesz użyć strategii SSG albo SSR. W bazie danych unikalnym identyfikatorem nieruchomości jest klucz `post_name`
5. Stwórz menu strony, które w każdej chwili pozwoli łatwo przełączyć się pomiędzy wersjami językowymi 
6. Dane z plików `en.json` i `vi.json` możesz wystawić przy pomocy json-server lub zaciągnąć przez moduł fs.
