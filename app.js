const fetch = require('node-fetch');

(async function() {
  const res = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');

  const json = await res.json();

  const sorted = json.map(v => v.nome).sort();

  const names = sorted.join(', ');

  console.log(names);
})();
