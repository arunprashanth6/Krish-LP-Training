/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package FactoryDesignPattern;

public class KnowledgeLevel extends Diploma {

        @Override
	protected void createCourse() {
		subjects.add(new Internet());
		subjects.add(new WebDesign());
	}
	}