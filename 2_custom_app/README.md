# Custom App

1. Stwórz cztery strony w projekcie: Home z listą produktów, Produkt z pojedynczym produktem (dynamiczny route), Koszyk i Kontakt 
2. Wszystkie strony powinny być renderowane przy pomocy ISR tylko Kontakt jako SSR
3. W pliku _app.tsx stwórz kontekst aplikacji. Przchowaj w nim stan koszyka (Liczba zakupionych produktów i podumowanie ceny). Musisz oczywiście dodać możliwość dodawania produktu do koszyka na stronie pojedynczego produktu.
4. Stwórz komponent Layout (z Headerem) w którym będziemy prezentowali stan koszyka na podstawie wartości przechowywanych w Context
5. Sprawdź jak przejście do strony Kontakt wpływa na stan koszyka.
