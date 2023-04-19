package objects;

import java.util.List;

import interfaces.NavInterface;

public class Nav implements NavInterface {
	
	private final Integer G = 111_477;
	private final Integer arbDagerPrAar = 260;
	private double inntektSistAar;
	private double inntektSum;
	
	public Nav() {
		
	}

	@Override
	public boolean rettTilDagpenger(List<Integer> inntekter, boolean uteAvArbeid) {
		inntektSistAar = inntekter.get(0);
		if(inntektSistAar == 0)
			return false;
		
		inntektSum = inntekter.stream()
				.mapToInt(x -> x)
				.sum();
		
		if((inntektSistAar > (3 * G) || inntektSistAar > (1.5 * G)) && uteAvArbeid) {
			return true;
		}
		
		return false;
		
	}

	@Override
	public int antalldagpenger(List<Integer> inntekter) {
		if(inntektSistAar == 0)
			rettTilDagpenger(inntekter, true);
		
		double dagpengerGrunnlag = Math.max(inntektSistAar, (inntektSum/3));
		
		if(dagpengerGrunnlag > (6 * G)) {
			dagpengerGrunnlag = (6 * G);
		}
		
		return (int) Math.ceil(dagpengerGrunnlag / arbDagerPrAar);
		
	}
	
	

}
