/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package FactoryDesignPattern;

public class ProfessionalLevel extends Diploma{
    
    protected void createCourse(){
        subjects.add(new GraphicDesign());
        subjects.add(new Paint());
       
    }   
}
