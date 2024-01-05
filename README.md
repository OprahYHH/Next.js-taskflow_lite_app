# Next.js-taskflow_lite_app

https://www.youtube.com/watch?v=J9sfR6HN6BY
https://github.com/mosh-hamedani/issue-tracker

rafce - can create a template

https://chat.openai.com/share/403cd15f-15d4-4351-89ca-535f80750475

# SQL Model

+------------------+        +------------------+       +------------------+
|     Users        |        |      Tasks       |       |     DayOffs      |
+------------------+        +------------------+       +------------------+
| userID (PK)      |---|    | taskID (PK)      |   |---| issuedID (PK)    |
| username         |   |----| userID (FK)      |   |   | userID (FK)      |
| password         |        | content          |   |   | issuedDate       |
| isAdmin          |        | startTime        |   |   | startTime        |
| remFlexDays      |        | endTime          |   |   | endTime          |
| remPersDays      |        | otHours          |   |   | otHours          |
| signInDate       |        | flexHours        |   |   | flexHours        |
| signUpDate       |        | persHours        |   |   | persHours        |
+------------------+        | taskDate         |       +------------------+
                            | brandID (FK)     |    
                            +------------------+       +------------------+
                            |   OvertimeLogs   |       |    ProBrands     |
                            +------------------+       +------------------+
                            | logID (PK)       |       | brandID (PK)     |
                            | userID (FK)      |  ---- | brandName        |
                            | usedHours        |       +------------------+
                            +------------------+

# SQL Command

-- Create Users Table
CREATE TABLE Users (
    userID SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    isAdmin BOOLEAN NOT NULL,
    remFlexDays INTEGER NOT NULL,
    remPersDays INTEGER NOT NULL,
    signInDate DATE NOT NULL,
    signUpDate DATE NOT NULL
);

-- Create Tasks Table
CREATE TABLE Tasks (
    taskID SERIAL PRIMARY KEY,
    userID INTEGER REFERENCES Users(userID),
    content TEXT NOT NULL,
    startTime TIME NOT NULL,
    endTime TIME NOT NULL,
    otHours INTEGER NOT NULL,
    flexHours INTEGER NOT NULL,
    persHours INTEGER NOT NULL,
    taskDate DATE NOT NULL,
    brandID SERIAL REFERENCES ProBrands(brandID)
);

-- Create DayOffs Table
CREATE TABLE DayOffs (
    issuedID SERIAL PRIMARY KEY,
    userID INTEGER REFERENCES Users(userID),
    issuedDate DATE NOT NULL,
    startTime TIME NOT NULL,
    endTime TIME NOT NULL,
    otHours INTEGER NOT NULL,
    flexHours INTEGER NOT NULL,
    persHours INTEGER NOT NULL
);

-- Create OvertimeLogs Table
CREATE TABLE OvertimeLogs (
    logID SERIAL PRIMARY KEY,
    userID INTEGER REFERENCES Users(userID),
    usedHours INTEGER NOT NULL
);

-- Create ProBrands Table
CREATE TABLE ProBrands (
    brandID SERIAL PRIMARY KEY,
    brandName VARCHAR(255) NOT NULL
);
