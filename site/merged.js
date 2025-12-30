/* ========== MERGED JAVASCRIPT - ALL SCRIPTS ========== */

// ========== POPUP.JS - Skill Modal Functionality ==========
(function(){
    const buttons = document.querySelectorAll('.skill-button');
    const modal = document.getElementById('skill-modal');
    const titleEl = document.getElementById('skill-modal-title');
    const descEl = document.getElementById('skill-modal-desc');
    const closeBtn = document.getElementById('skill-modal-close');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            titleEl.textContent = btn.dataset.title || '';
            descEl.textContent = btn.dataset.desc || '';
            modal.style.display = 'flex';
            // move focus for accessibility
            closeBtn.focus();
        });
    });

    closeBtn.addEventListener('click', () => modal.style.display = 'none');

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') modal.style.display = 'none';
    });
})();


// ========== PROJECT.JS - Image Overlay Functionality ==========
(function(){
    function createImageOverlay(img) {
        const overlay = document.createElement('div');
        Object.assign(overlay.style, {
            position: 'fixed',
            inset: '0',
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '9999',
            cursor: 'zoom-out'
        });
        overlay.tabIndex = 0;

        const large = document.createElement('img');
        large.src = img.src;
        large.alt = img.alt || '';
        Object.assign(large.style, {
            maxWidth: '95%',
            maxHeight: '95%',
            boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
            borderRadius: '6px',
            cursor: 'auto'
        });

        overlay.appendChild(large);

        function close() {
            if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
            document.removeEventListener('keydown', onKey);
        }
        function onKey(e) {
            if (e.key === 'Escape') close();
        }

        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) close();
        });
        document.addEventListener('keydown', onKey);
        document.body.appendChild(overlay);
        overlay.focus();
    }

    // Get all project images
    const allImages = document.querySelectorAll('[id^="project-img"]');
    allImages.forEach(img => {
        img.addEventListener('click', function () {
            createImageOverlay(img);
        });
    });
})();
