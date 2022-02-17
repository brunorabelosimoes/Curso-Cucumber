package br.ce.brsimoes.runners;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		// Aprender_cucumber.feature", 		
		// alugar_filme.feature",
		features = "src/test/resources/features/",   			//caminho para encontrar as features
		glue = "br.ce.brsimoes.steps", 												//caminho para encontrar as steps
		tags= {"@unitários"},															//Excuta apenas o que está na tag
		plugin = {"pretty", "html:target/report-html","json:target/report.json"},	//melhora apresentação no console
		monochrome = true, 															//retira caracteres especiais do console
		snippets = SnippetType.CAMELCASE, 											//Cria os métodos sem _ com letra maiuscula ex: eu_Executá_Lo = euExecutáLo
		dryRun = false, 															// se true, valida apenas os cenários, se estão corretos (não executa cenários anteriores)
		strict = false  															// caso acrescente outro passo na feature e não mapeie, o teste falha.
		)

public class RunnerTest {
	
	
	

}
