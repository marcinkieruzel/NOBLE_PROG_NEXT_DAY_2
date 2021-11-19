### Dynamic imports

1. Na stronie głównej projektu stwórz listę produktów (dane znajdziesz w katalogu __snapshots__). Zaimportuj dane bezpośredniio z pliku JSON.
2. Zmień sposób importowania pliku JSON na dynamiczny. Importujemy plik dopiero po pierwszy wyrenderowaniu się strony.
3. Stwórz komponent Product w osobnym pliku – zaimportuj go przy pomocy `next/dynamic`
4. Dodaj loader do komponentu Product – przeanalizuj jak użycie komponentu Routing wpłyneło na performance aplikacji