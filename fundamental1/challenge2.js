const MarkMass=60;
const MarkHeight=1.69;

const MarkBMI = MarkMass/MarkHeight **2;
console.log(MarkBMI);

const JohnMass=100;
const JohnHeight=1.95;

const JohnBMI = JohnMass/JohnHeight **2;
console.log(JohnBMI);

if(MarkBMI>JohnBMI)
{
    console.log(`Marks's BMI ${MarkBMI} is higher than john's BMI ${JohnBMI}`);
}
else{
    console.log(`John's BMI ${JohnBMI} is higher than Mark's BMI ${MarkBMI}`);

}