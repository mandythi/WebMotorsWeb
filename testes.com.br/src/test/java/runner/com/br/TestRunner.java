package runner.com.br;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
					features = {"src/resources/java/features/"},
					plugin = {"pretty", "html:target/cucumber-html-report", "json:target/cucumber-json-report/cucumber.json"},
					glue = {""},
					tags = {"@busca"}
				)

public class TestRunner {

}
