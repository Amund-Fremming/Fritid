package controller;


import java.util.Arrays;
import java.util.List;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.RadioButton;
import javafx.scene.control.TextField;
import objects.Nav;

public class NavController {

    @FXML
    private TextField lonnFjor, lonn2, lonn3;
    
    @FXML
    private RadioButton radioJa, radioNei;

    @FXML
    private Button regnUtButton;
    
    @FXML
    private Label outputLabel, text1Error, text2Error, text3Error;
    
    private Nav nav = new Nav();
    
    
    @FXML
    void regnUt(ActionEvent event) {
    	/* Sjekker at all input er lovlig */
    	if(!validator(lonnFjor, lonn2, lonn3))
    		return;
    	
    	boolean uteAvArbeid = radioJa.isSelected();
    	
    	int lonnFjorVal = getIntValue(lonnFjor);
    	int lonn2Val = getIntValue(lonn2);
    	int lonn3Val = getIntValue(lonn3);
    	
    	List<Integer> inntekter = Arrays.asList(lonnFjorVal, lonn2Val, lonn3Val);
    	boolean rettTilDagpenger = nav.rettTilDagpenger(inntekter, uteAvArbeid);
    	int dagpenger = nav.antalldagpenger(inntekter);
    	
    	String output = "";
    	if(rettTilDagpenger) {
    		output = "Du har rett til dapenger!" + "\n" + "Din dagsats er: " + dagpenger + "kr.";
    	} else {
    		output = "Du har ikke rett til dagpenger.";
    	}
    	
    	outputLabel.setText(output);
    	resetText();
    }
    
    private int getIntValue(TextField input) {
    	int returnVal;
    	try {
    		returnVal = Integer.parseInt(input.getText());
    	} catch(Exception e) {
    		returnVal = 0;
    	}
    	return returnVal;
    }
    
    private boolean isValid(TextField input) {
    	return input.getText().matches("\\d+") || input.getText().matches("^$");
    }
    
    private boolean validator(TextField tf1, TextField tf2, TextField tf3) {
    	resetValidator();
    	
    	boolean isValid = true;
    	
    	if(!isValid(tf1)) {
    		text1Error.setText("<- Må være tall");
    		isValid = false;
    	}
    	if(!isValid(tf2)) {
    		text2Error.setText("<- Må være tall eller tom");
    		isValid = false;
    	}
    	if(!isValid(tf3)) {
    		text3Error.setText("<- Må være tall eller tom");
    		isValid = false;
    	}
    	
    	return isValid;
    }
    
    private void resetValidator() {
    	text1Error.setText("");
    	text2Error.setText("");
    	text3Error.setText("");
    }
    
    private void resetText() {
    	lonnFjor.setText("");
    	lonn2.setText("");
    	lonn3.setText("");
    }

}
