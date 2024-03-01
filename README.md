## Description
Prueba para Backend Listo app cl

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

##Ejemplos de query para graphql

  ### Crear Empresas

Para crear empresas de diferentes tipos:

1. **Pizza Palace**
    ```graphql
    mutation {
      createCompany(input: {
        name: "Pizza Palace",
        fiscal_id: "1234567890",
        address: "123 Main Street",
        phone: "+1234567890",
        website: "www.pizzapalace.com",
        email: "info@pizzapalace.com",
        name_representative: "John Doe",
        address_representative: "456 Park Avenue",
        email_representative: "john@pizzapalace.com",
        type: food
      }) {
        _id
        name
        email
      }
    }
    ```

2. **Green Garden**
    ```graphql
    mutation {
      createCompany(input: {
        name: "Green Garden",
        fiscal_id: "0987654321",
        address: "456 Elm Street",
        phone: "+0987654321",
        website: "www.greengarden.com",
        email: "info@greengarden.com",
        name_representative: "Jane Smith",
        address_representative: "789 Oak Avenue",
        email_representative: "jane@greengarden.com",
        type: food
      }) {
        _id
        name
        email
      }
    }
    ```

3. **Speedy Delivery**
    ```graphql
    mutation {
      createCompany(input: {
        name: "Speedy Delivery",
        fiscal_id: "9876543210",
        address: "789 Pine Street",
        phone: "+9876543210",
        website: "www.speedydelivery.com",
        email: "info@speedydelivery.com",
        name_representative: "Mike Johnson",
        address_representative: "123 Maple Avenue",
        email_representative: "mike@speedydelivery.com",
        type: transportation
      })  {
        _id
        name
        email
      }
    }
    ```

### Consultar Empresas

Para obtener todas las empresas y sus empleados:

```graphql
query {
  companies {
    _id
    address
    phone
    website
    name_representative
    phone_representative
    address_representative
    email_representative
    employees {
      _id
    }
  }
}
```

### Actualizar Empresa

Para actualizar una empresa, proporciona su ID y los campos que deseas actualizar:

```graphql
mutation {
  updateCompany(
    _id: "",
    input: {
      email: "newemail@example.com",
      phone_representative: "123456789"
    }
  ) {
    name
    email
    phone_representative
  }
}
```

### Eliminar Empresa

Para eliminar una empresa y sus empleados asociados:

```graphql
mutation {
  deleteCompany(_id: "") {
    name
    fiscal_id
    address
    phone
    website
    email
    name_representative
    phone_representative
    address_representative
    email_representative
    employees {
      _id
    }
  }
}
```

### Crear Empleado

Para crear un empleado y agregarlo a una empresa específica, proporciona el ID de la empresa:

```graphql
mutation {
  createEmployee(input: {
    name: "Juan Perez",
    email: "juanperez@example.com",
    phone: "+1234567890",
    age: 30,
    companyId: "65e1f8a162a717925dd18420"
  }) {
    _id
    name
    email
    phone
    age
  }
}
```

### Actualizar Empleado

Para actualizar un empleado, proporciona su ID y los campos que deseas actualizar:

```graphql
mutation {
  updateEmployee(
    _id: "65e1fc83e761376179d2ef9e",
    input: {
      name: "Mario"
    }
  ) {
    name
    email
    phone
    age
  }
}
```

### Eliminar Empleado

Para eliminar un empleado específico:

```graphql
mutation {
  deleteEmployee(_id: "") {
    name
    email
    phone
    age
  }
}
```
