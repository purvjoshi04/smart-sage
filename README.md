## NOTE
CURRENTLY HOSTING IS NOT WORKING DUE TO SOME PRISMA ISSUE I AM FIXING THIS ISSUE SOON.


## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


# **Smart Sage**

**Smart Sage** is an AI Software as a Service (SaaS) application that provides text, image, video, code, and music generation.

 


## **Tech Stack**
**NextJS:** React framework for building full-stack web applications.

**Clerk:** Authentication and session management.

**Shadcn/ui:** Collection of reusable components.

**Tailwind:** CSS framework.

**Supabase:** PostgreSQL database.

**Primsa:** Object-Relational Mapper (ORM) for Supabase database.

**Stripe:** Financial infrastructure for model pro version purchase.

**Crisp:** Crisp for customer support.

**OpenAI API Key:** For text, image, and code generation.

**Replicate AI Models:** For music and video generation.

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`OPENAI_API_KEY`

`REPLICATE_API_TOKEN`

`DATABASE_URL`

`STRIPE_API_KEY`

`NEXT_PUBLIC_APP_URL`

`STRIPE_WEBHOOK_SECRET`


## Screenshots

### Landing Page

![Screenshot (95)](https://github.com/purvjoshi04/smart-sage/assets/101319136/1be2005c-5e31-46c0-9e14-abcfc253471a)

### Dashboard Page

![Screenshot (96)](https://github.com/purvjoshi04/smart-sage/assets/101319136/cacfe8ee-232a-421c-a814-fddbadb0dc9e)



## Note

In my project, the Stripe configuration is not working because my Stripe account is under a waiting period.

The conversation, image, and code generation features are not working because I have not purchased the paid version of the OpenAI API key.
