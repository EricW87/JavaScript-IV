// CODE here for your Lambda Classes

class Person
{
	constructor(attributes)
	{
		this.name = attributes.name;
		this.age = attributes.age;
		this.location = attributes.location;
	}

	speak()
	{
		console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
	}
}

class Instructor extends Person
{
	constructor(attributes)
	{
		super(attributes);
		this.specialty = attributes.specialty;
		this.favLanguage = attributes.favLanguage;
		this.catchPhrase = attributes.catchPhrase;
	}

	demo(subject)
	{
		console.log(`Today we are learning about ${subject}`);
	}

	grade(student, subject)
	{
		console.log(`${student.name} receives a perfect score on ${subject}`);
	}
}

class Student extends Person
{
	constructor(attributes)
	{
		super(attributes);
		this.previousBackground = attributes.previousBackground;
		this.className = attributes.className;
		this.favSubjects = attributes.favSubjects;
	}

	listsSubjects()
	{
		this.favSubjects.forEach((element) => console.log(element));
	}

	PRAssignment(subject)
	{
		console.log(`${this.name} has submitted a PR for ${subject}`);
	}

	sprintChallenge(subject)
	{
		console.log(`${this.name} has begun sprint challenge on ${subject}`);
	}
}

class ProjectManager extends Instructor
{
	constructor(attributes)
	{
		super(attributes);
		this.gradClassName = attributes.gradClassName;
		this.favInstructor = attributes.favInstructor;
	}

	standUp(channel)
	{
		console.log(`${this.name} announces to ${channel}, @${channel} standy times!`);
	}

	debugsCode(student, subject)
	{
		console.log(`${this.name} debugs ${student.name}\'s code on ${subject}`);
	}
}

const joe = new Person
({
	name: 'Joe',
	age: '32',
	location: 'Oceania'
});

const fred = new Instructor
({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const wilma = new Student
({
	name: 'Wilma',
	location: 'Bedrock',
	age: 33,
	previousBackground: 'Dino hunting',
	className: 'WEBPT10',
	favSubjects: [ 'Javascript', 'HTML', 'flex-box' ]
});

const michael = new ProjectManager
({
	name: 'Michael',
	location: 'New York',
	age: 25,
	favLanguage: 'JavaScript',
	specialty: 'Back-end',
	catchPhrase: 'Lambda school',
	gradClassName: 'WEBPT10',
	favInstructor: 'Keiran'
});

console.log(joe);
joe.speak();
console.log(fred);
fred.demo('classes');
console.log(wilma);
wilma.listsSubjects();
wilma.PRAssignment('Web Apps');
wilma.sprintChallenge('Javascript');
console.log(michael);
michael.standUp('webpt10_michael');
michael.debugsCode(wilma, 'CSS');
