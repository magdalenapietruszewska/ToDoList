# Warsztat

## Przygotowanie
> Zmodyfikujcie plik `webpack.config.js`, tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_5/3_Warsztat`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujecie, np. `App.js`
>
> **Pamiętajcie, aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


Napisz aplikację `Todo` wraz z `TimeTrackerem`. Dane będziesz zapisywać z wykorzystaniem `json-server`.

Jakie ma mieć funkcjonalności nasza aplikacja?

- dodawanie zadań
- dodawanie operacji do zadań
- rejestracja czasu operacji (wpisywana ręcznie bądź z wykorzystaniem stopera)

---

W pliku `html_snippets.md` masz przygotowane snippety kodu dla poszczególnych elementów aplikacji - wykorzystaj je jako wzorzec do tworzenia elementów za pomocą React.

Również możesz zobaczyć jak wygląda ta aplikacja włączając plik `index_preview.html`.


Aplikacja składa się z:
- formularza do dodawania nowego zadania
- listy zadań - każde zadanie to osobna sekcja
- do zadania można dodać operację poprzez przycisk **Add operation**
- pod pierwszym zadaniem msz pokazane różne etapy "życia" operacji
    - pierwszy element to formularz do dodawania nowej operacji (ma się pojawiać po kliknięciu $Add operation$)
    - drugi element - to wygląd operacji po dodaniu - ma ona dwie opcje dodawania czasu spędzonego nad tą operacją
        - **Add time manually** - wpisanie ręcznie czasu w minutach (widok czwartego elementu na liście)
        - **Start timer** - uruchamia timer, który na bieżąco pokazuje ile czasu upłynęło (aktualizowany co sekundę) - widok to trzeci element na liście
    - ostatni element to wygląd już po zarejestrowaniu czasu dla operacji
- zadanie ma też opcję **Finish** - powoduje to, że znikają wszystkie przyciski z tego zadania i jego operacji


Omówmy teraz potrzebne komponenty `Task` i `Operation`, które masz utworzyć w odpowiednich plikach.

# Task
`props`:
- title
- description
- status - domyślnie open, po zakończeniu ma być closed
- operations - tablica przechowująca powiązane operacje

# Operation
`props`:
- description
- timeSpent - początkowo 0 - czyli nie zarejestrowano jeszcze czasu i wtedy mogą być widoczne przyciski - czas przechowujemy w sekundach, natomiast dopiero na wyświetlaniu formatujemy to na zapis 1h 23m 15s

W pliku `database/db.json` masz przygotowane dane zadań i operacji.

Dane aplikacji powinny znajdować się w stanie komponentu `App`. To on powinien przechowywać większość informacji i funkcji potrzebnych do działania aplikacji.

Jeżeli wystąpią problemy z json-server, możesz wykorzystać tego json-a:
```json
{
  "tasks": [
    {
      "id": 1,
      "title": "task1",
      "description": "desc1",
      "status": "open",
      "operations": [
        {
          "description": "Operation1",
          "timeSpent": 1200
        },
        {
          "description": "Operation2",
          "timeSpent": 1800
        }
      ]
    },
    {
      "id": 2,
      "title": "task2",
      "description": "desc2",
      "status": "open",
      "operations": [
        {
          "description": "Operation1",
          "timeSpent": 0
        }
      ]
    }
  ]
}
```

i stronę http://myjson.com/, dzięki której możecie tymczasowo uruchomić zewnętrzny serwer REST API.
