 // OBJECT MEHTODS

 const vipin={
     firstName: 'vipin',
     lastName: 'singh',
     birthYear: 2002,
     job: 'teacher',
     hasDriversLicense: true,
    //  calcAge: function(birthYear)
    //  {
    //      return 2023-birthYear;
    //     }

    // here we use this method through which we don't need to 
    //  pass the parameter here 
// here this keyword point to object vipin which has birthYear
    // this method is equal to the object calling the method
    //   here method is calcAge and the object that is calling
    //   the method in console is vipin
    // calcAge: function()
    // {
    //     // console.log(this);
    //     return 2023-this.birthYear;
    //    }


    // it is used when we want to calculate the age multiple
    // times but don't want to to use funtion name for calling
    // then we can store the 2023-birthYear in variable and return it
    // or not return it it's your choice and then call the variable.
    calcAge: function()
       {
           this.age= 2023-this.birthYear;
           return this.age;
          },
          
          
          
          // this type of funtion can't be used here
          //     function calcAge(birthYear)
          //  {
              //      return 2023-birthYear
              //  }
        
    getSummary: function()
        {
            return `${vipin.firstName} is a ${vipin.age} old ${vipin.job}, ${!vipin.hasDriversLicense ? 'has a Drivers License' : 
                    'has not a Drivers License'}`;   
            
            // return `${this.firstName} is a ${this.calcAge} old ${this.job}, and has ${this.hasDriversLicense ? 'a' : 
            //         'not a'} driver's license`;
            
                }

    };

    // also here we don't need to pass the argument
    console.log(vipin.calcAge());

    console.log(vipin.age);
    console.log(vipin.age);
    console.log(vipin.age);
    
    // console.log(vipin['calcAge'](2002));

    

    //challenge
    // " vipin is a 46 year old teacher and 
    // he has a or not a Drivers License"
    
    console.log(vipin.getSummary());