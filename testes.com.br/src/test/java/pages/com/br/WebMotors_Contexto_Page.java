package pages.com.br;

import org.openqa.selenium.WebDriver;

import config.com.br.Hooks;

public class WebMotors_Contexto_Page {

	String url = "https://www.webmotors.com.br/";
	protected WebDriver driver;

	public WebMotors_Contexto_Page() {
		this.driver = Hooks.getDriver();
	}

	public void acessoSistema() {
		driver.navigate().to(url);
	}
}
