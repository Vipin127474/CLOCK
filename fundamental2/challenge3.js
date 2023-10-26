const mark={
    fullName:'mark miller',
    mass: 78,
    height:1.69,
    calcBMI: function()
    {
        this.BMI=this.mass/this.height**2;
        return this.BMI
    }
};

const john={
    fullName:'john smith',
    mass: 92,
    height:1.95,
    calcBMI: function()
    {
        this.BMI=this.mass/this.height**2;
        return this.BMI
    }
};

console.log(mark.calcBMI());
console.log(john.calcBMI());
console.log(`${mark.fullName}(27.3) has higher BMI than ${john.fullName}(24.1)`);