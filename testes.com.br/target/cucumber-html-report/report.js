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
  "name": "valido os campos \u003cMarca\u003e, \u003cModelo\u003e e seleciono a \u003cVersão\u003e",
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
        "Versão",
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
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 6194346700,
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
formatter.result({
  "duration": 1181002400,
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
formatter.write("Erro ao verificar o elemento Proxy element for: DefaultElementLocator \u0027By.id: found-ads\u0027");
formatter.result({
  "duration": 70008675600,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d86.0.4240.198)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027NOTE_4DFZ23\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\AMANDA~1.NAS\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:49366}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 624a89653d7103f0b5c2cd4dd9e84eb3\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat framework.com.br.Framework.relatorio(Framework.java:23)\r\n\tat framework.com.br.Framework.existeElemento(Framework.java:59)\r\n\tat pages.com.br.WebMotors_Busca_Page.realizaBusca(WebMotors_Busca_Page.java:40)\r\n\tat steps.com.br.WebMotors_Busca_Steps.realizo_a_busca_por_e(WebMotors_Busca_Steps.java:12)\r\n\tat ✽.Quando realizo a busca por \"Honda\" e \"City\"(WebMotors_Busca.feature:13)\r\n",
  "status": "failed"
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
formatter.result({
  "status": "skipped"
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
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebMotors_Busca_Steps.seleciono_um_veiculo_da_lista()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebMotors_Busca_Steps.verifico_e_valido_estoque_da_loja()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 628916200,
  "status": "passed"
});
});