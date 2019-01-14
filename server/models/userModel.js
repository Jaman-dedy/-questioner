class User{
    //initialize the user data structure

    constructor(){
        this.users=[];
       
    }
    createNewUser(data){
        const element=this.users.push(data);
        return element;
    }

}
//exporting the new user
module.exports= new User();
