export default class Student{
    
    private name:string;
    
    public constructor(name:string){
        this.name=name;
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
}