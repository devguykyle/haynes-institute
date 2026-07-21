document.addEventListener("DOMContentLoaded", function () {
  var videoCards = document.querySelectorAll('.video-card[href*="youtube.com"], .video-card[href*="youtu.be"]');

  if (!videoCards.length) {
    return;
  }

  var modal = document.createElement('div');
  modal.className = 'video-modal';
  modal.setAttribute('id', 'video-modal');
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = [
    '<div class="video-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="video-modal-title">',
    '  <div class="video-modal__header">',
    '    <p class="video-modal__title" id="video-modal-title">Selected Teaching</p>',
    '    <button class="video-modal__close" type="button" aria-label="Close video">&times;</button>',
    '  </div>',
    '  <div class="video-modal__frame" id="video-modal-frame"></div>',
    '  <div class="video-modal__footer">',
    '    <a class="text-link" id="video-modal-link" href="#" target="_blank" rel="noopener">Open on YouTube</a>',
    '  </div>',
    '</div>'
  ].join('');
  document.body.appendChild(modal);

  var frame = document.getElementById('video-modal-frame');
  var title = document.getElementById('video-modal-title');
  var externalLink = document.getElementById('video-modal-link');
  var closeButton = modal.querySelector('.video-modal__close');
  var lastFocused;

  function getYouTubeId(href) {
    try {
      var url = new URL(href);
      if (url.hostname.indexOf('youtube.com') !== -1) {
        return url.searchParams.get('v');
      }
      if (url.hostname.indexOf('youtu.be') !== -1) {
        return url.pathname.replace('/', '');
      }
    } catch (error) {
      return null;
    }
    return null;
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    frame.innerHTML = '';
    if (lastFocused) {
      lastFocused.focus();
    }
  }

  videoCards.forEach(function (card) {
    card.addEventListener('click', function (event) {
      var videoId = getYouTubeId(card.href);
      if (!videoId) {
        card.setAttribute('target', '_blank');
        card.setAttribute('rel', 'noopener');
        return;
      }

      event.preventDefault();
      lastFocused = card;
      title.textContent = card.querySelector('h2') ? card.querySelector('h2').textContent : 'Selected Teaching';
      externalLink.href = card.href;
      frame.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + videoId + '?autoplay=1&rel=0" title="' + title.textContent.replace(/"/g, '&quot;') + '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      closeButton.focus();
    });
  });

  closeButton.addEventListener('click', closeModal);
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
});