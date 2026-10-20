# PARTE 2 — Full Stack Open

Comunicación con el servidor (phonebook, countries).

## Estructura

```
PARTE2/
├── phonebook/      # Ejercicios 2.1 - 2.15 (aprox.)
│   └── src/
│       ├── main.jsx    # Componente principal con lógica CRUD
│       └── App.jsx     # Componente App
│
└── countries/      # Ejercicios 2.16 - 2.20 (aprox.)
    └── src/
        ├── main.jsx    # Consumo de API REST externa
        └── App.jsx     # Componente App
```

## phonebook (parte inicial de la Parte 2)

Aplicación de agenda telefónica con las siguientes funcionalidades:

- **Listar contactos:** Fetch desde `/api/persons` y mostrar en lista
- **Añadir contacto:** Formulario que POST a `/api/persons`
- **Eliminar contacto:** DELETE a `/api/persons/:id`
- **Modificar contacto:** Campos editables
- **Persistencia:** Datos en el backend (servidor Node.js + Express)

### Flujo principal

1. Al cargar la app, `useEffect` fetch `/api/persons` y guarda en `useState(persons)`
2. Usuario introduce nombre en input y Submit
3. POST a `/api/persons` con `{ name }`, servidor responde con el nuevo objeto
4. `setPersons(persons.concat(data))` actualiza la lista
5. Cada contacto tiene botón **delete** que hace DELETE a `/api/persons/:id`
6. Lista se actualiza automáticamente

## countries (siguiente bloque de la Parte 2)

Aplicación que consume una API REST externa:

- Fetch a `https://studies.cs.helsinki.fi/restcountes/api/all`
- Mostrar lista de países con nombre, capital, población y área
- Manejo de estado condicional (loading / error / success)

### Flujo principal

1. `useEffect` fetch la API de países al montar el componente
2. `useState(countries)` guarda los datos retornados
3. Mapea cada país a un `div` con sus propiedades
4. Si `countries.length === 0`, muestra mensaje "No countries found"

## Referencia oficial

https://fullstackopen.com/es/part2/communication_with_server