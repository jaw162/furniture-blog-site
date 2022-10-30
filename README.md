# Furniture Blog Site

##### Built with Next.js/React and Strapi Headless CMS

### Getting started

There is not much to install or configure with this frontend, as the only package I have used is React-markdown to convert the markdown text to html for the articles. This can either be installed directly or by simply writing
  
    npm install
    
at the root directory of the cloned repo's folder. The backend (which can be found here: [Github](https://github.com/jaw162/blog-site-strapi-backend)) needs a bit more configuring but, mainly due to the requirement of a cloudinary account in order to host images which Strapi cannot do natively. However the packages, namely cloudinary-upload-provider and slugify can be installed in the same way as above for the frontend. 

The first package (cloudinary-upload-provider) simply allows for images to be uploaded via Strapi's admin UI, and the second (slugify) auto-generates a slug for each blog article based off of it's name, which is important for the dynamic routing of Next.js. Apart from that, very little was used and this should be  very simple to run almost straight out of the box.

### Description

This was a fun project to make that really improved my CSS and flexbox skills in the process, I also learned how to properly implement CSS animations by limiting myself to animating on the composite layer (so only properties like opacity and transform). This is because layout computations are far more expensive, and will result in slow, low FPS animations, so animating properties like height or position was avoided. However the animation for the overlay is unfortunately still a bit slow on mobile, so further research is needed on this issue.
