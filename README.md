
## Specs/Tests

```javascript
Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
  const text = "hello";
  wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
  const text = "hello there";
  wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: 
  wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code:
  wordCounter("          ");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2


Describe: numberOfOccurrencesInText()
Test: "It should return 0 occurrences of a word for an empty string."
Code:
  const text = "";
  const word = "red";
  numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 0 occurrences of a word for an empty string."
Code:
  const text = "";
  const word = "red";
  numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return a word match regardless of case."
Code:
  const text = "red RED Red green Green GREEN";
  const word = "Red";
  numberOfOccurrencesInText(word, text);
  Expected Output: 3

  Test: "It should return a word match regardless of punctuation."
  Code:
    const text = "Red! Red. I like red, green, and yellow.";
    const word = "Red";
    numberOfOccurrencesInText(word, text);
  Expected Output: 3

  Test: "It should return 0 occurrences of a larger word containing the target word."
  Code:
    const text = "Redo";
    const word = "Red";
    numberOfOccurrencesInText(word, text);
    Expected Output: 0
    
```


# _{Application Name}_

#### _{Brief description of application}_

#### By _**{List of contributors}**_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

* _Clone [this repository](https://github.com/tigertiger/REPONAME) to an empty folder or to your desktop.  
Instructions for cloning can be found [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)._
* _Navigate to the top level of the REPONAME directory_
* _Open index.html in your browser_
* _You can also access the live site at [https://tigertiger.github.io/REPONAME](https://tigertiger.github.io/REPONAME/)_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_[GPL](https://opensource.org/licenses/gpl-license)_
_Copyright (c) 2021, Melissa Schatz-Miller_

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Contact Information

Melissa Schatz-Miller <melissa.scmi@gmail.com>
Co-authored-by: Tajo Fisher <tajofisher4@gmail.com>