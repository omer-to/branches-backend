# Set Up

Clone the project and initialize both sub-modules:
```bash
&& git submodule update --init --recursive
```
Navigate to the project root directory, and run the following command to build and start Docker containers:
```bash

```
The back-end application listens on port 8000, and the react application runs on port 3000.
You can also see the Swagger file at http://localhost:8000/api

# Controllers
There are total of three controllers in the application that are responsible for receiving a request and returning a response.
All of the routes are private, unless explicitly decorated as `@Public()` as (`JwtAuthGuard`)[./src/guards/jwt-auth.guard.ts] is (provided)[./src/app.module.ts] as a global provider.

1. [AuthController](./src/auth/auth.controller.ts)
   This controller is responsible for signing up and in a user.
   It defines two routes for POST requests, both of which are public.
2. [BranchesController](./src/branches/branches.controller.ts)
   This controller is responsible for CRUD operations on branches resource.
   It defines total of 5 routes, all of which require authentication guarded by the JWT Service.
   Furthermore, all of the routes for unsafe HTTP methods (i.e., other than GET) require role based authorization, giving no access to users with the **employee** role.
3. [UsersController](./src/users/users.controller.ts)
   This controller is only responsible for receiving a GET request to retrieve a user from the database.
   It is protected by the globally provided `JwtAuthGuard`.

# Database
MongoDB is used as the database, and no volume is attached, hence data will not persist between restarts.
There are two collections in the database: branches and users.
There are a couple of ways of restrictring the employers to only listing the branches, such as using `$redact` operations, which would require an additional field as the access control list on the branches collection, however, I preferred using View collection as it's a read-only duplicate of the original collection.

A single field unique index is created on the `email` field for users in order to make an index scan instead of collection scan when querying the user, and to prohibit duplicate emails.
