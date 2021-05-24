/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package FactoryDesignPattern;

public class CoursePackage {

	public static Diploma createCourse(PackageCode packageCode) {

	switch(packageCode) {
	
	case BasicLevel :
		return new BasicLevel();
	case KnowledgeLevel:
		return new KnowledgeLevel();
	case ProffesionalLevel:
		return new ProfessionalLevel();
	default:
		return null;
	}
	}
	}