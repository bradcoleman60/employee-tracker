# employee-tracker


GIVEN a command-line application that accepts user input

















# team-profile-genterator

# **Table of Contents**
1. [Description](#description)
2. [Testing](#testing)
3. [Technology Used and Credits](#technology-used-and-credits)
4. [About the Author](#about-the-author)
5. [License](#license)


# **Description**

The goal of this project was to create an index.html generator using Node.js and the command line.   This required the use of a NPM package - inquirer.    

This project is executed solely in the command line interface.  The ultimate output is an index.html file.  Additionally, this project required the used of Test Driven Development (TDD). I used an NPM package - Jest to execute a series of tests to ensure that code was then developed so that all tests passed.  

Below is a screen shot of the sample index.html page and the screen shot of the tests that all passed. 

![screenshot](./assets/screen_shot.jpg)


![screenshot](./assets/screenShot2.jpg)


Link to Demonstration Video of how this Generator Works:

https://app.vidcast.io/share/e9ce3bd3-5ee6-4b2d-9fee-15ca60460d03


# **Highlighted Code Example**

The following is code that I created that I would like to highlight.  This highlights the use the Node inquirer package and two functions that allowed me to loop through the questions if additionally entries were desired by the manager.  

```


```


# **Testing** 

To test to ensure the code rendered the desired output I iterated a series of tests to ensure that all acceptance criteria were met and documented completion below:

| User Acceptance Criteria | Test Result | 
| ------------- |:-------------| 
|1. WHEN I start the application THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role  |**Completed**.  The   |
|2. WHEN I choose to view all departments THEN I am presented with a formatted table showing department names and department ids   |**Completed**.  The     |
|3. WHEN I choose to view all roles THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role     |**Completed**.  The      |
|4. WHEN I choose to view all employees THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to  |**Completed**.  The     |
|5. WHEN I choose to add a department THEN I am prompted to enter the name of the department and that department is added to the database  |**Completed**.  The     |
|6. WHEN I choose to add a role THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database    |**Completed**.  The   |
|7. WHEN I choose to add an employee THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database   |**Completed**.  The    |
|8.WHEN I choose to update an employee role THEN I am prompted to select an employee to update and their new role and this information is updated in the database  | **Completed**.  The   |


# **Technology Used and Credits**

I used many useful references in completing this project including the following.  In particular, I found the layout of the w3schools reference materials to be extremely intuitive and helpful.  They even have a "try me" feature where elements of code can be reviewed and tested. 


| Technology Used | Resource URL | 
| ------------- |:-------------| 
| <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"> | [https://git-scm.com/](https://git-scm.com/) | 
| <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> | [https://developer.mozilla.org/en-US/docs/Learn/JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript) |
| <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"> | [https://nodejs.org/en/](https://nodejs.org/en/) |
| <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"> | [https://api.jquery.com/](https://api.jquery.com/) |

# **About the Author**

My name is Brad Coleman. I am fairly new to web development but have considered it a hobby for several years and have hacked my way through learning various aspects including php, html and mysql.  I am currently enrolled in the Cal Berkeley Extension Web Development Boot camp and am excited to learn web development more holistically.  I have spent my earlier career working as a corporate controller / CPA.

- [Linkedin Profile](https://www.linkedin.com/in/brad-coleman-109529/)
- [GitHub Repos](https://github.com/bradcoleman60?tab=repositories)


# **License**

MIT License

Copyright (c) 2022 Brad Coleman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


