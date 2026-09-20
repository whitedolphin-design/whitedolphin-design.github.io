const homeGallery=document.getElementById('home-project-gallery');
const featuredProjects=(window.WHITE_DOLPHIN_PROJECTS||[]).slice(0,16);
if(homeGallery && featuredProjects.length){homeGallery.replaceChildren();featuredProjects.forEach((photo,index)=>{const link=document.createElement('a');link.className='photo-card';link.href='projects.html#photo-'+(index+1);const image=document.createElement('img');image.src=photo.src;image.alt=photo.alt||'White Dolphin project photograph';image.loading='lazy';image.width=960;image.height=1280;link.append(image);homeGallery.append(link);});}
