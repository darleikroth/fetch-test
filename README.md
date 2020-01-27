### Fetch test sample for exercising JS

1. Get this url api:

```
https://servicodados.ibge.gov.br/api/v1/localidades/estados
```

2. Using `fetch`, get all states resulting from this api, witch will be an `array` of `objects`:

```json
[
  {
    "id": 11,
    "sigla": "RO",
    "nome": "Rondônia",
    "regiao": {
      "id": 1,
      "sigla": "N",
      "nome": "Norte"
    }
  },
  {
    "id": 12,
    "sigla": "AC",
    "nome": "Acre",
    "regiao": {
      "id": 1,
      "sigla": "N",
      "nome": "Norte"
    }
  },
  {
    "id": 13,
    "sigla": "AM",
    "nome": "Amazonas",
    "regiao": {
      "id": 1,
      "sigla": "N",
      "nome": "Norte"
    }
  },
  {...}
]


```

3. Sort the array into alphabet order (if possible).

4. Finally, list the names of states as a `string`, like that:

```
Acre, Alagoas, Amapá, Amazonas, Bahia, Ceará, Distrito Federal, Espírito Santo, Goiás, Maranhão, Mato Grosso, Mato Grosso do Sul, Minas Gerais, Paraná, Paraíba, Pará, Pernambuco, Piauí, Rio Grande do Norte, Rio Grande do Sul, Rio de Janeiro, Rondônia, Roraima, Santa Catarina, Sergipe, São Paulo, Tocantins
```

5. You are done!
