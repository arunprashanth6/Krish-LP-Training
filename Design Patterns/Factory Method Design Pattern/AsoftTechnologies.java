package FactoryDesignPattern;


public class AsoftTechnologies {

	public static void main(String[] args) {
		
		Diploma firstDiploma = CoursePackage.createCourse(PackageCode.BasicLevel);
		System.out.println(firstDiploma);
		
		Diploma secondDiploma = CoursePackage.createCourse(PackageCode.KnowledgeLevel);
		System.out.println(secondDiploma);

	}

	}
