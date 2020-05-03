# Git tasks

## Part 1

1. Download the `remote_precourse_week_1` into the `precourse` directory inside the `northcoders` directory. Print your current working directory and double check you are inside the `remote_precourse_week_1` directory.

2. List directory contents including all the files starting with a `.`. Double check you have a `.git` repository inside the directory. Inspect the current list of all the git commits.

3. Add a `useful_commands` directory into your `1_git` directory inside of `day_1` and start creating some manual files for some of the commands you learnt earlier today e.g. `ls` command could have a file called `ls_manual.md`. Once you've added some text content into the `ls_manual.md` then you can stage and commit the file. Remember to give each commit a brief and meaningful message. Remember to print a list of all the commits you've created once you've added a new commit to your repository.

4. One of the git commits in the history has a really bad name - find the commit with a bad name (should be pretty obvious) and try and ammend the message.

5. Find the time at which the **root commit** was created. Think about how to inspect the timeline of your git project.

6. Research the `git checkout` command in order to go back in time to a previous commit in your timeline.

## Part 2

1. Create a new account on GitHub. Make a note of your github username and email.

2. Configure your username and email in the terminal using the following commands:

```terminal
git config --global user.name <github-username>
```

and

```terminal
git config --global user.email <github-email>
```

2. Create a new GitHub repository

3. Connect your local github repository with the remote github repository you've just created

4. Push all of your local changes to the new remote github repository.

5. Change the git remote repository you are connected to and instead use the following url:

6. Use `git remote -v` to **double check** your git remote is now fully changed.

7. Now use the command `git pull orign master` to retrieve the remote changes that you want to store locally. This should bring down some material for `day_2` 😄
