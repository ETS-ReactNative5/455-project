# CS 455 Final Project: React Native App

![languages](https://img.shields.io/github/languages/count/aquaigni/455-project)

**Welcome to my final project for CS 455: Mobile Computing.**
This project evaluates the creation of a mobile application in React Native.

## Take Aim: Defining Project Scope

CS 455 specializes on the design and implementation of software in a networked mobile environment, focusing on the challenges and opportunities afforded by modern mobile computing devices. The primary topics included software development practices, network computing, graphics programming, and human-computer interaction. CS 335 (Computer Networks) and CS 340 (Advanced Algorithm Design) are prerequisites for this course. This project is to be evaluated according to three goals and eight expectations.


### Goals

1. Demonstrate knowledge in a form that can be evaluated.
2. Practice what has been learned in a 'real world' format.
3. Extend knowledge and abilities past what has been shown in class.


### Expectations

1. The project should be of sufficient complexity to require documentation.
2. The majority of this project mark is based on the github “README” file.
3. A specific software design pattern must be chosen, documented, and implemented.
4. Follow mobile programming best practices.
5. Mind naming conventions -- variables should describe what values they represent.
6. Respect the usual data encapsulation and modular object-oriented design etiquette.
7. Exclude libraries and variables that are not required – clean-up after yourself!
8. Comment your code! No matter how self-documenting, your code requires annotation!


### Background

In 2021, I developed and sold a native iOS application using the SwiftUI framework.

Using my existing graphQL server backend, I intend to port an ultra-low-quality version of the app to React Native, to enable basic facility access for Non-Apple users of my client's business. Since this implementation will exclude major functionality currently available in version 1.0, it will assume version number 0.5. Since my project does not welcome open-source contributions, public feedback will be limited to bug discovery and reporting.

The design pattern implemented for this project is a modified MVVM pattern, based on the principle of composition. The GraphQL queries provide the data model used throughout the app.





## Table of Contents

[React Native Deliverable For Some Marks](https://snack.expo.dev/_kckz-IMz)

1. [Instructions](#instructions)
   1. [File Manifest](#file-manifest)
   2. [Configuration](#configuration)
   3. [Installation](#installation)
   4. [Usage](#usage)
2. [BVxAndroid v0.5](#BVxAndroid)
   1. [Acknowledgements](#acknowledgements)
   2. [Bibliography](#further-reading)
   3. [Developer Contact](#contact-the-developer)
   4. [Contribute](#contribute)
   5. [License](#license)
3. [Next Steps](#next-steps)
   1. [Known Bugs](#known-bugs)
   2. [Milestones](#milestones)
   3. [Project Status](#project-status)
   4. [SwiftUI Screenshots](#SwiftUI-demo)







## Instructions


### File Manifest
```
- README.md ---------> This markdown file you are reading.
- README_img --------> Images folder for the readme.
```


### Configuration
Due to the public nature of this repository, I will not name my client nor identifying information regarding their work. The excluded SERVER_URL string constant and gql statements are required to build this app and can be made available privately upon request, for evaluation purposes.


### Installation

This project is currently incompatible with the browser version of Expo and must be run locally.
Start by setting up your local React Native environment:
https://reactnative.dev/docs/environment-setup

Next, get a copy of this repository and open the folder in terminal

Alt 1:
```
press the green download zip button
extract the zip to disk
open a terminal window and 'cd' until 'pwd' prints '455-project'
expo start
```

Alt 2:
```bash
git clone https://github.com/aquaigni/455-project.git
cd 455-project
expo start
```


### Troubleshooting
Here is a sample of links that can be helpful in setting up the React Native environment or resolving issues

 - https://reactnative.dev/docs/environment-setup
 - https://docs.expo.dev/introduction/walkthrough/
 - https://stackoverflow.com/a/67651273
 - https://www.apollographql.com/docs/react/get-started
 - https://stackoverflow.com/questions/67218350/set-authorization-headers-in-apolloclient-for-each-request
 - https://www.crowdbotics.com/blog/integrate-graphql-and-apollo-client-in-react-native-app
 - [GraphQL error codes](https://gist.github.com/karladler/d226f511689dce47a9518ee1bb1e33bb)

### Usage

Once the program is installed, run `expo start` from the project directory to launch the program.

Once Expo CLI is running, follow the CLI instructions to launch the app on the web, android, or iOS.

```bash
expo start
```


![SignIn]('Screen Shot 2022-04-15 at 4.53.19 AM.png')

Due to architecturally dominated initial work and dependency version hell, this is all that I have to show at this time.

I have been inches away from freedom 4 times in the past 16 hours of work, and as soon as I pierce the veil and can place a GraphQL operation I will be able to port the view in.



## BVxAndroid

### Acknowledgements
The exclusive author, designer and developer of the original SwiftUI project is Ottenbreit Tech.

Many thanks to
- the documentation team at Apple for teaching me Mobile Computing;
- the SwiftUI team for their commitment to clean code excellence;
- HackingWithSwift's Paul Hudson for providing bleeding edge SwiftUI tutorials;
- the documentation team at GraphQL for providing environment-specific code samples which enabled my 3 hour port of this project;
- the University of Regina's Trevor Tomesh for introducing me to code-level React Native development.



### Contact The Developer
To contact the me [check out my website](https://ottenbreit.tech).
For troubleshooting, refer to [my installation instructions](#installation) and [the expo documentation](https://docs.expo.dev).


### Contribute
To contribute to this project, request access to the private [configuration](#configuration) files.
Report issues on Github or using this [Google Form](https://forms.gle/bE8ciqi2KJqCc1bN8).


### License

 - All business knowledge associated with this project is proprietary intellectual property.
 - The files made available in this repository are licensed under the MIT License.

Copyright (c) [2022] [Ottenbreit Tech]

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






## Next Steps


### Known Bugs

This project picked up a lot more friction than anticipated.

- [ ] Expo cannot import current Apollo+GraphQL libraries
- [ ] Expo does not have a working GraphQL sample: I have tried the dependency+version combinations from 13 projects I was able to find online
- [ ] SignIn does NOTHING


### Milestones
- [x] App Class With Context Provider & Navigation
- [x] MOVE TO REACT NATIVE DESKTOP; EXPO IS NOT COMPATIBLE WITH APOLLO GRAPHQL CLIENT! { 16 hours later... }
- [ ] GraphQL Client
- [ ] SignIn & Client Authorization
- [ ] SignIn Persistence & App Storage
- [ ] Home Screen with StartVisit/CurrentVisit Button, Member Name
- [ ] Left Panel Sidebar with Authorized Webviews

### SwiftUI Demo
Screenshots from the SwiftUI App that is being ported to React Native.
![demo](demo.png)


### Project Status

- This project is continuing under private development.
- This project is currently paused while we explore alternatives to React Native due to the weakness of JavaScript.

