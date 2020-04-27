# Introducting Git

## Managing complexity

Sets of instructions can become extremely complex and difficult to manage over time.
We need software that will allow us to control the version of the programs that we are creating so we can move between different versions. If we're not able to move between different versions and something goes wrong then it may be impossible for us to retreive a state of our project when everything was fully working.

## Building timelines

Consider a timeline consisting of distinct points in time - each distinct part of the timeline represents the contents of your files and folders at a specific part of time. We can update the timeline and continue to add new points in the timeline to reflect changes or updates we've made to our file content. The essential components of such a time line could be specified as follows:

### Basic timeline requirements

1. Store content of file and directories
2. Add new `"points"` to the timeline
3. View the changes we've made since the last point in our time line
4. Move between between the points in the timeline (akin to time travel)

---

# git

git is **version control software** and some of its most basic features will allow us to fulfill all the requirements of a basic content timeline.

## git command line interface

Git has a rich command line interface - in otherwords a variety of command lines that we can use for interacting and using git. The first command we'll want to use is `git init` which creates a new git repository - this will be the place where git stores the content of files and folders along with the timeline.

```terminal
$ git init
Initialized empty Git repository in /Users/mitch/Documents/Scores/.git/
```

If we run the command `ls -a` we can print all the files and directories including those directories that start with a `.`

```terminal
$ ls -a
. .. .git
```

---

## Storing content

We can store content on the timeline by creating distinct snapshots that show us the content of our files and directories at a given moment in time.

### Working directory

The working directory refers to all the files and directories that we have immediate access to. Suppose I start a project with an empty directory (a directory containing no sub-directories or files) and then I run `git init`. `git init` will create a new **empty git repository**. An empty git repository is one that does not yet store content from our files and folders. Suppose we create a new directory `new_project` that will contain all the data for a project.

```terminal
$ mkdir new_project

$ cd new_project

$ ls

$ git init
Initialized empty Git repository in /Users/mitch/Documents/Scores/.git/

$ ls -a
. .. .git
```

Suppose a new file `list.txt` is created with some file content, as follows:

```raw
---- list.txt ----
My new list of ingredients

```

This new file is not currently stored in the git repository `.git`. Instead we have updated the **working tree** or the **working directory**.

🔑 The **working directory** refers to all of the files and directories we can currently view and edit in our project.

`git` will register that the **working directory** has been updated and we can view this information by running the `git status` command:

```terminal
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        list.txt

nothing added to commit but untracked files present (use "git add" to track)
```

The most important part of this command is the section beginning `Untracked files`.
An **untracked file** is a newly created file that has not yet been stored inside the git repository. In order to store this content on our timeline we need to use additional `git` commands.

---

### `git add`

Git uses 3 different areas to manage the state of our content. In order to create a new commit and have git store it permanently we must first add changes in our working tree to the **staging area**. The **staging area** is an area inside git where we store all the changes that we want stored in our next snapshot. We can use the `git add` command in order to stage these changes.

- Working directory: `list.txt`

- Staging area:

- Git repository:

We can run the `git add` command as follows:

```terminal
$ git add list.txt
```

This will stage the file `list.txt` and we can check that this has worked by running the command `git status` again:

```terminal
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   list.txt
```

---

## Creating a git commit

It is our goal ultimately to store a snapshot of our file and directories so we can start to create a timeline consisting of snapshots of our project. Once we have a some changes staged in the git staging area we can then create a **git commit**.
We can use the command `git commit -m <commit-message-here>`. The commit message should be a brief message summarising the changes that are being stored in this particular commit.

```terminal
$ git commit -m "Add list.txt"
[master (root-commit) 1d3a896] Add list.txt
 1 file changed, 1 insertion(+)
 create mode 100644 list.txt
```

Note that the output for this command is also saying that this commit is regarded as the **root commit** as it is the first commit stored inside the git repository.

### `git log`

We can use the command `git log` to list all the commits stored inside a git repository. You can also think of `git log` as printing the timeline of different commits in our project.

```terminal
$ git log
commit 1d3a89619080b20d0a5a941c470b115a78b6e8e1 (HEAD -> master)
Author: Mitch Lloyd <mitch@northcoders.com>
Date:   Mon Apr 27 15:29:57 2020 +0100

    Add list.txt
```
