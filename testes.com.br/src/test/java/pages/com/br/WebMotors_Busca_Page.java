package pages.com.br;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import config.com.br.Hooks;
import cucumber.api.Scenario;
import framework.com.br.Framework;

public class WebMotors_Busca_Page {
	protected WebDriver driver;
	protected Scenario scenario;
	protected Framework framework;

	public WebMotors_Busca_Page() {
		this.driver = Hooks.getDriver();
		this.scenario = Hooks.getScenario();
		PageFactory.initElements(driver, this);
		framework = new Framework(this.driver, this.scenario);
	}

	@FindBy(id = "searchBar")
	public WebElement idTxtBusca;

	@FindBy(className = "SearchBar__results__result__name")
	public WebElement classDivBusca;
	
	@FindBy(xpath = "//*[@class='AutoComplete__icon AutoComplete__icon--close']")
	public WebElement xpathCampoLocalizacao;

	@FindBy(xpath = "//*[@class='sc-bRBYWo gLEvJK']")
	public WebElement xpathDivContainerResultado;

	@FindBy(xpath = "//*[@class='Filters__line Filters__line--uppercase Filters__line--make Filters__line--icon Filters__line--icon--close']")
	public WebElement xpathDivMarcaResultado;

	@FindBy(xpath = "//*[@class='Filters__line Filters__line--uppercase Filters__line--strong  Filters__line--icon Filters__line--icon--close']")
	public WebElement xpathDivModeloResultado;

	@FindBy(xpath = "//*[@class='Filters__line Filters__line--icon Filters__line--icon Filters__line--icon--right Filters__line--gray']")
	public WebElement xpathDivVersoesResultado;

	@FindBy(xpath = "//*[@class='Search-result Search-result--container-left']")
	public WebElement xpathEscolhaVersao;
	
	@FindBy(xpath = "//*[@id='root']/main/div[1]/div[2]/div/div[5]")
	public WebElement xpathDivContainerVendedor;

	@FindBy(xpath = "//*[@class='ContainerCardVehicle ads_align']")
	public WebElement xpathConteinerBusca;

	@FindBy(xpath = "//*[@class='sc-hzNEM beFZWZ']")
	public WebElement xpathConteinerItem;
	
	@FindBy(xpath = "//*[@data-test-id='found-ads']//strong")
	public WebElement xpathConteinerCarrosEncontrados;
	
	@FindBy(xpath = "//*[@class='CardVehicle__linkPhoto'][1]")
	public WebElement xpathLinkPrimeiroVeiculoLista;
	
	@FindBy(xpath = "//*[@class='explanation-financing__footer']/button")
	public WebElement xpathLinkFlyoutInformacao;
	
	@FindBy(id = "VehicleSellerInformationName")
	public WebElement idH2NomeLoja;
	
	@FindBy(id = "VehicleSellerInformationStock")
	public WebElement idLinkEstoque;
	

	public void realizaBusca(String marca, String modelo) {

		String marcaModelo = marca + " " + modelo;
		framework.preencheCampo(idTxtBusca, marcaModelo);
		framework.click(classDivBusca);
		// Aguarda resultado da busca ser visível
		framework.aguarda(3);
		framework.existeElemento(xpathDivContainerResultado, 30);
		framework.aguarda(1);
		framework.relatorio(true, "Busca efetuada com sucesso!");
	}

	public void confirmaResultadoBusca(String marca, String modelo, String versao) {
		
		framework.click(xpathCampoLocalizacao);
		framework.aguarda(1);
		framework.javascriptScrollElemento(xpathDivMarcaResultado);
		framework.comparaTextoElemento(xpathDivMarcaResultado, marca.toUpperCase());
		framework.comparaTextoElemento(xpathDivModeloResultado, modelo.toUpperCase());
		framework.click(xpathDivVersoesResultado);
		framework.aguarda(1);
		framework.clickTextoLink(versao);
		framework.aguarda(3);
		framework.relatorio(true, "Validação de busca efetuada com sucesso!");
	}

	public void escolheOpcoesVendedor(String vendedor) {
		
		int verificaString = vendedor.indexOf(">");
		String[] listaVendedor;
		
		framework.javascriptScrollElemento(xpathDivContainerVendedor);
		
		if (verificaString > 0) {
			vendedor = vendedor + ">";
		}

		listaVendedor = vendedor.split(">");
		
		for (String itemVendedor : listaVendedor) {
			framework.clickElementoFilhoPorTexto(xpathDivContainerVendedor, By.className("Checkbox"), itemVendedor);
			framework.aguarda(1);
		}
		
		framework.aguarda(3);
		framework.relatorio(true, "Vendedor escolhido com sucesso!");
	}
	
	public void selecionaVeiculoLista() {
		
		int numeroVeiculos = Integer.parseInt(framework.pegarTexto(xpathConteinerCarrosEncontrados));
		
		framework.aguarda(3);
		
		if (numeroVeiculos > 0) {
			framework.click(xpathLinkPrimeiroVeiculoLista);
		}else{
			framework.relatorio(false, "A busca não retornou resultados");
		}
		
		framework.relatorio(true, "Veiculo escolhido com sucesso!");
	}
	
	public void validaEstoque() {
		
		framework.selecionaAba(1);
		
		if(framework.verificaElementoVisível(xpathLinkFlyoutInformacao, 10)) {
			framework.click(xpathLinkFlyoutInformacao);
		}
		
		framework.javascriptScrollElemento(idLinkEstoque);
		
		String nomeLoja = framework.pegarTexto(idH2NomeLoja);
		
		framework.javascriptClickElemento(idLinkEstoque);
		
		WebElement tagNomeLoja = driver.findElement(By.id(nomeLoja));
		
		if(framework.verificaElementoVisível(tagNomeLoja, 10)) {
			framework.aguarda(3);
			int numeroVeiculos = Integer.parseInt(framework.pegarTexto(xpathConteinerCarrosEncontrados));
			
			if (numeroVeiculos > 0) {
				framework.relatorio(true, "O estoque da loja " + nomeLoja + " foi validado\nNúmero de veículos: " + numeroVeiculos);
			} else {
				framework.relatorio(false, "O estoque da loja " + nomeLoja + " foi validado\nNúmero de veículos: " + numeroVeiculos);
			}
			
		} else {
			framework.relatorio(false, "O estoque da loja " + nomeLoja + " não foi carregado");
		}
		
	}
}
