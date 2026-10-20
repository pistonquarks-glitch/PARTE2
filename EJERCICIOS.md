# PARTE 2 — Ejercicios Full Stack Open

Documento único de consulta de la Parte 2.

---

## phonebook, paso 1

**Qué pide:** Agenda telefónica básica. Mostrar lista de contactos desde el servidor. Añadir nuevo contacto mediante formulario.

**Link de referencia:** https://fullstackopen.com/es/part2/communication_with_server

**Estado:** ⏳ Pendiente

**Archivos:**
- `phonebook/src/main.jsx` — lógica principal
- `phonebook/src/App.jsx` — estructura App

**Solución:** Componente que usa `useEffect` para fetch `/api/persons` al montar, y `useState` para mantener la lista. Formulario con `onSubmit` que POST al servidor.

---

## phonebook, paso 2

**Qué pide:** Ampliar la agenda con validación de nombre. Que el nombre no esté vacío.

**Link de referencia:** https://fullstackopen.com/es/part2/communication_with_server

**Estado:** ⏳ Pendiente

**Archivos:**
- `phonebook/src/main.jsx` — añadir validación
- `phonebook/src/App.jsx` — estado del formulario

**Solución:** Usar `useState` para validar que `name.length > 0` antes de POST. Mostrar error si el input está vacío.

---

## phonebook, paso 3

**Qué pide:** Eliminar contacto. Botón delete por persona.

**Link de referencia:** https://fullstackopen.com/es/part2/communication_with_server

**Estado:** ⏳ Pendiente

**Archivos:**
- `phonebook/src/main.jsx` — función delete

**Solución:** `deletePerson(id)` que hace `fetch(`/api/persons/${id}`, { method: 'DELETE' })` y `setPersons(persons.filter(p => p.id !== id))`.

---

## phonebook, paso 4

**Qué pide:** Ordenar la lista alfabéticamente.

**Link de referencia:** https://fullstackopen.com/es/part2/communication_with_server

**Estado:** ⏳ Pendiente

**Archivos:**
- `phonebook/src/main.jsx` — sort por nombre

**Solución:** `persons.sort((a, b) => a.name.localeCompare(b.name))` o usar `useEffect` con `Array.sort()`.

---

## phonebook, paso 5

**Qué pedir:** Modificar contacto existente. Campo editable y save.

**Link de referencia:** https://fullstackopen.com/es/part2/communication_with_server

**Estado:** ⏳ Pendiente

**Archivos:**
- `phonebook/src/main.jsx` — lógica de edición

**Solución:** Estado `editId` y `editName`. Formulario condicional: si `editId` está activo, muestra valor actual y botón Save que hace PUT a `/api/persons/:id`.

---

## countries, paso 1

**Qué pide:** Consumir API REST externa. Mostrar lista de países con nombre, capital, población y área.

**Link de referencia:** https://fullstackopen.com/es/part2/communication_with_server

**Estado:** ⏳ Pendiente

**Archivos:**
- `countries/src/main.jsx` — fetch y renderizado
- `countries/src/App.jsx` — estructura

**Solución:** `useEffect` fetch a `https://studies.cs.helsinki.fi/restcountes/api/all`, `useState(countries)` y mapa `countries.map()`.

---

## countries, paso 2

**Qué pedir:** Filtrar países por región o nombre.

**Link de referencia:** https://fullstackopen.com/es/part2/communication_with_server

**Estado:** ⏳ Pendiente

**Archivos:**
- `countries/src/main.jsx` — input de filtro y useState filtrado

**Solución:** `useState` para el texto del filtro y `countries.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()))`.

---

## countries, paso 3

**Qué pedir:** Mostrar solo datos esenciales (nombre y capital). Usar prop drilling o contexto.

**Link de referencia:** https://fullstackopen.com/es/part2/communication_with_server

**Estado:** ⏳ Pendiente

**Archivos:**
- `countries/src/main.jsx` — componente Country y props

**Solución:** Extraer `renderCountry` como función separada o componente que reciba `country` por props.

---

## countries, paso 4

**Qué pedir:** Manejo de errores en el fetch. Si la API falla, mostrar mensaje amigable.

**Link de referencia:** https://fullstackopen.com/es/part2/communication_with_server

**Estado:** ⏳ Pendiente

**Archivos:**
- `countries/src/main.jsx` — try/catch en useEffect

**Solución:** `try { const data = await response.json(); } catch { setError("Error al cargar") }` y mostrar `error` en el UI.

---

## countries, paso 5

**Qué pedir:** Paginación o carga infinita de países.

**Link de referencia:** https://fullstackopen.com/es/part2/communication_with_server

**Estado:** ⏳ Pendiente

**Archivos:**
- `countries/src/main.jsx` — useState page y next page

**Solución:** `useState({ page: 1, pageSize: 10 })` y botón que incrementa `page`. Fetch con `?_page=${page}&_limit=${pageSize}`.