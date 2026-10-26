# Moments - Share Digital Photo Albums of Special Moments

Moments is designed to be a digital memory book to keep tracke of special life events, it can also be shared with loved ones.

[![My Skills](https://skillicons.dev/icons?i=js,html,css,react,scss)](https://skillicons.dev) and Axios.
To use the app please follow these steps:

## Installation

To install Moments please clone the repo. 

1. git clone https://github.com/kbenoit2007/capstone-react.git
2. Then in you project folder run npm i 
3. Install and run the Server for Moments here. (link to server)
4. npm start 

## How To Use

As a New User
1. Register your account with new username and password
2. Follow Sign Up process
3. Upload Pictures
4. View and Shar content

To see Sample account
Sign in with the following:
Test Account:
username: 'kevin',
password: 'benoit'

### Env Variables
 .env file is include for client and server

 Preferred PORT for Client = 4000
 Preffered PORT for Server = 9090
 

### Screenshots
If all is successful this is what you should see.

![Home Page](![Screenshot 2023-10-15 at 20 38 04](https://github.com/kbenoit2007/capstone-react/assets/15655538/f12dc8ff-9a6e-48bc-9547-588adf43a452)
)

![SignIn Page](![Screenshot 2023-10-15 at 20 38 13](https://github.com/kbenoit2007/capstone-react/assets/15655538/382efd91-3b06-431d-8f13-76dde62c1899)
)

![Main Page](![Screenshot 2023-10-15 at 20 39 41](https://github.com/kbenoit2007/capstone-react/assets/15655538/86a58588-4f55-4e97-a169-35ed62ab3a2f)
)

## Local UI development

Install the locked dependencies and start the React development server:

```sh
npm ci
npm start
```

Open http://localhost:4000. The checked-in environment config sets the frontend
port; an ignored `.env.local` can override it. For an explicit local setup:

```dotenv
PORT=4000
REACT_APP_URL=http://localhost
REACT_APP_PORT=9090
```

The frontend can be compiled with `npm run build`. Login, registration, profile
loading, and photo-book operations require the separate Moments API on port 9090
and its database. This repository does not contain that server. Without it,
requests fail and the development error overlay may appear; the layout checks
below use mock API responses and do not verify backend behavior.

### UI step 1: typography and responsive sizing

The root uses the browser's default font size (normally 16px), with bounded fluid
headings and 16px form controls. Cards, forms, onboarding choices, and book cover
previews adapt to the available width instead of relying on a viewport-sized rem.
Global styles are loaded once at the entry point before component styles.

Validation performed in Chrome with mock API responses:

- Home, login, registration, profile, event selection, cover selection, book
  details, and upload layouts at 320, 390, 768, and 1440px viewport widths.
- Root and text input sizes checked at 16px; horizontal overflow checked with a
  1px rounding tolerance across those screens.
- Login at 390px with the root text size increased to 200% (32px).
- Production build completed with pre-existing lint/dependency warnings.

Authentication, validation, event branching, upload functionality, and the photo
viewer remain separate follow-up work.
