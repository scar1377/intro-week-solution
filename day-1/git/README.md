# Git tasks

If you haven't already, create a new account on GitHub. Make a note of your github username and email.

## Part 1

1. Clone the `remote-js-precourse` into the `precourse` directory inside the `northcoders` directory. Print your current working directory and double check you are inside the `remote-js-precourse` directory.

2. List directory contents including all the files starting with a `.`. Double check you have a `.git` repository inside the directory. Inspect the current list of all the git commits.

3. Add a `useful_commands` directory into your `1_git` directory inside of `day_1` and start creating some manual files for some of the commands you learnt earlier today e.g. `ls` command could have a file called `ls_manual.md`. Once you've added some text content into the `ls_manual.md` then you can stage and commit the file. Remember to give each commit a brief and meaningful message. Remember to print a list of all the commits you've created once you've added a new commit to your repository.

4. Find the time at which the **root commit** was created. Think about how to inspect the timeline of your git project.

*Advanced Extra*

5. Research the `git checkout` command in order to go back in time to a previous commit in your timeline.

## Part 2


1. Configure your username and email in the terminal using the following commands:

```terminal
git config --global user.name <github-username>
```

and

```terminal
git config --global user.email <github-email>
```

2. Create a new GitHub repository

3. Connect your local github repository with the remote github repository you've just created. Have a look at [this article on the command that will be helpful](https://docs.github.com/en/github/using-git/adding-a-remote)

4. Use `git remote -v` to **double check** your git remote is now fully changed. You should see your github url if it has gone successfully. 

5. Make some changes locally to your project. Stage and commit those changes.

6. Push all of your local changes to the new remote github repository.

*Advanced Extra*

7. On Github add a file using the add a file button - call it anything you like and fill it with whatever you like! Make sure to press the commit file button at the bottom of the page. Now your github repository should look different to the code you have locally.

7. Now use the command `git pull orign master` to retrieve the remote changes that you want to store locally. This should bring down the new file you just added 😄

## Part 3

1. Fork and clone [this repository](https://github.com/northcoders/word-play). 

2. Confirm you definitely have *your* fork cloned using the `git remote -v` command - you should see your Github username in the url.

3. Work through the advanced command line tasks and regularly stage and commit your changes as you do so.  

4. Push up your work to Github when you are finished.
