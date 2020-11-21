$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("WebMotors_Busca.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#Autor: mandy.thiago2511@gmail.com"
    }
  ],
  "line": 4,
  "name": "Testes na funcionalidade de Busca",
  "description": "\tEu como usuario \n\tQuero realizar uma busca no sistema",
  "id": "testes-na-funcionalidade-de-busca",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@busca"
    }
  ]
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Realizar busca",
  "description": "",
  "id": "testes-na-funcionalidade-de-busca;realizar-busca",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 11,
      "name": "@ct01"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "realizo a busca por \u003cMarca\u003e e \u003cModelo\u003e",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "valido os campos \u003cMarca\u003e, \u003cModelo\u003e e seleciono a \u003cVersao\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "na área Vendedor seleciono \u003cVendedor\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "seleciono um veiculo da lista",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "verifico e valido estoque da loja",
  "keyword": "Então "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "testes-na-funcionalidade-de-busca;realizar-busca;",
  "rows": [
    {
      "cells": [
        "Marca",
        "Modelo",
        "Versao",
        "Vendedor"
      ],
      "line": 20,
      "id": "testes-na-funcionalidade-de-busca;realizar-busca;;1"
    },
    {
      "cells": [
        "\"Honda\"",
        "\"City\"",
        "\"1.5 DX 16V FLEX 4P AUTOMÁTICO\"",
        "\"Loja\""
      ],
      "line": 21,
      "id": "testes-na-funcionalidade-de-busca;realizar-busca;;2"
    },
    {
      "cells": [
        "\"Honda\"",
        "\"City\"",
        "\"1.5 DX 16V FLEX 4P AUTOMÁTICO\"",
        "\"Loja\u003eConcessionária\""
      ],
      "line": 22,
      "id": "testes-na-funcionalidade-de-busca;realizar-busca;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 6180403300,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "Abrir o site",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que acesso o sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "WebMotorsContexto_Steps.que_acesso_o_sistema()"
});
formatter.write("Site carregado com sucesso!");
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "duration": 8134959200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Realizar busca",
  "description": "",
  "id": "testes-na-funcionalidade-de-busca;realizar-busca;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 11,
      "name": "@ct01"
    },
    {
      "line": 3,
      "name": "@busca"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "realizo a busca por \"Honda\" e \"City\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "valido os campos \"Honda\", \"City\" e seleciono a \"1.5 DX 16V FLEX 4P AUTOMÁTICO\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "na área Vendedor seleciono \"Loja\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "seleciono um veiculo da lista",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "verifico e valido estoque da loja",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 21
    },
    {
      "val": "City",
      "offset": 31
    }
  ],
  "location": "WebMotors_Busca_Steps.realizo_a_busca_por_e(String,String)"
});
formatter.write("Busca efetuada com sucesso!");
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "duration": 5353214800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 18
    },
    {
      "val": "City",
      "offset": 27
    },
    {
      "val": "1.5 DX 16V FLEX 4P AUTOMÁTICO",
      "offset": 48
    }
  ],
  "location": "WebMotors_Busca_Steps.valido_os_campos_e_seleciono_a(String,String,String)"
});
formatter.write("Os textos são equivalentes:\nTexto esperado \u003d HONDA\nTexto obtido \u003d HONDA");
formatter.embedding("image/png", "embedded2.png");
formatter.write("Os textos são equivalentes:\nTexto esperado \u003d CITY\nTexto obtido \u003d CITY");
formatter.embedding("image/png", "embedded3.png");
formatter.write("Validação de busca efetuada com sucesso!");
formatter.embedding("image/png", "embedded4.png");
formatter.result({
  "duration": 6901205400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Loja",
      "offset": 28
    }
  ],
  "location": "WebMotors_Busca_Steps.na_área_Vendedor_seleciono(String)"
});
formatter.write("Vendedor escolhido com sucesso!");
formatter.embedding("image/png", "embedded5.png");
formatter.result({
  "duration": 4709401200,
  "status": "passed"
});
formatter.match({
  "location": "WebMotors_Busca_Steps.seleciono_um_veiculo_da_lista()"
});
formatter.write("Veiculo escolhido com sucesso!");
formatter.embedding("image/png", "embedded6.png");
formatter.result({
  "duration": 3614617100,
  "status": "passed"
});
formatter.match({
  "location": "WebMotors_Busca_Steps.verifico_e_valido_estoque_da_loja()"
});
formatter.write("O estoque da loja Lino Automoveis foi validado\nNúmero de veículos: 6");
formatter.embedding("image/png", "embedded7.png");
formatter.result({
  "duration": 6343483000,
  "status": "passed"
});
formatter.after({
  "duration": 700764400,
  "status": "passed"
});
formatter.before({
  "duration": 5358829500,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "Abrir o site",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que acesso o sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "WebMotorsContexto_Steps.que_acesso_o_sistema()"
});
formatter.write("Site carregado com sucesso!");
formatter.embedding("image/png", "embedded8.png");
formatter.result({
  "duration": 8412083400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Realizar busca",
  "description": "",
  "id": "testes-na-funcionalidade-de-busca;realizar-busca;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 11,
      "name": "@ct01"
    },
    {
      "line": 3,
      "name": "@busca"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "realizo a busca por \"Honda\" e \"City\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "valido os campos \"Honda\", \"City\" e seleciono a \"1.5 DX 16V FLEX 4P AUTOMÁTICO\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "na área Vendedor seleciono \"Loja\u003eConcessionária\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "seleciono um veiculo da lista",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "verifico e valido estoque da loja",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 21
    },
    {
      "val": "City",
      "offset": 31
    }
  ],
  "location": "WebMotors_Busca_Steps.realizo_a_busca_por_e(String,String)"
});
formatter.write("Busca efetuada com sucesso!");
formatter.embedding("image/png", "embedded9.png");
formatter.result({
  "duration": 5349429100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 18
    },
    {
      "val": "City",
      "offset": 27
    },
    {
      "val": "1.5 DX 16V FLEX 4P AUTOMÁTICO",
      "offset": 48
    }
  ],
  "location": "WebMotors_Busca_Steps.valido_os_campos_e_seleciono_a(String,String,String)"
});
formatter.write("Os textos são equivalentes:\nTexto esperado \u003d HONDA\nTexto obtido \u003d HONDA");
formatter.embedding("image/png", "embedded10.png");
formatter.write("Os textos são equivalentes:\nTexto esperado \u003d CITY\nTexto obtido \u003d CITY");
formatter.embedding("image/png", "embedded11.png");
formatter.write("Validação de busca efetuada com sucesso!");
formatter.embedding("image/png", "embedded12.png");
formatter.result({
  "duration": 7030697900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Loja\u003eConcessionária",
      "offset": 28
    }
  ],
  "location": "WebMotors_Busca_Steps.na_área_Vendedor_seleciono(String)"
});
formatter.write("Vendedor escolhido com sucesso!");
formatter.embedding("image/png", "embedded13.png");
formatter.result({
  "duration": 5780788500,
  "status": "passed"
});
formatter.match({
  "location": "WebMotors_Busca_Steps.seleciono_um_veiculo_da_lista()"
});
formatter.write("Veiculo escolhido com sucesso!");
formatter.embedding("image/png", "embedded14.png");
formatter.result({
  "duration": 3603327700,
  "status": "passed"
});
formatter.match({
  "location": "WebMotors_Busca_Steps.verifico_e_valido_estoque_da_loja()"
});
formatter.write("O estoque da loja Toyolex Aracaju foi validado\nNúmero de veículos: 29");
formatter.embedding("image/png", "embedded15.png");
formatter.result({
  "duration": 6447967100,
  "status": "passed"
});
formatter.after({
  "duration": 715137800,
  "status": "passed"
});
});