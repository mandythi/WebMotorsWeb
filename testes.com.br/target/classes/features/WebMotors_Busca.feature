#language: pt
#Autor: mandy.thiago2511@gmail.com
@busca
Funcionalidade: Testes na funcionalidade de Busca
  	Eu como usuario 
  	Quero realizar uma busca no sistema

  Contexto: Abrir o site
    Dado que acesso o sistema

  @ct01
  Esquema do Cenário: Realizar busca
    Quando realizo a busca por <Marca> e <Modelo>
    E valido os campos <Marca>, <Modelo> e seleciono a <Versão>
    E na área Vendedor seleciono <Vendedor>
    E seleciono um veiculo da lista
    Então verifico e valido estoque da loja

    Exemplos: 
      | Marca   | Modelo | Versão                          | Vendedor |
      | "Honda" | "City" | "1.5 DX 16V FLEX 4P AUTOMÁTICO" | "Loja"   |
