// CODE here for your Lambda Classes

class Person
{
	constructor(personAttributes)
	{
		this.name = personAttributes.name;
		this.age = personAttributes.age;
		this.location = personAttributes.location;
	}

	speak()
	{
		console.log(`Hello my name is ${this.name}, I am from ${this.Bedrock}`);
	}
}

class Instructor extends Person
{
	constructor(instructorAttributes)
	{
		super(personAttributes);
		this.specialty = instructorAttributes.specialty;
		this.favLanguage = instructorAttributes.favLanguage;
		this.catchPhrase = instrutorAttributes.catchPhrase;
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
	constructor(studentAttributes)
	{
		super(personAttributes);
		this.previousBackground = studentAttributes.previousBackground;
		this.className = studentAttributes.className;
		this.favSubjects = studentAttributes.favSubjects;
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
		conse.log(`${this.name} has begun sprint challenge on ${subject}`);
	}
}

class ProjectManager extends Instructor
{
	constructor(managerAttributes)
	{
		super(instructorAttributes);
		this.gradClassName = managerAttributes.gradClassName;
		this.favInstructor = managerAttributes.favInstructor;
	}

	standUp(channel)
	{
		console.log(`${this.name} announces to ${this.channel}, @${this.channel} standy times!`);
	}

	debugsCode(student, subject)
	{
		console.log(`${this.name} debugs ${student.name}\'s code on ${subject}`);
	}
}
