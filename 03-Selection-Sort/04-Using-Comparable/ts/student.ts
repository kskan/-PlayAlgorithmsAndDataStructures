export default class Student {
   
    
    private name:string;
    private score:number;

    
    public constructor(name:string,score:number){
        this.name=name;
        this.score=score;
    }

     getClass(){
        return typeof this;
    }

    equals(student:any):boolean{

        if(this == student)
            return true;

        if(student == null)
            return false;

        if(this.getClass() != student.getClass())
            return false;

        let another:Student = student;
        return this.name === another.name;
    }
    
    compareTo(student):number{

        return student.score - this.score;
        
        
    }
    
}