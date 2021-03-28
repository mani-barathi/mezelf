# Mezelf
A Portfolio Template using NextJs🖤

**Feel Free to use this Template as such or make Changes on top it! 🚀**

**Contributions are Welcomed💙**

### Currently Working On👇
- [x] ~Moved all details about user and projects into details.json file~
- [x] ~Email the received message via sendgrid email api~
- [x] ~Receiving message from client to server~
- [x] ~Project Description Modal~

## ⚙ Technology Used
* **[NextJs](https://nextjs.org/)**
* **[Styled Components](https://styled-components.com/)**
* **[Sendgrid](https://sendgrid.com/solutions/email-api/)**
* **[Vercel](https://vercel.com/)**

## 📝 Editing Content
 Edit **`./details.json`** and add your **personal details**, **social links** and **projects**.

## 📧 Sending Received Messages to Email
Message from the form in the Contact Page is sent to an API route `/api/message`, then that backend route sends the message to your Email using **Sendgrid** Email API. So go ahead Sign Up for **[Sendgrid](https://sendgrid.com/solutions/email-api/)** and create a Email API key.

## 🛠 Setup - Development
- Clone the project
- Install dependencies
   ```sh
        npm install
   ```
- SignUp for a [Sendgrid](https://sendgrid.com/solutions/email-api/) account and create a Email Api Key as mentioned in the previous section.
- Create a **.env.local** file in the project root directory and place your sender email, receiver email and Api key as shown below
    ```sh
        SENDGRID_API_KEY=REPLACE_YOUR_SENDGRID_API_KEY_HERE
        SENDER_EMAIL=YOUR_EMAILID_WHICH_IS_REGISTERED_WITH_SENDGRID_WHILE_CREATING_API_KEY
        RECEIVER_EMAIL=EMAILID_IN_WHICH_YOU_WANT_RECEIVE_EMAIL
    ```
- Start the development server
   ```sh
        npm run dev
   ```
   
## 🛠 Setup - Production
- Push the Project to your GitHub or Simply Fork this one and edit the Content inside **`./details.json`**
- Create a new project in **[Vercel](https://vercel.com/)** by connecting your Github Repo to the vercel.(After this setup everytime you push code to your Repo, vercel will automatically run a re-build and deploy the site)
- SignUp for a [Sendgrid](https://sendgrid.com/solutions/email-api/) account and create a Email Api Key as mentioned in the previous section.
- Go the Project **Dashboard** in Vercel and go inside **Setting** > **Environment Variables**, and add the Sendgrid API key, Sender Email, Receiver Email as environment variables. (Variable names and values should be same as the ones present in the `.env.local` file)
- Now your site should be up and running in the internet.
