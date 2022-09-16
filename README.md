
Deployed project here:
https://dulcet-crumble-b36832.netlify.app/

# Start:

# Installation

    Clone or download the repo
    Run 'yarn' in the CLI

---

## Timeframe

5 days

---

# Developing a new feature!

- `gco -b name-of-branch`
- Create your feature!
- `git add .`
- `git commit -m "my great new feature"` (You can add and commit as often as you like at this stage. Recommend at least daily)
- `gco development`
- `git pull origin development`
- `gco name-of-branch`
- `git merge development`
- If there were any conflicts, resolve them, involving your team as needed. Make sure to run your tests after doing this!
- `git add .` (Not necessary if there were no conflicts)
- `git commit -m "message"` (Not necessary if there were no conflicts)
- `gco development`
- `git merge name-of-branch`
- `git push origin development`

---

### Overview

##### Synoptic project - Multivers

---

###### Little Cottage restaurant-app is s a online food order sytem you can make bookings order food and pay

---

### Technologies used:

#### Front end:

HTML, SCSS,React.js, Firebase, styled component, lottie animation, react-router dom

#### Back end:

## Firebase

### Back End:

Firebase is a software development platform launched in 2011 by Firebase inc, and acquired by Google in 2014. Started as a realtime database, now it has 18 services (4 of them currently in beta), and dedicated APIs. The whole platform is a Backend-as-a-Service solution both for mobile and web-based applications that includes services for building, testing, and managing apps.

BaaS solutions allow you to eliminate the need in managing backend databases and obtaining corresponding hardware. Instead, you can plug them into your app via dedicated APIs for each separate service. In the case of Firebase, there are 7 of them that cover all the spectrum of back-end technologies for an app. The list of platforms Firebase integrates with includes Android, iOS, Web, and Unity.

## Firebase services review

Databases
Firebase Realtime Database was the first product to occur under the flag of Firebase, so it’s the most established and stable service across the whole platform. Realtime Database is essentially a NoSQL cloud-storage that can be connected with the application to provide real time access to the data across different platforms. One of the advantages is that the database can work offline, caching the data in device memory, and after reconnecting to the internet, synchronizing it.

The data is stored in JSON and can be queried by users. In terms of security, Realtime Database provides permission-based data access. This can be done with the help of Firebase Authentication, and giving permissions by user-identity or security rules.

Cloud Firestore is another cloud-hosted real-time NoSQL database. Unlike Firebase Realtime Database, Cloud Firestore is designed for enterprise use, which entails scalability, complex data models, and advanced querying options. Firebase console can be used to view data in both databases. Another mutual point is that there are SDKs for working with server-side code of both databases. These are available for Python, Node.js, Golang, Ruby, PHP, Java, .NET, and C#.

Cloud Storage. Okay Google, another database? Not exactly. Cloud Storage is basically a Google Cloud for in-app user generated content, like photo, audio, or video files.

Authentication and hosting
Firebase Authentication is a Google Authentication feature tailored for apps using Firebase. It allows you to use pre-built or create custom UI for user-authentication, and login users via custom credentials, emails, or social media.

Hosting service. If you are building a web-app, progressive web app, or mobile landing page, you would definitely need hosting. Firebase offers static web hosting for applications built with HTML, CSS, and JavaScript. In terms of security, it uses standard HTTPS and SSL protocols to deliver files and other types of data.

Serverless applications
Cloud Functions. Is another integration of the existing Google product into Firebase. It’s a tool for running back-end code from the cloud on the event-driven basis. The way Cloud Functions suggests running your app is what’s usually called a serverless architecture. This type of architecture means building applications as a set of separate functions, isolated in the cloud, and connected between each other via APIs. This type of application architecture became increasingly popular a few years ago, so you might see Google as one of the main serverless providers.

## ERD

#### Sign-Up / Sign-In:


Up in the right hand corner of the screen there is a sign in link, which redirects to the register page. Once the user has entered in a username, email, password and password confirmation, or using google sign in the user will be redisign in and rederected to the menu

---

### Home Page:

The homepage is divided into 2 sections: the main hero,the main menu categories, navigation bar.

---

### Menu Page:

###### Menu page


---

---

### Process:

Once Ive got the specofication of the project I started to sketch and try to turn to html structure how I would like to the page look like

### Phase 1

## Home page

I try to create a structure for the homepage and I quickly see the repeating pattern and refactore the code below

```
const App = () => {
 return (
   <div className="categories-container">
     <div className="category-container">
       {/* <img /> */}
       <div className="category-body-container">
         <h2>SOUPS</h2>
         <p>Shop Now</p>
       </div>
     </div>
     <div className="category-container">
       {/* <img /> */}
       <div className="category-body-container">
         <h2>STARTERS & APPETISERS</h2>
         <p>Shop Now</p>
       </div>
     </div>
     <div className="category-container">
       {/* <img /> */}
       <div className="category-body-container">
         <h2>MAIN</h2>
         <p>Shop Now</p>
       </div>
     </div>
     <div className="category-container">
       {/* <img /> */}
       <div className="category-body-container">
         <h2>SALADS</h2>
         <p>Shop Now</p>
       </div>
     </div>
     <div className="category-container">
       {/* <img /> */}
       <div className="category-body-container">
         <h2>DESSERTS</h2>
         <p>Shop Now</p>
       </div>
     </div>
   </div>
 );
};

export default App;

```

After the refactoring

```
const App = () => {
 const categories = [
   {
     id: 1,
     title: "STARTERS & APPETISERS",
   },
   {
     id: 2,
     title: "SOUPS",
   },
   {
     id: 3,
     title: "MAIN",
   },
   {
     id: 4,
     title: "SALADS",
   },
   {
     id: 5,
     title: "DESSERTS",
   },
 ];

 return (
   <div className="categories-container">
     {categories.map(({ title }) => (
       <div className="category-container">
         <div className="background-image" />
         <div className="category-body-container">
           <h2>{title}</h2>
           <p>Shop Now</p>
         </div>
       </div>
     ))}
   </div>
 );
};

export default App;

```

I added sass because
Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.

image of the wireframe

## I added the images

### Phase 2

## Navbar and Routing

React Router uses dynamic routing to ensure that routing is achieved as it is requested by the user. This also means that all the required components are also rendered without any flashes of white screen or page reload.

I read the documentation and I start implimenting it.

### Phase 3

## Authentication

I used the Firebase authentication system easy to work with and has offer many options that you see in a real world

### Phase 4:

Introduce Context Api to better state managment.

### Phase 5:

Build the menu page and cart functionality

### Phase 6:

Upload the menu data to fire datastore

### Phase 6:

Introducing styled component to sort clashing scss style problems

### Phase 7:

Deploy the project on Netlify

### Future improvments :

### Responsivness:

In a future version of the site I would like to implement a more responsive view

### Payment with Stripe

The comments section already points in this direction, but a fully realised version of the app ought to include some form of payment, so that users might follow up after the initial contact has been made via comment or messenger.

### Refactoring Better state managment

Use a 3rd party library redux or recoil

### Accessibility

There are still a few corners of the site where we could add more error messages and redirect the user to the login page.
