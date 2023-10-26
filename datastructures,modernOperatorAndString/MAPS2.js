const company=new Map();
company.set('name', 'google');
company.set(1, 'america');
console.log(company.set(2, 'india'));
company.set('categories', ['Web Developer', 'Coder', 'Tester', 'Marketing'])
.set('open', 8)
.set('close', 10)
.set(true, 'we are open')
.set(false, 'we are closed');


console.log(company.get('name'));
console.log(company.get(true));
console.log(company.get(1));

const time=11;
console.log( company.get(time>company.get('open')&& time<company.get('close')));


console.log(company.has('categories'));
company.delete(1);
// company.clear();

console.log(company);
console.log(company.size);


//we wrote them in the same way[1,2] and [1,2] and so they have the same elements
// company.set([1,2], 'Test'); and console.log(company.get([1,2]));
// {company.set([1,2], 'Test')} [1,2] this is the key here is exactly this object
// not this {console.log(company.get([1,2]));} [1,2]

// they are not the same object in the heap
// company.set([1,2], 'Test');
// console.log(company.get([1,2]));

const arr=[1,2];
company.set(arr, 'Test');
console.log(company.get(arr));


company.set(document.querySelector('h1'), 'heading')