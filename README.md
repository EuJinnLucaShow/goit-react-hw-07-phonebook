Використовуй цей
[шаблон React-проекту](https://github.com/goitacademy/react-homework-template#readme)
як стартову точку своєї програми.

# Критерії приймання

- Створений репозиторій `goit-react-hw-07-phonebook`
- Використана бібліотека `Redux Toolkit`

## Телефонна книга

Виконай рефакторинг коду застосунку «Телефонна книга». Видали код, який
відповідає за зберігання та читання контактів з локального сховища, та додай
роботу з бекендом для зберігання контактів.

Створи бекенд для розробки за допомогою UI-сервісу
[mockapi.io](https://mockapi.io). Зареєструйся, використовуючи свій обліковий
запис GitHub.

Створи ресурс `contacts`, щоб отримати ендпоінт `/contacts`. Використовуй
конструктор ресурсу та опиши об'єкт контакту як на ілюстрації.

<img src="https://github.com/goitacademy/react-homework/blob/master/homework-07/resource.png" alt="Contact schema" with="400" />

Форма стану
Додай у стан Redux обробку індикатора завантаження та помилки. Для цього зміни форму стану.

```html
{
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
}
```

Операції
Використовуй функцію [createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk) для оголошення асинхронних генераторів екшенів та виконання HTTP-запитів. Обробку екшенів та зміну даних у стані Redux зроби за допомогою [createSlice](https://redux-toolkit.js.org/api/createSlice).

Оголоси наступні операції:

- `fetchContacts` - одержання масиву контактів (метод GET) запитом. Базовий тип екшену `"contacts/fetchAll"`.
- `addContact` - додавання контакту (метод POST). Базовий тип екшену `"contacts/addContact"`.
- `deleteContact` - видалення контакту (метод DELETE). Базовий тип екшену `"contacts/deleteContact"`.
