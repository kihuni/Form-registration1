const validateInfor = (values) =>{
    let errors ={};

    if(!values.name.trim()){
        errors.name = 'Username required';
    }

    if(!values.email){
        errors.email = 'Email required';
    } else if (!/[^@]+@[^@]+\.[^@]+/){
        errors.email = 'Email is invalid';
    }
    if(!values.country){
        errors.country = 'resident name required'
    }
    if(!values.phone){
        errors.phone = 'phone number required'
    }else if(!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im){
        errors.phone = 'phone is invalid'
    }
    if(!values.password){
        errors.password = 'password is required';

    }else if (values.password.length < 6){
        errors.password = 'password needs to be 6 characters or more';
    }
  return errors
}
export default validateInfor;