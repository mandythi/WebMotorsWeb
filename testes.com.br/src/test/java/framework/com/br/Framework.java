package framework.com.br;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.junit.Assert;
import cucumber.api.Scenario;

public class Framework {
	protected WebDriver driver;
	protected Scenario scenario;

	public Framework(WebDriver driver, Scenario scenario) {
		this.driver = driver;
		this.scenario = scenario;
	}

	public void relatorio(boolean status, String msg) {
		scenario.write(msg);
		scenario.embed(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES), "image/png");

		if (status == false) {
			Assert.fail(msg);
		}
	}

	public void preencheCampo(WebElement elemento, String valor) {
		existeElemento(elemento, 10);
		try {
			elemento.sendKeys(valor);
		} catch (Exception e) {
			relatorio(false, "Não foi possível digitar o " + valor + " no campo " + elemento);
		}

	}
	
	public void click(WebElement elemento) {
		existeElemento(elemento, 10);
		try {
			elemento.click();
		} catch (Exception e) {
			relatorio(false, "Não foi possível clicar no elemento " + elemento);
		}

	}
	
	public void existeElemento(WebElement elemento, int timeOut) {
		
		WebDriverWait wait = new WebDriverWait(driver, timeOut);
		
		try {
			if (wait.until(ExpectedConditions.visibilityOfAllElements(elemento)) == null) {
				relatorio(false, "O elemento " + elemento + " não está visível");
			}
		} catch (Exception e) {
			relatorio(false, "Erro ao verificar o elemento "+ elemento);
		}
	}
}