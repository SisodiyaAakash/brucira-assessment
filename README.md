# Project Name: Brucira Assessment

## Overview

This project is created as the practical assessment for the **Brucira**.

---

1. **Json Data**
   - Created **json** files to manage the different data for the different components, it was created as static json files located in the public.

2. **Responsive Design**
   - Fully responsive UI using **Tailwind CSS** along with the **Dark mode** implementation with Tailwind classes.

3. **Less third party dependencies**
   - Utlized as less dependencies to avoid redudancies in libraries that leads to better performance and other advantages as well.
   - Utilized only embla-carousel-react package to create Slider components

4. **Hubspot Form Integration**
   - Utilized free HubSpot form for the executable contact form

---

## Directory Structure

```
├── public/
│   ├── fonts/
│   │   ├── body/       # Secondary font family used for the secondary text elements (p, li, etc.)
│   │   └── heading/    # Primary font family used for the heading text elements (h1, h2, etc.)
│   ├── json/           # Contains the static json files created for database purpose
│   ├── media/          # Media files
├── src/
│   ├── assets/         # Project assets used in the code directly (Scss styling files, Icons, etc.)
│   ├── comps/          # Common component files used in the Sections and/or in the Pages directly (loading.jsx - Loader, reviews.jsx - Testimonial List, statistics.jsx - Statistics numbers list)
│   ├── micro-modules/  # Common Micro modules used in the Sections and/or in the Pages directty (bruciraBtn.jsx - Brucira Theme Button)
│   ├── sections/       # Common Sections used in the app.jsx (Homepage) and/or can be used in the different pages as well
│   ├── App.jsx         # Main page file that includes different sections in it
│   ├── index.css       # Contains the tailwind styling configuration for the Brucira theme
│   └── main.jsx        # Main JSX file for the app
├── index.html          # Main entry point of the Project
├── tailwind.config.js  # Tailwind configuration
└── README.md           # Project documentation
└── ...                 # And few more configuration and other files
```

---

## Data Structure

### `label-slider.json`
- **labels**: Contains the label text array

### `reviews.json`
- **reviews**: Contains the loop of Feedback with meta data (profile, feedback, firstName, lastName, designation, company)

### `statistics.json`
- **stats**: Contains the loop of Statistics data with meta data (statValue, prefix, suffix, label)

### `team.json`
- **team**: Contains the loop of Team members data with meta data (profile, intro, firstName, lastName, designation)

### `home.json`
- **heroSection**: Contains the Hero Section data (title, subtitle, ctaButton, videoArea)
- **partnersLogoSection**: Contains the Partner Logo Section data (title, partners loop)
- **faq1Section**: Contains the Faq 1 Section data (title, accordion loop)
- **globalNumberSection**: Contains the Global Number Section data (title)
- **testimonialSection**: Contains the Testimonial Section data (title)
- **faq2Section**: Contains the Faq 2 Section data (title, accordion loop)
- **contactSection**: Contains the Contact Section data (title, form configuration data)

### `navigation.json`
- **header**: Contains the Header section data (logo, menu loop, cta)
- **footer**: Contains the Footer section data (mainMenu loop with title & subMenu loop, copyrightContent, legalMenu loop)

---

## Tech Stack

- **Frontend Technology**: [React.js](https://react.dev/) with [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Dependencies**: [Embla](https://www.npmjs.com/package/embla-carousel-react)

---

## Project Setup

To run the project locally, follow these steps:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/SisodiyaAakash/brucira-assessment.git
   cd brucira-assessment
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

---

## Deployment

The project is hosted on **Vercel** for live preview and continuous deployment. Changes pushed to the repository are automatically deployed to the live environment.

### Live URL

[Brucira Assessment](https://brucira-assessment.vercel.app/)

---

## Acknowledgement

This project was built as part of an exciting challenge provided by **Akash** from **Brucira**. Thank you for this amazing learning opportunity!

I've utilized almost everything and developed the project nearly same as outlined requirement provided by **Akash**.

I've utilized ReactJs, Tailwind CSS, Scss, Embla Slider, HubSpot form as per requirement and/or suggestion provided by **Akash** in previous email.

I've tried my best to achieve same design and functionality with static json files so you can understand my overall data structure knowledge and also utilized scss where it was needed however the project was built threw Tailwind so there was not huge utilization of it.

Also for now I've utilized the HubSpot form and because I'm using free form there might be some console warnings around it but you can avoid it by commenting the Form area in the Contact Section or I already added the condition for the form data so you can directly remove the form object from the contactSection object located in the home.json file, other than that all good from my side somewhere I've utilized few more tools such as AI Tools to check my accuracy and Photoshop and other online tools to convert the media files into WebP or optimum formats.

Thanks & Regards,

---

## Author

**Aakash Sisodiya**

Looking forward to your feedback and updates!
