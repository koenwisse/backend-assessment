# Week 4 Backend Assessment

(This is a markdown .MD file, if you are reading this in vs-code, right click the file and select Open Preview)

**Rules for this assessment**

See RULES.md

**Second opinion**

- As per CRBKO rules you can request a second opinion from another teacher if you disagree with your evaluation. To request reevaluation send an email to: teachers@codaisseur.com

**Start time**

Friday at 9:30 (?)

**Deadline**

Friday at 15:00 (?)

**Passing grade**

This assessment is graded in red, yellow or green. Meaning of each grade:

- Red: you haven't completed the two mandatory sections. Fail grade.

- Yellow: you completed both mandatory sections. \*Pass grade.

- Green: you completed both mandatory sections + one bonus section. Pass with honor grade.

\*if you completed both sections, but it's not fully functional, you might still downgrade to a red.

**How to make and submit your work**

- create a directory with the `mkdir` to start your `api`
- add git and npm to the directory with `git init` & `npm init -y`
- create your .gitignore and add `/node_modules` to its list
- go to `github.com` and:
  - create a new **`private`** repository
  - make sure **NOT** to initialize with a readme/.gitignore as it will give you errors when you try to push
- add your newly created git repository as a remote to your `api`
- push the initial version of your `api`
- create a `index.js` and start building your `api` and `database`

## Learning goals & some tips

For transparency and clarity, these are the learning goals we will be testing:

- Create an express server with separate routes
- Create and run a remote PostgreSQL instance in ElephantSQL
- Create an ORM database and define relations between models using sequelize-cli
- Build a CRUD REST api
- Implement authentication and use middlewares
- Using npm to install packages, run scripts and write your own npm scripts (e.g. npm run dev)
- Basic git usage, making commits, adding remote & pushing to master

If this sounds like a large list, it is, and it's because you've learned a tremendous amount of things these past week! Don't let it scare or overwhelm you though, you have seen all these things. Don't hesitate to use the reader, Google (Stackoverlow), or the documentation links we provide below.

TIP: Read the assignment carefully! It is easy to accidentally deviate from an assignment, resulting in a frustrating experience. Taking the time to read the exercise can save you time and effort.

TIP: Don't get stuck! If you feel stuck, try taking a small walk, continuing on to a next step, or talking out loud about the problem you're facing (programmers call this "rubber-ducking"). Everybody can get stuck, but don't let it stop you.

TIP: Focus on the required features first! Before moving to the bonus sections of this assessment, focus on implementing the madatory parts, then move on to the next ones.

## What are we building?

We are building an api with an ORM database containing information on teams and its players.

Our api will consist of 3 routes:

- users
- teams
- players

Each one route will contain several endpoints.

Our api will have an authentication middleware ready to be used to make routes proctected. (HINT: Check the reader for this)

## Requeriments

- Create database models with the appropriate relations

  - Entities

    ## User

    | Key      | Data type | required | Notes                           |
    | -------- | --------- | -------- | ------------------------------- |
    | id       | Integer   | Yes      | Already added by model:generate |
    | name     | String    | Yes      |                                 |
    | email    | string    | Yes      | Unique: true                    |
    | password | string    | Yes      |                                 |

    ## Team

    | Key     | Data type | required | Notes                           |
    | ------- | --------- | -------- | ------------------------------- |
    | id      | Integer   | Yes      | Already added by model:generate |
    | name    | String    | Yes      |                                 |
    | country | string    | Yes      |                                 |
    | founded | Integer   | Yes      |                                 |
    | titles  | Integer   | Yes      |                                 |

    - One Team has several players (One to Many)

    ## Player

    | Key         | Data type | required | Notes                           |
    | ----------- | --------- | -------- | ------------------------------- |
    | id          | Integer   | Yes      | Already added by model:generate |
    | name        | String    | Yes      |                                 |
    | age         | Integer   | Yes      |                                 |
    | nationality | String    | Yes      |                                 |

    - One player belongs to a Team

<br>
 
- Seed all the entities with data
- GET all teams
- GET a specific team, including all its players
- GET all players
- PUT update number of titles of a specific team
- POST create a new player

## Bonus

- GET all players above X age
- DELETE a specific player, protected route (authentication middleware added to route)
- POST user details to create new user (name, email, password)
- POST user credentials to login (email, password)
