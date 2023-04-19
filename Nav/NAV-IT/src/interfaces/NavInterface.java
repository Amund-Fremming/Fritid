package interfaces;

import java.util.List;

public interface NavInterface {
		
	/**
	 * Sjekker om en bruker har rett til dagpenger ut ifra
	 * grunnbeløpet til Nav og brukers inntekt siste årene. 
	 * 
	 * @param inntektSisteAar, inntekt siste årene
	 * @return true om bruker har rett på dagpenger, false hvis ikke.
	 */
	boolean rettTilDagpenger(List<Integer> inntektSisteAar, boolean uteAvArbeid);

	/**
	 * Regner ut antall dagpenger ut ifra brukers inntekt siste årene.
	 * Bruker da en liste fo å gjøre det mulig for bruker å anngi inntekt
	 * for de siste tre årene eller bare siste året om det er tilfellet.
	 * 
	 * @param inntektSisteAar, inntekt siste årene
	 * @return antall dagpenger bruker har rett til.
	 */
	int antalldagpenger(List<Integer> inntektSisteAar);

}
