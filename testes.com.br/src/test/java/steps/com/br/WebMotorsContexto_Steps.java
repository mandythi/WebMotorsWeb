package steps.com.br;

import cucumber.api.java.pt.Dado;
import pages.com.br.WebMotors_Contexto_Page;

public class WebMotorsContexto_Steps extends WebMotors_Contexto_Page{

	@Dado("^que acesso o sistema$")
	public void que_acesso_o_sistema() {
		acessoSistema();
	}
}
