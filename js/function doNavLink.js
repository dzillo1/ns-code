       function doNavLink(e) {
            const isMobile = window.innerWidth < 992;
            const dropdownMenu = document.querySelector('.nav-item .dropdown-menu.show'); 

            if (isMobile) {
                const isDropdownVisible = dropdownMenu && getComputedStyle(dropdownMenu).display !== 'none';
                if (!isDropdownVisible) {
                    window.location.href = e.dataset.href;
                }
            } else {
                window.location.href = e.dataset.href;
            }
        }

    /*    e.g. data-href
    <a class="nav-link dropdown-toggle plans" href="/diet-plans#ShopPlansPanel" data-href="/diet-plans" onclick="omni_track('ShopPlansMenu:Nav');doNavLink(this)" role="button" data-bs-toggle="dropdown" aria-expanded="false">Plans & Pricing <i class="d-block d-lg-none bi bi-chevron-right"></i><i class="d-none d-lg-block bi bi-chevron-down"></i></a>
    */