package test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import objects.Nav;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

public class NavTester {
	
	// Grunnbeløp satt 1.mai 2022
	private final Integer G = 111_477;
	
	// Testdata
	private List<Integer> inntekterP1 = Arrays.asList(500_000, 450_000, 400_000);
	private List<Integer> inntekterP2 = Arrays.asList(500_000);
	private List<Integer> inntekterP3 = Arrays.asList(670_000, 820_000, 890_000);
	private List<Integer> inntekterP4 = Arrays.asList(150_000, 120_000);
	private List<Integer> inntekterP5 = Arrays.asList(500_000, 300_000);
	private List<Integer> inntekterP6 = Arrays.asList(500_000, 300_000, 200_000);
	private List<Integer> inntekterP7 = Arrays.asList(50_000);
	private List<Integer> inntekterP8 = Arrays.asList(0, 300_000, 320_000);
	
		
	private Nav nav;
	
	@BeforeEach
	public void setup() {
		nav = new Nav();
	}
	
	@Test
	public void rettTilDagpenger() {
		assertTrue(nav.rettTilDagpenger(inntekterP2, true));
	}
	
	@Test
	public void ikkeRettTilDagpenger() {
		assertFalse(nav.rettTilDagpenger(inntekterP4, true));
	}
	
	@Test
	public void rettTil6G() {
		
		double seksG = 6 * G;
		double dagP = seksG / 260;
		int seksGDagsats = (int) Math.ceil(dagP);
		
		assertEquals(seksGDagsats, nav.antalldagpenger(inntekterP3));
	}
	
	@Test
	public void dagsats1924() {
		/* Fra oppgaven vet vi at inntekter på
		 * 500 000, 450 000, 400 000 gir en
		 * dagsats på 1924kr.
		 */
		assertEquals(1924, nav.antalldagpenger(inntekterP1));
	}
	
	@Test
	public void iArbeidIkkeDagpenger() {
		assertFalse(nav.rettTilDagpenger(inntekterP1, false));
	}
	
	@Test
	public void lønnSisteAar() {
		assertTrue(nav.rettTilDagpenger(inntekterP2, true));
	}
	
	@Test
	public void lonnSiste2Aar() {
		assertTrue(nav.rettTilDagpenger(inntekterP5, true));
	}
	
	@Test
	public void lonnSiste3Aar() {
		assertTrue(nav.rettTilDagpenger(inntekterP6, true));
	}
	
	@Test
	public void sjekkeToPersEtterHverandreRettRett() {
		boolean person1 = nav.rettTilDagpenger(inntekterP1, true);
		boolean person2 = nav.rettTilDagpenger(inntekterP2, true);

		assertTrue(person1);
		assertTrue(person2);
	}
	
	@Test
	public void sjekkeToPersEtterHverandreRettIkkeRett() {
		boolean person1 = nav.rettTilDagpenger(inntekterP5, true);
		boolean person2 = nav.rettTilDagpenger(inntekterP7, true);
		
		assertTrue(person1);
		assertFalse(person2);
		
	}
	
	
}
