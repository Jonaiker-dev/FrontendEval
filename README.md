# Reactive-Form Component
### En el componente `reactive-forms` tenemos 2 tipos de Submit:

|  Submit | Descripcion |
|---|---|
| `SendData()` | **Muestra los Datos por consola**|
| `AddProduct()` |  **Agrega el producto a la API de productos**|

--- 

# EVALUACION DE PERSONAL
## 1. Formulario Reactivo:
### Crea un formulario reactivo en Angular con los siguientes campos:
- `Nombre`: Obligatorio y con un máximo de 50 caracteres.
- `Precio`: Obligatorio y debe ser un número mayor a 0. 
### Requerimientos:
- Muestra un mensaje de error si el usuario no llena un campo obligatorio.
- Al enviar el formulario, muestra los datos ingresados en la consola. 
## 2. Consumo de API:
### Implementa un servicio en Angular que consuma el endpoint `/api/productos` del ejercicio anterior y muestre los productos en una tabla.
### Requerimientos:
- Usa `HttpClient` para realizar la solicitud.
- Muestra los productos en una tabla con columnas para `ProductoID`, `Nombre`, y
`Precio`.
## 3. Componente Interactivo:
### Crea un componente que tenga un botón. Al hacer clic en el botón, cambia el color de fondo del componente de blanco a azul (y viceversa en clics consecutivos). 

