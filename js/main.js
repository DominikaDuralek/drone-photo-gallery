import '../css/modern-normalize.css';
import '../css/style.css';
import '../css/components/header.css';
import '../css/components/hero.css';
import '../css/components/gallery.css';
import '../css/components/contact.css';
import '../css/components/footer.css';
import '../css/utils.css';

window.onload = function () {
    document.body.style.visibility = 'visible';
}

function expandPhoto(imgElement) {
  const expandedPhotoContainer = document.getElementById('expandedPhotoContainer');
  const expandedPhoto = document.getElementById('expandedPhoto');
  
  expandedPhoto.src = imgElement.src;
  expandedPhotoContainer.classList.add('active');
}

function collapsePhoto() {
  const expandedPhotoContainer = document.getElementById('expandedPhotoContainer');
  expandedPhotoContainer.classList.remove('active');
}
