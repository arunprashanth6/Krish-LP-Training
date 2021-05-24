
package FactoryDesignPattern;

public class BasicLevel extends Diploma {

        @Override
	protected void createCourse() {
		subjects.add(new MicrosoftOffice());
		subjects.add(new Paint());
		subjects.add(new Internet());
	}
	}