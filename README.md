# Furniture Blog Site

##### Built with Next.js/React and Strapi Headless CMS

### Getting started

There is not much to install or configure with this frontend, as the only package I have used is React-markdown to convert the markdown text to HTML for the articles. This can either be installed directly or by simply writing
  
    npm install
    
at the root directory of the cloned repo's folder. The backend (which can be found here: [Github](https://github.com/jaw162/blog-site-strapi-backend)) needs a bit more configuring but, mainly due to the requirement of a cloudinary account in order to host images which Strapi cannot do natively. However the packages, namely cloudinary-upload-provider and slugify can be installed in the same way as above for the frontend. 

The first package (cloudinary-upload-provider) simply allows for images to be uploaded via Strapi's admin UI, and the second (slugify) auto-generates a slug for each blog article based off of it's name, which is important for the dynamic routing of Next.js. Apart from that, very little was used and this should be  very simple to run almost straight out of the box.

### Description

This was a fun project to make that really improved my CSS and flexbox skills in the process, I also learned how to properly implement CSS animations by limiting myself to animating on the composite layer (so only properties like opacity and transform). This is because layout computations are far more expensive, and will result in slow, low FPS animations, so animating properties like height or position was avoided. However the animation for the overlay is unfortunately still a bit slow on mobile, so further research is needed on this issue.

One thing I am also grateful for with this project was that it helped me understand Next.js and Strapi well enough to attempt something a bit more complicated and challenging i.e. the eCommerce project you can find here: [Github](https://github.com/jaw162/eCommerce), which was the main aim for this project. However saying that, due to the simple nature of this project it helped me be a bit more creative with CSS and overall I am more pleased with how this website looks than the eCommerce site.

Next.js' SSG was integral for a project like this, not only are the load times fast but the ability to add SEO-ready and compliant HTML is critical for a business that has an online presence. In addition to this, Strapi's rich text editor and simple UI interface makes this an easy website to maintain by someone who is not a programmer, in fact Strapi is helpful for someone like myself who is more interested in creating frontends in any case.

### Mentions

I borrowed the design heavily from this blog site: [Anchour](https://www.anchour.com/blog/) and the images were all free-to-use from this website [Kaboom](https://kaboompics.com/). It is unforunate that I am not a designer as having such a nice, complete design to work from really made the process much simpler and more enjoyable for myself, I also think that the images are of a great quality and make the website look really clean and professional. These resources were essential while making this site.

### License

MIT
