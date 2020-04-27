# Programming essentials

# Operating systems

### Computers

Computers are machhines that can perform calculations and operations on data. They possess a good deal of hardware like memory in order to process tasks and perform these computations. The various pieces of hardware on your computer are various and complex - it would take a very long time indeed in order to fully comprehend the complexity of the hardware and the ways in which they interact with each other.

Operating systems are large pieces of software that manage and coordinate the different component pieces of hardware (like memory) that allow computers to carry out all their tasks.

### Unix

Unix is a family of operating systems with specific design philosophies. MORE HERE...

## Interacting with the computer

An essential part of using a computer will be providing the computer or machine a task to carry out or **execute**. **Execute** in this context means the machine carrying out or performing a task set out in a set of instructions. We can issue **commands** to the computer in order to perform certain tasks. We can use a **command line interface** which is a tool for inputting commands and they will in turn be **executed** by the computer.

### Consoles and terminals

A `console` is a device or set of devices that can you be used to control a machine like your computer. The `console` on your terminal comprises the keyboard, mouse and screen which users use to control and operate the computer. A **terminal** is a computer interface that is used for entering commands into your computer. You can type a command into your terminal and hit enter and expect to get back some form of text output as a result of running that command.

### Shells

The term shell and terminal are often used interchangeabely: however, they are not the same thing. A terminal allows users to input commands but this application doesn't know what to do with the command itself. A shell is a program that interprets commands and executes a program that will carry out the task. A inputs a command in a **terminal** and then the **shell** will interpret and execute the command. For this reason a shell is said sometimes to be a **command line interpreter**.

### Bash

---

### `echo` commands

We can start to enter basic bash commmands into the terminal and bash will execute these programs and send some text output back to the terminal. Lets think of the most basic command is `echo`:

```bash
echo hello there I am coding
```

We are using the name of a command `echo` and pass some input or data into that command `echo`.
The output is displayed in our terminal as follows:

```terminal
$ echo hello world
hello world
```

So `echo` command will take some text input and output the same text in the terminal.

---

## File system

Computers that can store vast amounts of data or information. It makes sense for this storage of data to be organised so each piece of information has its own separate space. Collections of data are organised into groups called `files` which can can then be accessed and used to store more information. A **directory** is a container for multiple files and directorties. We can organise a collection of related files into a single directory for organisational purposes. A **directory** can also store multiple **sub-directories**.
If we talk about being "inside" a directory then it means we're currently residing in the directory

### Nagivating the file system

If we start in a new terminal we can use the command `pwd` which stands for **print working directory**. The shell program will currently be **inside** a directory that is to say it will have immediate access to all the files in this directory without having to access another file or folder.

```terminal
$ pwd
/Users/mitch
```

If I run the command `pwd` then we see the following printed to the terminal:

```terminal
/Users/mitch
```

This is referred to as the home directory and will be the directory the shell program starts inside when the terminal is first created.
The output `/Users/mitch` is said to be a file path. A **file path** is a list of different directories separated by a `/`, indicating which `directory` you are currently inside and which directories it is nested inside.

---

### `ls` & `cd`

We will very frequently want to ask which folders and directories are currently inside of the current directory. For this task we can use the commnand `ls` which can be used to print the contents - files an directories inside the current directory. `ls` command stands short for **list directory contents**. `ls` command is used in the following way:

```bash
ls <name-of-directory>
```

If no directory is specified when using this command then it will default to **listing the directory contents** of the **current working directory**.

```terminal
$ ls
Scores  Zoom  mitch_learnings  paradigms.pdf  solution_lectures_videos
```

When I run the `ls` command inside of my current directory I get an output listing 4 other directories:
`Scores`, `Zoom`, `mitch_learnings` and `solution_lecture_videos`
There is also a single file `paradigms.pdf` inside the current directory.

Suppose we wanted to enter one of the directories from above when we could use the `cd` command which stands for **change directory**. The `cd` command is used in the following way:

```bash
cd <name-of-directory>
```

A typical usage would be after running the `ls` command to see **which directories are currently inside the current directory** and then using `cd` in order **to change into that directory**:

```terminal
$ ls
Scores  Zoom  mitch_learnings  paradigms.pdf  solution_lectures_videos

$ cd Scores

$ pwd
/Users/mitch/Scores
```

It is very common to want to move into a parent directory from inside a current directory. Two dots like this `..` signify the parent directory and therefore we could write:

```terminal
$ cd ..
```

This command will move the user to the parent directory.
