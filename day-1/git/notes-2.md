# Branches and Github

## Branches

A commit is a snapshot of the files and folders in our project over time. Over time we can create multiple commits to build up a timeline containing different snapshots. Each commit that we create will automatically point back to the previous parent commit (unless it is the root commit). The commits we create therefore create a chain or sequence. It is therefore sufficient to point to a single commit as these will continue to point back to form a chain. A **branch** in git is often referred to as a series of commits that forms a timeline representing some work in a project. However, we need only point a single commit as this one points back the others.

> 🔑 A **branch** is a reference to a particular commit.

The branch that is created by default when a new empty git repository is created is the **master** branch. Whenever a new git commit is created then **master** branch is updatd so it points to the most recent commit.

&nbsp;

## Github

Version control software allows one to manage and update the versions of a project over time. However, git is regarded more fully as **distributed version control software**. The term **distributed** means that any number of users (with the relevant permissions) can access the git repository and therefore gain access to the entire history of the project.
Github is a website that stores github repositories in the cloud and allows multiple users to store their work so that each collaborator can share their changes online.

Github repositories can also be created newly on the github website.

&nbsp;

### Remotes

A remote repository is one stored on github that others can access and update from local machines. A typical pattern is to have one remote repository and other uses can create clones of this repository on to their local machine. Users can create local changes to the git repository on their machine and then once ready add their changes the remote repository. The name origin is a convention way of referring to a git remote repository - a new github repository will be referred to as origin.

### Creating a link

When a new repository is created on github then a new url is generated which points to the remote repository on github. We can use this url to connect a local machine with a github repo so work can be retrieved from the remote and so the remote can be updated with any local commits. We can use the commmand `git remote`:

```terminal
$ git remote add origin <origin-repository-url>
```

Once this command has been executed this can be checked by running `git remote -v`:

```terminal
$ git remote -v
origin  https://github.com/northcoders/remote_precourse_js.git (fetch)
origin  https://github.com/northcoders/remote_precourse_js.git (push)
```

### `git push`

We can use the command `git push` in order to add any of the commits on our local machine on to a remote repository. If master branch is 3 commits ahead of our the origin repository's master branch then using `git push` will add the three local commits on to the `master` branch of the origin repository. We can use the `git push` command in the following way:

```terminal
$ git push origin master
Enumerating objects: 65, done.
Counting objects: 100% (63/63), done.
Delta compression using up to 4 threads
Compressing objects: 100% (41/41), done.
Writing objects: 100% (48/48), 61.79 KiB | 6.87 MiB/s, done.
Total 48 (delta 10), reused 0 (delta 0)
remote: Resolving deltas: 100% (10/10), completed with 5 local objects.
To https://github.com/northcoders/remote_precourse_js.git
   9e0de15..6648df7  master -> master
```

The intricacies of the command output aren't worth exploring at this stage but its important to note we'll get output like this if the `git push` command was successful. Once this command is executed both the local `master` branch and the `origin` `master` branch abbreviated as `origin/master` will be pointing at the same commit. In this commit, both the local and the remote master branches are up to-date.

### `git pull`
