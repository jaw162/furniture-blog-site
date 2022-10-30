# Furniture Blog Site

##### Built with Next.js/React and Strapi Headless CMS

### Getting started

There is not much to install or configure with this frontend, as the only package I have used is React-markdown to convert the markdown text to html for the articles. This can either be installed directly or by simply writing
  
    npm install
    
at the root directory of the cloned repo's folder. The backend (which can be found here: [Github](https://github.com/jaw162/blog-site-strapi-backend)) needs a bit more configuring but, mainly due to the requirement of a cloudinary account in order to host images which Strapi cannot do natively. However the packages, namely cloudinary-upload-provider and slugify can be installed in the same way as above for the frontend. The first package
