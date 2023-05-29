Creating Next js app using Prisam SqLite and Postgres database and run app using docker and docker compose.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Prisma 

`
npx prisma init

`
- Open the .env, we will see it has a DATABASE_URL:

`
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
`

- Define our model

```
model Todo {
  id        String   @id @default(uuid())
  title     String
  complete  Boolean
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

```

- Run migrations

`
npx prisma migrate dev --name init
`

`
npx prisma studio
`

## Run App using Docker

```
docker build -t next-prisma-docker .
docker run -dp 3000:3000 next-prisma-docker
```

## Run App using Docker Compose

`
docker-compose up -d
`



