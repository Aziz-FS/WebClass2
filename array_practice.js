console.log("This is to practice JSArray concepts")

const studentIds = [1,2,3,4,5,6]
const studentNames = ['Aziz','Arvin', 'Serafin','Ollie', 'Jorge','KHudzai']

const students = new Map();

// students.set(1, 'Aziz')
// students.set(2, 'Arvin')

console.log('studentId before push', studentIds)
//we could push in in a const studentIds becuasre array is not primitive therefore it is a reference to the array.
//array function abd objects are passed by reference. Hence changing them in not changing the reference. 
// Therefore we can change them even if they are const.
studentIds.push(7)
console.log('studentId after push', studentIds)
studentIds.push("Plate")
console.log('studentId after 2nd push', studentIds)
studentIds.pop("Plate")
console.log('studentId after pop ', studentIds)
studentIds.pop()
console.log('studentId after pop 3 ', studentIds)
console.log('studentId of 0 ', studentIds[0])


for (let i =0; i < studentIds.length; i++) {
    students.set(studentIds[i], studentNames[i])
}

console.log(students)
